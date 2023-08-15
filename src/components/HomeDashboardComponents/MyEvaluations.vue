<template>
<v-card :class="'d-flex flex-column ma-2 mt-6 pa-2 ' + appendFillHeight ">
    <v-card-title>{{ t('dashboardStrings.upcomingEvaluations.title') }}</v-card-title>
    <v-card-text class="grow">
        <v-list>
        <v-list-item v-for="item in evaluations.slice(0,4)" :key="item.value" :title="item.title"
            :subtitle="item.subtitle" @click="item.action"
             class="rounded-lg ma-2" elevation="2" >
        </v-list-item>
    </v-list>
    </v-card-text>
    <v-card-actions>
        <v-btn v-if="Object.keys(evaluations).length > 3" :text="t('dashboardStrings.upcomingEvaluations.showAll')" @click="openEvaluations"
            
            ></v-btn>
    </v-card-actions>
</v-card>

</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
        let evaluations = ref([
        {
            value: 1,
            title: "Cartography",
            subtitle: "July 5th 2023",
            action: () => {
                console.log("yayyyy")
            }
        },
        {
            value: 2,
            title: "Drill, Command and Control",
            subtitle: "July 5th 2023",
            action: () => {
                console.log("yayyyy")
            }
        },
        {
            value: 3,
            title: "Expedition Planning",
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
    const openEvaluations = ref(() => {
        location.href = "/app/evaluations"
    })
    const props = defineProps(['appendFillHeight'])

</script>

