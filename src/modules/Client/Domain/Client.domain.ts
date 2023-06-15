export interface IClientProps {
    name?: string,
    hasAccount?: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date,
}

export type IQuery = {
    [key in keyof IClientProps]?: any;
  };
  

export class ClientDomain implements IClientProps{
    public readonly id?: string
    public readonly hasAccount: boolean
    public readonly createdAt?: Date
    public readonly updatedAt?: Date
    public readonly deletedAt?: Date
    public readonly name: string
    
    constructor(
        name: string,
        ) {
        this.hasAccount = false
        this.name = name
    }

    sendMessage(message: string, method: any) {}
    readMessages(message: string, method: any) {}
}