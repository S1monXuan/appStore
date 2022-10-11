import { getDbConnection } from "../../db";
import { ObjectId } from 'mongodb';

export const GetUserid = {
    path: '/user/:id',
    method: 'get',
    handler: async(req, res) => {
        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');
    
            const idt = req.params.id;
            const monidT = new ObjectId(idt);
            const userTar = await db.collection('userList').findOne({_id: monidT});
            res.status(200).json(userTar);     

            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}