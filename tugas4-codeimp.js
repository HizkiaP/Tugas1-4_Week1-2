// number 1

const isPalindrome = (string) => {
    if (string == string.split('').reverse().join('')) {
        return "Palindrome";
    } else {
        return "Bukan Palindrome"
    }
}

console.log(isPalindrome("malam"));

const reverseWords = (text) => {
    if(typeof text !== "string"){
        console.log("Bukan sebuah kalimat. Input kalimat");
    } else {
        console.log(text.split(" ").reverse().join(" ")); 
    }
    
}

reverseWords("Saya Belajar Javascript");

//number 2

const pijarFood = (harga, voucher, jarak, pajak) => {
    console.log(`Harga : ${harga}`);

    let potongan = 0;
    if (voucher === 'PIJARFOOD5' && harga >= 50000) {
        potongan = Math.min(harga * 0.5, 50000);
        console.log(`Potongan : ${potongan}`);
    } else if (voucher === 'DITRAKTIRPIJAR' && harga >= 25000) {
        potongan = Math.min(harga * 0.6, 30000);
        console.log(`Potongan : ${potongan}`);
    } else {
        console.log(false);
    }


    let biayaAntar = 0;
    if (jarak === 2) {
        biayaAntar = 5000;
        console.log(`Biaya Antar : ${biayaAntar}`);
    } else {
        biayaAntar = 5000 + (jarak - 2) * 3000;
        console.log(`Biaya Antar : ${biayaAntar}`);
    }

    let hasilPajak = 0;
    if (pajak === true) {
        hasilPajak = harga * 0.05;
        console.log(`Pajak : ${hasilPajak}`);
    } else {
        return false;
    }

    const subTotal = potongan + biayaAntar + hasilPajak;
    console.log(`SubTotal : ${subTotal}`);
    return subTotal;

}

pijarFood(75000, 'PIJARFOOD5', 5, true);

// number 3

const divideAndSort = (integer) => {
    if (typeof integer !== 'number') {
        console.log("Parameter hanya deret angka");
    }

    const zeroSeparated = integer.toString().split('0');
    const sortedNumbers = zeroSeparated.map((num) => [...num].sort((a, b) => a - b).join(''));
    const result = sortedNumbers.join('');
    console.log(result);
};

divideAndSort(5956560159466056);


