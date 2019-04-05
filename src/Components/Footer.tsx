import * as React from "react";
// @ts-ignore
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 0px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${(props: mytheme) => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${(props: mytheme) => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">인스타 그램 클론입니다</Link>
      </ListItem>
    </List>
    <Copyright>Instaclone {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
