/* eslint-disable require-await */
import type { AsyncData } from 'nuxt/app'
import { defu } from 'defu'
import type { CustomFetchOptions } from '~/types/api'
// import type { PickFrom, KeysOf } from 'nuxt/dist/app/composables/asyncData'

export type PickFrom<T, K extends string[]> = T extends any[] ? T : T extends Record<string, any> ? keyof T extends K[number] ? T : K[number] extends never ? T : Pick<T, K[number]> : T
export type KeysOf<T> = Array<T extends T ? (keyof T extends string ? keyof T : never) : never>

const DEFAULT_CONFIG: CustomFetchOptions<any> = {
  server                    : false,
  lazy                      : true,
  retry                     : false,
  displayOverlay            : false,
  displayNotificationSuccess: false,
  displayNotificationError  : false,
}

export default async function useApi<T> (
  url: string,
  options: CustomFetchOptions<T> = {},
): Promise<AsyncData<PickFrom<T, KeysOf<T>> | null, any>> {
  const opts      = defu(options, DEFAULT_CONFIG)
  const config    = useRuntimeConfig()

  const urlWithAppBase = url

  return await useFetch(urlWithAppBase, {
    headers: {
      ...opts.headers,
      'api-key': config.public.apiKey,
    },
    async onRequest () {},

    async onResponse ({ response }) {

      const statusCode = response.status
      const message    = response?._data?.message
    },

    async onResponseError ({ response }) {

      const { excludeInterceptorCodes } = options
      const excludedInterceptor         = (statusCode: number): boolean => {
        if (!excludeInterceptorCodes) return false

        return excludeInterceptorCodes.includes(statusCode)
      }
      if (!excludedInterceptor(response.status) && opts.displayNotificationSuccess) {}
    },
    ...opts,
  })
}