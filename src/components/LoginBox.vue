<template>
    <v-container>
        <v-col>
            <v-card class="rounded-lg">
        <v-card-title>
            Account
        </v-card-title>
        <v-card-actions>
            <v-btn @click="login" v-if="!auth.account">
                Login
            </v-btn>
            <v-btn @click="logout" v-if="auth.account">Logout</v-btn>
        </v-card-actions>
    </v-card>
        </v-col>
    </v-container>
    <v-overlay v-model="overlay" :persistent="true" class="align-center justify-center">
            <v-sheet class="pa-6 rounded-lg">
                <div>Please use the pop-up window to continue with sign-in.</div><br>
                <div>Veuillez vous référer à la nouvelle fenêtre contextuelle pour vous connecter.</div>
            </v-sheet>
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
    auth.login().then(() => {overlay.value = false; router.push(props.redirectPath)}, () => {overlay.value = false;})
}


function logout() {
    router.push('/logout')
}
</script>