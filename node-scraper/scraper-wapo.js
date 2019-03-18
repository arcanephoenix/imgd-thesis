console.log("does this run?");

const rp = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://www.washingtonpost.com';
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