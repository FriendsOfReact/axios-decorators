// @flow

import { decoratorGenerator } from '../generator'
import type { MethodOptions } from '../type'

export const del = (endpoint: string, options: MethodOptions) => decoratorGenerator('DELETE')(endpoint, options)
