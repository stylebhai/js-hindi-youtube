const marvel_heroes = ["thor", "Ironman","hulk"]
const dc_heroes = ["batman","superman","wonder-woman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][2]);

const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//const real_another_array = another_array.flat(Infinity)
const real_another_array = another_array.flat(1)
//console.log(real_another_array);

//console.log(Array.isArray("hitesh"));
//console.log(Array.from("hitesh"));
//console.log(Array.from({name: "hitesh"}));  // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
