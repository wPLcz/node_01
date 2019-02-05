const cheerio = require('cheerio');
const request = require('request');
const WEBSITE = 'https://tvn24.pl';
const FRAGMENT = '.decorate-heading';
const PHRASE = 'nauka';

request(website, (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        let newsArray = [];
        $(FRAGMENT).each((index, element) => {
            const item = $(element).text();
            newsArray.push($(element).text());
        });
        let check = 0;
        newsArray.forEach(element => {
            if (element.toLowerCase().includes(PHRASE)) {
                console.warn('Dzisiejszy news to:');
                console.log(element);
                check++;
            }
        });

        if (check === 0) {
            console.warn(`Na stronie ${WEBSITE} nie znaleziono nic z frazą: ${PHRASE}`)
        }
    }
});
