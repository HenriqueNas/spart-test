import React from 'react';

import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { useLanguage } from '../context/language';

import { Generic } from '../screens/Generic';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
	const { dictionary } = useLanguage();
	const theme = useTheme();

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.text,
				tabBarLabelPosition: 'beside-icon',
				tabBarHideOnKeyboard: true,
				tabBarStyle: {
					borderTopEndRadius: 20,
					borderTopStartRadius: 20,
					height: 60,
					paddingTop: 10,
					paddingBottom: 10,
					backgroundColor: theme.colors.shape,
				},
			}}
		>
			<Screen
				name={dictionary.TAB.HOME}
				component={Home}
				options={{
					tabBarIcon: ({ size, color, focused }) => (
						<Feather
							name={'home'}
							size={focused ? size + 2 : size}
							color={color}
						/>
					),
				}}
			/>
			<Screen
				name={dictionary.TAB.SETTINGS}
				component={Generic}
				options={{
					tabBarIcon: ({ size, color, focused }) => (
						<Feather
							name={'settings'}
							size={focused ? size + 2 : size}
							color={color}
						/>
					),
				}}
			/>
		</Navigator>
	);
}
