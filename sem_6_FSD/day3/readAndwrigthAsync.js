import fs from 'fs/promises';

async function fileWork() {
    try {
        const data = await fs.readFile('data.txt', 'utf8');
        console.log(data);

        await fs.writeFile('data.txt', 'Updated Data');
    } catch (err) {
        console.log(err);
    }
}

fileWork();
