// number 1

const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('senin')

    .then((hari) => console.log(`Semangat di hari ${hari}`))

    .catch((err) => console.log(err))


const cekHari = async () => {
    try {
        console.log(`Semangat di hari ${await cekHariKerja('selasa')}`);
    }
    catch (error) {
        console.log("Jangan kerja terus, istirahat sejenak");
    }
    finally {
        console.log("Semoga harimu menyenangkan");
    }
}

cekHari()


// number 2

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = [
            "Januari", "Februari", "Maret",
            "April", "Mei", "Juni",
            "Juli", "Agustus", "September",
            "Oktober", "November", "Desember"
        ]
        let show = month.map((item) => item)
        if (!error) {
            callback(show, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000)
}

const callbackFn = (result) => {
    console.log(result);
}

getMonth(callbackFn);

// number 3

// promise 1

const component = {
    processor: ["Intel Core i3", "Intel Core i5", "AMD Ryzen 7"],
    motherboard: ["Intel MSI B660", "MSI H610", "AMD MSI X670"],
    ram: ["8GB", "`16GB", "32GB"],
    storage: ["256GB", "512GB", "1TB"],
    gpu: ["Nvidia Geforce GTX1660", "Nvidia Geforce RTX3080", "AMD Radeon RX580"],
    psu: ["500 w", "650 w", "850 w"]
};

const jasa_rakitPC = true;

const orderComponent = (time, work) => {
    return new Promise((resolve, reject) => {
        if (jasa_rakitPC) {
            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            reject(console.log("Sorry, We're Out of Stocks"))
        }
    })
}

orderComponent(2000, ()=>{
    console.log(`${component.gpu[1]} was selected`);
})

.then(()=>{
    return orderComponent(1000, ()=>{
        console.log("Starting to prepare the component");
    })
})

.then(()=>{
    return orderComponent(3000, ()=>{
        console.log("Component Prepared");
    })
})

.then(()=>{
    return orderComponent(2000, ()=>{
        console.log("Thank you for buying at our store");
    })
})

.catch(()=>{
    console.log("Please Comeback Later, Thank You");
})

// promise 2

const stuff = ["Shelf", "Bag", "Table", "Laptop"]

const stuffWeigth = 5;

const storedItem = (time, work) => {
    return new Promise((resolve, reject) => {
        if (stuffWeigth <= 5) {
            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            reject(console.log("Sorry the weigth is over the limit"))
        }
    })
}

storedItem(6000, ()=>{
    console.log(`${stuff[3]} into the storage list`);
})

.then(()=>{
    return storedItem(4000, ()=>{
        console.log("We prepare it with a seal");
    })
})

.then(()=>{
    return storedItem(7000, ()=>{
        console.log("Item have been stored");
    })
})

.then(()=>{
    return storedItem(5000, ()=>{
        console.log("Thank you for trusting us");
    })
})

.catch(()=>{
    console.log("We can't store it in our storage");
})


// number 4

async function fetchData() {
    try {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const nameOnly = await response.json();
        const data = nameOnly.map((item) => item.name)
        console.log(data);
    }
    catch (error) {
        console.log("Sorry Data Not Found");
    }
}

fetchData();



