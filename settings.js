//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpnVkpEakdSSWVHUkQyNFpQSnI4aEZaNmFIYzdUZ3F4bWRxU3d3bTNYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3lYbU9BbVEvYnptUkZBMkx5VmR2U2Rja0kwWlZaUHdOU3RtWXQ4K1ZnQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTzNzcS9uU1dpRzEyTUtDdWVHWld0ZGw4Ukw2d3NuTS90aThiT0RXaDNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlLzBlYVEwK2d0dzVDay9YOVVFcVRsSGU4L3orRjRhRGRHQk5TTUhyNDIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9FOHYrQWMwYWw2dDZBalZrRmcwVE8xRFU0bW5LakhVdVNvb2prSXgwRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxnVE1NM2dGdGxVQ2M5T2wwVlJUMWNPQy9yenlMZzR0UTlTbjRLaGVkejA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xlK2hYeFA1S2VBSUM4SjNuY2J1R3ZjNm5aenFqOVFTbER5eTMvQlNYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXV3Y2hJanFTaGdGL0ovM3Z3TmVhT1VBTnh2RWxPc0pHRG05bXRvM1VXND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp0aHFOdlljOFFkNW1ua1FiMUI4cUo3TWNwWFQvUkZEUnBUczhGSVczQ2s0anpWNnJkaU83MnlJZU1RRkdIdG9HSndFL2hLV0N1eS9aMW04RGxuMml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6IkZER054OUxrZ0E0alppMmZqTHZPVytrWnhqTjNNVzlrTHpKbG1nQTkyaTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImN1SThydEc4UkJPZlo4WTdjVlhYUnciLCJwaG9uZUlkIjoiYjEwNjkxZWEtNjk2ZC00NTFkLThkZDAtNmVmZDQ0NzZkYjZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im85TEdsZFpoR2tFNjFhM0UwZFFMNU5lUXhPMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3VEVpMkpIOHF4aE9nTjY5RS9CMVM4dFlZWlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFpGRkRUV1YiLCJtZSI6eyJpZCI6IjI1NDc1NzM1NDQ3MDoyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPV3Fod1lReHNDVXZ3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZbHUwYzY4aUJZTGtML3RJaFFsY08xRTNPK0JSV2o0TDhSQkprdDVUY3pnPSIsImFjY291bnRTaWduYXR1cmUiOiJTWURucVFxM1F3UFJ0WHlBUTdWQ0U3YlBKWmFiTWtScmNQcWJXa3c2cm9XMk10cGRjdlJjOVFxN3NDaFdoUUFzVmtBaVFESlZ2L2NBeTM2VXBmbGtDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVFd3R2wzc3JseHRIdHQydENXS1BLUUdRancrWG1DTGpuRnZWbUlUUDJnQXAxVUk2UzJJNHVpb2lxSHU5VFNmK2xrOTRrZFYzbGdhaWRYM0NDZWJTaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTczNTQ0NzA6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXSmJ0SE92SWdXQzVDLzdTSVVKWER0Uk56dmdVVm8rQy9FUVNaTGVVM000In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQzMDY5MjY4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZaTiJ9'; 


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
