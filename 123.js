const star = 5;
for(let i = 1; i <= star; i++) {
  let tree = ""
  for(let k = 1; k <= star -i; k++) {
    tree += " "
  }
  for(let j = 1; j <= i*2-1; j++) {
    tree += "*"
  }
  console.log(tree);
}