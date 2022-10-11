import { ObjectId } from 'mongodb';
import { getDbConnection } from "../../db";

export const GetAccountInfo = {
    path: '/user/:id/accountinfoUpdate',
    method: 'get',
    handler: async(req, res) => {
        const userInfo = req.body;
        const userid = new ObjectId(req.params.id);

        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');
    
            const userDetail = await db.collection('userList').findOne({_id: userid});
            res.status(200).json(userDetail);

            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}