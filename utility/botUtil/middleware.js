
const { sendReply } = require(__dirname + "/../../lib/context");


const middleware = async (context, next) => {
    const { m, client, isAdmin, isBotAdmin } = context;

  
    if (!m.isGroup) {
        return sendReply(client, m, "We are not in group come on");
    }

    
    if (!isAdmin) {
        return sendReply(client, m, "We are not Admin yet master I hope you could consider that");
    }

    
    if (!isBotAdmin) {
        return sendReply(client, m, "We are not Admin yet master I hope you could consider that");
    }

   
    await next();
};

module.exports = middleware;
