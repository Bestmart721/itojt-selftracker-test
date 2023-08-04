<template>
<v-card class="ma-2 mt-6 pa-2">
<v-card-title>
    {{ t('dashboardStrings.trainingProgram.title') }}
</v-card-title>
<v-card-subtitle>
    {{ t('dashboardStrings.trainingProgram.subtitle') }}
</v-card-subtitle>
<v-card-text>
    <div class="text-h3 mx-2">Phase 4</div>
    <div class="text-subtitle-2 mx-3">PO2 <v-icon icon="mdi-arrow-right"></v-icon> PO1</div>
    <v-list>
        <v-list-item> - PHASE </v-list-item>
        <v-list-item> - Rememberance Day Parade</v-list-item>
        <v-list-item> - RSPJ </v-list-item>
        <v-list-item> - ALL REQ EVALS </v-list-item>
    </v-list>
</v-card-text>
</v-card>
</template>
<script setup>
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n()
</script>