export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
export type TodoItemProps = {
  item: Todo,
  onToggle: (id: number) => void;
};