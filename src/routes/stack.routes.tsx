import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Generic } from '../screens/Generic';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function FeedStackNavigator() {
	return (
		<Navigator
			initialRouteName="Feed"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="Feed" component={Generic} />
			<Screen name="Album" component={Generic} />
		</Navigator>
	);
}

export type RootStackParamList = {
	Feed: undefined;
	Album: {
		title: string;
		info: {
			'pt-BR': string;
			'en-US': string;
			'fr-FR': string;
		};
		name: string;
		pics: string[];
	};
};
