import { ObjectId } from 'mongodb';
import { getDbConnection } from "../../db";


//Add ablance into account
export const postCreateApp = {
    path: '/user/:id/createApp',
    method: 'post',
    handler: async(req, res) => {
        const { name, price, version, description, type, env} = req.body;
        const userid = new ObjectId(req.params.id);
        const priceInt = price;
        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');


            // create new appInfo
            const appDetail = await db.collection('appList').insertOne({
                name: name,
                price: priceInt,
                version: version,
                description: description,
                type: type,
                env: env,
                language: ["English"]
            });
            
            const fileId = appDetail.insertedId.toString();
            // create new value into userList
            const userDetail = await db.collection('userList').findOne({_id: userid});
            const createApp = userDetail.uploadedApp;
            createApp.push(fileId);
            // console.log(createApp)
            await db.collection('userList').updateOne({_id: userid},{
                '$set':{
                    uploadedApp: createApp,
                },
            });
            // console.log(newUpdated);
    
            const updateduserDetail = await db.collection('userList').findOne({_id: userid});
            console.log(updateduserDetail)
            res.status(200).json({appId: fileId});

            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}