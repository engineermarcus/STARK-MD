module.exports = async (context) => {
  const { client, m, url } = context;


  const messageCaption = `
   *Follow my channels and join my  groups for more updates*
  ╭────────────────
  │ *Wachannel:* https://whatsapp.com/channel/0029Vb9EZIl60eBdl8fIY10p
    
  │ *wagroup:*  https://chat.whatsapp.com/D0vchSlEREW3xHrAMo5p6Y

  │ *Telegram:*  https://t.me/marcusmd
    
  │ *Contact owner:* https://wa.me/qr/7HLS3WQTBCI6O1

 ╰─────────────────── 
  `;

  // Prepare the image URL
  const image = {
    url: url
  };

  // Prepare the message object
  const message = {
    image: image,
    caption: messageCaption
  };

  // Send the message
  await client.sendMessage(m.chat, message, { quoted: m });
};

