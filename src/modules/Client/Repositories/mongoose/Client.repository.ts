import { Model } from "mongoose";
import { GenericMongooseRepository } from "../../../../infra/database/mongoose/generic.repository";
import { ClientDomain, IQuery } from "../../Domain/Client.domain";
import { ClientDocument } from "./Client.model";

export class ClientMongooseRepository extends GenericMongooseRepository<
  ClientDocument,
  IQuery
> {
  constructor(_model: Model<ClientDocument>) {
    super(_model);
  }
}
