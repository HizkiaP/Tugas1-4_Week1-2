// number 1

// 1. toString()
// Mengconvert array menjadi string yang dipisahkan dengan koma (,)

const fruits = ["Pisang", "Alpukat", "Melon", "Salak"];
console.log(fruits.toString());


// 2. pop()
// Membuang elemen terakhir dalam array

const foods = ["Ayam Bakar", "Kakap Asam Manis", "Telor Dadar", "Nasi Padang"];
foods.pop()
console.log(foods);


// 3. push()
// menambah elemen ke posisi terakhir dalam array

const number = [1, 3, 5, 7];
number.push(9)
console.log(number);


// 4. unshift()
// menambah elemen ke posisi pertama dalam array

const hobby = ["Masak", "Mancing", "Lari"];
hobby.unshift("Basket")
console.log(hobby);


// 5. shift()
// Membuang elemen pertama dalam array

const color = ["Merah", "Kuning", "Hijau", "Biru"];
color.shift()
console.log(color);


// 6. concat()
// Menggabungkan array yang satu dengan yang lainnya

const age1 = [20, 19, 18, 17];
const age2 = [24, 23, 22, 21];
const mergeAge = age1.concat(age2);
console.log(mergeAge);


// 7. splice()
// Menambah item baru ke dalam array dengan menambahkan 2 parameter
// parameter pertama diartikan sebagai letak item baru mau di masukkan
// parameter kedua diartikan berapa banyak item yang di buang

const cars = ["Avanza", "Xpander", "Jazz", "Wuling"];
console.log(`Original Array: ${cars}`);

const removed = cars.splice(3, 1, "Xenia", "Freed");
console.log(`New Array: ${cars}`);
console.log(`Removed Items: ${removed}`);


// 8. slice()
// Mengambil potongan array elemen yang sudah ditentukan dan memulai array dari potongan tersebut

const phones = ["Xiaomi", "Samsung", "Oppo", "Iphone"];
const result = phones.slice(2);
console.log(`Before Slicing: ${phones} \nAfter Slicing: ${result}`);


// 9. sort()
// Mengurutkan suatu nilai dari terkecil hingga terbesar maupun sebaliknya

const value = [90, 69, 75, 88, 30, 8, 11, 1];
const sortValue = value.sort((a, b) => a - b);
console.log(sortValue);


// 10. map()
// Menampilkan data yang terdapat di dalam array dari hasil pemanggilan fungsi

const arr = [1, 4, 7, 10];
arr.map((item) => {
    console.log(item * 2);
})


// number 2

const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
];

const searchName = (words, num, callbackFunction) => {
    const res = name.filter((nama) => nama.toLowerCase().includes(words.toLowerCase()))
    const search = res.slice(0, num)
    callbackFunction(search);
}

const callback = (finalResult) => {
    console.log(finalResult);
}

searchName("an", 3, callback)


// number 3

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
        return;
    }

    if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
        return;
    }

    const output = dataArray.filter((arr) => arr > nilaiAwal && arr < nilaiAkhir);
    output.sort((a, b) => a - b);

    if (output.length > 0) {
        console.log(output);
    } else {
        console.log("Nilai tidak ditemukan");
    }

}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 17 , [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])

