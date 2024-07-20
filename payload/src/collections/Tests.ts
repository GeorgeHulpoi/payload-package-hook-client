import type { CollectionConfig } from 'payload'

import { hook } from 'payload-package'

export const Tests: CollectionConfig = {
  slug: 'tests',
  hooks: {
    beforeOperation: [hook]
  },
  fields: [
    {
        type: 'text',
        name: 'title',
    }
  ],
}
