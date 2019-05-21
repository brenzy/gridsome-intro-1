// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import AltLayout from '~/layouts/AltLayout.vue'

export default function (Vue, { router, head, isClient }) {
  // Use head to set global metadata
  head.htmlAttrs = {
    lang: 'en'
  };
  head.bodyAttrs = { class: "body"}
  // Set default layout as a global component
  Vue.component('Layout', AltLayout)
}
