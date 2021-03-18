
const request = require('request');
const cheerio = require('cheerio');

const URL = 'https://www.ebay-kleinanzeigen.de/s-autos/c216';

request(URL, (err, res, html) => {
    if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html);

        var items = $('.position-relative').find('.aditem');
        items.each((i, el) => {

            console.log(`Index = ${i}`);

            const link = $(el).attr('data-href');
            console.log(`Link = ${link}`);

            var item = $(el).find('.aditem-main');

            // Top
            var location = item.find('.aditem-main--top');

            // Middle
            var description = item.find('.aditem-main--middle--description');
            var price = item.find('.aditem-main--middle--price');

            // Bottom
            var distance = item.find('.aditem-main--bottom');

            console.log(`Location = ${location.text().replace(/\s\s+/g, '')}`);
            console.log(`Description = ${description.text().replace(/\s\s+/g, '')}`);
            console.log(`Price = ${price.text().replace(/\s\s+/g, '')}`);
            console.log(`Distance = ${distance.text().replace(/\s\s+/g, '')}`);

            if (i === 0)
                return false;

        });

        console.log('Finished!');
    }
});