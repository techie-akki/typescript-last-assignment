var Point1 = /** @class */ (function () {
    function Point1(x, y) {
        this.x = x;
        this.y = y;
    }
    Point1.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point1;
}());
// object
var point1 = new Point1(1, 2);
point1.x = 3;
point1.draw();
