function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => fried`)
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'))
  // return Promise.resolve('garden => chick');
}


function makeFriedEgg() {
  return getChicken()
  .catch(() => 'chick')
  .then(fetchEgg)
  .then(fryEgg);
}

makeFriedEgg().then(console.log);