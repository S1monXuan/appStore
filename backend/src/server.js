import express from 'express';
import bodyParser from 'body-parser';

const info = {
    'learn-react':{
        upvotes: 0,
        comments:[]
    },
    'learn-node':{
        upvotes: 0,
        comments:[]
    },
    'my':{
        upvotes: 0,
        comments:[]
    }
}

const app = express();

app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello'));
app.post('/hello/:name', (req, res) => res.send(`hello ${req.params.name}`));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`));


app.post('/hello/articles/:name/upvotes', (req, res) => {
    const articleName = req.params.name;
    info[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ${info[articleName].upvotes} upvotes`);
});

app.post('/hello/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const article = req.params.name;

    info[article].comments.push({username, text});

    res.status(200).send((info[article]));
});

app.listen(8000, () => console.log('Listening on port 8000'));