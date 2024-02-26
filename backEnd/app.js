const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
require("dotenv").config();

const Exercise = mongoose.model('Exercise', { 
    name: String,
    img_url: String,
    description: String, 
});

app.get("/exercise", async (req, res) => {
    const exercise = await Exercise.find()
    return res.send(exercise);
})
  
app.delete("/exercise/:id", async (req, res) =>{
    const exercise = await Exercise.findByIdAndDelete(req.params.id)
    return res.send(exercise);
})

app.put("/exercise/:id", async(req, res) => {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, {
        name:req.body.name,
        img_url: req.body.img_url,
        description:req.body.description
    },{
        new:true
    })
    return res.send(exercise);
})

app.post("/exercise", async (req, res) => {
    const exercise = new Exercise ({
        name:req.body.name,
        img_url: req.body.img_url,
        description:req.body.description
    })
    await exercise.save();
    return res.send(exercise);
})

//Muscle Entity
const Muscle = mongoose.model('Muscle', {
    name: String,
});

app.get("/muscle", async (req, res) => {
    const muscles = await Muscle.find();
    return res.send(muscles);
});
  
app.delete("/muscle/:id", async (req, res) =>{
    const muscle = await Muscle.findByIdAndDelete(req.params.id);
    return res.send(muscle);
});

app.put("/muscle/:id", async(req, res) => {
    const muscle = await Muscle.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
    },{
        new: true
    });
    return res.send(muscle);
});

app.post("/muscle", async (req, res) => {
    const muscle = new Muscle({
        name: req.body.name,
    });
    await muscle.save();
    return res.send(muscle);
});

//User Entity
/*const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
});

app.get("/user", async (req, res) => {
    const users = await User.find();
    return res.send(users);
});
  
app.delete("/user/:id", async (req, res) =>{
    const user = await User.findByIdAndDelete(req.params.id);
    return res.send(user);
});

app.put("/user/:id", async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    },{
        new: true
    });
    return res.send(user);
});

app.post("/user", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    await user.save();
    return res.send(user);
});*/

const usuarioRoutes = require("./routers/usuarioRouter")

//app.use("/user", usuarioRoutes)

require("./db")

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
