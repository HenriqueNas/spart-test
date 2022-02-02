import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex: 1;
	align-items: center;

	padding: 56px 24px 0 24px;

	background-color: ${({ theme }) => theme.colors.background};
`;

export const NoCityText = styled.Text`
	margin-top: ${RFValue(64)}px;
	margin-bottom: ${RFValue(128)}px;

	font-size: ${RFValue(30)}px;
	font-family: ${({ theme }) => theme.fonts.medium};

	text-align: center;
	color: ${({ theme }) => theme.colors.title};
`;
