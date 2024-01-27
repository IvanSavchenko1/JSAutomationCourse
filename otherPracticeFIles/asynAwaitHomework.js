async function getDate() {
  let now = new Date()
  return now;
}
getDate().then((result) =>{
  let date = result.getDate();
  console.log(`Today is ${date}th`)
  return result
}).then((result) =>{
  let month = result.getMonth()+1;
  console.log(`of ${month} month`)
  return result
}).then((result) =>{
  let year = result.getFullYear();
  console.log(`of ${year} year`)
})


async function fullTyreSizeInCm (width, height, discSize) {
  if (typeof width == 'number' && typeof height == 'number' && typeof discSize == 'number') {
    let fullTyreSize = (width * (height/100))/10 + discSize *2.54
    return fullTyreSize;
  } else {
    throw new Error('Wrong input');
  }
}

fullTyreSizeInCm(215, 55, 17)
  .then ((result) => {
    console.log(`Full tire diameter = ${result} cm`)
    return result
  })
  .then((result) => {
    let circum = Math.round(2*3.14*(result/2))*100/100
    console.log(`Tyre circumference = ${circum} cm`)
  })
  .catch(err => {
    console.log('catch error: ', err)
})

async function bigString (name, age, position, company) {
  if (typeof name == 'string' && typeof age == 'number' && typeof position == 'string' && typeof company == 'string') {
    const person = {
      name: name,
      age: age,
      position: position,
      company: company
    }
    return person
  } else {
    throw new Error("Wrong data input")
  }
}

bigString("John", 30, "Engineer", "Google")
  .then((result)=> {
    console.log(` The person\`s name is ${result.name}, ${result.age} year old, working as ${result.position} for ${result.company} company`)
  })
  .catch(err => {
  console.log('catch error: ', err)
})