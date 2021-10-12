const { Router } = require('express');
const { Curso } = require('../db');
const fetch = require('node-fetch');
const cors = require('cors');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//guardar datos desde api en nuestra base de datos


router.get('/cursos', async (req, res) => {
    
}
)





module.exports = router;