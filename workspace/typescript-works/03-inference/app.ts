// TS provide to do type inference to handle the probelem 
// at compile time rather at run time 
function calculateAge(birthYear : number) : string {
    let noOfYears = Date.now() - birthYear; 
    return noOfYears.toString();
}

// to get the length of firstname and lastname 
function namesLength(firstName : string, lastName : string) : number {
    return firstName.length + lastName.length
}


console.log(calculateAge(1980));
