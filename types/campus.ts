export interface ICampus {
    id: number,
    name: string,
    logo: string,
    thumbnail: string,
    min_registration_fee: number | string,
    accreditation: string,
}

export interface ICampusParam {
    perPage: number,
    page: number,
    full: boolean,
}