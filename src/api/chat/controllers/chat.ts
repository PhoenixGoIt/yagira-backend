import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::chat.chat", ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized("You must be logged in to view chats");
    }

    const userId = user.id;

    const chats = await strapi.entityService.findMany("api::chat.chat", {
      filters: {
        users: { id: userId }
      },
      populate: {
        users: {
          fields: ["id", "username", "name"] // Оставляем только нужные поля
        },
        messages: {
          fields: ["id", "message", "createdAt"]
        }
      }
    });

    return chats;
  }
}));
