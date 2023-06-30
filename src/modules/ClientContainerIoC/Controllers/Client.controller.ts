import { Container } from "../../../common/Container";
import { GenericController } from "../../../common/generic.controller";
// Import apenas dos tipos
// No caso do javascript, não é necessário importar os tipos
import { GenericService } from "../../../common/generic.service";

export class ClientController<ModelInstance, IQuery, IOptions> extends GenericController<ModelInstance, IQuery, IOptions> {
    
    constructor(container: Container) {
        super(container.services['ClientService'] as GenericService<ModelInstance, IQuery, IOptions>);
    }
}