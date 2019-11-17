import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const BackLink = styled(Link)`
  background-color: #e7f2fd;
  color: #66a7f2;
  border-radius: 50%;
  display: inline-block;
  font-size: 2.6rem;
  height: 3.4rem;
  line-height: 2.8rem;
  margin-right: 4rem;
  text-align: center;
  transition: all 0.1s ease-in;
  width: 3.4rem;

  &:hover {
    background-color: #66a7f2;
    color: #e7f2fd;
  }
`;

export const Currency = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0 2rem 0 1.5rem;

  small {
    color: #9bacbd;
    display: block;
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 0.5rem;
  }
`;

export const Price = styled.div`
  font-size: 2rem;
  font-weight: 400;

  span {
    color: #9bacbd;
    font-weight: 700;
    margin-right: 0.5rem;
    position: relative;
  }
`;
