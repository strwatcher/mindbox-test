import { Group, Paper, Stack, Title } from "@mantine/core";
import { TodoInput } from "@/features/todos/create";
import { PageLayout } from "@/shared/ui/page-layout";
import { EmptyList, TodosList } from "@/entities/todo";
import { useTodos } from "../model";
import { TodosListSelect } from "@/features/todos/select";
import { useSelectTodos } from "@/features/todos/select/model";
import { ClearDoneTodosButton } from "@/features/todos/clear-done";
import { UndoneTodosCount } from "@/features/todos/show-undone-count";
import { indigoCyanGradient } from "@/shared/lib/gradients";

export const TodoPage = () => {
  const todos = useTodos();
  const selectTodos = useSelectTodos();

  return (
    <PageLayout>
      <Title variant="gradient" align="center" gradient={indigoCyanGradient}>
        todos
      </Title>
      <Paper radius={"sm"} p={"md"}>
        <Stack>
          <TodoInput onAdd={todos.add} />
          <TodosList
            todos={todos[selectTodos.currentList]}
            markDone={todos.markDone}
            markUndone={todos.markUndone}
            empty={<EmptyList />}
          />
          <Group sx={{ justifyContent: "space-between" }}>
            <UndoneTodosCount count={todos.undone.length} />
            <TodosListSelect
              selectedList={selectTodos.currentList}
              selectAll={selectTodos.selectList.all}
              selectDone={selectTodos.selectList.done}
              selectUndone={selectTodos.selectList.undone}
            />
            <ClearDoneTodosButton onClear={todos.clearDone} />
          </Group>
        </Stack>
      </Paper>
    </PageLayout>
  );
};
