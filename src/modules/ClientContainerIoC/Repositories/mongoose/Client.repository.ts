import { Container } from "../../../../common/Container";
import { GenericMongooseRepository } from "../../../../infra/database/mongoose/generic.repository";

export class ClientMongooseRepository extends GenericMongooseRepository {
  constructor(container: Container) {
    const _model = container.services['ClientMongoModel'];
    super(_model);
    console.log('MongooseRepository constructor', _model)
  }

  dropDatabase() {
    this._model.db.dropDatabase();
  }
}
