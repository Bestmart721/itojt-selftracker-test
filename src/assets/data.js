// Sample Cadet Data

import axios from "axios"
import { auth } from "@/stores/auth"
import { Api } from "@/services/api"
import { ref } from "vue"
console.log(axios)
console.log(auth.account)
const apiRoot = 'http://localhost:8080'
export let cadet = ref('No Data')

Api.get(`${apiRoot}/en/personal_info`).then((response) => {
    console.log(response)
    cadet.value = {}
    cadet.value.personalInfo = response[1869177]
    Api.get(`${apiRoot}/en/cadet_info?cin=${cadet.value.personalInfo.cin}`).then((response) => {
        cadet.value.cadetInfo = response
        Api.get(`${apiRoot}/en/local_training?cin=${cadet.value.personalInfo.cin}`).then((response) => {
            cadet.value.localTraining = response
            cadet.value.currentLocalTraining = cadet.value.localTraining[cadet.value.cadetInfo.program]
            console.log(cadet.value)
            
        })

    })

})


export class Cadet {
    constructor(fname, lname, rank, element) {
        this.fname = fname
        this.lname = lname
        this.rank = rank
        this.fullname = fname + ' ' + lname
        this.element = element
    }
    trainingFile = {
        pewPew: true,
        sports: true,
        things: true,
        attendance: 69
    }

}

export const willoughby = new Cadet("Caleb", "Willoughby", "MWO", "Army")
console.log(willoughby)
willoughby.trainingFile.pewPew = false

