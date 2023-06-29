import mongoose, { Model } from "mongoose";
import { GenericMongooseRepository } from "../../../../infra/database/mongoose/generic.repository";
import { ClientDocument, ClientModel, ClientSchema } from "./Client.model";

export class ClientMongooseRepository extends GenericMongooseRepository {
  constructor() {
    super(ClientModel);
  }

  dropDatabase() {
    this._model.db.dropDatabase();
  }
}
