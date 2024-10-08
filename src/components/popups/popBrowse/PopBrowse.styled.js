import styled from "styled-components";
import { colorsData } from "../../../lib/cardData";
import { Hover01, Hover03 } from "../../../shared/Shared.styled";
import { Link } from "react-router-dom";
// import { Subttl } from "../../../shared/Shared.styled.js";

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  ${(props) => colorsData[props.$color]}
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusTittle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: flex;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RadioInput = styled.input`
  appearance: none;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background-color: ${(props) => (props.$active ? "#94a6be" : "#ffffff")};
  color: ${(props) => (props.$active ? "#ffffff" : "#94a6be")};
  & p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ readOnly }) => (readOnly ? "#eaeef6" : "transparent")};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
  }

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
  }
`;

export const PopBrowseButtonBrowse = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  & button {
    margin-right: 8px;
  }
`;

export const ButtonBorder = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  ${Hover03}
`;

export const ButtonClose = styled.button`
  border-radius: 4px;
  background-color: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  ${Hover01}
`;

export const PopBrowseButtonEdit = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
`;

export const StatusLabel = styled.label`
  display: flex;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
`;
