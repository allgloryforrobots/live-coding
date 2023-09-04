// Обработка данных в массиве определенным образом с решением O(n)
// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York'
    },
    {
        name: 'Johan',
        city: 'Berlin'
    },
]

const groupByCity = (array) => {

    const cities = {};

    for (let g of array) {
        if (!cities[g.city]) {
            cities[g.city] = [g.name];
        } else {
            cities[g.city].push(g.name);
        }
    }

    return cities

}

console.log(groupByCity(people))

  // Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/