// import fs from 'fs/promises';

// async function fileWork() {
//     try {
//         const data = await fs.readFile('data.txt', 'utf8');
//         console.log(data);

//         await fs.writeFile('data.txt', 'Updated Data');
//     } catch (err) {
//         console.log(err);
//     }
// }

// fileWork();

import fs from "fs/promises"
const appendFile = async (path, data) => {
    try {
        await fs.appendFile(path, data);
        console.log("Data has been appended successfully.");
    } catch (error) {
        console.log("unable to append file");
    }
}
appendFile("./example.txt","this data has been appended")



const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        console.log(data);
    } catch (error) {
        console.log("unable to read");
    }
}





const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data);
        console.log("Data has been written successfully.");
    } catch (error) {
        console.log("Unable to write");
    }
}



