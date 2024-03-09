/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-refresh/only-export-components */
import { ReactElement, ReactNode } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Import your root reducer and store
import { store, RootType } from "../store/store";

interface RenderOptions {
  preloadedState?: RootType;
  store?: ReturnType<typeof configureStore>;
}

function render(
  ui: ReactElement,
  {
    preloadedState,
    store: storeOverride = configureStore({
      // @ts-ignore
      reducer: { todo: store.getState().todo },
      preloadedState,
    }),
    ...renderOptions
  }: RenderOptions = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={storeOverride}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
