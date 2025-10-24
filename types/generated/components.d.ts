import type { Schema, Struct } from '@strapi/strapi';

export interface SharedEventDocument extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_document_s';
  info: {
    displayName: 'EventDocument ';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedFooterStyle extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_styles';
  info: {
    displayName: 'FooterStyle';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background: Schema.Attribute.String;
    eventDate: Schema.Attribute.Date;
    eventInfo: Schema.Attribute.String;
    eventLocation: Schema.Attribute.String;
    eventName: Schema.Attribute.String;
  };
}

export interface SharedHeroButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_button_s';
  info: {
    displayName: 'HeroButton ';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
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

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
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

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSponsor extends Struct.ComponentSchema {
  collectionName: 'components_shared_sponsors';
  info: {
    displayName: 'Sponsor';
  };
  attributes: {
    logo: Schema.Attribute.String;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedWebsite extends Struct.ComponentSchema {
  collectionName: 'components_shared_websites';
  info: {
    displayName: 'Website';
  };
  attributes: {
    label: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.event-document': SharedEventDocument;
      'shared.footer-style': SharedFooterStyle;
      'shared.hero': SharedHero;
      'shared.hero-button': SharedHeroButton;
      'shared.media': SharedMedia;
      'shared.menu-item': SharedMenuItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-link': SharedSocialLink;
      'shared.sponsor': SharedSponsor;
      'shared.website': SharedWebsite;
    }
  }
}
