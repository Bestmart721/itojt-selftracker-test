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
            <v-card class="my-4  pa-2 rounded-lg fill-height" title="Your overall progress" >
                <v-card-subtitle>
                    The general status of your training file
                </v-card-subtitle>
                <v-card-text>
                    <h4 class="text-h4 my-2">Attendance</h4>
                    <v-progress-linear model-value="75" class="rounded-lg" color="blue" width="50%"></v-progress-linear>
                    <div>Acceptable</div>
                    <h4 class="text-h4 my-2">Community Service</h4>
                    <v-progress-linear model-value="20" class="rounded-lg"></v-progress-linear>
                    <div>you suck</div>
                    <h4 class="text-h4 my-2">Marksmanship</h4>
                    <v-progress-linear model-value="0" class="rounded-lg"></v-progress-linear>
                    <div>oh god</div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6">
            <!--
                <v-btn @click="numberOfCheese++" prepend-icon="mdi-cheese" class="ma-2 pa-2 rounded-lg">Cheese Counter: {{ numberOfCheese }}</v-btn>
            -->
            <v-card class="my-4 pa-2 rounded-lg fill-height">

            </v-card>
        </v-col>
    </v-row>
</v-container>  
</template>

<script setup>
    import { onMounted, ref, computed } from 'vue';
    import { willoughby } from '@/assets/data';
    import { useDisplay } from 'vuetify'

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

</script>

<style scoped>
    
</style>