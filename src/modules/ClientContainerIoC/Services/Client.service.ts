import { Container } from "../../../common/Container";
import { GenericRepository } from "../../../common/generic.repository";
import { GenericService } from "../../../common/generic.service";

export class ClientService<TModel, TQuery, IOptions> extends GenericService<TModel, TQuery, IOptions> {
    constructor(container: Container) {
        // const _repository: GenericRepository = container.services['ClientInMemoryRepo']
        const _repository: GenericRepository = container.services['ClientRepository']
        super(_repository);
    }
}