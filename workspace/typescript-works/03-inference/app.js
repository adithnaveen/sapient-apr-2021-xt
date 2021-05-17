// TS provide to do type inference to handle the probelem 
// at compile time rather at run time 
function calculateAge(birthYear) {
    let noOfYears = Date.now() - birthYear;
    return noOfYears.toString();
}
// to get the length of firstname and lastname 
function namesLength(firstName, lastName) {
    return firstName.length + lastName.length;
}
console.log(calculateAge(1980));
