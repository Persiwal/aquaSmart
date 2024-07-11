import { render, screen } from '@testing-library/react'
import ModuleCardContent from './ModuleCardContent'
import { Module } from '../../../types/Module'

describe('ModuleCardContent', () => {
  const mockModule: Module = {
    id: 'test-module-id',
    name: 'Test Module',
    available: true,
    targetTemperature: 25,
    description: 'Test module description',
  }

  it('renders module card content correctly', () => {
    render(<ModuleCardContent module={mockModule} />)

    expect(screen.getByText(mockModule.name)).toBeInTheDocument()

    expect(
      screen.getByText(`Target Temperature: ${mockModule.targetTemperature}°C`)
    ).toBeInTheDocument()

    expect(screen.getByText(/Available/i)).toBeInTheDocument()
  })
})
