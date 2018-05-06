import {
  Domain, getEnumMeta, ModelType, ObjectType,
  PrimitiveProperty, ModelReferenceNavigationProperty, ForeignKeyProperty, PrimaryKeyProperty
} from 'coalesce-vue/lib/metadata'


const domain: Domain = { enums: {}, types: {}, services: {} }
export const ApplicationUser = domain.types.ApplicationUser = {
  name: "applicationUser",
  displayName: "Application User",
  get displayProp() { return this.props.name }, 
  type: "model",
  controllerRoute: "ApplicationUser",
  get keyProp() { return this.props.applicationUserId }, 
  props: {
    applicationUserId: {
      name: "applicationUserId",
      displayName: "Application User Id",
      type: "number",
      role: "primaryKey",
    },
    name: {
      name: "name",
      displayName: "Name",
      type: "string",
      role: "value",
    },
  },
  methods: {
  },
  dataSources: {
  },
}

interface AppDomain extends Domain {
  enums: {
  }
  types: {
    ApplicationUser: typeof ApplicationUser
  }
  services: {
  }
}

export default domain as AppDomain
