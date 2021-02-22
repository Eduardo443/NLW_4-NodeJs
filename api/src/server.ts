import express from 'express';
const app = express();

app.get("/", (req, res) => {
    return res.json({message: "Test: res server via Json"});
});

app.post("/", (req, res) => {
    return res.json({message: "Data saved successfully"});
});

app.listen(3000, () => console.log('Server is running'));