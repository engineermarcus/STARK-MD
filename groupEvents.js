const events = process.env.EVENTS || 'false';
const botname = process.env.BOTNAME || 'START-MD';

const getContextInfo = (m) => {
    return {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363395073832403@newsletter',
            newsletterName: 'Neiman Tech',
            serverMessageId: 143
        }
    };
};

const Events = async (client, Marcus) => {
    const Myself = await client.decodeJid(client.user.id);

    try {
        let metadata = await client.groupMetadata(Marcus.id);
        let participants = Marcus.participants;
        let desc = metadata.desc || "No Description";
        let groupMembersCount = metadata.participants.length;

        for (let num of participants) {
            let dpuser;

            try {
                dpuser = await client.profilePictureUrl(num, "image");
            } catch {
                dpuser = "https://i.imgur.com/iEWHnOH.jpeg";
            }

            if (Marcus.action === "add") {
                let userName = num;

                let Welcometext = `@${userName.split("@")[0]} 👋\n\nWelcome to ${metadata.subject}.\n\n \n${desc}\n\nPowered by 𝐍ᴇɪᴍᴀɴ 𝐌ᴀʀᴄᴜs 𝐓ᴇᴄʜɴᴏʟᴏɢɪᴇs
`;
                if (events === 'true') {
                    await client.sendMessage(Marcus.id, {
                        image: { url: dpuser },
                        caption: Welcometext,
                        mentions: [num],
                        contextInfo: getContextInfo({sender: Myself})
                    });
                }
            } else if (Marcus.action === "remove") {
                let userName2 = num;

                let Lefttext = `Goodbye @${userName2.split("@")[0]}\n\nso long sucker❌ ${groupMembersCount} Members left, not so bad I think`;
                if (events === 'true') {
                    await client.sendMessage(Marcus.id, {
                        image: { url: dpuser },
                        caption: Lefttext,
                        mentions: [num],
                        contextInfo: getContextInfo({sender: Myself})
                    });
                }
            } else if (Marcus.action === "demote" && events === 'true') {
                await client.sendMessage(
                    Marcus.id,
                    {
                        text: `@${(Marcus.author).split("@")[0]}, has demoted @${(Marcus.participants[0]).split("@")[0]} from admin 👀`,
                        mentions: [Marcus.author, Marcus.participants[0]],
                        contextInfo: getContextInfo({sender: Myself})
                    }
                );
            } else if (Marcus.action === "promote" && events === 'true') {
                await client.sendMessage(
                    Marcus.id,
                    {
                        text: `@${(Marcus.author).split("@")[0]} has promoted @${(Marcus.participants[0]).split("@")[0]} to admin. 👀`,
                        mentions: [Marcus.author, Marcus.participants[0]],
                        contextInfo: getContextInfo({sender: Myself})
                    }
                );
            }
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = Events;
