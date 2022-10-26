import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import { Realm } from '@realm/react';
import { Todo } from 'models/Todo';
import { TodoItem } from './TodoItem';
import styled from 'styled-components/native';

type TodoListProps = {
	todos: Realm.Results<Todo & Realm.Object>;
	onToggleTaskStatus: (todo: Todo & Realm.Object) => void;
	onDeleteTask: (todo: Todo & Realm.Object) => void;
};

const Wrapper = styled.View`
	flex: 1;
	justify-content: center;
`;
export const TodoList: React.FC<TodoListProps> = ({
	todos,
	onToggleTaskStatus,
	onDeleteTask,
}) => {
	return (
		<Wrapper>
			<FlatList
				data={todos}
				keyExtractor={(todo) => todo._id.toString()}
				renderItem={({ item }) => (
					<TodoItem
						todos={item}
						onToggleStatus={() => onToggleTaskStatus(item)}
						onDelete={() => onDeleteTask(item)}
					/>
				)}
			/>
		</Wrapper>
	);
};
