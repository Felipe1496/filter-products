import { LsiClient } from './lsiClient';
import { PublicationClient } from './publication/publicationClient';

const publicationClient = new PublicationClient();

const lsiClientManufactured = new LsiClient(publicationClient);

export { lsiClientManufactured };
