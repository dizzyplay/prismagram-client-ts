import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { MyTheme } from "./Theme";

export default createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
    }
    body{
      background-color:${(props: MyTheme) => props.theme.bgColor};
      color:${props => props.theme.blackColor}
    }
    a{
      color:${props => props.theme.blueColor}
      text-decoration:none;
     }
`;
