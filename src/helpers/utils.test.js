import * as utils from './utils'

describe('linkExists', () => {
  it('returns true if both link and text are truthy', () => {
    expect(utils.linkExists({ link: 'a', text: 'b' })).toBe(true)
    expect(utils.linkExists({ link: {}, text: true })).toBe(true)
    expect(utils.linkExists({ link: true, text: [] })).toBe(true)
  })

  it('returns false if one of link or text are falsey', () => {
    expect(utils.linkExists({ link: '', text: 'b' })).toBe(false)
    expect(utils.linkExists({ link: {}, text: null })).toBe(false)
    expect(utils.linkExists({ link: undefined, text: [] })).toBe(false)
  })
})

describe('upper', () => {
  it('returns the string to uppercase', () => {
    expect(utils.upper('hi there')).toBe('HI THERE')
  })
})

describe('lower', () => {
  it('returns the string to lowercase', () => {
    expect(utils.lower('HI THERE MY FRIEND')).toBe('hi there my friend')
  })
})

describe('joinAndLower', () => {
  it('returns the string combined and all lowercase', () => {
    expect(utils.joinAndLower('My Name Is Jeremy')).toBe('mynameisjeremy')
  })

  it('takes an optional split value as the second parameter', () => {
    expect(utils.joinAndLower('My,Name,Is,Jeremy', ',')).toBe('mynameisjeremy')
  })
})

describe('isSvg', () => {
  it('returns true if the string equals svg', () => {
    expect(utils.isSvg('svg')).toBe(true)
    expect(utils.isSvg('gif')).toBe(false)
  })
})

describe('isGif', () => {
  it('returns true if the string equals gif', () => {
    expect(utils.isGif('gif')).toBe(true)
    expect(utils.isGif('svg')).toBe(false)
  })
})

describe('addPeriod', () => {
  it('wraps the text in a p tag and adds a period', () => {
    expect(utils.upper('hi there')).toBe('<p>hi there.</p>')
  })
})
