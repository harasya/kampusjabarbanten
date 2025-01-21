import type { UseFetchOptions } from 'nuxt/app'

export interface Meta {
  currentPage: number,
  itemsPerPage?: number,
  totalItems: number,
}

export interface Parameters extends Partial<Meta> {
  query?: string,
  order_by?: string,
  order_type?: 'asc' | 'desc' | string,
  [key: string]: any,
}

export interface ApiResponse<T> {
  status: 'SUCCESS' | 'ERROR',
  entity: string,
  state: string,
  message: string,
  data?: T,
  meta?: Meta,
}

export interface BaseResponseAPI<T = any> {
  code: number,
  message: string,
  products: T,
  total?: number,
  meta?: Meta,
}

export interface CustomFetchOptions<T> extends UseFetchOptions<T> {
  excludeInterceptorCodes?: number[],
  displayOverlay?: boolean,
  displayNotificationSuccess?: boolean,
  displayNotificationError?: boolean,
}