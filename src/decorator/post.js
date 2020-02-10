// @flow

import { decoratorGenerator } from '../generator'
import type { MethodOptions } from '../type'

export const post = (endpoint: string, options: MethodOptions) => decoratorGenerator('POST')(endpoint, options)
