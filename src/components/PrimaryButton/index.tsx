import React from 'react';

import { Feather } from '@expo/vector-icons';

import { Container, ButtonText, ButtonIcon } from './styles';

const glyphmap = Feather.getRawGlyphMap();

type GlyphMap<T> = {
	[Properties in keyof T]: number;
};

type IconKeys = keyof GlyphMap<typeof glyphmap>;

interface Props {
	placeholder: string;
	icon: IconKeys;
}

export function PrimaryButton({ placeholder, icon }: Props) {
	return (
		<Container>
			<ButtonText>{placeholder}</ButtonText>
			<ButtonIcon name={icon} />
		</Container>
	);
}
