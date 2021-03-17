import express from 'express';
import cors from 'cors';

import '../typeorm';
import '../../container';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3333, () => {
    console.log('Server is running on port 3333')
});