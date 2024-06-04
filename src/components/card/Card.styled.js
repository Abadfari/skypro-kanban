import styled from "styled-components";
import { colorsData } from "../../lib/cardData";

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  ${(props) => colorsData[props.$color]};

  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;
