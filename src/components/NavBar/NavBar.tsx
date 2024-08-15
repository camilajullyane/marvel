import { ParentContainer, NavContainer, Image, NavItem } from "./NavBar";

function NavBar() {
  return (
    <ParentContainer>
      <Image
        src="https://logospng.org/download/marvel/logo-marvel-256.png"
        alt="marvel logo"
      />
      <NavContainer>
        <NavItem>SOBRE</NavItem>
        <NavItem>COMICS</NavItem>
        <NavItem>COMICS</NavItem>
        <NavItem>COMICS</NavItem>
      </NavContainer>
    </ParentContainer>
  );
}

export default NavBar;
