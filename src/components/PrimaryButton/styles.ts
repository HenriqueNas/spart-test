import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 12px 16px;
	border-radius: 8px;

	background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonText = styled.Text`
	margin-right: 16px;
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.background};
`;

export const ButtonIcon = styled(Feather)`
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.background};
`;
