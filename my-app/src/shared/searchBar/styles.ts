import styled from "styled-components";
import { colors } from "../table/theme";

export const SearchInputImageWrapper = styled.div`
  position: relative;
`;

export const SearchInputImage = styled.img`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const DashboardSearchBar = styled.input`
  width: 74%;
  height: 44px;
  border-radius: 22px;
  border: ${colors.tableheadercol};
  font-family: Medium;
  line-height: 20.56px;
  font-size: 14px;
  padding: 0px 34px;
  background-color: ${colors.dashboardsearchbar};
  outline: none;
  color: ${colors.white};
  ::placeholder {
    color: ${colors.white};
    opacity: 1;
  }
`;
