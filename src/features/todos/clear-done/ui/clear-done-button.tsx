import { indigoCyanGradient } from "@/shared/lib/gradients";
import { Button } from "@mantine/core";

export type ClearDoneTodosButtonProps = {
  onClear: () => void;
};

export const ClearDoneTodosButton = (props: ClearDoneTodosButtonProps) => {
  return (
    <Button
      variant="white"
      fw={"normal"}
      gradient={indigoCyanGradient}
      onClick={props.onClear}
    >
      Clear completed
    </Button>
  );
};
