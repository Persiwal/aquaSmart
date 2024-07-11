import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ModuleCard from './ModuleCard'
import { Module } from '../../../types/Module'

const routerWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
)

describe('ModuleCard', () => {
  const mockModule: Module = {
    id: 'test-module-id',
    name: 'Test Module',
    available: true,
    description: 'This is a test module',
    targetTemperature: 25,
  }

  it('renders module card content correctly', () => {
    render(<ModuleCard module={mockModule} />, {
      wrapper: routerWrapper,
    })

    expect(screen.getByText(mockModule.name)).toBeInTheDocument()
    expect(
      screen.getByText(`Target Temperature: ${mockModule.targetTemperature}`, {
        exact: false,
      })
    ).toBeInTheDocument()
  })
})
