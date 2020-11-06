// Importing my unborn children //
const resolve = require('../lib/resolve.js');

// Create Module //
module.exports = {

    // SFW //
    neko: function () { // Returns Safe for Work Neko Images! //

        return resolve.get('neko');

    },
    lewdNeko: function () { // Returns you lewd ... and dirty ... Neko Images ! //

        return resolve.get('lewdneko');

    },
    lewdBomb: async function () { // Returns you (n) amount of Lewd ... and Dirty images ! //

        // if (!n) {
        //     throw new RangeError("[lewdBomb] You didn't specify a number for Amount Parameter!");
        // }

        // if (!Number.isInteger(n)) {
        //     throw new RangeError("[lewdBomb] Amount Parameter is not an Integer!");
        // } <----- Not Used for Now, In The Future it will be edited to support this new update ;)

        var array = [];

        array.push(await resolve.get('lewdneko'));
        array.push(await resolve.get('ass'));
        array.push(await resolve.get('maid'));
        array.push(await resolve.get('cum'));
        array.push(await resolve.get('bdsm'));

        var string = array.toString();
        string = string.replace(',', ' ');

        return string;

    },
    wallpapers: function () { // Returns you SFW Anime Wallpapers for Desktops ! //

        return resolve.get('wallpapers');

    },
    mobileWallpapers: function () { // Returns SFW Anime Wallpapers for Mobile Users ! //

        return resolve.get('mobileWallpapers');

    },
    nsfw: {

        ass: async function () {
            return resolve.get('ass')
        },
        bdsm: function () {
            return resolve.get('bdsm')
        },
        cum: function () {
            return resolve.get('cum')
        },
        doujin: function () {
            return resolve.get('doujin')
        },
        femdom: function () {
            return resolve.get('femdom')
        },
        hentai: function () {
            return resolve.get('hentai')
        },
        maid: function () {
            return resolve.get('maid')
        },
        maids: function () {
            return resolve.get('maids')
        },
        orgy: function () {
            return resolve.get('orgy')
        },
        panties: function () {
            return resolve.get('panties')
        },
        pantsu: function (){
            return resolve.get('panties')
        },
        wallpapers: function () {
            return resolve.get('nsfwwallpapers')
        },
        wallpaper: function() {
            return resolve.get('nsfwwallpapers');
        },
        mobileWallpapers: function () {
            return resolve.get('nsfwmobilewallpapers')
        },
        mobileWallpaper: function () {
            return resolve.get('nsfwmobilewallpapers')
        },
        cuckold: function () {
            return resolve.get('netorare')
        },
        netorare: function () {
            return resolve.get('netorare')
        },
        gifs: function () {
            return resolve.get('gif')
        },
        gif: function () {
            return resolve.get('gif')
        },
        blowjob: function () {
            return resolve.get('blowjob')
        },
        feet: function () {
            return resolve.get('feet')
        },
        foot: function () {
            return resolve.get('feet')
        },
        pussy: function () {
            return resolve.get('pussy')
        },
        vagina: function () {
            return resolve.get('vagina')
        },
        uglyBastard: function () {
            return resolve.get('uglybastard')
        },
        uniform: function () {
            return resolve.get('uniform')
        },
        gangbang: function () {
            return resolve.get('gangbang')
        },
        sharing: function () {
            return resolve.get('gangbang')
        }

    }

}