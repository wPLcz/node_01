const cheerio = require('cheerio');
const request = require('request');
const website = 'https://tvn24.pl';
const fragment = '.decorate-heading';
const phrase = 'nauka';

request(website, (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        let newsArray = [];
        $(fragment).each((index, element) => {
            const item = $(element).text();
            newsArray.push($(element).text());
        });
        let check = 0;
        newsArray.forEach(element => {
            if (element.toLowerCase().includes(phrase)) {
                console.warn('Dzisiejszy news to:');
                console.log(element);
                check++;
            }
        });

        if (check === 0) {
            console.warn(`Na stronie ${website} nie znaleziono nic z frazą: ${phrase}`)
        }
    }
});
