import styled from "styled-components";
import { colors, screenSizes } from "./theme";
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
export const TableRow = styled.tr`
  background-color: ${colors.mourningBlue};
  color: ${colors.white};
`;

export const TableHeader1 = styled.th`
  border-bottom: 1px solid ${colors.black};
  font-family: Bold;
  @media only screen and (max-width: ${screenSizes.mediaXL}px) {
    :nth-child(n + 4) {
      display: none;
    }
    font-size: 14px;
    padding: 13px 0px;
    background-color: ${colors.tableresheader};
    :nth-child(1),
    :nth-child(3) {
      width: 100px;
    }
  }
  @media only screen and (min-width: ${screenSizes.mediaXL}px) {
    padding: 15px 20px;
    font-size: 20px;
    text-align: left;
    background-color: ${colors.cetaceanBlue};
    :nth-child(n) {
      display: table-cell;
    }
  }
`;

export const TableData = styled.td`
  border-bottom: 1px solid ${colors.black};
  text-align: center;
  font-family: Regular;
  @media only screen and (max-width: ${screenSizes.mediaXL}px) {
    :nth-child(n + 4) {
      display: none;
    }
    font-size: 12px;
    padding: 13px 0px;
    background-color: ${colors.tableresdata};
    :nth-child(1),
    :nth-child(3) {
      width: 100px;
    }
  }
  @media only screen and (min-width: ${screenSizes.mediaXL}px) {
    padding: 15px 20px;
    font-size: 16px;
    text-align: left;
    background-color: ${colors.cetaceanBlue};
    :not(:first-child):not(:last-child) {
      width: 40%;
      text-align: left;
    }
    :nth-child(n) {
      display: table-cell;
    }
    :nth-child(1) {
      /* width: 160px; */
    }
    :last-of-type {
      width: 150px;
      padding: 0;
    }
  }
`;

export const TableHeaderWrapper = styled.div`
  height: 78px;
  background-color: ${colors.tableheadercol};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  @media only screen and (max-width: ${screenSizes.mediaXL}px) {
    display: none;
  }
  @media only screen and (min-width: ${screenSizes.mediaXL}px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  width: 94%;
  border: 1px solid ${colors.tableborder};
`;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0px;
`;

interface SideProps {
  dashboardtext?: boolean;
}
export const TableHeaderText = styled.div<SideProps>`
  font-size: ${({ dashboardtext }) => (dashboardtext ? "21px" : "18px")};
  font-family: Bold;
  color: ${colors.white};
  margin-left: 10px;
`;
export const DashboardHeaderOption1 = styled.div`
  font-size: 16px;
  font-family: Bold;
  color: ${colors.white};
  text-align: right;
`;
export const DashboardHeaderOption2 = styled.div`
  font-size: 24px;
  font-family: Bold;
  color: ${colors.white};
`;

export const ExtendedTableRow = styled.tr`
  @media only screen and (min-width: ${screenSizes.mediaXL}px) {
    display: none;
  }
`;

//add collapsable button
export const CollapseIcon = styled.img<any>`
  transform: ${({ caretUp }) => (!caretUp ? "rotate(0deg)" : "rotate(180deg)")};
  transition: transform 600ms ease-in-out;
  width: 18px;
  height: 10px;
  margin-left: 22px;
  cursor: pointer;
`;
// css for search wrapper
export const SearchBarWrapper = styled.div<any>`
  display: flex;
  align-items: center;
  align-items: ${(claim) => (claim ? "space-between" : "center")};
  width: ${(claim) => (claim ? "371" : "271")};
`;

export const CollapseContent = styled.div<any>`
  height: ${(props) => (props.toggle ? "100%" : "0")};
  overflow: hidden;
  /* transition: 600ms; */
`;
