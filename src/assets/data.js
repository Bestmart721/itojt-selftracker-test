// Sample Cadet Data

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

const activities = {
    
}