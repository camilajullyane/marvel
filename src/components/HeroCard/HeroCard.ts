import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  /* height: 100%; */
  background-color: #dc2626;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  /* flex-flow: row wrap; */
  /* align-items: center; */
  justify-content: center;
`;

export const HeroData = styled.div`
  width: 350px;
  height: 450px;
  background-color: #eab308;
  margin: 30px;
  border-radius: 10px;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 70%;
  padding: 20px;
`;

export const HeroInfo = styled.p`
  font-size: 1.2rem;
  color: black;
`;

export const Loading = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
