export interface IJurusan {
    id: number,
    name: string,
    code: string,
}

export interface IJurusanParam {
    perPage: number,
    page: number,
    full: boolean,
}