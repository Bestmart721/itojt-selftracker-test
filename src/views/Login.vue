<template>
    <LoginBox :redirectPath="actualRoute"/>
</template>

<script setup>
    import LoginBox from '@/components/LoginBox.vue'
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';

    const route = useRoute()
    console.log(route.query.redirectPath)
    const actualRoute = computed(() => {
        if (!route.query.redirectPath) {
            return '/app'
        } else return decodeURIComponent(route.query.redirectPath)
    })

</script>
