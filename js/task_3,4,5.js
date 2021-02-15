// Задание
// Объяви функцию-конструктор Car которая принимает три параметра:
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand,
// model и price, значениями которых должны быть
// переданные аргументы во время её вызова с оператором new

// function Car(brand, model, price) {
//     this.brand = brand;
//     this.price = price;
//     this.model = model;
// }

// Задание
// Выполни рефакторинг функции - конструктора Car так, чтобы она принимала один параметр
// - объект со свойсвами brand, model и price.Деструктуризируй объект в сигнатуре(подписи) функции.

// function Car({ brand, model, price }) {
//     this.brand = brand;
//     this.price = price;
//     this.model = model;
// }

// Задание
// Добавь в свойство prototype функции-конструктора Car два метода:
// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price
// у объекта который его будет вызывать на newPrice.

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function(){
    return this.price;
};

Car.prototype.changePrice = function(newPrice){
    this.price = newPrice;
};