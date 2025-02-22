// // /**
// //  * quiz-attempte router
// //  */

// // import { factories } from '@strapi/strapi';

// // export default factories.createCoreRouter('api::quiz-attempte.quiz-attempte');
// export default {
//     routes: [
//       {
//         method: "GET",
//         path: "/quiz-attemptes/user/:id",
//         handler: "quiz-attempte.getUserFreeQuizAttempts",
//         config: {
//           auth: false, // Change to true if authentication is required
//         },
//       },
//       {
//         method: "POST",
//         path: "/quiz-attemptes",
//         handler: "quiz-attempte.submitFreeQuizAttempt",
//         config: { auth: false },
//       },
//     ],
//   };
  
  