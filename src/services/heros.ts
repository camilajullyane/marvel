import md5 from "md5";
import { api } from "../api/api";
import { AxiosPromise } from "axios";
import { apiResponseModel } from "../models/apiResponseModel";

const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY as string;
const privateKey = import.meta.env.VITE_APP_PRIVATE_KEY as string;
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const HeroesServices = {
  async getHeroesData(): AxiosPromise<apiResponseModel> {
    return await api.get(
      `/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
    );
  },
};
