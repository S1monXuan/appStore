import { getDbConnection } from "../../db";

export const GetIndex = {
    path: '/index',
    method: 'get',
    handler: async(req, res) => {
        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');
    
            const recommend = await db.collection('appList').find().toArray();
            const shopList = await db.collection('appList').find({type: "shopping"}).toArray();
            res.status(200).json({rec: recommend, shop: shopList});
    
            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}

// app.get('/index', async(req, res) => {
//     withDB(async (db) => {
//         const recommend = await db.collection('appList').find().toArray();
//         const shopList = await db.collection('appList').find({type: "shopping"}).toArray();
//         res.status(200).json({rec: recommend, shop: shopList});
//     }, res)
// })

// const withDB = async (operations, res) => {
//     try{
//         const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
//         const db = client.db('xx-webapp');

//         await operations(db);

//         client.close();
//     } catch (error) {
//         res.status(500).json({ message: 'Error coonection to db', error});
//     }
// }
