import React from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Theme from 'theme';
import { AppProvider, UserProvider } from '@realm/react';
import { AllTodo, Login } from 'screens';
import { TodoRealmContext } from 'models';

const App = () => {
	// Remove warning message from emulator
	LogBox.ignoreAllLogs();
	const { RealmProvider } = TodoRealmContext;

	return (
		<SafeAreaProvider>
			<AppProvider id={'application-1-ksdgv'}>
				<ThemeProvider theme={Theme}>
					<UserProvider fallback={Login}>
						<RealmProvider sync={{ flexible: true }}>
							<AllTodo />
						</RealmProvider>
					</UserProvider>
				</ThemeProvider>
			</AppProvider>
		</SafeAreaProvider>
	);
};

export default App;
