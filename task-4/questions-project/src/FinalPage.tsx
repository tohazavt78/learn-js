import React from "react";

import { ANIMAL_VARIANTS } from "./utils/constant";
import {
  VariantImage,
  VariantText,
  RewardText,
  Main,
  Congrats,
  Choice,
  Variant,
} from "./FinalPage.styled";

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
