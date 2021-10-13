const server = require('express').Router()
const { Curso , User } = require('../db');



server.post('/email', async (req, res) => {
    const { email } = req.body.email;
    
    try {
      const usuario = await findOne({
          where: {
              email
          }
      })
      if(user){
        res.status(200).send({msg:"este es tu usuario", status: 200, usuario})
      }
      
    } catch (err) {
      res.status(500).send(err)
    }
 }
)



//prueba