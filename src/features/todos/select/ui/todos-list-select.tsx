import { Button, Group } from "@mantine/core";
import { TodosListVariant } from "../model";
import { indigoCyanGradient } from "@/shared/lib/gradients";

export type TodosListSelectProps = {
  selectAll: () => void;
  selectDone: () => void;
  selectUndone: () => void;
  selectedList: TodosListVariant;
};

export type TodosListSelectButtonProps = {
  variant: "outline" | "white";
  onClick: () => void;
  children: string;
};

export const TodosListSelectButton = (props: TodosListSelectButtonProps) => (
  <Button
    radius={"md"}
    gradient={indigoCyanGradient}
    fw={"normal"}
    variant={props.variant}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);
export const TodosListSelect = (props: TodosListSelectProps) => {
  return (
    <Group>
      <TodosListSelectButton
        variant={props.selectedList === "all" ? "outline" : "white"}
        onClick={props.selectAll}
      >
        All
      </TodosListSelectButton>
      <TodosListSelectButton
        variant={props.selectedList === "undone" ? "outline" : "white"}
        onClick={props.selectUndone}
      >
        Active
      </TodosListSelectButton>
      <TodosListSelectButton
        variant={props.selectedList === "done" ? "outline" : "white"}
        onClick={props.selectDone}
      >
        Completed
      </TodosListSelectButton>
    </Group>
  );
};
