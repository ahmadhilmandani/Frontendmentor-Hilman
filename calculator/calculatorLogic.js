// const key = document.querySelectorAll("div.third>div")
const mainScreen = document.getElementById('second');

let globalNumber = [] // variavle untuk tempat sementara angka
let allUserInput = [] // seluruh inputan user (angka, operator, dot) kecuali reset,del, =  

// menginputkan angka
function appendNumber(param2, param1) {
    let appendedNumber;

    param1 = globalNumber[0]
    // cek apakah globalNumber array berisi atau kosong 
    if (param1 == undefined) {
        // appendedNumber = param2
        globalNumber.push(param2)
    }
    // kalau berisi maka,
    else {
        // mengambil isi ke-1 dari globalNumber dan assign ke param1, saat ini globalNumber[0] tidak berisi
        param1 = globalNumber.pop()
        // menggabungkan 2 string angka
        appendedNumber = param1 + param2
        // push ke globalNumber[0] lagi karena fungsi pop sebelumnya menghapus nilai sebelumnya, 
        globalNumber.push(appendedNumber)
        // akan selalu menghapus dan menambahkan angka selama operator belum dipencet. Ketika operator dipencet maka akan push nilai globalVariable ke allInputUser
    }

    // kalau allUserInput masih kosong, maka tampilkan isi dari globalVariabel
    if (allUserInput[0] == undefined) {
        mainScreen.innerHTML = globalNumber[0]
    }
    // kalau tidak, maka tampilkan isi dari allInputUser dan globalNumber
    else {
        mainScreen.innerHTML = allUserInput.join(" ") + globalNumber[0]
    }
    console.log("click nomer, isi global Number : " + globalNumber)
    console.log("click nomer, isi All User Input : " + allUserInput)

    // FINAL OUTPUT: globalNumer = [angka]
}

function appendOperator(param1, param2) {
    // cek agar tidak dapat menambahkan operator bila globalNumner[0] masih undefined sehingga operator ganda dapat dihindari
    if (globalNumber[0] != undefined) {
        // mengambil nilai globalNumer, sehingga setiap kali user input operator nilai globalNumber menjadi undefined
        param2 = globalNumber.shift()
        allUserInput.push(param2) //tambahkan nilai
        allUserInput.push(param1) //tambahkan opeartor

        mainScreen.innerHTML = allUserInput.join(" ")

        // FINAL OUTPUT: globalNumer = [angka, operator]
    }
}

function result() {
    let temptCalc;
    let param1 = globalNumber.shift() //mengambil nilai globalNumber
    allUserInput.push(param1) //asign ke allUserInput
    let whileLoop = 0;
    let x = 0;

    //selama nilai allUserInput masih ada, maka lakukan..
    while (whileLoop != undefined) {
        // kalau nilai allUserInput[x] == x
        if (allUserInput[x] == "x") {
            // ubah nilai sebelum operator dan sesudah operator menjadi float dan asign ke tempCalc 
            temptCalc = parseFloat(allUserInput[x - 1]) * parseFloat(allUserInput[x + 1])
            // gantikan nilai sebelum operator , operator, dan sesudah operator menggunakan nilai temptCalc
            allUserInput.splice(x - 1, 3, temptCalc)
            x = 0;
        }
        // kalau nilai allUserInput[x] == /
        else if (allUserInput[x] == "/") {
            temptCalc = parseFloat(allUserInput[x - 1]) / parseFloat(allUserInput[x + 1])
            allUserInput.splice(x - 1, 3, temptCalc)
            x = 0;
        }
        x++;
        whileLoop = allUserInput[x];
    }
    whileLoop = 0;
    x = 0
    while (whileLoop != undefined) {
        // kalau nilai allUserInput[x] == +
        if (allUserInput[x] == "+") {
            // ubah nilai sebelum operator dan sesudah operator menjadi float dan asign ke tempCalc
            temptCalc = parseFloat(allUserInput[x - 1]) + parseFloat(allUserInput[x + 1])
            // gantikan nilai sebelum operator , operator, dan sesudah operator menggunakan nilai temptCalc
            allUserInput.splice(x - 1, 3, temptCalc)
            x = 0
        }
        // kalau nilai allUserInput[x] == -
        else if (allUserInput[x] == "-") {
            if (allUserInput.length == 3) {
                temptCalc = parseFloat(allUserInput[x - 1]) - parseFloat(allUserInput[x + 1])
                allUserInput.splice(x - 1, 3, temptCalc)
            }
            x = 0;
        }
        x++;
        whileLoop = allUserInput[x];
    }
    mainScreen.innerHTML = allUserInput.join('')
}


function reset() {
    allUserInput = []
    globalNumber = []
    mainScreen.innerHTML = 0;
}

function deleteInputUser() {
    // kalau globalNumber[0] ada isinya, maka kita ambil nilainya 
    if (globalNumber[0] != undefined) {
        let param1 = globalNumber.shift()
        allUserInput.push(param1)
    }
    let temptArr1 = allUserInput.pop();
    let temptArr2
    let temptArr3

    temptArr2 = temptArr1.split('')

    temptArr2.pop()


    if (temptArr2[0] != undefined) {
        temptArr3 = temptArr2.join('')
        globalNumber.push(temptArr3)
    }

    if (globalNumber[0] == undefined) {
        mainScreen.innerHTML = allUserInput.join(" ")
    }
    // kalau tidak, maka tampilkan isi dari allInputUser dan globalNumber
    else {
        mainScreen.innerHTML = allUserInput.join(" ") + globalNumber[0]
    }
    console.log("COBA DELETE")
}