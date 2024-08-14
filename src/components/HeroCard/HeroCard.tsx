import React, { useEffect, useState } from "react";
import { CharacterModel } from "../../models/apiResponseModel";
import { HeroesServices } from "../../services/heros";

const HeroCard: React.FC = () => {
  const [heroesList, setHeroesList] = useState<CharacterModel[]>([]);
  const [error, setError] = useState<string | null>(null);

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
      setError("Failed to fetch heroes data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(heroesList);

  return (
    <div>
      {heroesList.length > 0 ? (
        heroesList.map((hero) => (
          <div key={hero.id}>
            <h2>{hero.name}</h2>
            <p>{hero.description}</p>
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default HeroCard;
