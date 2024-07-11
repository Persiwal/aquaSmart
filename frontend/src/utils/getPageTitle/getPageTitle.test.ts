import getPageTitle from './getPageTitle'

describe('getPageTitle', () => {
  it('returns correct title for exact path match', () => {
    expect(getPageTitle('/modules')).toBe('Modules')
    expect(getPageTitle('/modules/123')).toBe('Module Details')
  })

  it('returns correct title for dynamic route match', () => {
    expect(getPageTitle('/modules/123/edit')).toBe('Module Details')
    expect(getPageTitle('/modules/456/details')).toBe('Module Details')
  })

  it('returns default title when no match is found', () => {
    expect(getPageTitle('/unknown')).toBe('Page')
  })
})
