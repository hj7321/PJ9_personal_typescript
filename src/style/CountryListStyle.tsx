import styled from "styled-components";

interface StSectionProps {
  $top?: boolean;
}

export const StSection = styled.section<StSectionProps>`
  margin-top: ${(props) => props.$top && "20px"};
  margin-bottom: 40px;
`;

export const StDiv = styled.div`
  margin-top: 20px;
`;

export const StSelect = styled.select`
  margin-left: 40px;
  height: 30px;
`;
