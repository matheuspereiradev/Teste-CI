import express, { Response, Request } from 'express';
import 'reflect-metadata';
import { NumerosCotroller } from './src/controller';

const app = express();

app.use(express.json());


app.get('/status', (req: Request, res: Response) => {
    return res.status(200).json({ status: "AQUI" });
});

app.get('/gerar/:quantity', NumerosCotroller);


app.listen(3000, () => {
    console.log("Running");
})