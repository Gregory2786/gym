const usarioSchema= require ("../models/usuarioSchema");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");

require("dotenv").config();

const SECRET = process.env.SECRET;

const login = (req, res) => {
    try {
        
        usarioSchema.findOne({email: req.body.email}, (error, usuario) =>{

            if(!usuario){
                return res.status(401).json({
                    statusCode: 401,
                    message: "Usuário não encontrado!",
                    data: {
                        email: req.body.email
                    }
                })
            }

            const validacaoPassword = bcrypt.compareSync(req.body.password, usuario.password)

            if (!validacaoPassword) {
                return res.status(401).json({
                    statusCode: 401,
                    message: "Não autorizado!",
                })
            }

            const token = jwt.sign({name: usuario.name}, SECRET,{
                expiresIn: 2 * 60
            })

            res.status(200).json({
                statusCode: 200,
                message: "Login realizado com sucesso!",
                data: {
                    token
                }
            })

        })


    } catch (error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}

const verificarToken = (req, res, next) => {

    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            statusCode: 401,
            message: "Não autorizado!",
        })
    }

    try {

        jwt.verify(token, SECRET);
        next();
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: "Token não valido."
        })
    }

}


module.exports = {
    login,
    verificarToken
}