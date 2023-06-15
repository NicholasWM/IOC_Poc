export class GenericUseCase<IRepository, IProps> {
    constructor(readonly repository: IRepository) {}
    execute(props: IProps){}
  }
  