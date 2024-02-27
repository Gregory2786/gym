const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
require("dotenv").config();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    next();
});
const Exercise = mongoose.model('Exercise', { 
    name: String,
    img_url: String,
    description: String,
    muscle: { type: mongoose.Schema.Types.ObjectId, ref: 'Muscle' }, // Referência ao músculo
    maquina: { type: mongoose.Schema.Types.ObjectId, ref: 'Maquina' } // Referência à máquina
});

// GET exercises by muscle
app.get("/exercise/:muscle", async (req, res) => {
    try {
        const muscleName = req.params.muscle;
        const exercises = await Exercise.find({}).populate({
            path: 'muscle',
            match: { name: muscleName } // Filtrar pelo nome do músculo
        }).exec();
        const filteredExercises = exercises.filter(exercise => exercise.muscle !== null);
        return res.send(filteredExercises);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
  
app.delete("/exercise/:id", async (req, res) =>{
    const exercise = await Exercise.findByIdAndDelete(req.params.id)
    return res.send(exercise);
})

app.put("/exercise/:id", async(req, res) => {
    try {
        const { name, img_url, description, muscleId, maquinaId } = req.body;
        const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, {
            name,
            img_url,
            description,
            muscle: muscleId,
            maquina: maquinaId
        }, { new: true });
        return res.send(updatedExercise);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


app.post("/exercise", async (req, res) => {
    try {
        const { name, img_url, description, muscleId, maquinaId } = req.body;

        // Verifique se o músculo existe
        const muscleExists = await Muscle.findById(muscleId);
        if (!muscleExists) {
            return res.status(400).send("Músculo não encontrado");
        }

        // Verifique se a máquina existe
        const maquinaExists = await Maquina.findById(maquinaId);
        if (!maquinaExists) {
            return res.status(400).send("Máquina não encontrada");
        }

        // Crie o novo exercício com a referência ao músculo e à máquina
        const exercise = new Exercise ({
            name,
            img_url,
            description,
            muscle: muscleId, // Referenciar o músculo pelo _id
            maquina: maquinaId // Referenciar a máquina pelo _id
        });
        await exercise.save();
        return res.send(exercise);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


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

const Maquina = mongoose.model('Maquina', {
    name: String,
});

app.get("/maquina", async (req, res) => {
    const maquinas = await Maquina.find();
    return res.send(maquinas);
});
  
app.delete("/maquina/:id", async (req, res) =>{
    const maquina = await Maquina.findByIdAndDelete(req.params.id);
    return res.send(maquina);
});

app.put("/maquina/:id", async(req, res) => {
    const maquina = await Maquina.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
    },{
        new: true
    });
    return res.send(maquina);
});

app.post("/maquina", async (req, res) => {
    const maquina = new Maquina({
        name: req.body.name,
    });
    await maquina.save();
    return res.send(maquina);
});

require("./db")

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
