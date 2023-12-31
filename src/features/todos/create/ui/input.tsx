import { ActionIcon, Group, TextInput } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useTodoInput } from "../model";
import { indigoCyanGradient } from "@/shared/lib/gradients";

export type TodoInputProps = {
  onAdd: (text: string) => void;
};

export const TodoInput = (props: TodoInputProps) => {
  const { submit, todoText, setTodoText } = useTodoInput(props.onAdd);
  return (
    <form onSubmit={submit}>
      <Group sx={{ flexWrap: "nowrap" }}>
        <ActionIcon
          type="submit"
          variant="gradient"
          gradient={indigoCyanGradient}
          radius={"xl"}
          sx={{ cursor: "pointer" }}
        >
          <IconPlus />
        </ActionIcon>

        <TextInput
          value={todoText}
          onInput={(e) => {
            setTodoText(e.currentTarget.value);
          }}
          sx={{ flexGrow: 1 }}
          placeholder="What needs to be done?"
        />
      </Group>
    </form>
  );
};
