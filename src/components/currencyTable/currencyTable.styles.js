import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../../helpers/style';
import CryptoIcon from '../cryptoIcon';

export const Wrapper = styled.div`
  background-color: #fff;
  display: block;
  min-height: 50rem;
  position: relative;
`;

export const Row = styled(Link)`
  border-bottom: 1px solid #eef0f5;
  display: block;
  font-weight: 400;

  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

export const Head = styled.div`
  background-color: #ebf0f4;
  border-top: 1px solid #d5e1ea;
  border-bottom: 1px solid #d5e1ea;
  color: #999;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0 2rem;
  text-transform: uppercase;

  & > div {
    padding: 1rem;
  }
`;

export const Col = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

export const ColNum = styled.div`
  color: #999;
  flex: 0 0 3rem;
  font-weight: 700;
  text-align: left;
`;

export const ColChange = styled.div`
  justify-content: flex-end;
  display: flex;
  flex: 0 0 12rem;
`;

export const Inner = styled(Container)`
  align-items: center;
  display: flex;
  padding: 3rem 2rem;
`;

export const Currency = styled.span`
  color: #999;
  font-size: 2.2rem;
  font-weight: 700;
  margin-right: 0.5rem;
  position: relative;
  top: -0.2rem;
`;

export const NoResults = styled.div`
  font-size: 2rem;
  padding: 5rem 0;
  text-align: center;
`;

export const IconImg = styled(CryptoIcon)`
  margin-right: 1rem;
`;

export const LastUpdated = styled.div`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 2rem 0 5rem;
  text-align: center;
  text-transform: uppercase;
`;
