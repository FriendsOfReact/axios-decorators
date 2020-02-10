// @flow

import { decoratorGenerator } from '../generator'
import type { MethodOptions } from '../type'

export const patch = (endpoint: string, options: MethodOptions) => decoratorGenerator('PATCH')(endpoint, options)
