import express from "express";
import fs, { write, writeFile, writeFileSync } from "fs";

const app = express();
const PORT = 8080;

app.use(express.json());

const readData = () => {
    const data = fs.readFileSync('./data.json', 'utf-8'); 
    return JSON.parse(data); 
};

// const users = [
//     { id: 1, name: "abe", sec: "cs-c" },
//     { id: 2, name: "ben", sec: "cs-c" }
// ];

app.get("/users", (req, res) => {
   res.json(readData());
});
app.post("/users", (req, res) => {
    const users = readData();  
    
    const newUser = req.body;         // user from request

    users.push(newUser);               // add user
    writeData(users);                  // save back to file

    res.status(201).json({
        message: "User added successfully",
        data: newUser
    });
});

// 

app.get("/", (req, res) => {
    res.send("server working");
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
