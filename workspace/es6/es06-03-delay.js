for(let i=0; i<5; i++) {
    setTimeout(() => {
        console.log("Value of I ", i);
    }, 1000)
}
// since i is let, this statement will not work 
// console.log("out of loop - value of i ", i);

const names = ["Vikash", "Navdeep", "Rishab", "Manish"];

for(const name of names) {
    console.log(name);
}
console.log("-------------------------------------");
for(const name in names) {
    console.log(name);
}

console.log("-------------------------------------");
names.forEach(name => {
    console.log(name);
})

const add = (n1, n2) => n1 + n2; 

 console.log(add);
 console.log(add(10,20));