import { describe, expect, it, vi, beforeEach, type Mock, afterEach } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/dom'

import { SideBackground, styles } from '@/shared/components/sidebar/side-decorations/SideBackground'
import { useUiStore } from '@/shared/stores'

// Mocks
const mockUseUiStore = useUiStore as unknown as Mock

vi.mock('@/shared/stores', () => ({
  useUiStore: vi.fn()
}))

describe('SideBackground component', () => {
  beforeEach(() => {
    mockUseUiStore.mockClear()
  })

  afterEach(() => {
    cleanup()
  })

  it('should render with transparent background when menu is closed and not scrolled', () => {
    // Mocked isOpenSideMenu to false
    mockUseUiStore.mockReturnValue(false)
    render(<SideBackground />)

    expect(
      screen.getByRole('presentation', { name: "sidebar background" })
    ).toHaveClass(styles.inactive)
  })

  it('should render with background when menu is open and not scrolled', () => {
    // Mocked isOpenSideMenu to true
    mockUseUiStore.mockReturnValue(true)
    render(<SideBackground />)

    const backgroundElement = screen.getByRole('presentation', { name: "sidebar background" })

    expect(backgroundElement).toHaveClass(styles.active)
    expect(backgroundElement).toHaveClass(styles.expanded)
  })

  it('should render with background when menu is closed and scrolled', async () => {
    // Mocked isOpenSideMenu to false
    mockUseUiStore.mockReturnValue(false)
    render(<SideBackground />)

    const backgroundElement = screen.getByRole('presentation', { name: "sidebar background" })

    // without scroll
    expect(backgroundElement).toHaveClass(styles.inactive)

    // with scroll
    fireEvent.scroll(window, { target: { scrollY: 200 } })
    expect(backgroundElement).toHaveClass(styles.active)
    expect(backgroundElement).not.toHaveClass(styles.expanded)

    // without scroll
    fireEvent.scroll(window, { target: { scrollY: 0 } })
    expect(backgroundElement).toHaveClass(styles.inactive)
  })

})