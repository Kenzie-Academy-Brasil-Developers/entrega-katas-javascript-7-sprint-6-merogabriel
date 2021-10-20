let arrFrutas = ["maçã", "uva", "pera"]
let arrPares = [2, 4, 6, 8, 10]
let arrImp = [1, 3, 5, 7, 9]
let kenzie = ['k', 'e', 'n', 'z', 'i', 'e']
let academy = ["a", "c", "a", "d", "e", "m", "y"]

// testFunctions

function test(element, i) {
    console.log(`arr[${i}] corresponde a ${element}`)
}

function incr(element) {
    console.log(element+1)
}

function greaterThan5 (element){
    return element > 5
}

function testStr(element) {
    return element === 'a'
}

// testMap()
// testFilter()
// testFind()
// testFindIndex()


// forEach


function newForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        const element = arr[i]
        callback(element, i)
    }
}


// map


function newMap(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++){
        const element = arr[i]
        result.push(callback(element, i))
    }
    return result
}

function testMap() {
    let map1 = arrPares.map(callbackMap1)
    let newMap1 = newMap(arrPares, callbackMap1)

    function callbackMap1(a, b) {
        return a+b
    }

    console.log(map1)
    console.log(newMap1)
}


//filter


function newFilter(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (callback(element) === true) {
            result.push(element)
        }
    }
    return result
}

function testFilter() {
    let filter1 = arrPares.filter(greaterThan5)
    let newFilter1 = newFilter(arrPares, greaterThan5)
    let filter2 = academy.filter(testStr)
    let newFilter2 = newFilter(academy, testStr)

    console.log(filter1)
    console.log(newFilter1)
    console.log(filter2)
    console.log(newFilter2)
}


// find


function newFind(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        const element = arr[i]
        if (callback(element) === true) {
            return element
        }
    }
}

function testFind() {
    let find1 = arrPares.find(greaterThan5)
    let newFind1 = newFind(arrPares, greaterThan5)
    let find2 = academy.find(testStr)
    let newFind2 = newFind(academy, testStr)

    console.log(find1)
    console.log(newFind1)
    console.log(find2)
    console.log(newFind2)
}


// findIndex

function newFindIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        const element = arr[i]
        if (callback(element) === true) {
            return i
        }
    }
    return -1
}

function testFindIndex() {
    let findIndex1 = arrPares.findIndex(greaterThan5)
    let newFindIndex1 = newFindIndex(arrPares, greaterThan5)
    let findIndex2 = academy.findIndex(testStr)
    let newFindIndex2 = newFindIndex(academy, testStr)

    console.log(findIndex1)
    console.log(newFindIndex1)
    console.log(findIndex2)
    console.log(newFindIndex2)
}


// reduce 


function newReduce(arr, callback, acc) {
    let sum = 0

    if (typeof acc === 'number') {
        sum = sum + (acc)
    }

    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}


// some 


// function newSome(arr, callback) {
    
// }