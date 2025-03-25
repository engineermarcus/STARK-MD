const { sendReply } = require(__dirname + "/../../lib/context"); 

const Ownermiddleware = async (context, next) => {
    const { m, isOwner, client } = context;

    
    if (!isOwner) {
        return sendReply(client, m, "Talk to my master please, perharps he may let you execute this command"); 
    }

    
    await next();
};

module.exports = Ownermiddleware;
