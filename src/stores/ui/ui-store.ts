import { create } from "zustand"

export interface UiState {
  isOpenSideMenu: boolean
}

const initialState: UiState = {
  isOpenSideMenu: false
}

export const useUiStore = create<UiState>()(() => ({
  ...initialState
}))