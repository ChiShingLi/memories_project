import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// path: /posts/..., 
app.use('/posts', postRoutes)

const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

//connect to mongoDB
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //start listening from API
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error.message)
    });

//ignore error warning
mongoose.set('useFindAndModify', false);