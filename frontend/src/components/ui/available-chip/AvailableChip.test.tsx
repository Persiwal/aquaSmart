import { render, screen } from '@testing-library/react'
import AvailableChip from './AvailableChip'

describe('AvailableChip', () => {
  it('renders "Available" chip correctly', () => {
    render(<AvailableChip isAvailable={true} />)

    const chipElement = screen.getByText('Available')
    expect(chipElement).toBeInTheDocument()

    const chip = chipElement.closest('.MuiChip-root') as HTMLDivElement
    expect(chip).toHaveStyle({
      backgroundColor: 'rgba(76, 175, 80, 0.3)',
      color: 'green',
    })
  })

  it('renders "Not Available" chip correctly', () => {
    render(<AvailableChip isAvailable={false} />)

    const chipElement = screen.getByText('Not Available')
    expect(chipElement).toBeInTheDocument()

    const chip = chipElement.closest('.MuiChip-root') as HTMLDivElement
    expect(chip).toHaveStyle({
      backgroundColor: 'rgba(244, 67, 54, 0.3)',
      color: 'red',
    })
  })
})
