// Import Images //
const sfwImages = require('../images/sfw.json');
const nsfwImages = require('../images/nsfw.json');

// Create Module //
module.exports = {

    // SFW //
    sfwNeko: function () { // Returns Safe for Work Neko Images! //

        // Select Random Image from JSON //
        let img = sfwImages[Math.floor(Math.random() * sfwImages.length)];

        // Fetches Original Image Quality without Resize //
        if (img.includes('?')) {
            img = img.split('?');
            img = img[0];
        }
        return img;

    },
    lewdNeko: function () { // Returns you lewd ... and dirty ... Neko Images ! //

        // Select Random Image from JSON //
        let img = nsfwImages[Math.floor(Math.random() * nsfwImages.length)];

        // Fetches Original Image Quality without Resize //
        if (img.includes('?')) {
            img = img.split('?');
            img = img[0];
        }
        return img;

    },
    lewdBomb: function (n) { // Returns you (n) amount of Lewd ... and Dirty images ! //
        
        var result = new Array(n),
            length = nsfwImages.length,
            taken = new Array(length);
        if (n > length)
            throw new RangeError("[lewdBomb] You specified a number that's greater than the amount available!");
        while (n--) {
            var x = Math.floor(Math.random() * length);
            result[n] = nsfwImages[x in taken ? taken[x] : x];
            taken[x] = --length in taken ? taken[length] : length;
        }
        return result;

    },
    safeBomb: function (n) {

        var result = new Array(n),
            length = sfwImages.length,
            taken = new Array(length);
        if (n > length)
            throw new RangeError("[safeBomb] You specified a number that's greater than the amount available!");
        while (n--) {
            var x = Math.floor(Math.random() * length);
            result[n] = sfwImages[x in taken ? taken[x] : x];
            taken[x] = --length in taken ? taken[length] : length;
        }
        return result;

    }

}