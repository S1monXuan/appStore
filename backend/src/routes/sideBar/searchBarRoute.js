import { getDbConnection } from "../../db";

export const GetListBasedOnSearchRoute = {
    path: '/search/:name',
    method: 'get',
    handler: async(req, res) => {
        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');
    
            const searchName = req.params.name;
            console.log(searchName);
            const appAll = await db.collection('appList').find({"name": {"$regex": searchName}}).toArray();
            console.log(appAll);
            res.status(200).json(appAll);     

            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}