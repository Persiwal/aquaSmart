import useModules from './useModules'
import { renderHook, waitFor } from '@testing-library/react'
import { Module } from '../types/Module'
import { useQuery } from '@tanstack/react-query'

jest.mock('@tanstack/react-query', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('@tanstack/react-query') as any),
  useQuery: jest.fn(),
}))

describe('useModules', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('fetches modules successfully', async () => {
    const mockData: Module[] = [
      {
        id: '1',
        name: 'Module 1',
        description: 'Description 1',
        targetTemperature: 25,
        available: true,
      },
      {
        id: '2',
        name: 'Module 2',
        description: 'Description 2',
        targetTemperature: 30,
        available: true,
      },
    ]
    ;(useQuery as jest.Mock).mockReturnValueOnce({
      data: mockData,
      isLoading: false,
      isError: false,
    })

    const { result } = renderHook(() => useModules())

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.data).toEqual(mockData)
    expect(result.current.isError).toBe(false)
  })

  it('handles loading state correctly', async () => {
    // eslint-disable-next-line no-extra-semi
    ;(useQuery as jest.Mock).mockReturnValueOnce({
      data: undefined,
      isLoading: true,
      isError: false,
    })

    const { result } = renderHook(() => useModules())

    expect(result.current.isLoading).toBe(true)
    expect(result.current.data).toBeUndefined()
    expect(result.current.isError).toBe(false)

    await waitFor(() => {
      expect(result.current.isLoading).toBe(true)
    })

    expect(result.current.data).toBeUndefined()
    expect(result.current.isError).toBe(false)
  })

  it('handles error state correctly', async () => {
    // eslint-disable-next-line no-extra-semi
    ;(useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    })

    const { result } = renderHook(() => useModules())

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.data).toBeUndefined()
  })
})
