import { PublicationClient } from './publication/publicationClient';

class LsiClient {
  publications: PublicationClient;

  constructor(publicationClient: PublicationClient) {
    this.publications = publicationClient;
  }
}

export { LsiClient };
