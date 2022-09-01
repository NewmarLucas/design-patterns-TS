var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        this.observers = [];
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observer[_i] = arguments[_i];
        }
        observer.forEach(function (observer) {
            if (!_this.observers.includes(observer))
                _this.observers.push(observer);
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this);
        });
    };
    return InputObservable;
}());
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return ParagraphObserver;
}());
var DivObserver = /** @class */ (function () {
    function DivObserver(element) {
        this.element = element;
    }
    DivObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return DivObserver;
}());
// client code
function makeInput() {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var p = document.createElement('p');
    document.body.appendChild(p);
    p.innerText = 'Texto inicial (hardCoded)';
    return p;
}
function makeDiv() {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.innerText = 'Texto inicial (hardCoded)';
    return div;
}
var input = new InputObservable(makeInput());
var p1 = new ParagraphObserver(makeParagraph());
var p2 = new ParagraphObserver(makeParagraph());
var div1 = new DivObserver(makeDiv());
var div2 = new DivObserver(makeDiv());
input.subscribe(p1, p2, div1, div2);
input.element.addEventListener('keyup', function () {
    input.notify();
});
input.unsubscribe(p2);
