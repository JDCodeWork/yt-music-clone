import { create } from "zustand"

export interface UiState {
  isOpenSideMenu: boolean
  searchValue: string
}

const initialState: UiState = {
  isOpenSideMenu: false,
  searchValue: "",
}

export const useUiStore = create<UiState>()(() => ({
  ...initialState
}))