import { useUiStore } from "./ui-store";

export const toggleSideMenu = () => useUiStore.setState(s => s.isOpenSideMenu
  ? ({ isOpenSideMenu: false })
  : ({ isOpenSideMenu: true })
)

export const setSearchValue = (value: string) => useUiStore.setState(() => ({ searchValue: value }))
