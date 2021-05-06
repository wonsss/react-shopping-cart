import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 7rem;
  height: 3.75rem;
`;

export const Input = styled.input`
  width: 64%;
  border-color: #dddddd;
  border-width: 0.125rem 0 0.125rem 0.125rem;
  border-style: solid;
  text-align: center;
  font-size: 1.5rem;

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Controller = styled.div`
  width: 36%;
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  border-color: #dddddd;
  border-width: ${(props) => (props.isUpward ? '0.125rem 0.125rem 0 0.125rem' : '0.125rem')};
  border-style: solid;
`;
