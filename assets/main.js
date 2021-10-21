let arrFrutas = ["maçã", "uva", "pera"]
let arrPares = [2, 4, 6, 8, 10]
let arrImp = [1, 3, 5, 7, 9]
let kenzie = ['k', 'e', 'n', 'z', 'i', 'e']
let academy = ["a", "c", "a", "d", "e", "m", "y"]
let fillArr = [1, 4, 5, 2, 4, 6, 11, 90, 784, 4, 2]
let fillArr2 = [1, 4, 5, 2, 4, 6, 11, 90, 784, 4, 2]


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
// testSome()
// testEvery()
// testFill()
// testIncludes()
// testIndexOf()
// testConcat()
// testJoin()


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


function newSome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (callback(element) === true) {
            return true
        }
    }
    return false
}

function testSome() {
    let some1 = arrPares.some(greaterThan5)
    let newSome1 = newSome(arrPares, greaterThan5)
    let some2 = academy.some(testStr)
    let newSome2 = newSome(academy, testStr)

    console.log(some1)
    console.log(newSome1)
    console.log(some2)
    console.log(newSome2)
}


// every


function newEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (callback(element) === false) {
            return false
        }
    }
    return true
}

function testEvery() {
    let every1 = arrPares.every(greaterThan5)
    let newEvery1 = newEvery(arrPares, greaterThan5)
    let every2 = academy.every(testStr)
    let newEvery2 = newEvery(academy, testStr)

    console.log(every1)
    console.log(newEvery1)
    console.log(every2)
    console.log(newEvery2)
}


// fill


function newFill(arr, valor, inicio = 0, fim = arr.length) {
    let cont = 1

    if (typeof inicio === 'number' && inicio > 0 && fim === arr.length) {
        for (let i = inicio; i < fim; i++) {
            arr[i] = valor
        }
    } else if (typeof inicio === 'number' && inicio < 0 && fim === arr.length) {
        for (let i = 0; i < Math.abs(inicio); i++) {
            arr[arr.length - cont] = valor
            cont++
        }
    } else if (typeof inicio === 'number' && inicio > 0 && fim !== arr.length) {
        for (let i = inicio; i < fim; i++) {
            arr[i] = valor
        }
    } else if (typeof inicio === 'number' && inicio < 0 && fim !== arr.length) {
        for (let i = 0; i < (arr.length - fim); i++) {
            arr[arr.length - cont] = valor
            cont++
        }
    }
    return arr
}


// includes


function newIncludes(arr, element, index = 0) {
    for (let i = index; i < arr.length; i++) {
        if (element === arr[i]) {
            return true
        }
    }
    return false
}

function testIncludes() {
    let includes1 = arrPares.includes(4)
    let newIncludes1 = newIncludes(arrPares, 4)
    let includes2 = academy.includes('c', 3)
    let newIncludes2 = newIncludes(academy, 'c', 3)

    console.log(includes1)
    console.log(newIncludes1)
    console.log(includes2)
    console.log(newIncludes2)
}


// indexOf


function newIndexOf(arr, element, index = 0) {
    if (index >= arr.length) {
        return -1
    }

    if (index >= 0) {
        for (let i = index; i < arr.length; i++){
            if (element === arr[i]) {
                return i
            }
        }
    } else if (index < 0) {
        for (let i = arr.length - (index - 1); i >= 0; i--){
            if (element === arr[i]){
                return i
            }
        }
    }
    return -1
}

function testIndexOf() {
    let indexOf1 = fillArr.indexOf(4, 2)
    let newIndexOf1 = newIndexOf(fillArr, 4, 2)
    let indexOf2 = academy.indexOf('a')
    let newIndexOf2 = newIndexOf(academy, 'a')

    console.log(indexOf1)
    console.log(newIndexOf1)
    console.log(indexOf2)
    console.log(newIndexOf2)
}


// concat


// function newConcat(arr, valor1, valor2, ...valorN) {
    
// }


// join


function newJoin(arr, separador = ',') {
    let str = ''

    if (arr.length === 0) {
        return str
    }

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            str += arr[i]
        } else {
            str += separador
            str += arr[i]
        }
    }
    return str
}

function testJoin() {
    let join1 = fillArr.join(',')
    let newJoin1 = newJoin(fillArr)
    let join2 = academy.join('')
    let newJoin2 = newJoin(academy, '')

    console.log(join1)
    console.log(newJoin1)
    console.log(join2)
    console.log(newJoin2)
}
