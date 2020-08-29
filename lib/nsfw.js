// Load Images //
const bdsmImages = require('../images/bdsm.json');
const cumImages = require('../images/cum.json');
const doujinImages = require('../images/doujin.json');
const hentaiImages = require('../images/hentai.json');
const maidImages = require('../images/maid.json');
const pantyImages = require('../images/panties.json');
const assImages = require('../images/ass.json');
const orgyImages = require('../images/orgy.json');
const femdomImages = require('../images/femdom.json');
const netorareImages = require('../images/netorare.json');
const hentaiGifs = require('../images/hnt_gifs.json');

// Load NSFW Wallpapers //
const nsfwWallpapers = require('../images/nsfwWallpaper.json');
const nsfwMobileWallpapers = require('../images/nsfwMobileWallpaper.json');

module.exports = {

    fetchRandom: function(images) {
        // Select Random Image from JSON //
        let img = images[Math.floor(Math.random() * images.length)];
        return img;
    },
    fetchWallpaper: function(images) {
        // Select Random Wallpaper from JSON //
        let img = images[Math.floor(Math.random() * images.length)];

        return img;
    },
    nsfwWallpapers: function() {
        return this.fetchWallpaper(nsfwWallpapers)
    },
    nsfwMobileWallpapers: function() {
        return this.fetchWallpaper(nsfwMobileWallpapers);
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
    },
    orgy: function() {
        return this.fetchRandom(orgyImages);
    },
    femdom: function() {
        return this.fetchRandom(femdomImages);
    },
    netorare: function() {
        return this.fetchRandom(netorareImages);
    },
    gif: function() {
        return this.fetchRandom(hentaiGifs);
    }

}