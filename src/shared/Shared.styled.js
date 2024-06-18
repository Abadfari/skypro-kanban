import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = css`
  &:hover {
    color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const Hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
    & a {
      color: #ffffff;
    }
  }
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Orange = styled.p`
  background-color: #ffe4c2;
  color: #ff6d00;
`;

export const Green = styled.p`
  background-color: #b4fdd1;
  color: #06b16e;
`;

export const Purple = styled.p`
  background-color: #e9d4ff;
  color: #9a48f1;
  //
`;

// export const Gray = styled.p`
//   background: #94a6be;
//   color: #ffffff;
// `;

// export const ActiveCategory = css`
//   opacity: 1 !important;
// `;
