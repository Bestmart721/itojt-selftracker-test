<template>
    <v-card :class="'ma-2 pa-2 rounded-lg ' + props.appendFillHeight">
    <v-card-title>{{ t('dashboardStrings.upcomingActivities.title') }}</v-card-title>
    <v-card-text>
        <v-list>
            <v-list-item v-for="item in activities.slice(0,3)" :key="item.value" :title="item.title"
            :subtitle="item.subtitle" @click="item.action"
             class="rounded-lg ma-2" elevation="2" >
            </v-list-item>
        </v-list>
    </v-card-text>
    <v-card-actions>
        <v-btn v-if="Object.keys(activities).length > 3" :text="t('dashboardStrings.upcomingActivities.showAll')" @click="openActivities"
            class="bg-primaryContainer on-primaryContainer px-4"
            prepend-icon="mdi-menu"
            ></v-btn>
    </v-card-actions>
</v-card>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n()
    const router = useRouter()
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
        location.href = "/app/activities"
    })
</script>