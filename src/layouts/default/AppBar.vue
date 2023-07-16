<template>
  <v-app-bar class="rounded-lg" rounded>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-img class="mx-2" src="@/assets/cadetslogo.png" max-height="40" max-width="80" contain>
    </v-img>
    <v-app-bar-title>
      Cadet Compass (α)
    </v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer">
    <v-list :nav="true">
      <v-list-item v-for="(item,i) in items" :key = "i" :value="item" @click = "item.action" :prepend-icon="item.icon">
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
     </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue';
  let drawer = ref(false)
  let items = ref([
    {
      title: 'Home',
      value: 1,
      action: () => {
        //window.open("https://cjcr365.sharepoint.com")
        router.push("/")
      },
      icon: "mdi-home"
    },
    {
      title: 'Activities',
      value: 2,
      icon: "mdi-nature-people",
      action: () => {
        router.push("/activities")
      }
    },
    {
      title: 'Cadet365 Home',
      value: 3,
      action: () => {
        window.open("https://cjcr365.sharepoint.com")
      },
      icon: "mdi-open-in-new"
    },
    {
      title: "Cadets.ca",
      value: 4,
      action: () => {
        window.open("https://cadets.gc.ca")
      },
      icon: "mdi-open-in-new"
    }
  ])
</script>
