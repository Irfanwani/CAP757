const numofleaps = (start) => {
    let res = 0;
    let end = new Date().getFullYear();

    for(let i = start; i < end; i++) {
        res += isLeap(i);
    }

    return res;

}

// check if year is leap
const isLeap = (yr) => {
    if(yr % 4 == 0) {
        if(yr % 100 == 0) {
            if(yr % 400 == 0) return 1;
            return 0;
        }
        return 1;
    }
    return 0;
}

const yearstodays = (inyrs) => {
    let dob = new Date().getFullYear() - inyrs;
    let res = inyrs * 365 + numofleaps(dob); 
    console.log("Age is days: ", res);
}

yearstodays(25);
