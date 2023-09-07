import { indigoCyanGradient } from "@/shared/lib/gradients";
import { Text } from "@mantine/core";
export type UndoneTodosCountProps = {
  count: number;
};

export const UndoneTodosCount = (props: UndoneTodosCountProps) => (
  <Text gradient={indigoCyanGradient} variant="gradient">
    {props.count} items left
  </Text>
);
