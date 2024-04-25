import React from "react";
import styled from 'styled-components';

const VariantImage = styled.img`
  margin-top: 70px;
  object-fit: cover;
  width: 250px;
  height: 175px;
`;

const VariantText = styled.p`
  font-size: 20px;
  margin-top: 5px;
`;

const RewardText = styled.p`
  font-size: 26px;
  margin: 70px;
`;

const Main = styled.div`
  display: flex;
  margin: 0 100px;
  height: 90vh;
  flex-direction: column;
  align-items: center;
  background-color: #e3ffee;
`;

const Congrats = styled.h1`
  color: black;
  margin: 40px 0 20px;
  font-size: 35px;
`;

const Choice = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
`;

const Variant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

function FinalPage() {
  return (
    <Main>
      <Congrats><b>Поздравляем, вы прошли игру!!!</b></Congrats>
      <Choice>
        <Variant>
          <VariantImage src="images/chelsea.jpg" />
          <VariantText>Челси</VariantText>
        </Variant>
        <Variant>
          <VariantImage src="images/patrick.jpg" />
          <VariantText>Патрик</VariantText>
        </Variant>
        <Variant>
          <VariantImage src="images/gerda.jpg" />
          <VariantText>Герда</VariantText>
        </Variant>
      </Choice>
      <RewardText>Выбирайте 🎉</RewardText>
    </Main>
  );
}

export default FinalPage;