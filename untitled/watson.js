import natural_language_understanding from "watson-developer-cloud/natural-language-understanding/v1-generated";

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2018-03-16',
    iam_apikey: 'cRkw0YjQvHPvSbdUzp1qJaeJfyzXK_CsDvCePkoiKsWo',
    url: 'https://gateway-wdc.watsonplatform.net/natural-language-understanding/api'
});

var parameters = {
    'url': 'www.ibm.com',
    'features': {
        'categories': {}
    }
};

natural_language_understanding.analyze(parameters, function(err, response) {
    if (err)
        console.log('error:', err);
    else
        console.log(JSON.stringify(response, null, 2));
});
