const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');

// Rota para listar todos os usuários
router.get('/', UserController.getAllUsers);

// Rota para buscar um usuário por ID
router.get('/:id', UserController.getUserById);

// Rota para criar um novo usuário
router.post('/', UserController.createUser);

// Rota para deletar um usuário
router.delete('/:id', UserController.deleteUser);

// Rota para atualizar um usuário
router.put('/:id', UserController.updateUser);

module.exports = router;