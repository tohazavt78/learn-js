import React from "react";
import {
  VariantImage,
  VariantText,
  RewardText,
  Main,
  Congrats,
  Choice,
  Variant,
} from "./FinalPage.styled";

const ANIMAL_VARIANTS = [
  {
    src: "images/chelsea.jpg",
    name: "Челси",
  },
  {
    src: "images/patrick.jpg",
    name: "Патрик",
  },
  {
    src: "images/gerda.jpg",
    name: "Герда",
  },
];

function FinalPage() {
  return (
    <Main>
      <Congrats>
        <b>Поздравляем, вы прошли игру!!!</b>
      </Congrats>
      <Choice>
        {ANIMAL_VARIANTS.map((variant, index) => (
          <Variant key={index}>
            <VariantImage src={variant.src} />
            <VariantText>{variant.name}</VariantText>
          </Variant>
        ))}
      </Choice>
      <RewardText>Выбирайте 🎉</RewardText>
    </Main>
  );
}

export default FinalPage;
