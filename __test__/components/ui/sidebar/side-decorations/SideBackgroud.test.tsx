import { describe, expect, it, vi, beforeEach, type Mock, afterEach } from 'vitest'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/dom'

import { SideBackground, styles } from '@/components/ui/sidebar/side-decorations/SideBackground'
import { useUiStore } from '@/stores'

vi.mock('@/stores', () => ({
  useUiStore: vi.fn()
}))

describe('SideBackground', () => {
  beforeEach(() => {
    (useUiStore as unknown as Mock).mockClear()
  })

  afterEach(() => {
    cleanup()
  })

  it('should render with transparent background when menu is closed and not scrolled', () => {
    // Mocked isOpenSideMenu to false
    (useUiStore as unknown as Mock).mockReturnValue(false)
    render(<SideBackground />)

    expect(
      screen.getByRole('presentation', { name: "sidebar background" })
    ).toHaveClass(styles.inactive)
  })

  it('should render with background when menu is open and not scrolled', () => {
    // Mocked isOpenSideMenu to true
    (useUiStore as unknown as Mock).mockReturnValue(true)
    render(<SideBackground />)

    const backgroundElement = screen.getByRole('presentation', { name: "sidebar background" })

    expect(backgroundElement).toHaveClass(styles.active)
    expect(backgroundElement).toHaveClass(styles.expanded)
  })

  it('should render with background when menu is closed and scrolled', async () => {
    // Mocked isOpenSideMenu to false
    (useUiStore as unknown as Mock).mockReturnValue(false)
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