import { createGlobalStyle } from "styled-components";
import Thin from "../../assets/fonts/Roboto-Thin.ttf";
import Light from "../../assets/fonts/Roboto-Light.ttf";
import Regular from "../../assets/fonts/Roboto-Regular.ttf";
import Medium from "../../assets/fonts/Roboto-Medium.ttf";
import Bold from "../../assets/fonts/Roboto-Bold.ttf";
import Black from "../../assets/fonts/Roboto-Black.ttf";
import background from "../../assets/images/background.jpg";

export interface Colors {
  white: string;
  blackRussian: string;
  black: string;
  inputField: string;
  sliderBackground: string;
  midnightblue: string;
  electricPurple: string;
  mourningBlue: string;
  cetaceanBlue: string;
  tableborder: string;
  tablebutborder: string;
  tableheadercol: string;
  dashboardsearchbar: string;
  sidenavwrap: string;
  sidenavfc: string;
  threedotmodal: string;
  kycbuttonborder: string;
  wallethr: string;
  walletcontent: string;
  deepskyblue: string;
  cyan: string;
  tokenamount: string;
  error: string;
  tableresdata: string;
  tableresheader: string;
  tableresbackg: string;
  tablerestext: string;
  allocatehr: string;
  swapinput: string;
  swapright: string;
}
export const colors: Colors = {
  white: "#ffffff",
  blackRussian: "#000821",
  black: "#000000",
  inputField: "#211A78",
  sliderBackground: "#6c3dff",
  midnightblue: "#031643",
  electricPurple: "#9A00FF",
  mourningBlue: "#1241D4",
  cetaceanBlue: "#030e31",
  tableborder: "#08309b",
  tablebutborder: "#374262",
  tableheadercol: "#031545",
  dashboardsearchbar: "#030f2e",
  sidenavwrap: "#0045d7",
  sidenavfc: "#003cba",
  threedotmodal: "#142A63",
  kycbuttonborder: "#685C8D",
  wallethr: "#1247da",
  walletcontent: "#07194a",
  deepskyblue: "#00D1FF",
  cyan: "#00E0FF",
  tokenamount: "#5F77B4",
  error: "#FF0000",
  tableresdata: "#101A3B",
  tableresheader: "#031545",
  tableresbackg: "#050B1E",
  tablerestext: "#637DB5",
  allocatehr: "#2A3E4C",
  swapinput: "#10BBB0",
  swapright: "#D87C11",
};

export interface ScreenSizes {
  mediaXS: number;
  mediaS: number;
  mediaM: number;
  mediaL: number;
  mediaXL: number;
  mediaXXL: number;
  mediaLX: number;
  mediaLXX: number;
}
export const screenSizes: ScreenSizes = {
  mediaXS: 380,
  mediaS: 640,
  mediaM: 800,
  mediaL: 1024,
  mediaXL: 1280,
  mediaXXL: 1480,
  mediaLX: 1800,
  mediaLXX: 2000,
};

export const GlobalStyle = createGlobalStyle`
body, html {
  min-height: 100%;
}
body {
   background:url(${background})no-repeat;
  background-size: cover;
  height: 100%;
  /* background: #000821; */
}

@font-face {
  font-family: Thin;
  src: url(${Thin});
}
@font-face {
  font-family: Light; 
  src: url(${Light});
}
@font-face {
  font-family: Regular;
  src: url(${Regular});
}
@font-face {
  font-family: Medium;
  src: url(${Medium});
}
@font-face {
  font-family: Bold;
  src: url(${Bold});
}
@font-face {
  font-family: Black;
  src: url(${Black});
}
`;
