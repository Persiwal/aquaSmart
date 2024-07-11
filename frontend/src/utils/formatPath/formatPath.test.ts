import formatPath from './formatPath'

describe('formatPath', () => {
  it('correctly formats path into breadcrumb structure', () => {
    const path = '/modules/module123/details'

    const expectedOutput = [
      { label: 'Modules', url: '/modules' },
      { label: 'Module123', url: '/modules/module123' },
      { label: 'Details', url: '/modules/module123/details' },
    ]

    expect(formatPath(path)).toEqual(expectedOutput)
  })

  it('handles consecutive slashes and trailing slashes', () => {
    const path = '//modules//module123//details/'

    const expectedOutput = [
      { label: 'Modules', url: '/modules' },
      { label: 'Module123', url: '/modules/module123' },
      { label: 'Details', url: '/modules/module123/details' },
    ]

    expect(formatPath(path)).toEqual(expectedOutput)
  })
})
