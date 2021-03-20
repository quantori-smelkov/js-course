function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function* generator() {
    while (true) {
        yield getRandomInt(2, 10);
    }
}

Array.prototype.sum = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++){
        sum += Number(this[i])
    }
    return sum
}

let car1Array = [];
let car2Array = [];

console.log("___________________________________")
console.log("Старт гонки")

while (car1Array.sum() < 100 && car2Array.sum() < 100) {
    car1Array.push(generator().next().value)
    car2Array.push(generator().next().value)
    console.log("скорость первой машины: " + car1Array.sum(), "скорость второй машины: " + car2Array.sum())
    if (car1Array.sum() > 105 || car2Array.sum() > 105) {
        console.log("скорость одной из машин больше 105, начинаем гонку заного")
        console.log("                                   ")
        console.log("___________________________________")
        console.log("Старт гонки")
        car1Array = [];
        car2Array = [];
    }
}

console.log("___________________________________")
console.log("Финиш гонки")
if (car1Array.sum() > car2Array.sum())
    console.log("Победила первая машина со скоростью: " + car1Array.sum(), "скорость второй машины: " + car2Array.sum())
if (car2Array.sum() > car1Array.sum())
    console.log("Победила вторая машина со скоростью: " + car2Array.sum(), "скорость первой машины: " + car1Array.sum())
if (car2Array.sum() === car1Array.sum())
    console.log("Ничья, скорость машин: " + car1Array.sum())