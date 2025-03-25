const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

module.exports = async (context) => {
  const { client, m, pushname, msgMarcus } = context;

  if (!msgMarcus) {
    m.reply('Quote an image, a short video or a sticker to change watermark.');
    return;
  }

  let media;
  if (msgMarcus.imageMessage) {
    media = msgMarcus.imageMessage;
  } else if (msgMarcus.videoMessage) {
    media = msgMarcus.videoMessage;
  } else if (msgMarcus.stickerMessage) {
    media = msgMarcus.stickerMessage;
  } else {
    m.reply('This is neither a sticker, image nor a video...');
    return;
  }

  var result = await client.downloadAndSaveMediaMessage(media);

  let stickerResult = new Sticker(result, {
    pack: pushname,
    author: pushname,
    type: StickerTypes.FULL,
    categories: ["🤩", "🎉"],
    id: "12345",
    quality: 70,
    background: "transparent",
  });

  const Buffer = await stickerResult.toBuffer();
  client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });
};
