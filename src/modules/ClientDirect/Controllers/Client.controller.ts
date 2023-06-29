
import { GenericController } from "../../../common/generic.controller";
// Um import para cada service que for usar
import { ClientService } from "../Services/Client.service";

export class ClientController<ModelInstance, IQuery, IOptions> extends GenericController<ModelInstance, IQuery, IOptions> {
    constructor() {
        // Nesse caso, essa injeção só acontece por conta da herança
        // essa seria a propriedade this.service
        super(new ClientService());

        // Outro detalhe é que, para cada local que precisar da ClientService
        // é necessário importar a instanciar uma nova classe ClientService
        // Ela estando em 10 controllers, serão 10 instancias diferentes

        // exemplo de alguma outra dependencia
        // this._otherService = new OtherService() // Detalhe para o import da instancia necessaria
    }
}