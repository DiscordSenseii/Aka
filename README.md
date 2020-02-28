<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/DxHvWwC"><img src="https://media.discordapp.net/attachments/682872468322648119/682872516259217418/akaneko.png" width="546" alt="Cute As Fubuki" /></a>
  </p>
  <br />
</div>
Akaneko is an Anime/Hentai Image API which simplifies how you fetch random images from the local JSON! More features and functions will be added soon !

## Installation
``npm install akaneko``

## Example(s)
```javascript
// Akaneko //
const akaneko = require('akaneko');

// Get SFW Neko Images, uwu //
console.log("SFW Neko: " + akaneko.neko());

// Get Lewd Neko (NSFW), owo //
console.log("Lewd Neko:" + akaneko.lewdNeko());

// Get other NSFW Images //
console.log("BDSM: " + akaneko.nsfw.bdsm());
console.log("Maid: " + akaneko.nsfw.maid());
console.log("Hentai: " + akaneko.nsfw.hentai());
```

## Legacy Function(s)
Example:
```javascript
akaneko.function() // Format
akaneko.neko() // Example
```
Function | Description
---|---
neko | Sends a random imageURL of a SFW Nekogirl~
lewdneko | Sends a random imageURL of a NSFW Nekogirl~
lewdBomb(amount) | Sends an array of random lewds of (amount) parameter~

## NSFW Function(s)
Example:
```javascript
akaneko.nsfw.(function) // Format
akaneko.nsfw.hentai // Example
```
Function | Description
---|---
bdsm | Sends a random imageURL from Discord for the tag: **bdsm**
cum | Sends a random imageURL from Discord for the tag: **cum**
doujin | Sends a random doujin page imageURL!
hentai | Sends a random vanilla hentai imageURL~
maid | Sends a random imageURL from Discord for the tag: **maid**

## Support
[Discord Server](https://discord.gg/DxHvWwC)