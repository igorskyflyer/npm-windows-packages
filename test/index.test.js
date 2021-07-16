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
  })

  describe('refresh(), count()', () => {
    it('should be 0', () => {
      winPackages.refresh()
      assert.equal(winPackages.count(), 0)
    })
  })

  describe('count()', () => {
    it('should be > 0', () => {
      winPackages.get()
      assert.isAbove(winPackages.count(), 0)
    })
  })
})
