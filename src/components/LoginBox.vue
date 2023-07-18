<template>
    <v-card>
        <v-card-title>
            Login
        </v-card-title>
        <v-card-actions>
            <v-btn @click="login" v-if="!auth.account">
                Login
            </v-btn>
            <v-btn @click="logout" v-if="auth.account">Logout</v-btn>
        </v-card-actions>
    </v-card>
    <v-overlay v-model="overlay" :persistent="true">

    </v-overlay>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/stores/auth';
let overlay = ref(false)
const router = useRouter()
const props = defineProps(['redirectPath'])

function login() {
    console.log(props.redirectPath)
    overlay.value = true
    let currentLocation = location.pathname
    auth.login().then(() => {overlay.value = false; router.push(props.redirectPath)}, () => {overlay.value = false;})
}


async function waitForLogin() {
    awaitauth.login()
    overlay.value = false
}
function logout() {
    router.push('/logout')
}
</script>