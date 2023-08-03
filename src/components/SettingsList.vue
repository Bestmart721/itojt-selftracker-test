<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    {{ t('settings.languageSettings.title')}}
                </v-card-title>
                <v-card-text>
                    <v-select :items="availableLanguagesFullName" v-model="selectedLanguage">

                    </v-select>
                </v-card-text>
                
            </v-card>
        </v-col>

    </v-row>
</v-container>  
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    import { ref, computed } from 'vue'    
    const {t, locale, availableLocales} = useI18n({
    })
    import { getCurrentInstance } from 'vue';
    const instance = getCurrentInstance()
    instance.proxy.$forceUpdate()
    const availableLanguagesFullName = ref(['English', 'Français'])
    
    const selectedLanguage = computed({
        get() {
            switch (locale.value) {
                case 'en':
                    return availableLanguagesFullName.value[0]
                case 'fr':
                    return availableLanguagesFullName.value[1]
            }
        },
        set(newLaguage) {
            switch (newLaguage) {
                case 'English':
                    locale.value = 'en'
                    break;
                case 'Français':
                    locale.value = 'fr'
                    break;
            }
        }
    })

    

    
</script>