import styled from "@emotion/styled";
import { useTodoList } from "./useTodoList";
import TodoItem from "../TodoItem";

const TodoList = () => {
  const { todoList } = useTodoList();
  return todoList.length === 0 ? (
    <NoList>
      <p>아래 (+) 버튼을 눌러 할일을 추가해보세요 :)</p>
    </NoList>
  ) : (
    <List>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
};

export default TodoList;

const NoList = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  margin-bottom: 2rem;
  p {
    word-break: keep-all;
    text-align: center;
  }
`;

const List = styled.div`
  margin-top: 1.2rem;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
  padding-right: 3px;
`;
