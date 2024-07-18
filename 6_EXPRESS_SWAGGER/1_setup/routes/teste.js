// routes/exemplo.js

const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/teste:
 *   get:
 *     summary: Exemplo de endpoint
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/teste', (req, res) => {
  res.send('Exemplo de resposta');
});

module.exports = router;