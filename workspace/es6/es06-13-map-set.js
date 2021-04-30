// working with map / set 

let map = new Map(); 
map.set("Rishab", 1234)
map.set("Harsh", 2323)
map.set("Kumar", 3232)
map.set("Kumar", 3232)
map.set("Kumar", 5656)

let address = {hno:101, city:"bengaluru", state:"KA"}
map.set("address", address)

let newMap = new Map()
newMap.set("Company", "Sapient")

map.set(newMap)
console.log(map);
console.log(map.get("Rishab"));

console.log(map.has("Harsha"))

// iterate keys 
console.log("All Keys in map ");
for(let value of map.keys()) {
    console.log(value);
}
// iterate values 
console.log("All Values in map ");
for(let value of map.values()) {
    console.log(value);
}
// iterate keys/values 
map.forEach((val, key) => {
    console.log(`Key ${key} -> Value ${val}`);
})

// set by default will have unique values 
set = new Set()

set.add("Hello")
set.add("how")
set.add("are")
set.add("you")
set.add("you")
set.add("you")

console.log(set);