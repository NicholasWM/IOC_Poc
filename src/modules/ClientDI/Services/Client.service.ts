import { GenericRepository } from "../../../common/generic.repository";
import { GenericService } from "../../../common/generic.service";

export class ClientService<TModel, TQuery, IOptions> extends GenericService<TModel, TQuery, IOptions> {
    constructor(_repository: GenericRepository<TModel, TQuery, IOptions>) {
        super(_repository);
    }
}