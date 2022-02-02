import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 12px 16px;
	border-radius: 8px;

	background-color: ${({ theme }) => theme.colors.shape};
`;

export const Input = styled.TextInput`
	flex: 1;
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.text};
`;

export const SearchIcon = styled(Feather).attrs({
	name: 'search',
})`
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.text};
`;
