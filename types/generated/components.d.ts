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

export interface QuizOptions extends Struct.ComponentSchema {
  collectionName: 'components_quiz_options';
  info: {
    description: '';
    displayName: 'Options';
  };
  attributes: {
    IsCorrect: Schema.Attribute.Boolean;
    Option: Schema.Attribute.String;
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
      'quiz.options': QuizOptions;
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
