/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

/* TODO: PTR template - replase  */

option = {
    template: 'h : m : s'
}
let H = 'H';
option.template.replace('h', H);

/* TODO: PTR mane class prototype definder  */

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk =
    function () {
        col("ходит " + this.name);
    }

function Rabbit(name) {
    Animal.apply(this, arguments);
}


Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.walk = function () {
    Animal.prototype.walk.apply(this, arguments);
    col("прыгает " + this.name);
};

/* TODO: PTR maskFour ligic mask  */
function maskFour() {
    var bol, a = 2, b = 4, c = 8, d = 16;
    bol = a | b | c | d;
    col(bol & a);
}

/* TODO: PTR OOP State ( in to ADD proto Class )  */
function MenuOpenClose(state) {
    this.State_ = state || this.State_Close;
}

MenuOpenClose.prototype.State_Close = 0;
MenuOpenClose.prototype.State_Open = 1;

MenuOpenClose.prototype.inClose = function () {
    //CODE inClose
    this.State_ = this.State_Close;
}

MenuOpenClose.prototype.inOpen = function () {
    //CODE inOpen
    this.State_ = this.State_Open;
}

MenuOpenClose.prototype.openTo = function () {
    //OPEN code
    return `state is ${this.State_} result OPEN`;
}

MenuOpenClose.prototype.closeTo = function () {
    //CLOSE code
    return `state is ${this.State_} result CLOSE`;
}

MenuOpenClose.prototype.decodingState = function () {
    try {
        switch (this.State_) {
            case this.State_Close :
                return this.closeTo();
            case this.State_Open :
                return this.openTo();
            default : {
                col(`state is uncorrect = ${this.State_}`)
                new Error(`state is uncorrect`)
            }
        }
    } catch (e) {
        if (e.message == `state is uncorrect`) {
            //    Code for treat err State_ ( open , close)
        } else {
            throw e;
        }
    }
}

MenuOpenClose.prototype.resumeState = function () {
    col(this.decodingState());
}

function MenuOpenCloseAnimate(State) {
    MenuOpenClose.apply(this, arguments);
}

MenuOpenCloseAnimate.prototype = Object.create(MenuOpenClose.prototype);
MenuOpenCloseAnimate.prototype.constructor = MenuOpenCloseAnimate;

MenuOpenCloseAnimate.prototype.State_Animate = 2;

MenuOpenCloseAnimate.prototype.animateTo = function () {
    //CODE animateTo
    return `state is ${this.State_} result ANYMATE`;
}

MenuOpenCloseAnimate.prototype.decodingState = function () {
    switch (this.State_) {
        case this.State_Animate :
            return this.animateTo();
        default : {
            return this.__proto__.__proto__.decodingState.apply(this, arguments);
        }
    }
}

MenuOpenCloseAnimate.prototype.inAnimate = function () {
    this.State_ = this.State_Animate;
    col(new Date());
    col(`state is ${this.State_}`);
    this.tm = setTimeout(() => {
            this.__proto__.__proto__.inOpen.apply(this, arguments);
            col(new Date());
            col(`state is ${this.State_}`);
        }
        , 1000);
}

let me = new MenuOpenCloseAnimate();
// debugger;
// me.resumeState();
// me.inAnimate();
// me.resumeState();
