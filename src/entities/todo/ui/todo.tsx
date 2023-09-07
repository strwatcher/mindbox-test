import { Checkbox, Group, Paper, Text } from "@mantine/core";
import { Todo } from "../model";

export type TodoProps = {
  toggleDone: () => void;
  todo: Todo;
};

export const TodoItem = (props: TodoProps) => {
  return (
    <Paper
      shadow="none"
      p={"sm"}
      radius={"sm"}
      withBorder
      onClick={props.toggleDone}
    >
      <Group>
        <Checkbox
          size={"md"}
          radius={"xl"}
          checked={props.todo.done}
          onChange={props.toggleDone}
          color={"gray"}
        />
        <Text
          sx={{
            textDecoration: props.todo.done ? "line-through" : "none",
            color: props.todo.done ? "gray" : "black",
          }}
        >
          {props.todo.text}
        </Text>
      </Group>
    </Paper>
  );
};
