const tushar = {mother: "rekha", age: 21}

const ankit = {...tushar, age: tushar.age + 4}

console.log(ankit);


const color = ["red", "blue", "grey", "white"]

const color2 = [...color, "orange", "yellow"]

console.log(color2);

const birthDay = (person) => ({...person, age: person.age + 1})

tusharAfterBirthDay = birthDay(tushar);

console.log(tusharAfterBirthDay);

const numArr = [1, 2, 3 , 45, 35 , 5 , 24 , 100];

const numArrF = numArr.filter((a) => a<10);

console.log(numArrF);

const numArrF2 = numArr.map((a) => a + 2);

console.log(numArrF2);

const numArr2 = [{0: 'a' }, {1: 'b'}, {2: 'c'}]
const inputArr = ['a', 'b', 'c']

const here = inputArr.map(function (curr, i){return {[curr]: i}})

console.log(here);

const q1 = [1, 2, 3, 4, 5]

const ans1 = q1.map((num) => Math.pow(num, 2));

console.log(ans1);


const q2 = [1, 3, -3, 5, 6, 0, 4, -99]

const ans2 = q2.filter((num) => num > 0 )
               .reduce((accumulator, currentValue) => accumulator + currentValue, 0);


 console.log(ans2); 

               

