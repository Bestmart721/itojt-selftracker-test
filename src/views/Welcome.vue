<template>
    <span class="bg" :style="'background-image: url(' + getImageUrl(randomImage).toString() + ')'"></span>
    <v-app>
        <v-app-bar>
            <v-img class="mx-2" src="@/assets/cadetslogo.png" max-height="40" max-width="80" contain>
            </v-img>
            <v-app-bar-title>
                Cadet Compass (α)
            </v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container class="align-center fill-height">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-sheet class="pa-16 rounded-lg" >
                            <div class="text-h1">Welcome to Cadet Compass</div>
                            <v-img class="align-center button mt-6 rounded-lg" src="@/assets/cadet365button.png" width="250" @click="handleLogin()">
                                <div style="color: white;" class="ma-4">Log in with Cadet365</div>
                            </v-img>
                        </v-sheet>
                    </v-col>
                    <v-col></v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-overlay v-model="overlay" :persistent="true" class="align-center justify-center">
            <v-sheet class="pa-6 rounded-lg">
                <div>Please use the pop-up window to continue with sign-in.</div><br>
                <div>Veuillez vous référer à la nouvelle fenêtre contextuelle pour vous connecter.</div>
            </v-sheet>
        </v-overlay>
    </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';
import { auth } from '@/stores/auth'
import { useRouter } from 'vue-router';
const router = useRouter()
let overlay = ref(false)

function getImageUrl(imgName) {
    return new URL(`../assets/loginBanners/${imgName}.jpg`, import.meta.url).href
}
console.log(getImageUrl('img1').toString())

const images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7']

const randomImage = computed( () => {
    return images[Math.floor(Math.random() * 7)]
}
)

function handleLogin() {
    overlay.value = true
    auth.login().then(() => {overlay.value = false; router.push('/app')}, () => {overlay.value = false;})
}

</script>

<style scoped>
.loginButton {
    border-radius: 10px;
}
.button:hover {
    cursor: pointer;
}
.bg {
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 20%;
    background-size: cover;
  }

  
  #app {
    overflow: hidden;
    height: 100vh;
  }
</style>