class Car {
  constructor({ price, maxSpeed }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this.price = price;
    this._price = price;
  }
  static getSpecs(car) {
    const message = [];

    for (const key in car) {
      message.push(`${key}: ${car[key]}`);
    }
    console.log(...message);
  }
  get price() {
    return this._price;
  }
  set price(value) {
    return (this._price = value);
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    this.isOn = false;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed = this.speed + value;
    }
    // return this._speed;
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed = this.speed - value;
    }
    // return this._speed;
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance = hours * this.speed + this.distance;
    }
    // return this.distance;
  }
}

const mustang = new Car({
  maxSpeed: 200,
  price: 2000,
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
