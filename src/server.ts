import express, { Request, Response } from 'express';
import { ClientModule } from './modules/ClientDI/Client.module';
import mongoose from 'mongoose';

const app = express();
const port = 3001;

const router = express.Router()

router.use(express.json())

// Conexão com o MongoDB usando o Mongoose
export const connection = mongoose.connect('mongodb://localhost:8804', {
  authMechanism: 'DEFAULT',
  dbName: 'IOC_POC',
  auth: { password: 'study_projects', username: 'root' },
})

// Criação do esquema e modelo do exemplo
const exampleSchema = new mongoose.Schema({
  name: String,
});

const Example = mongoose.model('Example', exampleSchema);


const clientModule = new ClientModule(router)

app.use(clientModule.router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
