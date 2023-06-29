import mongoose, { Model } from "mongoose";
import { ClientDomain, IClientProps } from "../../Domain/Client.domain";

export class ClientDocument extends Model<ClientDomain> {
    public id?: string;
    public name?: string;
    public email?: string;
    public phone?: string;
    public telegram?: string;
    public userId?: string;
    public createdAt?: Date;
    public updatedAt?: Date;
    public deletedAt?: Date;
} 

export const ClientSchema = new mongoose.Schema<ClientDocument>({
    id:{
        type: mongoose.Schema.Types.ObjectId,
    },
    name: String,
    email: String,
    phone: String,
    telegram: String,
    userId: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: Date.now },
}, { collection: 'Client' });
ClientSchema.pre('save', function (next) {
    this.id = this._id; // Atribui o valor do _id para o campo id
    next();
  });
export const ClientModel: Model<ClientDocument> = mongoose.model(
    "Client",
    ClientSchema
);
