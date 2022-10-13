import express from 'express';
import bodyParser from 'body-parser';
// import { MongoClient, ObjectId } from 'mongodb';
import { routes } from './routes';
import { initializeDbConnection } from './db';
import fs from 'fs';
import formidable from 'formidable';
import path from 'path';

const PORT = 8080 || process.env.PORT;
// const info = {
//     'learn-react':{
//         upvotes: 0,
//         comments:[]
//     },
//     'learn-node':{
//         upvotes: 0,
//         comments:[]
//     },
//     'my':{
//         upvotes: 0,
//         comments:[]
//     }
// }


const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.use(express.json()).use(bodyParser.json());
// app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

initializeDbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    });


app.post("/user/:id/createApp/:appId", (req, res, next) => {
    try{
        // upload folder into app
        const appIdDir = req.params.appId;
        // console.log(appIdDir);
        const foldername = './files/' + appIdDir;
        // console.log(foldername);
        if(!fs.existsSync(foldername)){
            fs.mkdirSync(foldername);
        }
        //upload app/ file into folder
        const uploadFiles =  req.body;
        console.log(req.body);
        const form = new formidable.IncomingForm();
        
        form.parse(req, function(err, fields, files){
            // console.log(files);
            var oldPath = files.uploadFiles.filepath;
            var newPath = foldername +'/' + files.uploadFiles.originalFilename;
            console.log(newPath);
            var rawData = fs.readFileSync(oldPath);
            fs.writeFile(newPath, rawData, function(err){
                if(err) console.log(err);
            })
        }) 
        res.status(200).json("success uploaded");
        
    } catch (error) {
        res.status(500).json({ message: 'Error coonection to db', error});
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})


// app.get('/hello', (req, res) => res.send('Hello'));
// app.post('/hello/:name', (req, res) => res.send(`hello ${req.params.name}`));
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`));


// app.post('/hello/articles/:name/upvotes', (req, res) => {
//     const articleName = req.params.name;
//     info[articleName].upvotes += 1;
//     res.status(200).send(`${articleName} now has ${info[articleName].upvotes} upvotes`);
// });

// app.post('/hello/articles/:name/add-comment', (req, res) => {
//     const { username, text } = req.body;
//     const article = req.params.name;

//     info[article].comments.push({username, text});

//     res.status(200).send((info[article]));
// });

// app.get('/type', async (req, res) => {
//     try{
//         const client = await MongoClient.connect('mongodb://127.0.0.1:27017/');
//         const db = client.db('xx-webapp');

//         const data = await db.collection('typeList').find().toArray();
//         // {type: "game"}
//         // await console.log(data);
//         res.status(200).json(data);

//         client.close();
//     } catch (error) {
//         res.status(500).json({message: 'Error connecting to db', error});
//     }
// })

// app.post('/type/:name', async(req, res) => {
//     try{
//         const typeName = req.params.name;

//         const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
//         const db = client.db('xx-webapp');
        
//         // const typeInfo = await db.collection('articles').findOne();

//         await db.collection('typeList').insertOne({type: typeName});

//         const allType = await db.collection('typeList').find().toArray();
//         res.status(200).json(allType);

//         client.close();
//     } catch (error){
//         res.status(500).json({message: 'Error connectin to db', error});
//     }
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

// app.get('/withDB/type', async (req, res) => {
//     withDB(async (db) => {
//         const data = await db.collection('typeList').find().toArray();
//         res.status(200).json(data);
//     }, res);
// })

// app.post('/withDB/type/:name', async(req, res) => {
//     withDB(async (db) => {
//         const typeName = req.params.name;
//         await db.collection('typeList').insertOne({type: typeName});
//         const allType = await db.collection('typeList').find().toArray();
//         res.status(200).json(allType);
//     }, res);
// })


// migrate to getIndex.js
// app.get('/index', async(req, res) => {
//     withDB(async (db) => {
//         const recommend = await db.collection('appList').find().toArray();
//         const shopList = await db.collection('appList').find({type: "shopping"}).toArray();
//         res.status(200).json({rec: recommend, shop: shopList});
//     }, res)
// })

// migrate to getType.js
// get category of type
// app.get('/type', async(req, res) => {
//     withDB(async (db) => {
//         const envTar = req.params.env;
//         const typeList = await db.collection('typeList').find().toArray();
//         res.status(200).json(typeList);        
//     }, res)
// })

// // get app based on env(ios, android, etc)
// app.get('/', async(res) => {
//     withDB(async (db) => {
//         const envTar = "IOS";
//         const typeList = await db.collection('appList').find({env: envTar}).toArray();
//         res.status(200).json({envTar, typeList});        
//     }, res)
// })

// migrate to getMigrateEnv.js
// get app based on env(ios, android, etc)
// app.get('/category/:env', async(req, res) => {
//     withDB(async (db) => {
//         const envTar = req.params.env;
//         const typeList = await db.collection('appList').find({env: envTar}).toArray();
//         res.status(200).json(typeList);        
//     }, res)
// })

// migrate to getMigrateEnvType.js
// get app based on env(ios, android, etc) and type(game, shopping, etc)
// app.get('/category/:env/:type', async(req, res) => {
//     withDB(async (db) => {
//         const envTar = req.params.env;
//         const typeTar = req.params.type;
//         const typeList = await db.collection('appList').find({env: envTar, type: typeTar}).toArray();
//         res.status(200).json(typeList);        
//     }, res)
// })

// migrate into getDeatilId.js
// get app based on id
// app.get('/details/:id', async(req, res) => {
//     withDB(async (db) => {
//         const idt = req.params.id;
//         const monidT = new ObjectId(idt);
//         const appTar = await db.collection('appList').findOne({_id: monidT});
//         res.status(200).json(appTar);         
//     }, res)
// })

//get user info
// app.get('/user/:id', async(req, res) => {
//     withDB(async (db) => {
//         const idt = req.params.id;
//         const monidT = new ObjectId(idt);
//         const userTar = await db.collection('userList').findOne({_id: monidT});
//         res.status(200).json(userTar);         
//     }, res)
// })

// app.get('/user/:id/payment', (req, res) => {
//     const userInfo = req.body;
//     const userid = new ObjectId(req.params.id);

//     withDB(async (db) => {
//         const userDetail = await db.collection('userList').findOne({_id: userid});
//         res.status(200).json(userDetail);
//     }, res);
// })

// app.post('/user/:id/payment', (req, res) => {
//     const userInfo = req.body;
//     const userid = new ObjectId(req.params.id);

//     withDB(async (db) => {
//         const userDetail = await db.collection('userList').findOne({_id: userid});
//         await db.collection('userList').updateOne({_id: userid},{
//             '$set':{
//                 balance: userDetail.balance + 1,
//             },
//         });

//         const updateduserDetail = await db.collection('userList').findOne({_id: userid});

//         res.status(200).json(updateduserDetail);
//     }, res);
// })

// app.get('/user/:id/purchase', (req, res) => {
//     const userInfo = req.body;
//     const userid = new ObjectId(req.params.id);

//     withDB(async (db) => {
//         const userDetail = await db.collection('userList').findOne({_id: userid});
//         res.status(200).json(userDetail);
//     }, res);
// })

// app.get('/user/:id/accountinfoUpdate', (req, res) => {
//     const userInfo = req.body;
//     const userid = new ObjectId(req.params.id);

//     withDB(async (db) => {
//         const userDetail = await db.collection('userList').findOne({_id: userid});
//         res.status(200).json(userDetail);
//     }, res);
// })

// app.post('/user/:id/accountinfoUpdate', (req, res) => {
//     const {name, email} = req.body;
//     const userid = new ObjectId(req.params.id);

//     withDB(async (db) => {
//         await db.collection('userList').updateOne({_id: userid},{
//             '$set':{
//                 name: name,
//                 email: email
//             },
//         });
//         const userDetail = await db.collection('userList').findOne({_id: userid});
//         res.status(200).json({userDetail});
//     }, res);
// })

// app.post('/user/:id/passwordUpdate', (req, res) => {
//     const {inputpwd, newpwd} = req.body;
//     const userid = new ObjectId(req.params.id);

//     withDB(async (db) => {
//         const userDetail = await db.collection('userList').findOne({_id: userid});
//         if( userDetail.pwd === inputpwd){
//             await db.collection('userList').updateOne({_id: userid},{
//                 '$set':{
//                     pwd: newpwd
//                 },
//             });
//             userDetail = await db.collection('userList').findOne({_id: userid});
//             res.status(200).json({userDetail});
//         } else {
//             res.status(200).json({error: "wrong current password"});
//         }

//     }, res);
// })
// app.listen(8000, () => console.log('Listening on port 8000'));