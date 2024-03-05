const express = require("express")
const app = express()
const { todos_data } = require("./data")


// Middleware to parse incoming JSON requests
app.use(express.json())


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Methods xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GET
// POST
// PUT


// ---- GET METHOD ----
app.get("/task", (req, res) => {
    return res.json({ messege: "This messege route is running" })
})
app.get("/task/:id", (req, res) => {
    const id = req.params.id;
    const find_todo = todos_data.find((m) => {
        return m.id == id;
    });
    return res.json({ data: find_todo });
});

// ---- POST METHOD ----
app.post("/task", (req, res) => {
    console.log(req.body)
    return res.json({ messege: todos_data })
})

// ---- PUT  METHOD ----
app.put("/task/:id", (req, res) => {
    const id = req.params.id;

    const data = req.body;

    const find_todo = todos_data.find((m) => {
        return m.id == id;
    });

    if (!find_todo) {
        return res.status(404).json({ message: "Todo not found!" });
    }

    const update_todo = { ...find_todo, ...data };

    return res.json({ data: update_todo });
});

// ---- Start the Express server ----
app.listen(6000, () => {
    console.log('Express server is running')
})