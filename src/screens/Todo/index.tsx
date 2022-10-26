import React, { useCallback, useEffect, useMemo } from 'react';
import { TodoRealmContext } from 'models';
import { useUser } from '@realm/react';
import { Todo } from 'models/Todo';
import styled from 'styled-components/native';
import { Gutter, Typography } from 'components/atoms';
import { TodoInput } from 'components/app/TodoInput';
import { TodoList } from './TodoList';

const Wrapper = styled.View`
	align-items: center;
	margin: 100px 50px 0 50px;
	height: 18%;
`;

const AllTodo = () => {
	const { useRealm, useQuery } = TodoRealmContext;
	const realm = useRealm();
	const userId = useUser()?.id;

	const result = useQuery(Todo);
	console.log('PPPP',result);

	const todos = useMemo(() => result.sorted('createdAt'), [result]);

	console.log(
		'dddfff',
		todos,
	);

	const handleAddTodo = useCallback(
		(todo: string): void => {
			if (!todo) {
				return;
			}

			realm.write(() => {
				realm.create('Todo', Todo.generate(todo, userId));
			});
		},

		[realm, userId, result],
	);

	const handleToggleTaskStatus = useCallback(
		(todo: Todo & Realm.Object): void => {
			realm.write(() => {
				todo.isComplete = !todo.isComplete;
			});
		},
		[realm],
	);

	const handleDeleteTask = useCallback(
		(todo: Todo & Realm.Object): void => {
			realm.write(() => {
				realm.delete(todo);
			});
		},
		[realm],
	);

	useEffect(() => {
		realm.subscriptions.update((mutableSubscription) => {
			mutableSubscription.add(realm.objects(Todo));
		});
	}, [realm, result]);

	const List=useMemo(()=>{
		return 	<TodoList
		todos={todos}
		onDeleteTask={handleDeleteTask}
		onToggleTaskStatus={handleToggleTaskStatus}
	/>
	},[todos,result,realm])

	return (
		<>
			<Wrapper>
				<Typography>ADD TODOS</Typography>
				<Gutter />
				<TodoInput placeholder='Add Your Todo' onSubmit={handleAddTodo} />
			</Wrapper>
			<Gutter />
		{List}
		</>
	);
};

export { AllTodo };
