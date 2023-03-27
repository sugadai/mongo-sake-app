const { resetWatchers } = require('nodemon/lib/monitor/watch');
const Task = require('../models/Task');


const getAllTask = async (req,res) => {
    try {
        const allTask = await Task.find(req.body)
        res.status(200).json(allTask);       
    } catch (error) {
        res.status(500).json(error);
    }
}

const createTask = async (req,res) => {
    try {
        console.log(req.body)
        const createTask = await Task.create(req.body)
        res.status(200).json(createTask);       
    } catch (error) {
        res.status(500).json(error);
    }
}

const getSingleTask = async (req,res) => {
    try {
        console.log(req.params.id)
        const getSingleTask = await Task.findOne({ _id: req.params.id})
        if(!getSingleTask){
            return res.status(404).json(`_id:${req.param.id}は存在しません。`)
        }  
        res.status(200).json(getSingleTask);     
    } catch (error) {
        res.status(500).json(error);
    }
}

const  updateTask = async (req,res) => {
    try {
        console.log(req.body)
        const updateTask = await Task.findOneAndUpdate(
            { _id: req.params.id},
            req.body,
            {new: true})
        if(!updateTask){
            return res.status(404).json(`_id:${req.param.id}は存在しません。`)
        }  
        res.status(200).json(updateTask);     
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteATask = async (req,res) => {
    try {
        console.log(req.params.id)
        const deleteATask = await Task.findOneAndDelete(
            { _id: req.params.id})
        if(!deleteATask){
            return res.status(404).json(`_id:${req.param.id}は存在しません。`)
        }  
        res.status(200).json(deleteATask);     
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteATask,
};