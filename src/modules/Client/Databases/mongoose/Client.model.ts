import mongoose, { Model } from "mongoose";
import { ClientDomain, IClientProps } from "../../Domain/Client.domain";

export class ClientDocument extends Model<ClientDomain> {
    readonly id?: string;
    readonly name?: string;
    readonly hasAccount?: boolean;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
    readonly deletedAt?: Date;
} 

export const ClientSchema = new mongoose.Schema<IClientProps>({
    name: String,
    hasAccount: Boolean,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: Date.now },
});

export const ClientModel: Model<ClientDocument> = mongoose.model(
    "Client",
    ClientSchema
);
