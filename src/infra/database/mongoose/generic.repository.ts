import { FilterQuery, Model, UpdateQuery, UpdateWithAggregationPipeline } from "mongoose";
import { GenericRepository } from "../../../common/generic.repository";
interface IOptions {
  includes: any[];
  offset: number;
  skip: number;
}

export class GenericMongooseRepository<T, IQuery>
  implements GenericRepository<T, IQuery, IOptions>
{
  constructor(public readonly _model: Model<T>) {}
  get model(): Model<T> {
    return this._model;
  }
  async create(instance: T): Promise<any> {
    const createdInstance = this._model.create(instance);
    return createdInstance;
  }
  async findAll(query?: any, options?: IOptions): Promise<any[]> {
    const instances = await this._model.find(query);
    return instances;
  }
  async findOne(query: any, options?: IOptions): Promise<any> {
    const instance = await this._model.findOne(query);
    return instance;
  }
  async findById(id: any): Promise<any> {
    const instance = await this._model.findById(id);
    return instance;
  }
  async updateById(id: any, data: UpdateQuery<T> | undefined): Promise<any> {
    const updated = await this._model.findByIdAndUpdate(id, data);
    return updated;
  }
  removeById(id: any) {
    const removed = this._model.findByIdAndRemove(id);
    return removed;
  }
  async update(query: any, instance: UpdateQuery<T> | UpdateWithAggregationPipeline | undefined, options?: IOptions) {
    const updated = await this._model.updateMany(query, instance);
    return updated;
  }
  async findOrCreate(query: FilterQuery<T> | undefined, instance: T | undefined) {
    const finded = await this._model.findOne(query);
    if (finded) {
      return finded;
    }
    const created = await this._model.create(instance);
    return created;
  }
}
