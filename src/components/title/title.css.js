import MEDIA from 'helpers/mediaTemplates';
import styled from 'styled-components';

export const Text = styled.span`
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '500';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '6rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '4.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
