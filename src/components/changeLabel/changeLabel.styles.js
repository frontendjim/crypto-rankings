import styled from 'styled-components';

export const Container = styled.span`
  align-items: center;
  color: ${props => (props.positive ? '#00b200' : '#cc0000')};
  display: flex;
  font-weight: 700;
`;
