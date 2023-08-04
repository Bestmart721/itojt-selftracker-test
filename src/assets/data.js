// Sample Cadet Data

import axios from "axios"
import { auth } from "@/stores/auth"

console.log(axios)
console.log(auth.account)

let cadets = []

axios.get('http://localhost:3000/cadets')
    .then((response) => {
        console.log(response)
        
    })
    .catch((error) => {
        console.log(error)
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

