import md5 from "md5";
import { api } from "../api/api";
import { AxiosPromise } from "axios";
import { apiResponseModel } from "../models/apiResponseModel";

const publicKey = "78a792eecc864e97f2e1a9ce44c85f2c";
const privateKey = "2be91eb5bd95847c3a728c94824c55550436a662";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const HeroesServices = {
  async getHeroesData(): AxiosPromise<apiResponseModel> {
    return await api.get(
      `/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
    );
  },
};
