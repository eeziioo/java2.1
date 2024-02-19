// let mmm = {
//     ism: 'umar',
//     familiya: 'ibrohimov',
//     yosh: '14',
//     maktab: '326'
// }

// console.log(mmm);

let mmm = {
    ism: 'umar',
    familiya: 'ibrohimov',
    yosh: '14',
    maktab: '326'
}

for (let key in mmm) {
    console.log(key + ': ' + mmm[key]);
}