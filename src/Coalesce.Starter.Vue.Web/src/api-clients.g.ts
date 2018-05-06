import * as $metadata from './metadata.g'
import * as $models from './models.g'
import * as qs from 'qs'
import * as $isValid from 'date-fns/isValid'
import * as $format from 'date-fns/format'
import { AxiosClient, ModelApiClient, ServiceApiClient, ItemResult, ListResult } from 'coalesce-vue/lib/api-client'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

export class ApplicationUserApiClient extends ModelApiClient<$models.ApplicationUser> {
  constructor() { super($metadata.ApplicationUser) }
}


