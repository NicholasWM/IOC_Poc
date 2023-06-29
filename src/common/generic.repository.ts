export interface IOptionsGeneric {
  includes: any[];
  offset: number;
  skip: number;
}

export abstract class GenericRepository {
  abstract get model(): any;
  abstract create(
    instance: any,
    options?: any,
  ): Promise<any>;
  abstract findAll(
    query?: any,
    options?: any,
  ): Promise<any[]>;
  abstract findOne(query: any, options?: any): Promise<any>;
  abstract findById(id: any): Promise<any>;
  abstract updateById(id: any, data: any): Promise<any>;
  abstract removeById(id: any): any;
  abstract update(instance: any, query: any, options?: any): any;
  abstract findOrCreate(query: any, instance?: any): any;
  // abstract countByQuery;
  // abstract bulkCreate;
}
