const router = require("express").Router();
const Person = require("../models/Person");

router.post("/", async(req, res) => {
    const { name, salary, approved } = req.body;
    const person = { name, salary, approved };
    try {
        await Person.create(person);
        res.status(201).json({ message: "sucess" });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get("/", async(req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json({ people });
    } catch (erro) {
        res.status(500).json({ error });
    }
});

router.get("/id/:id", async(req, res) => {
    const id = req.params.id;
    try {
        const person = await Person.find({ _id: id });
        res.status(200).json({ person });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get("/name/:name", async(req, res) => {
    const name = req.params.name;
    try {
        const person = await Person.find({ name: name });
        res.status(200).json({ person });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.put("/id/:id", async(req, res) => {
    const id = req.params.id;
    const { name, salary, approved } = req.body;
    const person = { name, salary, approved };

    try {
        const updatePerson = await Person.updateOne({ _id: id }, person);
        if (updatePerson.modifiedCount === 1) {
            res
                .status(200)
                .json({ message: "Sucesso. Usuário atualizado", user: person });
        }
        res
            .status(400)
            .json({
                message: "Houve uma falha. Verifique se de fato você modificou os valores dos campos name salary e approved",
            });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;