import { render, screen, fireEvent } from '@testing-library/react'
import BackToMainPageButton from './BackToMainPageButton'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('BackToMainPageButton', () => {
  it('calls navigate function when clicked', () => {
    render(<BackToMainPageButton />)

    const buttonElement = screen.getByRole('button', {
      name: /back to main page/i,
    })
    fireEvent.click(buttonElement)

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/modules')
  })
})
