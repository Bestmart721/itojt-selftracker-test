<template>
    <LoginBox :redirectPath="decodedComponent" />
</template>

<script setup>
    import LoginBox from '@/components/LoginBox.vue'
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';
    const route = useRoute()
    let decodedComponent = ref(decodeURIComponent(route.query.redirectPath))
    
</script>
