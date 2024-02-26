const express = require("express")
const router = express.Router();
const app = express()

const controller =  require( "../controllers/usuarioControllers.js");
const authControllers = require( "../controllers/authControllers.js");

router.get("/user", authControllers.verificarToken, controller.getAll);
router.post("/user/criar", controller.criarUsuario);
router.get("/user/teste", async (req, res) => {
    return res.json({
        msg: "teste realizado"
    })
})
router.post("/login", authControllers.login)
router.get("/rotaAutenticada", authControllers.verificarToken, controller.rotaAutenticada)

module.exports = router