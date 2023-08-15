<template>
<v-card :class="'d-flex flex-column ma-2 pa-2 rounded-lg ' + appendFillHeight">
<v-card-title>
    {{ t('dashboardStrings.trainingProgram.title') }}
</v-card-title>
<v-card-subtitle>
    {{ t('dashboardStrings.trainingProgram.subtitle') }}
</v-card-subtitle>
<v-card-text class="grow">
    <div class="text-h3 mx-2">{{ props.cadetData.cadetInfo.program }}</div>
    <div class="text-subtitle-2 mx-3">To Do: </div>
    <v-container class="">
        <v-row>
            <v-col v-for="(item, i) in incompleteElementsObject" cols="6" md="4">
            
            <v-sheet elevation="2" min-width="70px" class="ma-2 pa-2 rounded-lg fill-height bg-tetiaryContainer on-tetiaryContainer"><v-icon icon="mdi-information-outline"></v-icon><br>{{ item.name }}</v-sheet>
        </v-col>
        </v-row>
    </v-container>
</v-card-text>
<v-card-actions >
    <v-btn>{{t('dashboardStrings.upcomingActivities.showAll')}}</v-btn>
</v-card-actions>
</v-card>
</template>
<script setup>
    import { useI18n } from 'vue-i18n';
    import { ref, watch } from 'vue'
    const { t } = useI18n()
    const props = defineProps(['cadetData', 'appendFillHeight'])
    console.log(props)
    console.log(props.cadetData.currentLocalTraining)
    let cadetTrainingData = ref(props.cadetData.currentLocalTraining)
    console.log(cadetTrainingData)
    let cadetDataAsArray = ref(Object.entries(cadetTrainingData.value))
    console.log(cadetDataAsArray.value)
    let incompleteElements = ref(cadetDataAsArray.value.filter((activity) => {
        if (activity[1].assessmentStatus === "Incomplete") {
            return activity 
        }
    }))
    let incompleteElementsObject = ref({})
    for (let i = 0; i < 3; i++) {
        incompleteElementsObject.value[incompleteElements.value[i][0]] = incompleteElements.value[i][1]
    }
    console.log(incompleteElements.value)
    console.log(incompleteElementsObject.value)
    console.log(props.appendFillHeight)


</script>

<style scoped>

</style>
