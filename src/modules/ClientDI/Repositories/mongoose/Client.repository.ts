import { Model } from "mongoose";
import { ClientDocument } from "./Client.model";
import { GenericMongooseRepository } from "../../../../infra/database/mongoose/generic.repository";

export class ClientMongooseRepository extends GenericMongooseRepository {
  constructor(_model: Model<ClientDocument>) {
    super(_model);
    console.log('MongooseRepository constructor')
  }

  dropDatabase() {
    this._model.db.dropDatabase();
  }
}
