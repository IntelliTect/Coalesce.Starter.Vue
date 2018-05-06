import * as metadata from './metadata.g'
import * as models from './models.g'
import * as apiClients from './api-clients.g'
import { ViewModel, defineProps } from 'coalesce-vue/lib/viewmodel'

export interface ApplicationUserViewModel extends models.ApplicationUser {}
export class ApplicationUserViewModel extends ViewModel<models.ApplicationUser, apiClients.ApplicationUserApiClient> {
  constructor(initialData?: models.ApplicationUser) {
    super(metadata.ApplicationUser, new apiClients.ApplicationUserApiClient(), initialData)
  }
}
defineProps(ApplicationUserViewModel, metadata.ApplicationUser)

