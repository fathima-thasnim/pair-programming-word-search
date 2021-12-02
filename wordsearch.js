// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
// }

// module.exports = wordSearch

const trans = require("./transpose");
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(""))
    for (l of horizontalJoin) {
        if (l.includes(word)) {return true}
    }
    let newLetters = trans(letters);
    // console.log(newLetters);
    const verticalJoin = newLetters.map(ls => ls.join(""));
    // console.log(verticalJoin);  // correct line
    for (i of verticalJoin) {
        if (i.includes(word))
            {return true}
        }
    return false
}
module.exports = wordSearch