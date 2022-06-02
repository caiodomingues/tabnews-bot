import axios from "axios";
import { Content } from "../interfaces/content";
import { getPrevious, setPrevious } from "./filesystem";

export default async (): Promise<Content | null> => {
  const res = await axios
    .get("https://www.tabnews.com.br/api/v1/contents")
    .then((response) => {
      const previous = getPrevious();
      const current: Content = response.data[0];

      if (previous.postId !== current.id) {
        setPrevious({ postId: current.id });
        return current;
      }

      return null;
    });

  return res;
};
