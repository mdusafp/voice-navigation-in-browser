import { Theme as RadixTheme } from "@radix-ui/themes";
import { FC, PropsWithChildren } from "react";

export const StreamyTheme: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RadixTheme
      accentColor='iris'
      grayColor='slate'
      appearance='dark'
      panelBackground="translucent"
      radius='large'
    >
      {children}
    </RadixTheme>
  )
}