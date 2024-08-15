import React, { useEffect, useState } from "react";
import { CharacterModel } from "../../models/apiResponseModel";
import { HeroesServices } from "../../services/heros";
import { Container, HeroData, HeroImage } from "./HeroCard.ts";

function HeroCard() {
  const [heroesList, setHeroesList] = useState<CharacterModel[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await HeroesServices.getHeroesData();
      const heroData: CharacterModel[] = data.data.results.map(
        (hero: CharacterModel) => ({
          id: hero.id,
          name: hero.name,
          description: hero.description,
          thumbnail: {
            path: hero.thumbnail.path,
            extension: hero.thumbnail.extension,
          },
        })
      );
      setHeroesList(heroData);
    } catch (error) {
      console.log(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(heroesList);

  return (
    <Container>
      {heroesList.map((hero) => (
        <HeroData>
          <HeroImage
            src={hero.thumbnail.path + "." + hero.thumbnail.extension}
            alt="Foto do heroi"
          />
        </HeroData>
      ))}
    </Container>
  );
}

export default HeroCard;
