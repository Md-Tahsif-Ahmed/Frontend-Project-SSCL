import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  selectedId: number | null;
}

const initialState: UIState = {
  selectedId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSelectedId: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
  },
});

export const { setSelectedId } = uiSlice.actions;
export default uiSlice.reducer;