//console.log("does this run?");

const rp = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://www.foxnews.com/politics/trump-defends-covington-catholic-hs-students-says-media-smeared-them';
const $ = cheerio.load(url);

rp(url)
  .then(function(html){
  		let headline = $('.headline',html).text();
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