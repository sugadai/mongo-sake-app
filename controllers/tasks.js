const sake = require('../models/Task');

const getAllTask = async (req,res) =>{
    try {
        console.log('全てのデータを取得しました。')
        const allsakes = await sake.find({});
        res.status(200).json(allsakes);
    } catch (error) {
        res.status(500).json(error)
    }
}

const createTask = async (req,res) =>{
    try {
        console.log('酒を一つ登録しました。')
        const createsake = await sake.create(req.body);
        res.status(200).json(createsake);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getSingleTask = async (req,res) =>{
    try {
        // console.log('特定の酒を取得しました。'+ req.params.id)
        const getsingletask = await sake.findOne({
            _id : req.params.id
        });
        if(!getsingletask){
            return res.status(404).json(`_id${req.params.id}は存在しません。`)
        }
        res.status(200).json(getsingletask);
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateTask = async (req,res) =>{
    try {
        console.log('タスク情報を更新しました。')
        const updatetask = await sake.findOneAndUpdate(
            {_id : req.params.id},
            req.body,
            {new : true});
        res.status(200).json(updatetask);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteATask = async (req,res) =>{
    try {
        console.log(`${req.params.id}をデータを削除しました。`)
        const deletesake = await sake.findOneAndDelete({_id : req.params.id});
        res.status(200).json(deletesake);
    } catch (error) {
        console.log(error)
    }    
}

module.exports = {
    getAllTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteATask,
}