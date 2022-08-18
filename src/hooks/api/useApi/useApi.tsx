import { lsiClientManufactured } from "services/lsi-client/lsiClient-factory";
import { APIValues } from "./types";

function useAPI(): APIValues {
  const api = { lsi: lsiClientManufactured };

  return api;
}

export { useAPI };
