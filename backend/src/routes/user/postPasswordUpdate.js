import { ObjectId } from 'mongodb';
import { getDbConnection } from "../../db";
import bcrypt from 'bcrypt';

export const PostPasswordUpdate = {
    path: '/user/:id/passwordUpdate',
    method: 'post',
    handler: async(req, res) => {
        const {inputpwd, newpwd} = req.body;
        const userid = new ObjectId(req.params.id);
        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');
    
            const userDetail = await db.collection('userList').findOne({_id: userid});
            
            const{ _id: id, isVerified, passwordHash, email} = userDetail;
            
            const isCorrect = await bcrypt.compare(inputpwd, passwordHash);
            if( isCorrect ){
                const newPasswordHash = await bcrypt.hash(newpwd, 10);
                await db.collection('userList').updateOne({_id: userid},{
                    '$set':{
                        passwordHash: newPasswordHash
                    },
                });
                userDetail = await db.collection('userList').findOne({_id: userid});
                res.status(200).json({userDetail});
            } else {
                res.status(200).json({error: "wrong current password"});
            }

            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}