// // /**
// //  * quiz-attempte controller
// //  */


// // import { factories } from '@strapi/strapi'

// // export default factories.createCoreController('api::quiz-attempte.quiz-attempte');
// "use strict";

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::quiz-attempte.quiz-attempte", ({ strapi }) => ({
//   async submitFreeQuizAttempt(ctx) {
//     try {
//       const { userId, articleId, attemptedQuestions } = ctx.request.body;
//       console.log("Received Data:", { userId, articleId, attemptedQuestions });
//       // Fetch Article with Free Quiz Component Data
//       const article = await strapi.entityService.findOne("api::article.article", articleId, {
//         populate: ["free_quiz"],
//       });

//       if (!article || !article.free_quiz) {
//         console.log("Error: Free quiz not found for this article.");
//         return ctx.badRequest("Free quiz not found for this article");
//       }

//       // Get Quiz Component Data
//       const freeQuizData = article.free_quiz; // This is a component, so we store it as JSON

//       // Calculate Score
//       const correctAnswers = attemptedQuestions.filter(q => q.isCorrect).length;
//       const wrongAnswers = attemptedQuestions.filter(q => !q.isCorrect && q.answer !== "").length;
//       const unattempted = attemptedQuestions.filter(q => q.answer === "").length;
//       const score = (correctAnswers / attemptedQuestions.length) * 100;
//       console.log("Calculated Score:", { correctAnswers, wrongAnswers, unattempted, score });
//       // Save Attempt
//       const attempt = await strapi.entityService.create("api::quiz-attempte.quiz-attempte", {
//         data: {
//           user: userId,
//           article: articleId,
//           free_quiz_data: freeQuizData, // Store the entire Free Quiz component data
//           attempted_questions: attemptedQuestions,
//           correct_count: correctAnswers,
//           wrong_count: wrongAnswers,
//           unattempted_count: unattempted,
//           score,
//         },
//       });
//       console.log("Quiz Attempt Saved:", attempt);
//       return ctx.send({ success: true, attempt });
//     } catch (error) {
//       console.error("Submission Error:", error);
//       return ctx.badRequest("Quiz attempt submission failed", { error });
//     }
//   },

//   // **Add this function**
//   async getUserFreeQuizAttempts(ctx) {
//     try {
//       const { id } = ctx.params; // User ID from the URL

//       // Find quiz attempts by user ID
//       const attempts = await strapi.entityService.findMany("api::quiz-attempte.quiz-attempte", {
//         filters: { user: id },
//         populate: ["article"], // Populate related article details if needed
//       });

//       return ctx.send({ success: true, attempts });
//     } catch (error) {
//       return ctx.badRequest("Failed to fetch quiz attempts", { error });
//     }
//   },
// }));
