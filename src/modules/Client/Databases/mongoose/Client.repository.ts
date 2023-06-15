import { Model } from "mongoose";
import { GenericMongooseRepository } from "../../../../infra/database/mongoose/generic.repository";
import { ClientDomain, IQuery } from "../../Domain/Client.domain";
import { ClientDocument } from "./Client.model";

export class ClientMongooseRepository extends GenericMongooseRepository<
  ClientDomain,
  IQuery
> {
  _model: Model<ClientDocument>;
  constructor(_model: Model<ClientDocument>) {
    super();
    this._model = _model;
  }
  async findAll(query?: IQuery, options?: any): Promise<any[]> {
    console.log('Mongoose Implementation');
    const clients = await this._model.find();
    return clients;
  }
  
  async findOne(query: IQuery): Promise<any> {
    console.log('Mongoose Implementation');
    const client = this._model.findOne(query);
    return client;
  }


  async create(instance: ClientDomain): Promise<void> {
    console.log('Mongoose Implementation');
    await this._model.create(instance);
  }
}
