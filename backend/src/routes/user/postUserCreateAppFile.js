import { ObjectId } from 'mongodb';
import { getDbConnection } from "../../db";
import fs from 'fs'
import formidable from 'formidable';


//Add ablance into account
export const postUserCreateAppFile = {
    path: '/user/:id/createApp/:appId',
    method: 'post',
    handler: async(req, res, next) => {
        // console.log(appId);
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
            // console.log("1" + req.body);
            // const form = new formidable.IncomingForm();
            
            // form.parse(req, function(err, fields, files){
            //     var oldPath = files.uploadFiles.path;
            //     var newPath = foldername + files.uploadFiles.name;
            //     console.log(oldPath);
            //     var rawData = fs.readFileSync(oldPath);
            //     fs.writeFile(newPath, rawData, function(err){
            //         if(err) console.log(err);
            //     })
            // }) 
            res.status(200).json("success uploaded");
            
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}