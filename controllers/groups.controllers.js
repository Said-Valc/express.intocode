const Groups = require('../models/groups.model.js');

module.exports.groupsController = {
    getGroups: async(req, res) =>{
        try{
            const result = await Groups.find({});
            res.json(result);
        }catch(e){
            res.json({error:e.message})
        }

    },

    addGroup: async(req, res) =>{
       try{
        const {student_id} = req.body;
        const result = await Groups.create({
            student_id,
            time:'1-15'
        })
        res.json(result);
       }catch(e){
           res.json({error:e.message})
       }
    },

    getAllStudentsByGroup: async(req, res) =>{
        try{
            let obj = [];
            const result = await Groups.find({}).populate('student_id');
            for(item of result){
                obj.push(item.student_id);
            }
            res.json(obj);
        }catch(e){
            res.json({error:e.message});
        }
    },

    getAllGroupsDuringLearn: async(req, res) =>{
        try{
            let obj = [];
            const result = await Groups.find({"time": {$in:['1-15']}})
            res.json(result);
        }catch(e){
            res.json({error:e.message});
        }
    },

    getAllGroupsEndLearn: async(req, res) =>{
        try{
            let obj = [];
            const result = await Groups.find({"time": {$in:['end']}})
            res.json(result);
        }catch(e){
            res.json({error:e.message});
        }
    },

    getProcentOfferInGroup: async(req, res) =>{
        try{
            let obj = [];
            const {id} = req.params;
            const result = await Groups.find({id:id}).populate('student_id');
            let cnt = 0;
            for(item of result){
                for(student of item.student_id){
                    if(student.status == 'offer'){
                         cnt++;
                     }
                }
            }
            res.json(Math.floor((cnt * 100) / result[0].student_id.length)+'%') //итоговый результат

        }catch(e){
            res.json({error:e.message});
        }
    }
}