import express from "express"

const app = express()
const port = 3000

var daysTasks = []
var workTasks = []


app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("home.ejs")
})


app.get("/days", (req, res) => {
    res.render("days.ejs", 
    {daysTasks: daysTasks})
  })
  
app.get("/work", (req, res) => {
    res.render("work.ejs", {workTasks: workTasks})
})

app.post("/addDaysTask", (req, res) => {
    daysTasks.push(req.body["newtask"])
    console.log(req.body["newtask"])
    res.render("days.ejs", {daysTasks: 
    daysTasks})
}) 

app.post("/addWorkTask", (req, res) => {
    workTasks.push(req.body["newtask"])
    console.log(req.body["newtask"])
    res.render("work.ejs", {workTasks: 
    workTasks})
})  

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  