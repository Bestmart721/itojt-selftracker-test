<template>
    <v-card>
        <v-card-title>
            Login
        </v-card-title>
        <v-card-actions>
            <v-btn @click="login">
                Login
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script setup>
import AuthService from '@/services/openid.js'
import { onMounted, ref } from 'vue';
const ccLogin = new AuthService()

let isLoggedIn = ref(false)
let currentUser = ref()
let accessTokenExpired = ref(false)

function login() {
    ccLogin.login()
}

function logout() {
    ccLogin.logout()
}

onMounted(() => {
    ccLogin.getUser().then(
        (user) => {
            currentUser.value = user.profile.name
            accessTokenExpired.value = user.expired
            isLoggedIn.value = ( user !== null && !user.expired) 
        }
        )
})

</script>