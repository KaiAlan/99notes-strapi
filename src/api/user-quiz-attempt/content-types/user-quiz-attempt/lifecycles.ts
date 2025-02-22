// src/user-quiz-attempt/content-types/user-quiz-attempt/lifecycle.ts
export default {
  async afterCreate(event) {
    const { result } = event;
    
    await strapi.entityService.update(
      'plugin::users-permissions.user',
      result.users_permissions_user.id,
      {
        data: {
          eloRating: (result.users_permissions_user.eloRating || 1000) + result.elo_change
        }
      }
    );
  }
};
