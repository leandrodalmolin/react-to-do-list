import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

import styles from "./Checkbox.module.css";

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  id: string;
}

export function Checkbox({ id, ...rest }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className={styles.root} id={id} {...rest}>
      <CheckboxPrimitive.Indicator className={styles.indicator}>
        <Check size={10} weight="bold" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
