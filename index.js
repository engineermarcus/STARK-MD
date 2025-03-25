const {                                                                         default: MarcusConnect, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent,                                    generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, useMultiFileAuthState,                                                           DisconnectReason, makeInMemoryStore, downloadContentFromMessage, jidDecode  } = require("@whiskeysockets/baileys");                                                                                                                     const pino = require("pino");                                                 const { Boom } = require("@hapi/boom");                                       const fs = require("fs");                                                     const FileType = require("file-type");                                        const { exec } = require("child_process");                                    const chalk = require("chalk");                                               const express = require("express");                                           const { DateTime } = require("luxon");                                        const util = require("util");                                                 const speed = require("performance-now");                                     const { smsg } = require('./lib/smsg');                                       const {                                                                         smsgsmsg, formatp, tanggal, formatDate, getTime, sleep, clockString,          fetchJson, getBuffer, jsonformat, antispam, generateProfilePicture, parseMention,                                                                           getRandom, fetchBuffer,                                                     } = require("./lib/botFunctions.js");                                                                                                                       const { TelegraPh, UploadFileUgu } = require("./lib/toUrl");                  const uploadtoimgur = require("./lib/Imgur");                                                                                                               const { sendReply, sendMediaMessage } = require("./lib/context");             const ytmp3 = require("./lib/ytmp3");
const path = require("path");
const { commands, totalCommands } = require("./commandHandler");

const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require("./lib/exif");
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });

const authenticationn = require("./auth.js");
const daddy = "254725693306@s.whatsapp.net";

const {
autoview, autoread, botname, timezone, autobio, mode, anticallmsg, reactemoji, prefix, presence,
mycode, author, antibad, packname, url, gurl, herokuAppname, herokuapikey, anticall, dev, antilink, gcpresence, antionce, antitag, antidelete, autolike,
} = require("./settings");

const groupEvents = require("./groupEvents.js");

authenticationn();

const app = express();
const port = process.env.PORT || 10000;

async function startMarcus() {
const { saveCreds, state } = await useMultiFileAuthState("session");
const client = MarcusConnect({
logger: pino({ level: "silent" }),
printQRInTerminal: true,
version: [2, 3000, 1015901307],
browser: ["START-MD", "Safari", "3.0"],
fireInitQueries: false,
shouldSyncHistoryMessage: true,
downloadHistory: true,
syncFullHistory: true,
generateHighQualityLinkPreview: true,
markOnlineOnConnect: true,
keepAliveIntervalMs: 30000,
auth: state,
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id);
return msg.message || undefined;
}
return { conversation: "HERE" };
},
});

store.bind(client.ev);

if (autobio === "true") {
setInterval(() => {
const date = new Date();
client.updateProfileStatus(`
${botname} is active 24/7\n\n${date.toLocaleString("en-US", { timeZone: "Africa/Nairobi" })} It's a ${date.toLocaleString("en-US", { weekday: "long", timeZone: "Africa/Nairobi" })}.`
);
}, 10 * 1000);
}

let lastTextTime = 0;
const messageDelay = 5000;

client.ev.on('call', async (callData) => {
if (anticall === 'true') {
const callId = callData[0].id;
const callerId = callData[0].from;

await client.rejectCall(callId, callerId);  

  const currentTime = Date.now();  
  if (currentTime - lastTextTime >= messageDelay) {  
    await client.sendMessage(callerId, {  
      text: anticallmsg  
    });  
    lastTextTime = currentTime;  
  } else {  
    console.log('Message skipped to prevent overflow');  
  }  
}

});



const axios = require("axios");

let fridayActive = true; 
async function fetchResponse(userMessage, sender, timestamp) {
    try {
        const { data } = await axios.post("https://neiman-tech.onrender.com/chat", {
            message: userMessage,
            sender: sender,
            timestamp: timestamp
        });
        return data.response; // ✅ Return Friday's response
    } catch (error) {
        console.error("❌ API Request Error:", error.message);
        return "I'm currently unavailable. Please try again later.";
    }
}

