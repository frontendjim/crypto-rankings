import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  display: flex;
  padding: 0 3rem;
`;

export const FirstColumn = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 33.333%;
  padding-left: 4rem;
`;

export const LastColumn = styled.div`
  display: flex;
  flex: 1 1 66.666%;
  flex-wrap: wrap;
  min-height: 28.8rem;
  position: relative;
`;

export const SummaryItem = styled.div`
  flex: 1 1 50%;
  padding: 5rem 0;
`;

export const Rank = styled.div`
  background-color: #1e385a;
  border-radius: 50%;
  color: #5aa7f2;
  font-size: 1.8rem;
  font-weight: bold;
  height: 4.5rem;
  line-height: 4.5rem;
  margin: 0 2rem;
  text-align: center;
  width: 4.5rem;
`;

export const Label = styled.div`
  color: #4d738f;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
`;
