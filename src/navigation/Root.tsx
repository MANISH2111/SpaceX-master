import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LaunchDetails, LaunchDashboard, Search } from 'screens';

export type RootStackParamList = {
	Dashboard: undefined;
	LaunchDetails: { flight_number: number };
	Search: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Dashboard"
				getComponent={() => LaunchDashboard}
			/>
			<Stack.Screen
				name="LaunchDetails"
				getComponent={() => LaunchDetails}
			/>
			<Stack.Screen name="Search" getComponent={() => Search} />
		</Stack.Navigator>
	);
};

export default RootStack;
