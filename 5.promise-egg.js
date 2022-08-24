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

/**getChicken()
 .catch((error) => {
   console.log(error.name);
   return 'chicken'
 })
.then((chicken) => {return fetchEgg(chicken)})
.then((egg) => fryEgg(egg))
.then((friedEgg) => console.log(friedEgg))
**/

getChicken()
  .catch(() => 'chicken')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);