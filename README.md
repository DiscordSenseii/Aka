<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/DxHvWwC"><img src="https://media.discordapp.net/attachments/682872468322648119/682872516259217418/akaneko.png" width="546" alt="Cute As Fubuki" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/akaneko"><img src="https://img.shields.io/npm/v/akaneko.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/akaneko"><img src="https://img.shields.io/npm/dt/akaneko.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>
Akaneko is an Anime/Hentai Image API which simplifies how you fetch random images from the local JSON! More features and functions will be added soon !

[Discord Server](https://discord.gg/DxHvWwC) | [Repository](https://gitlab.com/weeb-squad/akaneko)

## Installation
``npm install akaneko``

## Example(s)
**NodeJS:**
```javascript
// Akaneko //
const akaneko = require('akaneko');

// Get SFW Neko Images, uwu //
console.log("SFW Neko: " + akaneko.neko());

// Get Lewd Neko (NSFW), owo //
console.log("Lewd Neko:" + akaneko.lewdNeko());

// Lewd Bomb me onii-san~~ //
console.log("Lewd Bomb: " + akaneko.lewdBomb(5));

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
akaneko.lewdBomb(5) // Example 2
```
Function | Description
---|---
neko | Sends a random imageURL of a SFW Nekogirl~
lewdneko | Sends a random imageURL of a NSFW Nekogirl~
lewdBomb(amount) | Sends an array of random lewds of (amount) parameter~

## NSFW Function(s)
Example:
```javascript
akaneko.nsfw.function() // Format
akaneko.nsfw.hentai() // Example
```
Function | Description
---|---
ass | Sends a random imageURL for some anime ass~ uwu
bdsm | Sends a random imageURL from Discord for the tag: **bdsm**
cum | Sends a random imageURL from Discord for the tag: **cum**
femdom | Female Domination?
doujin | Sends a random doujin page imageURL!
hentai | Sends a random vanilla hentai imageURL~
maid | Sends a random imageURL from Discord for the tag: **maid**
orgy | Sends a random imageURL for an orgy (groupy or whatever)
panties | I mean... just why? You like underwear?
netorare | Wow, I won't even question your fetishes.
gifs | Basically an animated image, so yes :3

## Wallpaper Function(s)
Example:
```javascript
akaneko.nsfw.function() // NSFW Format
akaneko.nsfw.mobileWallpapers() // NSFW Example
```

Function | Description
---|---
akaneko.mobileWallpapers() | Fetch a random SFW Wallpaper! (Mobile)
akaneko.wallpapers() | Fetch a random SFW Wallpaper! (Desktop)
akaneko.nsfw.mobileWallpapers() | Fetch a random NSFW Wallpaper! (Mobile)
akaneko.nsfw.wallpapers() | Fetch a random NSFW Wallpaper! (Desktop)


## Discord Bot Example
```javascript
const Discord = require('discord.js');
const akaneko = require('akaneko');

// Create New Client //
const client = new Discord.Client();

// Bot Settings //
const settings = {
  prefix: "YOUR_BOT_PREFIX",
  token: 'YOUR_BOT_TOKEN'
}

client.on('message', async message => {

  // Create New Embed //
  const akanekoSan = new Discord.RichEmbed();

  // Defines Command //
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];

  // Onii-chan, don't reply! //
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  if (command == 'lewdneko') {

    // For Embed //
    akanekoSan.setImage(akaneko.lewdNeko());
    return message.channel.send(akanekoSan);

    // For Plain Text //
    return message.channel.send(akaneko.lewdNeko());

  } else if (command == 'maid') {

    // For Embed //
    akanekoSan.setImage(akaneko.nsfw.maid());
    return message.channel.send(akanekoSan);

    // For Plain Text //
    return message.channel.send(akaneko.nsfw.maid());
    
  }

});
  ```

## Support
[Discord Server](https://discord.gg/DxHvWwC)