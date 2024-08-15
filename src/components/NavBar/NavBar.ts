import styled from "styled-components";

export const ParentContainer = styled.div`
  width: 100%;
  height: 12%;
  background-color: lightslategray;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  /* margin-right: 30px; */
  list-style: none;
  gap: 15px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 30px;
  padding-bottom: 8px;
`;

export const Image = styled.img`
  width: 105px;
  height: 90px;
  margin-left: 30px;
`;

export const NavItem = styled.li`
  font-family: "New Amsterdam", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  font-style: normal;
  color: #fff;
`;
