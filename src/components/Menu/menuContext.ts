import { createContext, useContext } from "react";
import { MenuContextType } from "./useMenuState";

const MenuContext = createContext<MenuContextType>({} as MenuContextType);

export const MenuContextProvider = MenuContext.Provider;
export const useMenuContext = () => useContext(MenuContext);
