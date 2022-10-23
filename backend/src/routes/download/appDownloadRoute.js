import fs from 'fs';


export const appDownload = {
    path: '/details/:id/download',
    method: 'post',
    contentType: false,
    handler: async(req, res) => {
        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            // const db = getDbConnection('xx-webapp');
            // const idt = req.params.id;
            // const monidT = new ObjectId(idt);
            // const appTar = await db.collection('appList').findOne({_id: monidT});
            const fileURL = `./files/${req.params.id}`
            fs.readdir(fileURL, 'utf-8', function (err, data){
                if(err){
                    res.status(500).json({ message: 'Error coonection to db', error});
                } else {
                    const filename = fileURL + '/' + data[0];
                    res.download(filename)
                }
            })
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}