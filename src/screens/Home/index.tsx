import React from 'react';

import { useLanguage } from '../../context/language';

import { Search } from '../../components/Search';

import { Container, NoCityText } from './styles';
import { PrimaryButton } from '../../components/PrimaryButton';

export function Home() {
	const { dictionary } = useLanguage();

	return (
		<Container>
			<Search />

			<NoCityText>{dictionary.HOME.NO_CITY}</NoCityText>

			<PrimaryButton placeholder={dictionary.HOME.FIND_CITIES} icon="globe" />
		</Container>
	);
}
