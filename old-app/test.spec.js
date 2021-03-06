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

});

describe('Content and HTML tests', () => {
  test('H1 element has correct text', () => {
    expect($('h1').text()).toMatch("The Game Shelf");//
  })
  test('Links have correct classes', () => {
    expect($('a').hasClass('btn btn-dark')).toBe(true);
  })
  test('Footer has correct text', () => {
    expect($('footer').text()).toMatch("Matthew DeChance, 2020");
  })
  test('Main has apporpriate sections', () => {
    let mainSections = $('main').children();
    expect(mainSections.length).toEqual(3);
  })
});

describe('Style and CSS tests', () => {
  //CSS test
  test('Links have correct classes', () => {
    const htmlPath = __dirname + '/index.html';
    const html = fs.readFileSync(htmlPath, 'utf-8');
    document.documentElement.innerHTML = html;
    expect($('a').hasClass('btn btn-dark')).toBe(true);
  })

  //CSS test
  test('Section has correct class', () => {
    const htmlPath = __dirname + '/catalog.html';
    const html = fs.readFileSync(htmlPath, 'utf-8');
    document.documentElement.innerHTML = html;
    expect($('section').hasClass('content')).toBe(true);
  })

  test('Div has correct class', () => {
    expect($('div').hasClass('container mt-4 mb-4')).toBe(true);
  })

  test('Input has correct class', () => {
    expect($('input').hasClass('form-control')).toBe(true);
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

  test('Rate game', () => {
    const htmlPath = __dirname + '/catalog.html';
    const html = fs.readFileSync(htmlPath, 'utf-8');
    document.documentElement.innerHTML = html;
    const jsPath = __dirname + '/js/catalog.js';
    const catalog = require(jsPath);

    $('#boardGameInput').val('Catan');
    $('#boardGameInput')[0].dispatchEvent(new Event('input'));
    $('#submit-button').click();

    let ratingElement = $('#game-list tr td:nth-child(1)');
    let oldRating = ratingElement.text;
    ratingElement.click();
    expect(oldRating[0] < ratingElement.text[0]);
  });

  test('Delete game', () => {
    const htmlPath = __dirname + '/catalog.html';
    const html = fs.readFileSync(htmlPath, 'utf-8');
    document.documentElement.innerHTML = html;
    const jsPath = __dirname + '/js/catalog.js';
    const catalog = require(jsPath);

    $('#boardGameInput').val('Catan');
    $('#boardGameInput')[0].dispatchEvent(new Event('input'));
    $('#submit-button').click();

    let oldSize = catalog.state.games.length;

    $('#game-list tr td:nth-child(2)').click();

    expect(catalog.state.games.length < oldSize);

  });

  test('Open search menu', () => {
    const htmlPath = __dirname + '/catalog.html';
    const html = fs.readFileSync(htmlPath, 'utf-8');
    document.documentElement.innerHTML = html;

    $('search-modal-open-button').click();
    expect($('searchModal').style == 'display: block');
  })
});


