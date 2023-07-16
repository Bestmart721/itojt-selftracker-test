<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Activities</v-card-title>
                    <v-card-text>
                        <v-list lines="2">
                            <v-list-item class="ma-4" v-for="item in activities" :key="item.value" :title="item.title" :subtitle="item.subtitle" @click="item.action"></v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
    import router from '@/router';
    import { ref, computed } from 'vue';
    let activities = ref([
        {
            value: 1,
            title: "Marksmanship Practice",
            subtitle: "July 5th 2023",
            action: () => {
                console.log("yayyyy")
            }
        },
        {
            value: 2,
            title: "Marksmanship Practice",
            subtitle: "July 5th 2023",
            action: () => {
                console.log("yayyyy")
            }
        },
        {
            value: 3,
            title: "Marksmanship Practice",
            subtitle: "July 5th 2023",
            action: () => {
                console.log("yayyyy")
            }
        },
        {
            value: 4,
            title: "Marksmanship Practice",
            subtitle: "July 5th 2023",
            action: () => {
                console.log("yayyyy")
            }
        },
        {
            value: 5,
            title: "Marksmanship Practice",
            subtitle: "July 5th 2023",
            action: () => {
                console.log("yayyyy")
            }
        },
        {
            value: 6,
            title: "Marksmanship Practice",
            subtitle: "July 5th 2023",
            action: () => {
                console.log("yayyyy")
            }
        },
    ])
    const props = defineProps(['appendFillHeight'])
    const openActivities = ref(() => {
        router.push("/activities")
    })
</script>
