import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { StateCreator } from "zustand";

interface [FTName | camelcase]State {
  isOpen: boolean;
}

interface [FTName | camelcase]Actions {
  setIsOpen: (isOpen: boolean) => void;
  open: () => void;
  close: () => void;
}

interface [FTName | camelcase]Store extends [FTName | camelcase]State, [FTName | camelcase]Actions {}

const initialState: [FTName | camelcase]State = {
  isOpen: false,
};

const [FTName | camelcase]Store: StateCreator<
  [FTName | camelcase]Store,
  [["zustand/devtools", unknown]]
> = (set) => ({
  ...initialState,

  setIsOpen: (isOpen) => set({ isOpen }, false, "[FTName | camelcase]/setIsOpen"),
  open: () => set({ isOpen: true }, false, "[FTName | camelcase]/open"),
  close: () => set({ isOpen: false }, false, "[FTName | camelcase]/close"),
});

const use[FTName | pascalcase]BaseStore = create<[FTName | camelcase]Store>()(
  devtools([FTName | camelcase]Store, { name: "[FTName | camelcase]Store" })
);

export const use[FTName | pascalcase]IsOpen = () => use[FTName | pascalcase]BaseStore((s) => s.isOpen);
export const use[FTName | pascalcase]Actions = () => use[FTName | pascalcase]BaseStore.getState();