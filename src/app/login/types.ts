import type { ButtonProps } from "@chakra-ui/react";
import type { ReactNode, PropsWithChildren } from "react";

type TInitialValues = {
  username: string;
  job: string;
};

export type TFormState = {
  success?: boolean;
  message?: string;
  description?: string;
};

export interface LoginProps {
  heading?: ReactNode;
  initialValues?: TInitialValues;
  buttonProps?: PropsWithChildren<ButtonProps>;
}
