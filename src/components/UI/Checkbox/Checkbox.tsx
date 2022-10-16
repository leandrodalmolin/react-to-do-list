import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  id: string;
}

export function Checkbox({ id }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className={styles.root} id={id}>
      <CheckboxPrimitive.Indicator className={styles.indicator}>
        <Check size={10} weight="bold" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
