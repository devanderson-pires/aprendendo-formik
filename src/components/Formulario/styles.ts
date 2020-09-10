import styled, { css } from "styled-components";
import { Form, Field } from "formik";

export const ContainerForm = styled.div`
  background: #f4f4f4;
  border-radius: 30px;
  max-width: 475px;
  width: 100%;
`;

export const StyledForm = styled(Form)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 64px;
`;

export const Title = styled.h2`
  color: #ef7d57;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

export const Input = styled(Field)`
  border: 1px solid #566c86;
  border-radius: 5px;
  color: #1a1c2c;
  font-size: 14px;
  outline: none;
  padding: 8px 12px;

  &:focus {
    border-color: #ef7d57;
    box-shadow: 0 1px 5px 1px rgba(239, 125, 87, 0.5);
  }

  ${({ erro }) =>
    erro &&
    css`
      border-color: #b13e53;
      box-shadow: 0 1px 5px 1px rgba(177, 62, 83, 0.5);
      color: #b13e53;

      &:focus {
        border-color: inherit;
        box-shadow: 0 1px 5px 1px rgba(177, 62, 83, 0.5);
      }
    `}
`;

export const MsgDeErro = styled.span`
  color: #b13e53;
  font-size: 12px;
  margin-top: 8px;
`;

export const Button = styled.button`
  background: #ef7d57;
  border: none;
  border-radius: 22.5px;
  color: #f4f4f4;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-top: 24px;
  padding: 12px 24px;
  text-transform: uppercase;
`;
