import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Title = styled.h1`
  color: #471ca9;
`;

export const Description = styled.p`
  color: orange;
  margin-bottom: 20px;
`;

export const Btn = styled(Link)`
  margin-left: 15px;
  display: inline-flex;
  justify-content: center;
  background-color: #a21ca9;
  color: #fff;
  padding: 10px 16px;
  border: none;
  font-family: inherit;
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #471ca9;
  }
`;