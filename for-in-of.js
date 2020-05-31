let arr = [3, 5, 7];
arr.foo = "hello";

for(let i in arr) {     // index
    console.log(i);     // logs "0", "1", "2", "foo"
}

for(let i of arr) {     // conteúdos numerados
    console.log(i);     // logs "3", "5", "7"
}