// module.exports = {
//     async afterCreate(event) {
//       const { result } = event;
//       const userId = result.user;
//       const correctCount = result.correct_count || 0;
//       const wrongCount = result.wrong_count || 0;
  
//       // Calculate Elo change
//       const eloChange = correctCount - wrongCount;
  
//       // Fetch current user Elo
//       const user = await strapi.entityService.findOne('plugin::users-permissions.user', userId, {
//         fields: ['elo_score'],
//       });
  
//       if (user) {
//         const newEloScore = Math.max(0, user.elo_score + eloChange);
  
//         // Update user Elo
//         await strapi.entityService.update('plugin::users-permissions.user', userId, {
//           data: { elo_score: newEloScore },
//         });
//       }
//     },
//   };
  