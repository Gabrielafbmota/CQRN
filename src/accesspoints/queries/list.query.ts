export class ListAPQuery{
    constructor(
        public page: number = 1,
        public pageSize: number = 10
    ) { }
}

@QueryHandler(ListAPQuery)
export class ListHandler implements IQueryHandler<ListAPQuery> {}