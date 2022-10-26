import { useApp, Realm } from '@realm/react';
import { LoginInput } from 'components/app/LoginInput';
import { Gutter, Typography } from 'components/atoms';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
	flex: 1;
	margin: 100px 50px;
`;

const CButton = styled.TouchableOpacity`
	background: ${(props) => props.theme.colors.grey4};
	width: 150px;
	height: 40px;
	border: 1px solid;
	border-radius: 20px;
	justify-content: center;
	align-self: center;
`;

const Login = () => {
	const app = useApp();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleRegister = useCallback(async () => {
		try {
			await app.emailPasswordAuth.registerUser({ email, password });
		} catch (e) {
			console.log('Error registering', e);
		} finally {
			const credentials = Realm.Credentials.emailPassword(
				email,
				password,
			);
			await app.logIn(credentials);
		}
	}, [email, password, app]);

	return (
		<Wrapper>
			<Typography textAlign="center">Login To Your Realm Todo</Typography>
			<Gutter spacing={2} />
			<LoginInput
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
			/>
			<Gutter />
			<LoginInput
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Gutter spacing={2} />
			<CButton onPress={handleRegister}>
				<Typography textAlign="center">Login</Typography>
			</CButton>
		</Wrapper>
	);
};

export { Login };
