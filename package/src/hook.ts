import 'server-only';

import type { CollectionBeforeOperationHook } from 'payload';

export const hook: CollectionBeforeOperationHook = (args) => {
    return args.args;
}