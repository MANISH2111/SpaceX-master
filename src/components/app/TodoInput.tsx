import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FlexRow, Gutter, Typography } from 'components/atoms';
import { StyleSheet, TextInput } from 'react-native';
import { useColor } from 'hooks/useColor';

const Wrapper = styled(FlexRow)`
	height: 48px;
	border: 0 solid ${(props) => props.theme.colors.primaryGrey};
	border-radius: 24px;
	padding: 0 20px;
	opacity: 1;
	background-color: ${(props) => props.theme.colors.grey};
`;

const Add = styled.TouchableOpacity`
	width: 50px;
	height: 50px;
	border-radius: 25px;
	border: 1px solid;
	justify-content: center;
`;
type Props = {
	onSubmit: (todo: string) => void;
	placeholder?:string
};

export const TodoInput: React.ComponentType<Props> = ({onSubmit,...props}) => {
	const primaryGrey = useColor('PrimaryGrey');

	const [todo, setTodo] = useState('');

	const handleSubmit = () => {
		onSubmit(todo);
		setTodo('');
	};

	return (
		<>
			<Wrapper alignItems="center" justifyContent="space-between">
				<TextInput
					style={styles.inputStyles}
					selectionColor={primaryGrey}
					autoCapitalize="none"
					autoCorrect={false}
					autoComplete="off"
					onChangeText={setTodo}
					value={todo}
					{...props}
				/>
				<Gutter spacing={0} hSpacing={0.2} />
			</Wrapper>
			<Gutter />
			<Add onPress={handleSubmit}>
				<Typography textAlign="center">Add</Typography>
			</Add>
		</>
	);
};

const styles = StyleSheet.create({
	inputStyles: {
		flex: 1,
	},
});
