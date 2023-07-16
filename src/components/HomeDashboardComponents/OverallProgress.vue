<template>
        <v-card :class="'ma-2 pa-2 rounded-lg ' + appendFillHeight" title="Your overall progress" >
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
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['appendFillHeight'])

</script>