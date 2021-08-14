import { assert } from 'chai'
import { get, has } from '../src/index.js'

describe('WindowsPackages', () => {
  describe('get()', () => {
    it('should be an array', () => {
      assert.isArray(get())
    })

    it('length should be > 0', () => {
      assert.isAbove(get().length, 0)
    })

    it('should be a string', () => {
      assert.isString(get()[0])
    })
  })

  describe('has()', () => {
    it('should be an array', () => {
      assert.isArray(has(['MicrosoftEdge', 'MSPaint']))
    })

    it('should be true', () => {
      assert.isArray(has(['MicrosoftEdge']))
    })
  })
})
