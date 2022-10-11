import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const getUploadAppType = {
    path: '/user/:id/createApp',
    method: 'get',
    handler: async (req, res) => {
        try{
            const db = getDbConnection('xx-webapp');
            const type = await db.collection('typeList').find().toArray();
            res.status(200).json(type);
        } catch(e) {
            res.status(500).json({msg: 'error for db connecting'});
        }
    },
}