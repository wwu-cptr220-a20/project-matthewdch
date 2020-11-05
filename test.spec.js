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

  test('Add game manually', () => {
    const htmlPath = __dirname + '/catalog.html';
    const html = fs.readFileSync(htmlPath, 'utf-8');
    document.documentElement.innerHTML = html;
    const jsPath = __dirname + '/js/catalog.js';
    const catalog = require(jsPath);

    $('#boardGameInput').val('Catan');
    $('#boardGameInput')[0].dispatchEvent(new Event('input'));
    $('#submit-button').click();

    expect(catalog.state.games.includes({name: 'Catan', rating: 0}));
  });

});

describe('Content and HTML tests', () => {
  test('H1 element has correct text', () => {
    expect($('h1').text()).toMatch("The Game Shelf");//
  })
  test('Links have correct classes', () => {
    expect($('a').hasClass('btn btn-dark')).toBe(true);
  })
});

describe('Style and CSS tests', () => {
  test('Header has a background color', () => {
    let header = $('header');
    expect(header.css('background-color').toLowerCase()).toEqual(rgb(204, 240, 243));
  }) 
});

describe('Interactive and Javascript tests', () => {
  test('Add game manually', () => {
    const htmlPath = __dirname + '/catalog.html';
    const html = fs.readFileSync(htmlPath, 'utf-8');
    document.documentElement.innerHTML = html;
    const jsPath = __dirname + '/js/catalog.js';
    const catalog = require(jsPath);

    $('#boardGameInput').val('Catan');
    $('#boardGameInput')[0].dispatchEvent(new Event('input'));
    $('#submit-button').click();

    expect(catalog.state.games.includes({name: 'Catan', rating: 0}));
  });

});