import { createContext } from "react";

export type Template1ContextType ={
    sidebar: boolean,
}

export const Template1Context = createContext<Template1ContextType>(null!);