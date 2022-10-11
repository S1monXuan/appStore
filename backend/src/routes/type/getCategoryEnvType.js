import { getDbConnection } from "../../db";

export const GetCategoryEnvType = {
    path: '/category/:env/:type',
    method: 'get',
    handler: async(req, res) => {
        try{
            const searchVal = req.query.search ? req.query.search : '';
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');
    
            const envTar = req.params.env;
            const typeTar = req.params.type;
            // const {searchVal} = req.body;
            // const typeList = [];
            // if( searchVal === '' ) {
            //     console.log('donot have searchVal');
            //     typeList = await db.collection('appList').find({env: envTar, type: typeTar}).toArray();
            // } else {
            //     console.log('have searchVal');
                const typeList = await db.collection('appList').find({env: envTar, type: typeTar , "name": {"$regex": searchVal}}).toArray();
            // }
            // const typeList = await db.collection('appList').find({env: envTar, type: typeTar}).toArray();  
            res.status(200).json(typeList);  

            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}
