import { sendEmail } from '../util/sendEmail';

export const testEmailRoute = {
    path: '/verify_test_email',
    method: 'post',
    handler: async (req, res) => {
        try{
            await sendEmail({
                to: 'xxmspk@163.com',
                from: 'xinmaixuan@hotmail.com',
                subject: 'Does it work?',
                text: 'If you are reading... great!'
            });
            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}