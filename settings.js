//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9SUzlQaWVNbEFuMWlTRTFTZUZBODlsemJtWDJzVEhZejFuZjZzQkUwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3V2YlZHeUdIR0p6TXR4V0NzVXNzYnh3bzRxYThUTUxsaWVjdDlDZVBDST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTk1qMGJZUTFXallUekZ3NmJ2eGlHQmtUd0RDUkc2ZGNzbS9qMm45TVc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWNVAyT1JucDlNc2d0RUd6UmxFUTNLamlMSkxlMjc3MTlIbk1iUHd2THdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNMlczUVVyT1VTL3NCRitsZDFkNzJLUThsQTZoZjRKMVYwa0ZKSmZNRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFyTHpHN3BtelpZcWpsSFVOcU1QODh3R2lNbFAxQnBPa0RKRm8yd2pzSDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0k4TTc5RGJNbHo1UUJRdG5zZ2N3UlphUGc3YnFlcHFjNU95ZkhHalJWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHBPMXNjOVl4Tlp3UUs2M1hhQWJQaUZLcVBLWFZlbUd4V2Jwa2RXdElrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBnaGNsd0NyZ0Z4S0hvdlp0cThLaEFJTHdyWHE3ME92ZEpZQ0c5dWpiMDhBSGs4aGJUZ2xLUDA2ZW1iTjlVSVRFcG9TbEtVaWg5cmg2UVpWQWdpUER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJhY0V2dmtKWjRvNEJvV2UxUlZKb0NvOG5NNXVGT3NmL2NSUkRLTXYzTm5jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5NmotLUlEdlFrS1g2cDg4Q0M1SmNBIiwicGhvbmVJZCI6IjkxMzQ5MDZlLTM2M2QtNDJjNi1iYjBkLWFhYjEzZGU0NzA3NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQcmk2YlhyUnNLcnV4NUc5eU5kelFBbDROcUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTRVSkhvdGJKUitiU3NBdU85MjhYUnZXVUNZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg3QlJDTkRUIiwibWUiOnsiaWQiOiIyNTQ3MjU2OTMzMDY6MTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTmVpbWFuIE1hcmN1cyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzN4NGFNR0VMK0ZpNzhHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV2NIWHowbEYyR0lXR3g4T2EzZE9jNFpiKzExcHE2VFlQcDBiK282ZFdrZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTERqQVRzSTh4NVAvRHB1VjVmNkUyWjBMNXVkVktDRTRzc0RyV2toYUt6VW1KQUVKK0xGUmdFem5wVUFBeE9KbmlJcER0a2RraGVPSEtSWEtPMklzQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Im8xc1ZJVytsejQwN2dyM0g1T3M4dDE1dTR3MXBJL0g0SXFGWkRYT3diTEQ1aVA2M1lYM1ROV0xmVFhxdHl0T2lTR2NETmU1K3hBRjMxY0ZabnhNZkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzI1NjkzMzA2OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZuQjE4OUpSZGhpRmhzZkRtdDNUbk9HVy90ZGFhdWsyRDZkRy9xT25WcEkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDI5MTQyNTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSE8zIn0='; 


const session = sessionId.replace('NEIMAN-TECH-SESSION-ID;;;=>.','');
const prefix = process.env.PREFIX || '%';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || '𝐍ᴇɪᴍᴀɴ 𝐌ᴀʀᴄᴜs';
const packname = process.env.PACKNAME || 'Marcus';
const dev = process.env.OWNER_NUMBER || '254725693306';
const fridayActive = process.env.FRIDAY || "true"; //you can always deactivate by typing (friday off)
const DevMarcus = dev.split(",");
const botname = process.env.BOTNAME || 'Sᴛᴀʀᴋ-ᴍᴅ';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'typing';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://media-database-mcjv.onrender.com/media/images/a98e77ee75af1bf5d5d49fc6e840f123.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vb9EZIl60eBdl8fIY10p';
const reactemoji = process.env.EMOJI || '⚒️';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || '❌ This Residence Cannot Pick Your Call At This Time Please Leave A Message 😌';
const autobio = process.env.AUTOBIO || 'true';

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: true,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: true,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl, 
  antibad: groupControl, 
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevMarcus,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete,
  fridayActive
};