client.ev.on("messages.upsert", async (chatUpdate) => {
    try {
        const mek = chatUpdate.messages[0];
        if (!mek.message) return; // Ignore empty messages

        mek.message = mek.message.ephemeralMessage?.message || mek.message;
        const sender = mek.key.remoteJid;
        if (!sender) return; // Prevent errors if sender is undefined

        const messageType = Object.keys(mek.message)[0];
        const messageTimestamp = mek.messageTimestamp;
        const userMessage = mek.message.conversation || mek.message.extendedTextMessage?.text;
        const isGroup = sender.endsWith("@g.us");

        console.log(`📩 New message from ${sender}:`, userMessage);
	if (autoview === 'true' && autolike === 'true' && mek.key && mek.key.remoteJid === "status@broadcast") {
		const marcuslike = await client.decodeJid(client.user.id);
		const emojis = ['😂', '😥', '😇', '�', '💥', '💯', '🔥', '💫', '👽', '💗', '❤️‍🔥', '👁️', '👀', '🙌', '🙆', '🌟', '💧', '🎇', '🎆', '♂️', '✅'];
		const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
		const delayMessage = 3000;
		await client.sendMessage(mek.key.remoteJid, {
			react: {
				text: randomEmoji,
				key: mek.key,
			}
		}, { statusJidList: [mek.key.participant, marcuslike] });
		await sleep(delayMessage);
  }
	if (mek.key?.remoteJid.endsWith("@s.whatsapp.net")) {
		const presenceType = presence === "online" ? "available" : presence === "typing" ? "composing" : presence === "recording" ? "recording" : "unavailable";
		await client.sendPresenceUpdate(presenceType, mek.key.remoteJid);
  }
	if (!client.public && !mek.key.fromMe && chatUpdate.type === "notify") return;
	const m = smsg(client, mek, store);
	const body = m.mtype === "conversation" ? m.message.conversation :
		m.mtype === "imageMessage" ? m.message.imageMessage.caption :
		m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : "";
	const cmd = body.startsWith(prefix);
	const args = body.trim().split(/ +/).slice(1);
	const pushname = m.pushName || "No Name";
	const botNumber = await client.decodeJid(client.user.id);
	const servBot = botNumber.split('@')[0];
	const Ghost = "254796299159";
	const Ghost2 = "254110190196";
	const Ghost3 = "2547483876159";
	const Ghost4 = "254725693306";
	const superUserNumbers = [servBot, Ghost, Ghost2, Ghost3, Ghost4, dev].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net");
	const isOwner = superUserNumbers.includes(m.sender);
	const isBotMessage = m.sender === botNumber;
	const itsMe = m.sender === botNumber;
	const text = args.join(" ");
	const Tag = m.mtype === "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null
    ? m.message.extendedTextMessage.contextInfo.mentionedJid
    : [];
	let msgMarcus = m.message.extendedTextMessage?.contextInfo?.quotedMessage;
	let budy = typeof m.text === "string" ? m.text : "";
	const timestamp = speed();
	const Marcusspeed = speed() - timestamp;
	const getGroupAdmins = (participants) => {
		let admins = [];
		for (let i of participants) {
			if (i.admin === "superadmin") admins.push(i.id);
			if (i.admin === "admin") admins.push(i.id);
		}
		return admins || [];
  };
	const Marcus = m.quoted || m;
	const quoted = Marcus.mtype === 'buttonsMessage' ? Marcus[Object.keys(Marcus)[1]] :
		    Marcus.mtype === 'templateMessage' ? Marcus.hydratedTemplate[Object.keys(Marcus.hydratedTemplate)[1]] :
		    Marcus.mtype === 'product' ? Marcus[Object.keys(Marcus)[0]] : m.quoted ? m.quoted : m;
	const color = (text, color) => {
		return color ? chalk.keyword(color)(text) : chalk.green(text);
  };
	const mime = quoted.mimetype || "";
	const qmsg = quoted;
	const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(() => {}) : "";
	const groupName = m.isGroup && groupMetadata ? groupMetadata.subject : "";
	const participants = m.isGroup && groupMetadata ? groupMetadata.participants : [];
	const groupAdmin = m.isGroup ? getGroupAdmins(participants) : [];
	const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false;
	const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
	const IsGroup = m.chat?.endsWith("@g.us");
	const context = {
		client, m, text, isBotMessage, chatUpdate, store, isBotAdmin, isOwner, isAdmin, IsGroup, participants, pushname, body, budy, totalCommands, args, mime, qmsg, msgMarcus, botNumber, itsMe, packname,author, generateProfilePicture, groupMetadata, Marcusspeed, mycode, fetchJson, exec, antibad, getRandom, UploadFileUgu, TelegraPh, prefix, cmd, botname, mode, antitag, antilink, antidelete, antionce, fetchBuffer,store, uploadtoimgur, chatUpdate, ytmp3, getGroupAdmins, Tag
  };
	const forbiddenLinkPattern = /https?:\/\/[^\s]+/;
	if (body && forbiddenLinkPattern.test(body) && m.isGroup && antilink === 'true' && !isOwner && isBotAdmin && !isAdmin) {
	    if (itsMe) return;
	    const kid = m.sender;
	    await client.sendMessage(m.chat, {
      text: ` *_Links Are Not Allowed Homie_*`,
      contextInfo: { mentionedJid: [kid] }
    }, { quoted: m });
	await client.sendMessage(m.chat, {
		delete: {
			remoteJid: m.chat,
			fromMe: false,
			id: m.key.id,
			participant: kid
		}
	});
	if (!isBotAdmin) {
		await client.sendMessage(m.chat, {
			text: ` @${kid.split("@")[0]} _Shared ablink_`,
		});
	} else {
		await client.groupParticipantsUpdate(m.chat, [kid], 'remove');
	}
  }
	const forbiddenWords = ['neiman','marcus','Marcus','Neiman','NEIMAN','MARCUS','@Neiman Marcus'];
	if (body && forbiddenWords.some(word => body.toLowerCase().includes(word))) {
	if (m.isGroup && antibad === 'true') {
		if (isBotAdmin && !isOwner && !isAdmin) {
			const kid = m.sender;
			await client.sendMessage(m.chat, {
				text: `This Residence Is Evil, Don't Mention It`,
				contextInfo: { mentionedJid: [kid] }
			}, { quoted: m });
			await client.sendMessage(m.chat, {
				delete: {
					remoteJid: m.chat,
					fromMe: false,
					id: m.key.id,
					participant: kid
				}
			});
			await client.groupParticipantsUpdate(m.chat, [kid], 'remove');
			await client.updateBlockStatus(kid, 'block');
		}
	} else if (!m.isGroup && antibad === 'true') {
		const kid = m.sender;
		await client.updateBlockStatus(kid, 'block');
	}
	}
	if (cmd && mode === "private" && !itsMe && !isOwner && m.sender !== daddy) return;
	const command = cmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : null;
	if (command) {
		const commandObj = commands[command];
	if (commandObj) {
		await commandObj.execute({ fetchJson, exec, getRandom, generateProfilePicture, args, dev, client, m, mode, mime, qmsg, msgMarcus, Tag, generateProfilePicture, text, totalCommands, botname, url, sendReply, sendMediaMessage, gurl, prefix, groupAdmin, getGroupAdmins, args, groupName, groupMetadata, herokuAppname, herokuapikey, packname, author, participants, isOwner, pushname, botNumber, itsMe, store, isAdmin, isBotAdmin });
	}
  }
	// **🛑 Prevent Friday from replying to itself
	if (mek.key.fromMe) {                                          
		if (userMessage.toLowerCase() === "friday on") {                
			fridayActive = "true";        
			await client.sendMessage(sender, { text: "✅ Friday is now ON!" });                                                     
		} else if (userMessage.toLowerCase() === "friday off") {      
			fridayActive = "false";            
			await client.sendMessage(sender, { text: "🚫 Friday is now OFF!" });                                       
		}                                  
		return;                                                   
	}    
	if (!fridayActive) return;        
	
	if (!isGroup && userMessage) {                       
		const botReply = await fetchResponse(userMessage, sender, messageTimestamp);                                                    await client.sendMessage(sender, { text: botReply });                                      
	}
} catch (err) {
  console.error("Error processing message:", err);
}

});





