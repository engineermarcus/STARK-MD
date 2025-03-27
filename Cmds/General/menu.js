const { DateTime } = require('luxon');
const fs = require('fs');
const path = require('path');

module.exports = async (context) => {
    const { client, m, totalCommands, mode, botname, prefix, url, sendReply, sendMediaMessage, author } = context;

    try {
        const basePath = path.resolve(__dirname, '../'); // Adjusted path to categories
        const categories = [
            { name: 'General', emoji: '」' },
            { name: 'Media', emoji: '」' },
            { name: 'Editting', emoji: '」' },
            { name: 'Groups', emoji: '」' },
            { name: 'Fun', emoji: '」' },
            { name: 'Owner', emoji: '」' },
            { name: 'Utility', emoji: '」' }
        ];

        const quotes = [
            "Dream big, work hard.", "Stay humble, hustle hard.", "Believe in yourself.",
            "Success is earned, not given.", "Actions speak louder than words.",
            "The best is yet to come.", "Keep pushing forward.", "Do more than just exist."
        ];

        const getGreeting = () => {
            const hour = DateTime.now().setZone('Africa/Nairobi').hour;
            if (hour >= 5 && hour < 12) return '𝐍ɪᴀᴊᴇ?';
            if (hour >= 12 && hour < 18) return '𝐆ᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ';
            if (hour >= 18 && hour < 22) return '𝐆ᴏᴏᴅ ᴇᴠᴇɴɪɴɢ';
            return 'Good night and have wonderful dreams 😴';
        };

        const getCurrentTime = () => DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE);
        const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

        let menuText = `${getGreeting()}, *${m.pushName}*\n\n`;
        menuText += `𝐈ɴsᴘɪʀᴇᴅ 𝐁ʏ Sᴢᴀ\n`;
        menuText += `╭━━━  ⟮ ${botname} ⟯━━━━━━┈⊷\n`;
        menuText += `┃✵╭──────────────\n`;
        menuText += `┃✵│ 𝐄ᴠᴏᴋᴇʀ: ${m.pushName}\n`;
        menuText += `┃✵│ ᴛɪᴍᴇ: ${getCurrentTime()}\n`;
        menuText += `┃✵│ ᴘʀᴇғɪx: ${prefix}\n`;
        menuText += `┃✵│ ᴍᴏᴅᴇ: ${mode}\n`;
        menuText += `┃✵│ 𝐍ᴇɪ-𝐓ᴇᴄʜ\n`;
        menuText += `┃✵╰──────────────\n`;
        menuText += `╰━━━━━━━━━━━━━━━━━━┈⊷\n\n`;
	menuText += '𝐍ᴇɪᴍᴀɴ 𝐌ᴀʀᴄᴜs 𝐓ᴇᴄʜɴᴏʟᴏɢɪᴇs\n\n';

        const toFancyUppercaseFont = (text) => {
            const fonts = { 'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌',
                'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙' };
            return text.split('').map(char => fonts[char] || char).join('');
        };

        const toFancyLowercaseFont = (text) => {
            const fonts = { "a": "ᴀ", "b": "ʙ", "c": "ᴄ", "d": "ᴅ", "e": "ᴇ", "f": "ꜰ", "g": "ɢ", "h": "ʜ", "i": "ɪ", "j": "ᴊ", "k": "ᴋ", "l": "ʟ", "m": "ᴍ",
                "n": "ɴ", "o": "ᴏ", "p": "ᴘ", "q": "ϙ", "r": "ʀ", "s": "ꜱ", "t": "ᴛ", "u": "ᴜ", "v": "ᴠ", "w": "ᴡ", "x": "x", "y": "ʏ", "z": "ᴢ" };
            return text.split('').map(char => fonts[char.toUpperCase()] || fonts[char] || char).join('');
        };

        let commandCounter = 1;

        for (const category of categories) {
            const categoryPath = path.join(basePath, category.name);
            if (!fs.existsSync(categoryPath)) continue; // Skip missing directories

            const commandFiles = fs.readdirSync(categoryPath).filter(file => file.endsWith('.js'));
            if (commandFiles.length === 0) continue; // Skip empty categories

            const fancyCategory = toFancyUppercaseFont(category.name.toUpperCase());
            menuText += ` ╭─────「 ${fancyCategory} ${category.emoji}───┈⊷ \n`;

            for (const file of commandFiles) {
                const commandName = file.replace('.js', '');
                const fancyCommandName = toFancyLowercaseFont(commandName);
                menuText += ` ✦➤ ${commandCounter}. ${fancyCommandName}\n`;
                commandCounter++;
            }
            menuText += ` ╰──────────────┈⊷ \n`;
        }

        // ✅ FIXED IMAGE URL FORMAT
        const imageUrl = "https://files.catbox.moe/ok5inz.jpg";

        // ✅ Send menu message with error handling
        await sendMediaMessage(client, m, {
            image: { url: imageUrl },
            caption: menuText,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true
            }
        }).catch(err => {
            console.error("Image send failed:", err);
            sendReply(client, m, `Menu Is Down At ThisTime Try Help Instead`);
        });

    } catch (error) {
        console.error("Error:", error);
        sendReply(client, m, `Error: ${error.message}`);
    }
};
