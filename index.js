const EbayKleinanzeigenScraper = require('./ebay_kleinanzeigen/ebay_kleinanzeigen_scraper');

const INTERVAL = 2000;

async function scrapeEbayKleinanzeigen() {
    var ebayKleinanzeigenScraper = new EbayKleinanzeigenScraper();
    setInterval(ebayKleinanzeigenScraper.run, INTERVAL);
}


scrapeEbayKleinanzeigen();