import { ObjectId } from 'mongodb';
import { getDbConnection } from "../../db";

export const getDeleteUserAccount = {
    path: '/user/:id/deleteConfirm',
    method: 'get',
    handler: async(req, res) => {
        const userid = new ObjectId(req.params.id);

        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');

            const userDetail = await db.collection('userList').findOne({_id: userid});
            if( userDetail ){
                // console.log(userDetail);
                const deleteUser = await db.collection('userList').deleteOne({_id: userid});
            } else {
                res.status(500).json({ message: 'Account Error', error});
            }
            
            res.status(200).json(userDetail);

            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}