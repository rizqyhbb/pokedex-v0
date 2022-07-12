export const pokemonColorType = {
  rock: '#B69E31',
  ghost: '#70559B',
  steel: '#B7B9D0',
  water: '#6493EB',
  grass: '#74CB48',
  psychic: '#FB5584',
  ice: '#9AD6DF',
  dark: '#75574C',
  fairy: '#E69EAC',
  normal: '#AAA67F',
  fighting: '#C12239',
  flying: '#A891EC',
  poison: '#A43E9E',
  ground: '#DEC16B',
  bug: '#A7B723',
  fire: '#F57D31',
  electric: '#F9CF30',
  dragon: '#7037FF',
};

export const grayscale = {
  darkGrey: '#212121',
  mediumgrey: '#666666',
  lightGrey: '#E0E0E0',
  white: '#FFFFFF',
  background: '#F7F7F7',
};

export const colors = {
  pokemonColorType,
  ...grayscale,
};

export const fontSizes = [0, 8, 10, 12, 14, 24];
export const regular = 400;
export const bold = 700;
export const fontWeights = {
  regular,
  bold,
};

export const space = [0, 4, 8, 16, 32, 64];
