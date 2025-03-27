//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dLUWticHRQSzFNSjEvR1RoVFhhRVZRS21ZVnFQTk1iRmhXT0lEeVpFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlJxRklPOCtycDlRYnBsSkh3TmVlNEdNU2d6VVdDQ1djdDV1SDQ4ZExoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSEt0NjcvQlQzWE9ZOEdmd2g0REhiNXZpb1Nkc0tENi9zWG1pUUhlYm0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGd1hJRkFsUm1KMXN4UitOc1h0REkvNUxrRUsvZHhsS2llSkltVmdZelVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJdXM2Q2RjU2Y0Q1lvVFhGWEpwVHQzWTI4MEJ1OGtxcnVpbmQrQ1dPVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhtMVhVSGJYZ2FWYXdRaUErOUgybXRMMXRBektyb1RDYy84UVROZkEwR009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUlxbTA3Q3VDWEJDRERRQ1MyUDJFL0pHci8xa3dzOThJQWNneHFUczVrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlpycEhDOGR1K1docFI2TWUxK2tRRk0rZXZvUjlBYWFKYnVJVVZ0R2sycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhiaEVOcXBicFZpbGkyQ3dWaWtGVVdDR05Yb0YzcG4rNDNJMUw5c1gxdVIrMVJlbk9sT1lOT3Izc0t1M2gwSFNoUjhoZ1JLTnBBQUxrMGh4Z2ZYYkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6Im02eTg3VmhFTlNqRmw3OWE2cTByMjR5YVJWOC9HUzl2cW5lQXRLUi9IR1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im5qMnVVWWpCUkhtWWYwUXlfYTVVNUEiLCJwaG9uZUlkIjoiMjZjM2MyOTYtZmIwZi00YWMxLTlmN2ItYWY1YTIyMWYxOThmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY2cEZXd3RGbmVta2NUSW5wbEZZOGpqdXZkMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGRnZkMlRFRCtpUmdhQWZNcjRXRDczM2x4ZEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSEVZTFpDVlYiLCJtZSI6eyJpZCI6IjI1NDcyNTY5MzMwNjoxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJOZWltYW4gTWFyY3VzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLN3g0YU1HRUp6aWxMOEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXY0hYejBsRjJHSVdHeDhPYTNkT2M0WmIrMTFwcTZUWVBwMGIrbzZkV2tnPSIsImFjY291bnRTaWduYXR1cmUiOiIra3VBaTUyZWMvRm9CR0lDdmlSNHRvWkxJeG5qZ3VhL2UwY3ZOYnZxbk1IYUcvMXMySi9yajFUcjRzekJUcWxESkdwTVdpMmpRK1UzUCt1VGhRZlhEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU1lUNXBUU0FiNDd6S3BoaTNhZVJjZzNtRE9MaElmdnVudHlGM3d3OUxMdm9lbGloSTJha2FFOWtRRXBSYVR6aEJIVU94WU40ZUx6STZHOHFLWXAvQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MjU2OTMzMDY6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVm5CMTg5SlJkaGlGaHNmRG10M1RuT0dXL3RkYWF1azJENmRHL3FPblZwSSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzA3MzU3NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFITzYifQ=='; 


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
