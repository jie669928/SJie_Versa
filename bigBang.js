function generateBigBangArray() {
    const bigBangArray = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            bigBangArray.push("BIG BANG");
        } else if (i % 3 === 0) {
            bigBangArray.push("BIG");
        } else if (i % 5 === 0) {
            bigBangArray.push("BANG");
        } else {
            bigBangArray.push(`${i}`);
        }
    }
    return bigBangArray;
}

const fs = require('fs');
const result = generateBigBangArray();

fs.writeFile('output.json', JSON.stringify(result, null, 2), (err) => {
    if (err) throw err;
    console.log('The BIG BANG array has been saved as output.json');
});
