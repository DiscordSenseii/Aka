// Load Images //
const bdsmImages = require('../images/bdsm.json');
const cumImages = require('../images/cum.json');
const doujinImages = require('../images/doujin.json');
const hentaiImages = require('../images/hentai.json');
const maidImages = require('../images/maid.json');
const pantyImages = require('../images/panties.json');
const assImages = require('../images/ass.json');

module.exports = {

    fetchRandom: function(images) {
        // Select Random Image from JSON //
        let img = images[Math.floor(Math.random() * images.length)];

        // Fetches Original Image Quality without Resize //
        if (img.includes('?')) {
            img = img.split('?');
            img = img[0];
        }
        return img;
    },
    bdsm: function() {
        return this.fetchRandom(bdsmImages);
    },
    cum: function() {
        return this.fetchRandom(cumImages);
    },
    doujin: function() {
        return this.fetchRandom(doujinImages);
    },
    hentai: function() {
        return this.fetchRandom(hentaiImages);
    },
    maid: function() {
        return this.fetchRandom(maidImages);
    },
    panties: function() {
        return this.fetchRandom(pantyImages);
    },
    ass: function() {
        return this.fetchRandom(assImages);
    }

}