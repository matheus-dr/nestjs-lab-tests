export interface IModelRepository {
  create(): Promise<void>;

  findAll(): Promise<[]>;
}
