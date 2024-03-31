const newStr = "ZigZag"

function reverseStr(input) {
    return [...input].reverse().join("")
}
const latestStr = reverseStr(newStr)
console.log(latestStr);