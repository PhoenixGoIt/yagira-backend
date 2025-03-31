import type { Schema, Struct } from '@strapi/strapi';

export interface PropertyFacility extends Struct.ComponentSchema {
  collectionName: 'components_property_facilities';
  info: {
    description: '';
    displayName: 'facility';
    icon: 'apps';
  };
  attributes: {
    balcony: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    bath: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    kitchen: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    parkingArea: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    smokingArea: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    wifi: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface PropertyInformation extends Struct.ComponentSchema {
  collectionName: 'components_property_information';
  info: {
    description: '';
    displayName: 'information';
  };
  attributes: {
    bedRooms: Schema.Attribute.Integer & Schema.Attribute.Required;
    bedType: Schema.Attribute.Enumeration<['single bed', 'double bed']> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    guestPolicy: Schema.Attribute.Enumeration<
      ['everyone', 'disabled', 'adult', 'child', 'family', 'pets']
    > &
      Schema.Attribute.Required;
    maxGuests: Schema.Attribute.Integer;
    rooms: Schema.Attribute.Integer & Schema.Attribute.Required;
    roomType: Schema.Attribute.Enumeration<['standard', 'luxury', 'studio']> &
      Schema.Attribute.Required;
    square: Schema.Attribute.Integer & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['apartment', 'house', 'hotel']> &
      Schema.Attribute.Required;
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
      'property.facility': PropertyFacility;
      'property.information': PropertyInformation;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
