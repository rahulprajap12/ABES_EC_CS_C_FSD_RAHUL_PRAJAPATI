import express from 'express';
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: 'Alice' ,section: 'CS-A'},
  { id: 2, name: 'Bob' ,section: 'CS-B'},
];

app.get('/', (req, res) => {
  res.json(users);
}   );

const PORT = 3000;  
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});