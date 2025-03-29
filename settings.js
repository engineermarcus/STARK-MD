//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || ''; 


const session = sessionId.replace('NEIMAN-TECH-SESSION-ID;;;=>.NEIMAN-TECH-SESSION-ID;;;=>',").eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5QMHV3WVFPQnZTcWJBcFg4RllQT2R1aWVTQUhrMXIzY1A1QjEwckhXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkIrZnY0MTBkcWNxRnFQUlJ4WG5VRzBROVhKZSt6NWhkZGkwWnRqNmxITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFT21uUFA2YnI4elNBaldXZFNwOFFHU3BKZUx0aHJOWENINzVER1ZTYzJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMMEFhU3V1ZFpoTFV0QnVFaWJMQ1F4QUgyMG96bTFSRnBkQ2ZxZExGVEZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBc3NFOWt2clFnNWdTcnlZbWFOVkZVZzd2OGRPODkyZndtRytkZ1E0bUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImROZEZ0Y0hkNFFxeFQ2N1dWYWdEa1hxYUNXZ29Yc2RNRnhaNVdpeE11aUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExDbC9QVzZiblZOTFQ3TStaejRWRUtIUVRocTdvbmJtVnJMd3VRc3IyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzQ1b1RBVFVBQ1dJMUIyS21mMkxnMVg1VkZYREp3THV6MFd1ZWwwemwxbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhkaWFoU1l3OGFSQXVGdkcrUklZZTdSSHBIZ3VOOFV1dzdjWGdRNzZ0UEl4U3ZCWmxMZnUzMWorQUMxV0ZmVWdOQVNYdVl6OWFwY1VqZWRIWmcrOGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IkxjSUhqUnB1RlI4UzIyNEZBa2VPVmE1SnQycUg4NWZLbkF4cjhrWXhnM0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJGV2t4UWdxVHRPYUlCd1FKaE92dEEiLCJwaG9uZUlkIjoiMDlkZTE4YTMtOGJhZS00YWI5LWFmYjQtODg3OTNhMTc2ZDhkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRvcEQ2ZlJHVWR5TkV6Mm1xQURUWFRQNWRERT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzRHZkK1VSUWk0R1lQRFp3TzZ4OTRFZHJGQlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWFY4VlFGV0ciLCJtZSI6eyJpZCI6IjI1NDcwNDAwMzg4MjoxNUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmoweHA0QkVOdmNtcjhHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTTI4N0JFQjFDSmhRR3F2WTRnNzhBTjNvWFI5VUxKbkc4QTBUV0FKV1MxYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYWpyeldFK1hIUVR3ZmhqSHd2TEcxTHhjY2R3MlZQcjNJL2dTVGxMazNjVG9MN0lBVERXMk83ZHp6UXppdWtnWmpwNHdOWHVjckNaUTNpejg2ci90QUE9PSIsImRldmljZVNpZ25hdHVyZSI6IkJQSW9Xbnh1RmZWZldHTDBSUEV0R3Fnd3pDNFhLMk1lVkZQaVllUytLT1M0Wm9FZjVCZXhoWUdtcXFibFRZMGYwaVRUVmdiZndWcnNsdi82MnpvV2lnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA0MDAzODgyOjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlROdk93UkFkUWlZVUJxcjJPSU8vQURkNkYwZlZDeVp4dkFORTFnQ1ZrdFgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDMxNzExNzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSTF1In0=;
const prefix = process.env.PREFIX || '%';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || '𝐍ᴇɪᴍᴀɴ 𝐌ᴀʀᴄᴜs';
const packname = process.env.PACKNAME || 'GEFF';
const dev = process.env.OWNER_NUMBER || '254704003882';
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
