// https://www.htmlgoodies.com/javascript/duck-typing-in-javascript/
let duck = {
    color: "white",
    appearence: "feathers",
    quack: function duck_quaks(how) {
        console.log("Duck quacks liks quack quack", how);
    }
};
let human = {
    color: "brown",
    appearence: "feathers",
    quack: function human_quacks(how) {
        console.log("Human quacks liks quack quack", how);
    }
};
let monkey = {
    color: "brown",
    appearence: "hands&legs",
    quack: function jumps(how) {
        console.log("From one tree to another tree", how);
    }
};
// check who can quack 
function check(who) {
    if (who.appearence == 'feathers' && (typeof who.quack == 'function')) {
        who.quack("i can quak like Duck");
        return true;
    }
    return false;
}
check(duck);
check(human);
check(monkey);
