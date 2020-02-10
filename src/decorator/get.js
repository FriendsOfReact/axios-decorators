// @flow

import { decoratorGenerator } from '../generator'
import type { MethodOptions } from '../type'

export const get = (endpoint: string, options: MethodOptions) => decoratorGenerator('GET')(endpoint, options)
