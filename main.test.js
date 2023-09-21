/**********************************
 * YOUR CODE GOES HERE THIS TIME! *
 **********************************/
let x = 3
let y = 10
let z = 4
let greeting = 'hello'
let meanName = 'Stinky Buttface'
let callStatus = 'ringing'

function double() {
  x *= 2
}

function triple() {
  y *= 3
}

function square() {
  z **= 2
}

function beMean() {
  greeting += ' ' + meanName
  console.log(greeting)
}

function changeName() {
  meanName = 'Danger'
}

function hangUp() {
  callStatus = 'call ended'
}


/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof x === 'undefined') {
  x = undefined;
}

if (typeof y === 'undefined') {
  y = undefined;
}

if (typeof z === 'undefined') {
  z = undefined;
}

if (typeof greeting === 'undefined') {
  greeting = undefined;
}

if (typeof meanName === 'undefined') {
  meanName = undefined;
}

if (typeof callStatus === 'undefined') {
  callStatus = undefined;
}

if (typeof double === 'undefined') {
  double = undefined;
}

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof square === 'undefined') {
  square = undefined;
}

if (typeof beMean === 'undefined') {
  beMean = undefined;
}

if (typeof changeName === 'undefined') {
  changeName = undefined;
}

if (typeof hangUp === 'undefined') {
  hangUp = undefined;
}


describe('double', () => {
  it(`doubles x`, () => {
    double();
    expect(x).toEqual(6);
  })
});

describe('triple', () => {
  it(`triples y`, () => {
    triple();
    expect(y).toEqual(30);
  })
});

describe('square', () => {
  it(`squares the variable z`, () => {
    square();
    expect(z).toBe(16);
  })
});

describe('beMean', () => {
  it(`says hello to the person and calls them a mean name`, () => {
    beMean();
    expect(greeting.includes('hello') && greeting.includes(meanName)).toBe(true);
  })
});

describe('changeName', () => {
  it(`changes the value of meanName to 'Danger'`, () => {
    changeName();
    expect(meanName).toBe('Danger')
  })
});
  
describe('hangUp', () => {
  it(`changes the value of callStatus to be 'call ended'`, () => {
    hangUp();
    expect(callStatus).toBe('call ended')
  })
});
