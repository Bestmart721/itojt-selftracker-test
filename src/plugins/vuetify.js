/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'

// Composables
import { createVuetify } from 'vuetify'
import CustomIcon from '@/assets/Cadet365Logo.vue'

const materialLight = {
  dark: false,
  colors: {
    background: '#fffbff',
    primary: '#725c00',
    secondary: '#685e40',
    tetiary: '#45664c',
    surface: '#fffbff',
    "on-surface": '#1e1b16',
    "on-background": '#1e1b16',
    "on-error": '#ffffff',
    "on-primary": '#ffffff',
    'on-secondary': '#ffffff',
    'on-tetiary': '#ffffff',
    primaryContainer: '#ffe07f',
    secondaryContainer: '#ffd9e2',
    tetiaryContainer: '#c7eccb',
    errorContainer: '#ffdad6',
    "on-primaryContainer": '#231b00',
    'on-secondaryContainer': '#3e001d',
    'on-tetiaryContainer': '#02210d',
    'on-errorContainer': '#ffdad6',
    info: '#979080'
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'materialLight',
    themes: {
      materialLight
      },
  },
  blueprint: md3,
  icons: {
    values: {
      cadet365: {
        component: CustomIcon
      }
    }
  }
})
