function totalLength(arr, str) {
    let total = arr.length + str.length;
    return total;
}
let retVal = totalLength([10, 20, 30], "HELLO");
console.log(`Return Values is ${retVal}`);
retVal = totalLength(["Ayursh", "Hinduja"], "HELLO");
console.log(`Return Values is ${retVal}`);
