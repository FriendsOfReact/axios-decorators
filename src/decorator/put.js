// @flow

import { decoratorGenerator } from '../generator'
import type { MethodOptions } from '../type'

export const put = (endpoint: string, options: MethodOptions) => decoratorGenerator('PUT')(endpoint, options)
