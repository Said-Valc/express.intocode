const Students = require('../models/students.model.js');
const Groups = require('../models/groups.model.js');
module.exports.studentsController = {
    getStudents: async(req, res) =>{
        try{
            const result = await Students.find({});
            res.json(result);
        }catch(e){
            res.json({error:e.message});
        }
    },

    getStudentByGroup: async(req, res) =>{
        try{
            const {student_id} = req.params.student_id;
            const result = Students.findOne({"group":student_id})
            res.json(result);
        }catch(e){
            res.json({error:e.message});
        }
    },

    addStudent: async(req, res) =>{
       try{
           const {name} = req.body;
           const result = Students.create({
               name,
               notes:'',
               payment: 'no paid',
               status:'learning'
           })
       }catch(e){
           res.json({error:e.message});
       }
    },

    getAllNotesByStudent: async(req, res) =>{
        try{
            const {student_id} = req.body;
            const result = await Students.findById(student_id);
            if(result){
                res.json(result.notes)
            }
        }catch(e){
            res.json({error:e.message});
        }
    },

    getStudentsPayTrue: async(req, res) =>{
        try{
            const result = await Students.find({"payment":{$in:['paid']}})
            res.json(result);
        }catch(e){
            res.json({error:e.message})
        }
    },

    getStudentsPayFalse: async(req, res) =>{
        try{
            const result = await Students.find({"payment":{$in:['no paid']}})
            res.json(result);
        }catch(e){
            res.json({error:e.message})
        }
    },

    getStudentsPayMidle: async(req, res) =>{
        try{
            const result = await Students.find({"payment":{$in:['middle']}})
            res.json(result);
        }catch(e){
            res.json({error:e.message})
        }
    },

    getStudentsSearchWork: async(req, res) =>{
        try{
            const result = await Students.find({"status": {$in:['search work']}})
            res.json(result);
        }catch(e){
            res.json({error:e.message})
        }
    },
    getStudentsLearning: async(req, res) =>{
        try{
            const result = await Students.find({"status": {$in:['learning']}})
            res.json(result);
        }catch(e){
            res.json({error:e.message})
        }
    },

    getStudentsOffer: async(req, res) =>{
        try{
            const result = await Students.find({"status": {$in:['offer']}})
            res.json(result);
        }catch(e){
            res.json({error:e.message})
        }
    },

    getStudentsWorked: async(req, res) =>{
        try{
            const result = await Students.find({"status": {$in:['worked']}})
            res.json(result);
        }catch(e){
            res.json({error:e.message})
        }
    }





}