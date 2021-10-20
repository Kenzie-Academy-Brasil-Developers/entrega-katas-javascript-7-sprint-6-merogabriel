let arrFrutas = ["maçã", "uva", "pera"]
let arrPares = [2, 4, 6, 8, 10]
let arrImp = [1, 3, 5, 7, 9]

// forEach

function newForEach(arr, callback) {
    let result
    for (let i = 0; i < arr.length; i++){
        const element = arr[i]
        result = callback(element, i)
    }
    return result
}

function test(element, i) {
    console.log(`arr[${i}] corresponde a ${element}`)
}

function incr(element) {
    console.log(element+1)
}

console.log('forEach')
console.log('')

let resultForEach = arrFrutas.forEach(test)
console.log('')
let resultNewForEach = newForEach(arrFrutas, test)
console.log('')
let resultForEach2 = arrImp.forEach(test)
console.log('')
let resultNewForEach2 = newForEach(arrImp, test)