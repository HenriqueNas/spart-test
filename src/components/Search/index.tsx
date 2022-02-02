import React from 'react';
import { useLanguage } from '../../context/language';

import { Container, Input, SearchIcon } from './styles';

export function Search() {
	const { dictionary } = useLanguage();

	return (
		<Container>
			<Input placeholder={dictionary.COMMON.SEARCH} />
			<SearchIcon />
		</Container>
	);
}
