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
Akaneko is both a SFW and NSFW Wrapper, there's hentais for you perverts to use, however do understand that I'm the only one working on this, and I hand pick images to add, so you may get repeated images! Use it for your Discord Bot, your Self Made Console Waifu, or whatever it is :3

[Discord Server](https://discord.gg/DxHvWwC) | [Repository](https://gitlab.com/weeb-squad/akaneko)

## Installation
``npm install akaneko``

## IMPORTANT MAJOR UPDATE (GAME BREAKING, HENTAI BREAKING, AROUSAL BREAKING UPDATE)
Yay! We did it! This is the first major update I've had, apart from the first release ever of course, I understand that the package can get extremely big, so I've changed the code to fetch image urls externally from my website! This means you won't have to update everytime I add a new image! It's much more efficient and effective! Everything now relies on Asyncronous Functions which means Akaneko returns a Promise(), you will have to resolve the Promise for it to work. Look below for examples!

## Example(s)
**NodeJS:**
```javascript
// Akaneko //
const akaneko = require('akaneko');

async function yourFunctionName() {

  // Get SFW Neko Images, uwu //
  console.log("SFW Neko: " + await akaneko.neko());

  // Get Lewd Neko (NSFW), owo //
  console.log("Lewd Neko:" + await akaneko.lewdNeko());

  // Lewd Bomb me onii-san~~ //
  console.log("Lewd Bomb: " + await akaneko.lewdBomb(5));

  // Get other NSFW Images //
  console.log("BDSM: " + await akaneko.nsfw.bdsm());
  console.log("Maid: " + await akaneko.nsfw.maid());
  console.log("Hentai: " + await akaneko.nsfw.hentai());
}

// Call your Function! //
yourFunctionName();
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
neko | SFW Neko Girls (Cat Girls)
lewdneko | NSFW Neko Girls (Cat Girls)
lewdBomb(amount) | Sends an array of random lewds of (amount) parameter~

## NSFW Function(s)
Example:
```javascript
akaneko.nsfw.function() // Format
akaneko.nsfw.hentai() // Example
```
Function | Description
---|---
ass | I know you like anime ass~ uwu
bdsm | If you don't know what it is, search it up
blowjob | Basically an image of a girl sucking on a sharp blade!
cum | Basically sticky white stuff that is usually milked from sharpies.
doujin | Sends a random doujin page imageURL!
feet | So you like smelly feet huh?
femdom | Female Domination?
gifs | Basically an animated image, so yes :3
hentai | Sends a random vanilla hentai imageURL~
netorare | Wow, I won't even question your fetishes.
maid | Maids, Maid Uniforms, etc, you know what maids are :3
orgy | Group Lewd Acts
panties | I mean... just why? You like underwear?
pussy | The genitals of a female, or a cat, you give the meaning.
uglyBastard | The one thing most of us can all agree to hate :)
uniform | School Uniforms~

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


## How to Resolve Promises
```javascript
// Just Calling my dear child, Akaneko //
const akaneko = require('akaneko');

// Option 1, using and calling an asyncronous function //
async function yourFunctionName() {
  console.log(await akaneko.nsfw.maid); // Output: Some weird long link that you probably will definitely try to open //
}

// Option 2, Using ".then" //
await akaneko.nsfw.maid.then((imageURL) => {
  console.log(imageURL);
})
```


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
  const embed = new Discord.RichEmbed();

  // Defines Command //
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];

  // Onii-chan, don't reply! //
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  if (command == 'lewdneko') {

    // For Embed //
    embed.setImage(await akaneko.lewdNeko());
    return message.channel.send(embed);

    // For Plain Text //
    return message.channel.send(await akaneko.lewdNeko());

  } else if (command == 'maid') {

    // For Embed //
    embed.setImage(await akaneko.nsfw.maid());
    return message.channel.send(embed);

    // For Plain Text //
    return message.channel.send(await akaneko.nsfw.maid());
    
  }

});
  ```

## Support
[Discord Server](https://discord.gg/DxHvWwC)