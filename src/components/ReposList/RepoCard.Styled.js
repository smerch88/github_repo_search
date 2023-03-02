export const typographyStyle = isCardClicked => ({
  textOverflow: isCardClicked ? 'ellipsis' : 'unset',
  whiteSpace: isCardClicked ? 'nowrap' : 'unset',
  overflow: isCardClicked ? 'hidden' : 'unset',
});
