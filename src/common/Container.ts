

export class Container {
    services: { [key: string]: any };
    constructor(){
        this.services = {};
    }

    service(name: string, cb: (arg0: this) => any){
        if(!Object.keys(this.services).includes(name)){
            this.services[name] = cb(this);
        }

        return this.services[name];
    }
}
