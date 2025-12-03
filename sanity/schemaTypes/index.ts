import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {availabilityType} from './availabilityType'
import {premiumCutsType} from './premiumCutsType'
import {cowPurchaseType} from './cowPurchaseType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, availabilityType, premiumCutsType, cowPurchaseType],
}
