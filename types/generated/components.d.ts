import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleArticleInformation extends Struct.ComponentSchema {
  collectionName: 'components_article_article_informations';
  info: {
    description: '';
    displayName: 'Article Information';
  };
  attributes: {
    authors: Schema.Attribute.Relation<'oneToMany', 'api::author.author'>;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    date: Schema.Attribute.Date;
    readingTime: Schema.Attribute.String;
  };
}

export interface ArticleQuiz extends Struct.ComponentSchema {
  collectionName: 'components_article_quizzes';
  info: {
    displayName: 'Quiz';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    date: Schema.Attribute.Date;
    explanation: Schema.Attribute.RichText;
    options: Schema.Attribute.Component<'quiz.options', true>;
    question: Schema.Attribute.RichText;
    quiz_name: Schema.Attribute.String;
    tags: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'>;
  };
}

export interface QuizAnswerAttempt extends Struct.ComponentSchema {
  collectionName: 'components_quiz_answer_attempt_s';
  info: {
    description: '';
    displayName: 'AnswerAttempt ';
  };
  attributes: {
    answer: Schema.Attribute.String;
    question: Schema.Attribute.String;
    selectedOption: Schema.Attribute.Integer;
  };
}

export interface QuizFreeQuiz extends Struct.ComponentSchema {
  collectionName: 'components_quiz_free_quizs';
  info: {
    description: '';
    displayName: 'Free Quiz';
  };
  attributes: {
    quiz_body: Schema.Attribute.Component<'quiz.quiz-body', true>;
    quiz_information: Schema.Attribute.Component<
      'quiz.quiz-information',
      false
    >;
  };
}

export interface QuizOptions extends Struct.ComponentSchema {
  collectionName: 'components_quiz_options';
  info: {
    description: '';
    displayName: 'Quiz Options';
  };
  attributes: {
    is_correct: Schema.Attribute.Boolean;
    option: Schema.Attribute.String;
  };
}

export interface QuizPaidQuiz extends Struct.ComponentSchema {
  collectionName: 'components_quiz_paid_quizs';
  info: {
    displayName: 'Paid Quiz';
  };
  attributes: {
    quiz_body: Schema.Attribute.Component<'quiz.quiz-body', false>;
    quiz_information: Schema.Attribute.Component<
      'quiz.quiz-information',
      false
    >;
  };
}

export interface QuizQuizAttempt extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quiz_attempts';
  info: {
    displayName: 'QuizAttempt';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    quiz: Schema.Attribute.Integer;
    score: Schema.Attribute.Integer;
    timestamp: Schema.Attribute.DateTime;
    user: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface QuizQuizBody extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quiz_bodies';
  info: {
    displayName: 'Quiz Body';
  };
  attributes: {
    explanation: Schema.Attribute.Text;
    options: Schema.Attribute.Component<'quiz.options', true>;
    question: Schema.Attribute.Blocks;
  };
}

export interface QuizQuizInformation extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quiz_informations';
  info: {
    displayName: 'Quiz Information';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    date: Schema.Attribute.Date;
    name: Schema.Attribute.String;
  };
}

export interface SharedComment extends Struct.ComponentSchema {
  collectionName: 'components_shared_comments';
  info: {
    description: '';
    displayName: 'Comment';
  };
  attributes: {
    commentData: Schema.Attribute.Blocks;
    downvotes: Schema.Attribute.Integer;
    upvotes: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichEditor extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_editors';
  info: {
    description: '';
    displayName: 'Rich Editor';
  };
  attributes: {
    communityCKEditor: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.article-information': ArticleArticleInformation;
      'article.quiz': ArticleQuiz;
      'quiz.answer-attempt': QuizAnswerAttempt;
      'quiz.free-quiz': QuizFreeQuiz;
      'quiz.options': QuizOptions;
      'quiz.paid-quiz': QuizPaidQuiz;
      'quiz.quiz-attempt': QuizQuizAttempt;
      'quiz.quiz-body': QuizQuizBody;
      'quiz.quiz-information': QuizQuizInformation;
      'shared.comment': SharedComment;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-editor': SharedRichEditor;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
