<template>
        <v-card :class="'ma-2 mt-6 pa-2 rounded-lg ' + appendFillHeight" :title="t('dashboardStrings.overallProgress.title')" >
                <v-card-subtitle>
                    {{ t('dashboardStrings.overallProgress.subtitle')}}
                </v-card-subtitle>
                <v-card-text>
                    <h4 class="text-h4 my-2">Attendance</h4>
                    <v-progress-linear model-value="75" class="rounded-lg" color="primary" width="50%"></v-progress-linear>
                    <div>Acceptable</div>
                    <h4 class="text-h4 my-2">Community Service</h4>
                    <v-progress-linear model-value="20" class="rounded-lg" color="primary"></v-progress-linear>
                    <div>In Progress</div>
                    <h4 class="text-h4 my-2">Marksmanship</h4>
                    <v-progress-linear model-value="0" class="rounded-lg" color="primary"></v-progress-linear>
                    <div>Not Started</div>
                </v-card-text>
            </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

const props = defineProps(['appendFillHeight'])

</script>