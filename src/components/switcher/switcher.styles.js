import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  position: relative;
`;

export const List = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 11px -5px #000;
  position: absolute;
  right: -0.5rem;
  top: 100%;
  width: 10rem;
  z-index: 499;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  font-size: 1.6rem;
  padding: 1rem;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Current = styled.div`
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem;
  position: relative;
  z-index: 500;
`;
