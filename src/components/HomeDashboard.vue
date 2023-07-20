<template>
    <v-container>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-6 ma-2 rounded-lg" elevation="2" rounded style="background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); "> 
            <div :class="titleSize">{{ greetingMessages[periodOfDay] + ', ' + cadetName }}</div>  
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
        <v-col cols="12" md="6">
            <overall-progress :append-fill-height="appendFillHeight" />
        </v-col>
        <v-col cols="12" md="6">
            <!--
                <v-btn @click="numberOfCheese++" prepend-icon="mdi-cheese" class="ma-2 pa-2 rounded-lg">Cheese Counter: {{ numberOfCheese }}</v-btn>
            -->
            <upcoming-activities :append-fill-height="appendFillHeight"/>
        </v-col>
    </v-row>
    <v-row no-gutters></v-row>
</v-container>  

</template>

<script setup>
    import { onMounted, ref, computed } from 'vue';
    import { willoughby } from '@/assets/data';
    import { useDisplay } from 'vuetify';
    import OverallProgress from './HomeDashboardComponents/OverallProgress.vue';
    import UpcomingActivities from '@/components/HomeDashboardComponents/UpcomingActivities.vue'

    let overlay = ref(false)

    overlay.value = true

    const { mdAndUp } = useDisplay()
    const greetingMessages = ref([
        "Good morning",
        "Good afternoon",
        "Good evening"
    ])
    let periodOfDay = ref(0)
    let numberOfCheese = ref(0)
    let loadedCadetProfile = ref(willoughby)
    let titleSizes = [
        'text-h2',
        'text-h3'
    ]

    onMounted(() => {
        const date = new Date()
        console.log(date.getHours())
        if (date.getHours() >= 19 || date.getHours() <= 2) {
            periodOfDay.value = 2
        } else if (date.getHours() >= 12 && date.getHours() < 19) {
            periodOfDay.value = 1
        } else {
            periodOfDay.value = 0
        }
        /*console.log(greetingMessages.value[periodOfDay.value])*/
    })
    
    const cadetName = computed( () => { return loadedCadetProfile.value.rank +  ' ' + loadedCadetProfile.value.lname })
    const titleSize = computed ( () => {
        if (mdAndUp.value) {
            return titleSizes[0]
        } else {
            return titleSizes[1]
        }
    })

    const appendFillHeight = computed ( () => {
        if (mdAndUp.value) {
            return 'fill-height'
        } else {
            return null
        }
    })
</script>

<style scoped>
    
</style>