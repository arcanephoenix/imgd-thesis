console.log("does this run?");

const rp = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://www.washingtonpost.com/business/economy/concerns-about-global-economy-grow/2019/01/21/43d514a2-1dc8-11e9-9145-3f74070bbdb9_story.html';
const $ = cheerio.load(url);

rp(url)
  .then(function(html){
  		let headline = $('.topper-headline',html).text();
  		console.log(headline);
 //    const wikiUrls = [];
 //    for (let i = 0; i < 45; i++) {
 //      wikiUrls.push($('h1', html)[i].text());
 //    }
	// console.log(wikiUrls);
	//console.log(html);
  })
  .catch(function(err){
    //handle error
  });