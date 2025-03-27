//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0g3ZFJKRTJiR3YxSVdhSGZoTVpFQXdtZGFjQ3dlZTU4UGVBTTJ0TCtVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFpCUkgvcUtYbTQzM2h0ZFh0K01XZmF5TVBQOHlyYklwWW1NczNMbmNTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQ3ZzSzBpbHpjREw1TEpCR2hsU0g2WmlLVW4yWVhYeHNoTjBFeUpVQm1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMmxYZHQ2RXpDSURVUmFndU9zcGo2Y0tFSDNtVk5hRGoxWUxqR015RmpzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllMN1dCZVhVUUdwYUg5Z0pPdE9Dalo4T0daVERCWng0bWVLYml6aGlSWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU5S2p4TWF6cUx2azEzbzQ1dWFGV2g4NDJxNEx2cmNLYWdOb3lXZ0o2bGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJTUFZVQW1NMzdsYjV6N1g5MTZNQUloUGpLb0lsbFRDWEhrQ1k3eU1tOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3FDMlVFUldwUy82NGc2bTVjSVMwYjhHK1FsNW9pMWpRMnNyV0czMnVXVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QT05LMEZXM3hwVG13dzMrSVdSWllNRlZHTGk0QVk3TS9IbHordXdRU0UyVG9TZHEyZHdUTUxFWGZiSjNaNm53MzJrdjdnYTUvRldob0dmS2U3NWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiIwV2tEWWJXQ2FSc3JxU3duOWpoRWNUTGhKSzdSQWQ5NDExMUhYSlhLVm9BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyTjlPUjRIOFE5aXhyc1Vxd1dCT3p3IiwicGhvbmVJZCI6Ijc3MTlkNmJmLWMzZjQtNGNmZi05YTM5LTk3MDNhNjFhYzYwYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnOVEzUzFRUG50ZzB5VjZObzNJVUg1TUdiY1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3dXSldQOWV5bStTUW5RNXRtWXpmWlpXQi9JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNLUjFQUDNDIiwibWUiOnsiaWQiOiIyNTQ3NTczNTQ0NzA6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLDgyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1NxaHdZUWlaR1V2d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWWx1MGM2OGlCWUxrTC90SWhRbGNPMUUzTytCUldqNEw4UkJKa3Q1VGN6Zz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibG9mV0FSUU5WOE1uWCtlMWRLTCttZFpSazBzVzhCVytMdzdGNmVjSzFEb0x4Y0hRYlNwa00zbllEeUJ6RWsvYkNPSHQ0bkU2NUlhbXp4RGFTRWI5QlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFidjlDakh0WDhLcWF6eDNxYnkzUGlnZHBpVWIwOS9EUXF3ZGVJcG9hMVZKekwxUTdWQytNcXpEMlA1eVJsTG9laUdmNy9nZ1Q3cFJJbWl6cVJDY2hRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU3MzU0NDcwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0pidEhPdklnV0M1Qy83U0lVSlhEdFJOenZnVVZvK0MvRVFTWkxlVTNNNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzA2MzE5MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGWk0ifQ=='; 


const session = sessionId.replace('NEIMAN-TECH-SESSION-ID;;;=>.','');
const prefix = process.env.PREFIX || '%';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'ANGELO';
const packname = process.env.PACKNAME || 'Angelo';
const dev = process.env.OWNER_NUMBER || '254757354470';
const fridayActive = process.env.FRIDAY || "true"; //you can always deactivate by typing (friday off)
const DevMarcus = dev.split(",");
const botname = process.env.BOTNAME || 'Sᴛᴀʀᴋ-ᴍᴅ';
const mode = process.env.MODE || 'private';
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
const anticall = process.env.ANTICALL || 'false';
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
