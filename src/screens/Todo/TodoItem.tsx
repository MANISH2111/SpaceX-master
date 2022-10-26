import React from 'react';
import Realm from 'realm';
import { Alert, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Gutter, Typography } from 'components/atoms';
import { Todo } from 'models/Todo';

type Props = {
	todos: Todo & Realm.Object;
	onToggleStatus: () => void;
	onDelete: () => void;
};

const Icon = styled.View<{ isSelected: boolean }>`
	width: 20px;
	height: 20px;
	border-radius: 10px;
	background-color: ${(props) =>
		props.isSelected ? props.theme.colors.green : props.theme.colors.red};
`;
const CText = styled(Typography)<{ isSelected: boolean }>`
	text-decoration-line: ${(props) =>
		props.isSelected ? 'line-through' : 'none'};
	opacity: ${(props) => (props.isSelected ? 0.5 : 1)};
`;
const TouchWrapper = styled.TouchableOpacity`
	flex: 1;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	margin-left: 20px;
	padding-bottom: 20px;
`;

const TodoItem: React.ComponentType<Props> = ({
	todos,
	onToggleStatus,
	onDelete,
}) => {
	const deleteAlert = () =>
		Alert.alert('Delete', 'Are you sure,you want to delete', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{ text: 'OK', onPress: () => onDelete() },
		]);

	return (
		<TouchWrapper
			onPress={onToggleStatus}
			onLongPress={() => deleteAlert()}
		>
			<Icon isSelected={todos.isComplete} />
			<Gutter hSpacing={1} />
			<CText isSelected={todos.isComplete}>{todos.todo}</CText>
		</TouchWrapper>
	);
};

export { TodoItem };
