const fs = require('fs');
//include custom matchers
const styleMatchers = require('jest-style-matchers');
const htmlPath = __dirname + '/index.html';
const html = fs.readFileSync(htmlPath, 'utf-8');

//const solution = require(jsPath); //load the solution

const $ = require('jquery');

document.documentElement.innerHTML = html;
expect.extend(styleMatchers);

describe('Source code is valid', () => {
  test('HTML validates without errors', async () => {
    const lintOpts = {
      'attr-bans':['align', 'background', 'bgcolor', 'border', 'frameborder', 'marginwidth', 'marginheight', 'scrolling', 'style', 'width', 'height'], //adding height, allow longdesc
      'tag-bans':['style','b'], //<i> allowed for font-awesome
      'doctype-first':true,
      'doctype-html5':true,
      'html-req-lang':true,
      'attr-name-style': false, //for meta tags
      'line-end-style':false, //either way
      'indent-style':false, //can mix/match
      'indent-width':false, //don't need to beautify
      'id-class-style':false, //I like dashes in classnames
      'img-req-alt':true
    }

    const htmlfiles = fs.readdirSync(__dirname).filter((f) => f.endsWith('.html'));
    for(let f of htmlfiles) {
      await expect(f).toHaveNoHtmlLintErrorsAsync(lintOpts);
    }
  })  

  test('CSS validates without errors', async () => {
    await expect('css/*.css').toHaveNoCssLintErrorsAsync(); //test all files in css folder
  })

  test('JavaScript lints without errors', () => {
    if(fs.existsSync(__dirname+'/js')) {
      const jsfiles = fs.readdirSync(__dirname+'/js').filter((f) => f.endsWith('.js'));

      for(let f of jsfiles) {
        expect(['js/'+f]).toHaveNoEsLintErrors();
      }
    }
  })

  test('Search feature returns list of appropriate games', () => {
    const html = fs.readFileSync('./catalog.html', 'utf-8');
    document.documentElement.innerHTML = html;
    const catalog = require('./js/catalog.js');

    const firstFiveExpectedResults = [
      {name: 'Catan', selected: false},
      {name: 'Catan: 5-6 Player Extension', selected: false},
      {name: 'Catan: Cities & Knights', selected: false},
      {name: 'Catan Card Game', selected: false},
      {name: 'Rivals for Catan', selected: false},
    ]
    document.querySelector('#search-modal-open-button').click();
    document.querySelector('#searchInput').value = 'Catan';
    document.querySelector('#searchInput').dispatchEvent(new Event('input'));
    document.querySelector('#search-button').click();

    for(let i = 0; i < 5; i++) {
      expect(firstFiveExpectedResults[i] == catalog.state.searchResults[i]);
    }

  })

  // test('Add game through search feature', () => {
  //   const catalog = require('./js/catalog.js');

  //   document.querySelector('#search-modal-open-button').click();
  //   $('#searchInput').val('Catan');
  //   $('#searchInput').dispatchEvent(new Event('input'));
  //   $('#search-button').click();
  //   $('.far')[0].click();
  //   $('#search-submit-button').click();

  //   expect(catalog.state.searchResults.includes({name: 'Catan', selected: false}));

  // })

  test('H1 element has correct text', () => {
    expect($('h1').text()).toMatch("The Game Shelf");//
  })

  test('Links have correct classes', () => {
    expect($('a').hasClass('btn btn-dark')).toBe(true);
  })
});

