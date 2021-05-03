"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HelloWorld = function HelloWorld(name) {
    _classCallCheck(this, HelloWorld);

    this.name = name;
};

var x = function x(fName) {
    console.log("hello ", fName);
};

var Car = function Car() {
    _classCallCheck(this, Car);
};

var Ford = function (_Car) {
    _inherits(Ford, _Car);

    function Ford() {
        _classCallCheck(this, Ford);

        return _possibleConstructorReturn(this, (Ford.__proto__ || Object.getPrototypeOf(Ford)).apply(this, arguments));
    }

    return Ford;
}(Car);