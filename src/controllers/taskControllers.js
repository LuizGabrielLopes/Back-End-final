const TaskModel = require('../models/taskModel');

const getAllTasks = async (req, res) => {
    try {
        const { title } = req.query;
        const tasks = await TaskModel.getTasks(title);
        res.json(tasks);
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        res.status(500).json({ error: 'Erro ao buscar tarefas.' });
    }
};

const getById = async (req, res) => {
    try {
        const task = await TaskModel.getTaskById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefa.' });
    }
};

const createTask = async (req, res) => {
    try {
        const { title, description, status, priority, user_id } = req.body;
        const newTask = await TaskModel.createTask(title, description, status, priority, user_id);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar tarefa.' });
    }
};

const updateTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        const task = await TaskModel.updateTask(req.params.id, title, description, status, priority);
        if (!task) {
            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar tarefa.' });
    }
};

const deleteTask = async (req, res) => {
    try {
        const result = await TaskModel.deleteTask(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar tarefa.' });
    }
};

module.exports = { getAllTasks, getById, createTask, updateTask, deleteTask };