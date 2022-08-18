import { LsiClient } from "services/lsi-client/lsiClient";

export interface API {
  api: APIValues;
}

export interface APIValues {
  lsi: LsiClient;
}
