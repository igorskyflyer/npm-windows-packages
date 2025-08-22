// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, suite, test } from 'vitest'
import { get, has } from '../src/index.ts'

describe('🧪 Windows Packages tests 🧪', () => {
  suite('get()', () => {
    test('should be an array', () => {
      assert.isArray(get())
    }) // #1

    test('length should be > 0', () => {
      assert.isAbove(get().length, 0)
    })

    test('should be a string', () => {
      assert.isString(get()[0])
    }) // #2
  })

  suite('has()', () => {
    test('should be an array', () => {
      assert.isArray(has(['MicrosoftEdge', 'MSPaint']))
    }) // #3

    test('should be true', () => {
      assert.isArray(has(['MicrosoftEdge']))
    }) // #4
  })
})
