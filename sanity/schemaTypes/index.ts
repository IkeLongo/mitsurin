import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {availabilityType} from './availabilityType'
import {premiumCutsType} from './premiumCutsType'
import {cowPurchaseType} from './cowPurchaseType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, availabilityType, premiumCutsType, cowPurchaseType],
}
