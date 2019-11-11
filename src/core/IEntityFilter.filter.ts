export interface IEntityFilter<T> {
    createQueryParams(entity: T): string;

}
