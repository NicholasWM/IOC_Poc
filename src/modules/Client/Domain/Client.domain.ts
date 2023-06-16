export interface IClientProps {
    id?: string,
    name?: string,
    userId?: boolean,
    email?: string,
    phone?: string,
    telegram?: string,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date,
}

export type IQuery = {
    [key in keyof IClientProps]?: any;
  };
  

export class ClientDomain implements IClientProps{
    public readonly id?: string
    public readonly name?: string
    public readonly email?: string
    public readonly phone?: string
    public readonly telegram?: string
    public readonly userId?: boolean
    public readonly createdAt?: Date
    public readonly updatedAt?: Date
    public readonly deletedAt?: Date
    
    constructor(
        name?: string,
        ) {
        this.name = name
    }

    sendMessage(message: string, method: any) {}
    readMessages(message: string, method: any) {}
}