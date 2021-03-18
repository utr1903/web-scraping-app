const request = require('request');
const cheerio = require('cheerio');

const URL = 'https://www.ebay-kleinanzeigen.de/s-autos/c216';

const DIV = '.position-relative';
const ITEM = '.aditem';
const ITEM_MAIN = '.aditem-main';
const ITEM_LOCATION = '.aditem-main--top';
const ITEM_PRICE = '.aditem-main--middle--price';
const LINK = 'data-href';

class EbayKleinanzeigenScraper {
    run() {
        request(URL, (err, res, html) => {
            if (!err && res.statusCode == 200) {
                const $ = cheerio.load(html);

                var items = $(DIV).find(ITEM);
                items.each((i, el) => {

                    console.log(`Index = ${i}`);

                    const link = $(el).attr(LINK);
                    console.log(`Link = ${link}`);

                    var item = $(el).find(ITEM_MAIN);
                    var location = item.find(ITEM_LOCATION);
                    var price = item.find(ITEM_PRICE);

                    console.log(`Location = ${location.text().replace(/\s\s+/g, '')}`);
                    console.log(`Price = ${price.text().replace(/\s\s+/g, '')}`);
        
                    // if (i === 0)
                    //     return false;
                });

                console.log('Finished!');
            }
        });
    }
}

module.exports = EbayKleinanzeigenScraper;

