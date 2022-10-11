import { getDbConnection } from "../../db";

export const GetType = {
    path: '/type',
    method: 'get',
    handler: async(req, res) => {
        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');
    
            const envTar = req.params.env;
            const typeList = await db.collection('typeList').find().toArray();
            res.status(200).json(typeList);
    
            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}
