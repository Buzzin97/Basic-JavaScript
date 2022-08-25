function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => fried`)
}

function getChicken() {
  return Promise.resolve(`garden => chicken`)
}
fetchEgg('chick')
.then(egg => console.log(egg))

getChicken()
  .catch(() => 'chicken')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);