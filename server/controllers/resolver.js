const Chat = require("../models/Chat");
const CHAT_CHANNEL = Math.random().toString(36).slice(2, 15);

module.exports = {
  Query: {
    chats: (root, args, context) => Chat.find(),
  },

  Mutation: {
    createChat: (root, { content, user }, { pubsub }) => {
      const message = Chat.create({ content, user });
      pubsub.publish(CHAT_CHANNEL, { messageSent: message });
      return message;
    },
  },
  Mutation: {
    deleteMessage: (root, { id }) => {
      const r = Chat.deleteOne({ _id: id });
      return r;
    },
  },
  Subscription: {
    messageSent: {
      subscribe: (root, args, { pubsub }) => {
        return pubsub.asyncIterator([CHAT_CHANNEL]);
      },
    },
  },
};
