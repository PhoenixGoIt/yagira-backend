import type { Schema, Attribute } from '@strapi/strapi';

export interface PropertyFacility extends Schema.Component {
  collectionName: 'components_property_facilities';
  info: {
    displayName: 'facility';
    icon: 'apps';
    description: '';
  };
  attributes: {
    bath: Attribute.Boolean & Attribute.Required;
    kitchen: Attribute.Boolean & Attribute.Required;
    balcony: Attribute.Boolean & Attribute.Required;
    wifi: Attribute.Boolean & Attribute.Required;
    parkingArea: Attribute.Boolean & Attribute.Required;
    smokingArea: Attribute.Boolean & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'property.facility': PropertyFacility;
    }
  }
}
