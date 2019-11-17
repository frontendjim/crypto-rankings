import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 11.5rem;
  padding: 0 2rem;
  position: relative;
`;

export const Logo = styled(Link)`
  color: #666;
  font-size: 4rem;
  font-weight: 300;

  strong {
    color: #555;
    font-weight: 700;
  }

  &:hover {
    color: #000;
  }
`;

export const LeftContainer = styled.div`
  display: inline-block;
`;

export const SwitchContainer = styled.div`
  margin-left: auto;
`;
