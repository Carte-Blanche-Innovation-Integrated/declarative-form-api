import { createContext } from "react";
import type { FieldValues } from "react-hook-form";

import { ContextValue } from "../../utils/use-context-props.ts";

import { FormProps } from "./types";

export const FormContext =
  createContext<
    ContextValue<FormProps<any, FieldValues, any>, HTMLFormElement>
  >(null);
