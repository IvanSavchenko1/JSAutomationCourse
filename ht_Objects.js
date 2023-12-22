'use struct'

/* 1. створити 3 обʼєкти через {} */

let grades = {
  1: "very bad",
  2: "bad",
  3: "normal",
  4: "good",
  5: "very good"
};

let human = {
  "nationality": "Ukraine",
  "gender": "male",
  "education": "school"
};

let musicApp = {
  "music": {
    "genres": ['rock', 'pop', 'techno']
  },
  "platform": {
    "desktop": ['macOs', 'windows', 'linux'],
    "mobile": ['iOS', 'Android'],
    "browsers": ['safari', 'chrome', 'firefox']
  }
}

/* 2. створити 3 обʼєкти через Object() */

let currentDate = new Date();

const myNewObj = new Object()
  day = "today";
  month = "month now";

myNewObj[day] = currentDate.getDate()
myNewObj[month] = currentDate.getMonth()

console.log(myNewObj)

const newHuman = new Object(),
  nationality = "nationality",
  gender = "human gender"

newHuman[nationality] =  "USA"
newHuman[gender] = "female"

console.log(newHuman)

const car = new Object(),
  brand = "Car brand",
  country = "Produced in country"

car[brand] =  "Audi"
car[country] = "Germany"

/* 3. створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі */

let japanCar = Object.create(car)
japanCar["Car brand"] = "Toyota"
japanCar["Produced in country"] = "Japan"

console.log(japanCar);

let bmwCar = {
  brand: "BMW",
  country: "Germany",
  newCarFunction() {
    console.log(`This car was made by ${this.brand} and it's from ${this.country}`);
  }
};
bmwCar.newCarFunction()

let vwCar = {
  __proto__: bmwCar,
  brand: "Volkswagen",
}

vwCar.newCarFunction()

/* 4. створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer) */

let engineer = {
  codingLang: "JS",
  experienceYears: 4,
  domain: "Fintech",
  companies: ['Epam', 'n-IX', 'Playtech'],
}

let QA_engineer = {
  __proto__: engineer,
  codingLang: "none"
}
console.log(engineer)
console.log(QA_engineer)

/* вивід значень поточного об'єкту з урахуванням унаслідуваних */
console.log(QA_engineer.codingLang, QA_engineer.experienceYears, QA_engineer.domain, QA_engineer.companies )

/* 5. унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів */

let person = {
  gender: 'male',
  age: 30,
  country: "Ukraine",
  drivingLicence: true
}
engineer.__proto__ = person;

console.log(Object.values(person))
console.log(Object.values(engineer))
console.log(Object.values(QA_engineer))

/* Вивід values по всім ключам об'єкта з урахуванням унаслідуваних від всіх прототипів*/

for (const key in QA_engineer) {
  console.log(QA_engineer[key])
}