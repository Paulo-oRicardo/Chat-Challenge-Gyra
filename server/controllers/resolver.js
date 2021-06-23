const CHAT_CHANNEL = "CHAT_CHANNEL";

const Chat = require("../models/Chat");
module.exports = {
  Query: {
    chats: (root, args, context) => Chat.find(),
  },

  Mutation: {
    createChat: (root, { content, from }, { pubsub }) =>
      Chat.create({ content, from }),
    //pubsub.publish(CHAT_CHANNEL, { messageSent:  Chat.create({content, from})});
  },
  Subscription: {
    messageSent: {
      subscribe: (root, args, { pubsub }) => {
        return pubsub.asyncIterator(CHAT_CHANNEL);
      },
    },
  },
};
