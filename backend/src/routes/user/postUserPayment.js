import { ObjectId } from 'mongodb';
import { getDbConnection } from "../../db";


//Add ablance into account
export const PostUserPayment = {
    path: '/user/:id/payment/add',
    method: 'post',
    handler: async(req, res) => {
        const {moneyAmount} = req.body;
        const userid = new ObjectId(req.params.id);

        try{
            // const client = await MongoClient.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
            const db = getDbConnection('xx-webapp');
    
            const userDetail = await db.collection('userList').findOne({_id: userid});
            const newMoney = parseInt(userDetail.balance) + parseInt(moneyAmount);
            await db.collection('userList').updateOne({_id: userid},{
                '$set':{
                    balance: newMoney,
                },
            });
    
            const updateduserDetail = await db.collection('userList').findOne({_id: userid});
    
            res.status(200).json(updateduserDetail);

            // client.close();
        } catch (error) {
            res.status(500).json({ message: 'Error coonection to db', error});
        }
    }
}