import { useEffect, useState } from "react";
import { CharacterModel } from "../../models/apiResponseModel";
import { HeroesServices } from "../../services/heros";
import { Container, HeroData, HeroImage } from "./HeroCard.ts";
import { ring2 } from "ldrs";

function HeroCard() {
  ring2.register();
  const [heroesList, setHeroesList] = useState<CharacterModel[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

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
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(heroesList);

  // return (
  //   <Container>
  //     {loading ? (
  //       <HeroData>
  //         <Loading>
  //           <l-ring-2
  //             size="40"
  //             stroke="5"
  //             stroke-length="0.25"
  //             bg-opacity="0.1"
  //             speed="0.8"
  //             color="black"
  //           ></l-ring-2>
  //         </Loading>
  //       </HeroData>
  //     ) : (
  //       heroesList.map((hero: CharacterModel) => (
  //         <HeroData key={hero.id}>
  //           <HeroImage
  //             src={hero.thumbnail.path + "." + hero.thumbnail.extension}
  //             alt="Foto do heroi"
  //           />
  //         </HeroData>
  //       ))
  //     )}
  //   </Container>
  // );

  return (
    <Container>
      {heroesList.map((hero: CharacterModel) => (
        <HeroData key={hero.id}>
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
