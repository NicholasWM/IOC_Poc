import { GenericController } from "../../../common/generic.controller";
// Import apenas dos tipos
// No caso do javascript, não é necessário importar os tipos
import { GenericService } from "../../../common/generic.service";

export class ClientController<ModelInstance, IQuery, IOptions> extends GenericController<ModelInstance, IQuery, IOptions> {
    
    // A controller não tem relação direta com a service
    // Apenas com o contrato de regras de oque tem dentro da service
    
    // Uma mesma instancia de service pode ser usada em varias controllers
    // Prós: Diminuição no numero de instancias, menos linhas de import
    // O controle de dependencias fica mais centralizado, 
    // melhorando a manutenção e a implementação dos testes de unidade
    constructor(_service: GenericService<ModelInstance, IQuery, IOptions>) {
        super(_service);
    }
}