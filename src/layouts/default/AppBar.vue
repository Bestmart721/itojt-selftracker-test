<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-img class="mx-2" src="@/assets/cadetslogo.png" max-height="40" max-width="80" contain>
    </v-img>
    <v-app-bar-title>
      Cadet Compass (α)
    </v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer">
    <v-list nav>
      <v-list-item v-for="(item,i) in items" :key = "item.key" :value="item" :prepend-icon="item.icon"
        :to="item.path" color="bg-primary">
        <v-list-item-title v-text="getTranslatedMenuOption(item.title)"></v-list-item-title>
      </v-list-item>
      <v-list-item>{{ t('activities.title') }}</v-list-item>
     </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router'
const route = useRoute()
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, te } = useI18n()

console.log(t('activities.title'))
console.log(route.fullPath)

  let drawer = ref(false)
  const items = ref([
    {
      title: 'Home',
      value: 1,
      path: 'home',
      icon: "mdi-home",
      key: true,
    },
    {
      title: 'activities',
      value: 2,
      icon: "mdi-nature-people",
      path: 'activities',
      key: t('activities.title'),
    },
    {
      title: 'evaluations',
      value: 3,
      icon: "mdi-note-multiple",
      path: 'evaluations',
      key: t('evaluations.title'),
    },
    {
      title: 'account',
      value: 4,
      icon: "mdi-account",
      path: 'login',
      key: t('account.title'),
    },
    {
      title: 'settings',
      value: 12,
      icon: 'mdi-cog',
      path: 'settings',
      key: t('settings.title')
    },
    {
      title: 'Cadet365 Home',
      value: 5,
      action: () => {
        window.open("https://cjcr365.sharepoint.com")
      },
      icon: "mdi-open-in-new"
    },
    {
      title: "Cadets.ca",
      value: 6,
      action: () => {
        window.open("https://cadets.gc.ca")
      },
      icon: "mdi-open-in-new"
    }
  ])

 function getTranslatedMenuOption(optionTitle) {
  if (te(optionTitle + '.title')) {
    return t(optionTitle + '.title')
  } else {
    return optionTitle
  }
 }
  
</script>
