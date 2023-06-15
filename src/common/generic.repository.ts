export interface IOptionsGeneric {
  includes: any[];
  offset: number;
  skip: number;
}

export abstract class GenericRepository<ModelInstance, IQuery, IOptions> {
  abstract get model(): any;
  abstract create(
    instance: ModelInstance,
    options?: IOptions,
  ): Promise<any>;
  abstract findAll(
    query?: IQuery,
    options?: IOptions,
  ): Promise<ModelInstance[]>;
  abstract findOne(query: IQuery, options?: IOptions): Promise<ModelInstance>;
  abstract findById(id: any): Promise<ModelInstance>;
  abstract updateById(id: any, data: any): Promise<ModelInstance>;
  abstract removeById(id: any): any;
  abstract update(instance: ModelInstance, query: any, options?: IOptions): any;
  abstract findOrCreate(query: any, instance?: ModelInstance): any;
  // abstract countByQuery;
  // abstract bulkCreate;
}
