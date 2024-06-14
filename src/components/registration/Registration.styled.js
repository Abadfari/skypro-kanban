import styled from "styled-components";
import { Hover01 } from "../../shared/Shared.styled";
import { Link } from "react-router-dom";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 50px 60px;
  background: #ffffff;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
`;

export const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 20px;
`;

export const ModalTitle = styled.div`
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const ModalFormRegistration = styled.input`
  width: 248px;
  height: 30px;
  padding: 8px 10px 8px 10px;
  border-radius: 8px;
  border: 0.7px solid #94a6be66;
`;

export const Button = styled.button`
  ${Hover01}
  width: 248px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  padding: 8px, 10px, 8px, 10px;
  gap: 10px;
  & a {
    color: #ffffff;
  }
`;

export const ModalFormGroup = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #94a6be66;
`;

export const StyledLinkRegistration = styled(Link)`
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export const ModalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
