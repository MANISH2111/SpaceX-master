import React from 'react';
import styled from 'styled-components/native';
import { FlexRow, Gutter } from 'components/atoms';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { useColor } from 'hooks/useColor';

const Wrapper = styled(FlexRow)`
	height: 48px;
	border: 0 solid ${(props) => props.theme.colors.primaryGrey};
	border-radius: 24px;
	padding: 0 20px;
	opacity: 1;
	background-color: ${(props) => props.theme.colors.grey4};
`;

export const SearchInput: React.ComponentType<TextInputProps> = (props) => {
	const primaryGrey = useColor('PrimaryGrey');

	return (
		<Wrapper alignItems="center" justifyContent="space-between">
			<TextInput
				placeholder="Search..."
				style={styles.inputStyles}
				selectionColor={primaryGrey}
				autoCapitalize="none"
				autoCorrect={false}
				autoComplete="off"
				{...props}
			/>
			<Gutter spacing={0} hSpacing={0.2} />
		</Wrapper>
	);
};

const styles = StyleSheet.create({
	inputStyles: {
		flex: 1,
	},
});
