import { getDbConnection } from "../../db";

export const GetCategoryEnv = {
    path: '/category/:env',
    method: 'get',
    handler: async(req, res) => {
        try{
            const searchVal = req.query.search ? req.query.search : '';
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');
            const envTar = req.params.env;
            // const typeList = await db.collection('appList').find({env: envTar}).toArray();
            const typeList = await db.collection('appList').find({env: envTar, "name": {"$regex": searchVal}}).toArray();
            res.status(200).json(typeList);      
            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}
