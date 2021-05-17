// $ tsc --build tsconfig.json
let mystring = "Hello Wolrd";
console.log(`MyString is : ${mystring}`);
let numberVar;
let boolVar;
let anyVar;
let stringVar;
let numArray = [3443, 65, 6, 7, 8, 8];
let anyArray = ["hi", 3434, true];
var COLOR;
(function (COLOR) {
    COLOR[COLOR["RED"] = 0] = "RED";
    COLOR[COLOR["BLUE"] = 1] = "BLUE";
    COLOR[COLOR["GREEN"] = 2] = "GREEN";
})(COLOR || (COLOR = {}));
let myFavColor = COLOR.BLUE;
console.log(myFavColor);
class Hello {
}
