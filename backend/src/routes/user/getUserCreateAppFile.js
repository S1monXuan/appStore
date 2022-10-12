import { ObjectId } from 'mongodb';
import { getDbConnection } from "../../db";


//Add ablance into account
export const getUserCreateAppFile = {
    path: '/user/:id/createApp/:appId',
    method: 'get',
    handler: async(req, res) => {
        const appId = new ObjectId(req.params.appId);
        // console.log(appId);
        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');
            // console.log(newUpdated);
    
            const updateduserDetail = await db.collection('appList').findOne({_id: appId});
            // console.log(updateduserDetail)

            res.status(200).json(updateduserDetail);

            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}