// number 1

const biodata = {
    name: "Hizkia Gabetto Panjaitan",
    age: 22,
    hobbies: ["Basket", "Main Musik", "Games"],
    isMarried: false,
    schoolList: [
        {
            name: "SD Advent Banjarmasin",
            yearIn: 2007,
            yearOut: 2013,
            major: null
        },
        {
            name: "SMP Advent Banjarmasin",
            yearIn: 2013,
            yearOut: 2016,
            major: null
        },
        {
            name: "SMAK Kanaan Banjarmasin",
            yearIn: 2016,
            yearOut: 2019,
            major: null
        },
        {
            name: "Universitas Muhammadiyah Banjarmasin",
            yearIn: 2019,
            yearOut: 2023,
            major: "Teknik Informatika"
        }
    ],
    skills: [
        {
            skillName: "PHP",
            level: "Beginner"
        },
        {
            skillName: "HTML, CSS",
            level: "Beginner"
        }
    ],
    interestInCoding: true
};

// number 2

const averageScore = (bhsIndonesia, bhsInggris, matematika, ipa) => {

    if (typeof bhsIndonesia !== "number") {
        return "Input Nilai Berupa Angka!"
    } else if (typeof bhsInggris !== "number") {
        return "Input Nilai Berupa Angka!"
    } else if (typeof matematika !== "number") {
        return "Input Nilai Berupa Angka!"
    } else if (typeof ipa !== "number") {
        return "Input Nilai Berupa Angka!"
    }

    const average = (bhsIndonesia + bhsInggris + matematika + ipa) / 4;

    console.log(`Rata-rata = ${average}`);

    if (average >= 90 && average <= 100){
        return "Grade A";
    } else if (average >= 80 && average <= 89){
        return "Grade B";
    } else if (average >= 70 && average <= 79){
        return "Grade C";
    } else if (average >= 60 && average <= 69){
        return "Grade D";
    } else if (average >= 0 && average <= 59){
        return "Grade E";
    } else {
        return "Tidak mendapatkan Nilai!";
    }

}

console.log(averageScore(50, 70, 80, 80));


// number 3

const printSegitiga = (angka) => {
    if (typeof angka !== "number"){
        return "Data harus number";
    }

    let result = "";
    for (i = angka; i >= 1; i--){
        for (j = 1; j <= i; j++){
            result += j + " ";
        }
        result += "\n";
    }
    return result;
}

console.log(printSegitiga(5));

// number 4a

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let newData = {
    name: "Hizkia Panjaitan",
    email: "hizkiapanjaitan58@gmail.com",
    hobby: ["Basket", "Main Musik", "Games"]
}

const resultData = {
    ...data,
    ...newData
};

console.log(resultData);

// number 4b

const {street, city} = data.address;

console.log(street);
console.log(city);