process.on("unhandledRejection", (reason, promise) => {
console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (err) => {
console.error("Caught exception:", err);
});

client.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
const decode = jidDecode(jid) || {};
return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
}
return jid;
};

client.getName = async (jid) => {
const id = client.decodeJid(jid);
if (id.endsWith("@g.us")) {
const group = store.contacts[id] || (await client.groupMetadata(id)) || {};
return group.name || group.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international");
}
const contact = store.contacts[id] || {};
return contact.name || contact.subject || contact.verifiedName || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international");
};

client.public = true;
client.serializeM = (m) => smsg(client, m, store);

client.ev.on("group-participants.update", (m) => groupEvents(client, m));

client.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
const reasons = {
[DisconnectReason.badSession]: "Bad Session File, Please Delete Session and Scan Again",
[DisconnectReason.connectionClosed]: "Connection closed, reconnecting...",
[DisconnectReason.connectionLost]: "Connection Lost from Server, reconnecting...",
[DisconnectReason.connectionReplaced]: "Connection Replaced, Another New Session Opened, Please Restart Bot",
[DisconnectReason.loggedOut]: "Device Logged Out, Please Delete File creds.json and Scan Again",
[DisconnectReason.restartRequired]: "Restart Required, Restarting...",
[DisconnectReason.timedOut]: "Connection TimedOut, Reconnecting...",
};
console.log(`reasons[reason] || Unknown DisconnectReason: ${reason}`);
if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.loggedOut) {
process.exit();
} else {
startMarcus();
}
} else if (connection === "open") {
await client.groupAcceptInvite("D0vchSlEREW3xHrAMo5p6Y");
console.log(`✅ Connection successful\nLoaded ${totalCommands} commands.\nBot is active.`);

const getGreeting = () => {  
    const currentHour = DateTime.now().setZone("Africa/Nairobi").hour;  
    if (currentHour >= 5 && currentHour < 12) return "Good morning 🌄";  
    if (currentHour >= 12 && currentHour < 18) return "Good afternoon ☀️";  
    if (currentHour >= 18 && currentHour < 22) return "Good evening 🌆";  
    return "Good night 😴";  
  };  

  const message = `${getGreeting()},

╭═══『 ${botname} 』══⊷
║ ʙᴏᴛ ᴏᴡɴᴇʀ: ${author}
║ ᴍᴏᴅᴇ: ${mode}
║ ᴘʀᴇғɪx: [ ${prefix} ]
║ ᴛᴏᴛᴀʟ ᴘʟᴜɢɪɴs: ${totalCommands}
║ ᴛɪᴍᴇ: ${DateTime.now().setZone("Africa/Nairobi").toLocaleString(DateTime.TIME_SIMPLE)}
║ 𝐍ᴇɪᴍᴀɴ 𝐓ᴇᴄʜ
╰═════════════════⊷`;

await client.sendMessage(client.user.id, { text: message });  
   console.log(` ${message} \nconnected ✅ enjoy`);  

}

});

client.ev.on("creds.update", saveCreds);

client.sendText = (jid, text, quoted = "", options) => client.sendMessage(jid, { text, ...options }, { quoted });

client.downloadMediaMessage = async (message) => {
const mime = (message.msg || message).mimetype || "";
const messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];
const stream = await downloadContentFromMessage(message, messageType);
let buffer = Buffer.from([]);
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
const quoted = message.msg || message;
const mime = (message.msg || message).mimetype || "";
const messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];
const stream = await downloadContentFromMessage(quoted, messageType);
let buffer = Buffer.from([]);
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
const type = await FileType.fromBuffer(buffer);
const trueFileName = attachExtension ? `${filename}.${type.ext}` : filename;
await fs.writeFileSync(trueFileName, buffer);
return trueFileName;
};
}

app.use(express.static("public"));
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));

startMarcus();

module.exports = startMarcus;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.redBright(`Update ${__filename}`));
delete require.cache[file];
require(file);
});


