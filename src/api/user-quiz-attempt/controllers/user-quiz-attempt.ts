// /**
//  * user-quiz-attempt controller
//  */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::user-quiz-attempt.user-quiz-attempt');


// //count

// // src/user-quiz-attempt/controllers/user-quiz-attempt.ts
// export default {
//     async create(ctx) {
//       const { user } = ctx.state;
//       const { quiz: quizId, attempted_questions } = ctx.request.body.data;
  
//       // Get quiz with populated components
//       const quiz = await strapi.entityService.findOne('api::quiz.quiz', quizId, {
//         populate: {
//           question: {
//             populate: {
//               options: true
//             }
//           }
//         }
//       });
  
//       if (!quiz) return ctx.notFound('Quiz not found');
//       if (!quiz.question || !Array.isArray(quiz.question)) {
//         return ctx.badRequest('Invalid quiz format - no questions found');
//       }
//       // Validate questions have exactly one correct answer
//       const questionValidation = quiz.question.every(q => 
//         q.options.filter(o => o.isCorrect).length === 1
//       );
      
//       if (!questionValidation) {
//         return ctx.badRequest('Invalid quiz configuration - questions must have exactly one correct answer');
//       }
  
//       // Process answers
//       let correct_count = 0;
//       const questionMap = new Map(
//         quiz.question.map(q => [
//           q.id,
//           q.options.find(o => o.isCorrect)?.id
//         ])
//       );
  
//       const processedAttempts = attempted_questions.map(attempt => {
//         const correctOptionId = questionMap.get(attempt.questionId);
//         const isCorrect = correctOptionId === attempt.selectedOptionId;
//         if (isCorrect) correct_count++;
        
//         return {
//           ...attempt,
//           isCorrect,
//           correctOptionId
//         };
//       });
  
//       const wrong_count = attempted_questions.length - correct_count;
//       const total_questions = quiz.question.length;
//       const unattempted_count = total_questions - attempted_questions.length;
  
//       // Create attempt
//       const entry = await strapi.entityService.create('api::user-quiz-attempt.user-quiz-attempt', {
//         data: {
//           users_permissions_user: user.id,
//           quiz: quizId,
//           attempted_questions: processedAttempts,
//           correct_count,
//           wrong_count,
//           unattempted_count,
//           total_questions,
//           elo_change: (correct_count * 10) - (wrong_count * 5),
//           publishedAt: new Date()
//         }
//       });
  
//       return entry;
//     }
//   };
