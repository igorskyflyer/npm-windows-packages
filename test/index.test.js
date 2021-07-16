const assert = require('chai').assert
const winPackages = require('../index')

describe('WindowsPackages', () => {
  describe('get()', () => {
    it('should be an array', () => {
      assert.isArray(winPackages.get())
    })

    it('length should be > 0', () => {
      assert.isAbove(winPackages.get().length, 0)
    })

    it('should be a string', () => {
      assert.isString(winPackages.get()[0])
    })
  })

  describe('has()', () => {
    it('should be an array', () => {
      assert.isArray(winPackages.has(['MicrosoftEdge', 'MSPaint']))
    })

    it('should be true', () => {
      assert.isArray(winPackages.has(['MicrosoftEdge']))
    })
  })
})
