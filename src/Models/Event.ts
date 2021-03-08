/**
 * Class representing an event as it is presented in the API's response.
 * The generic has been made via https://www.quicktype.io, and the json
 * response of the API.
 */

import { Fields } from './Fields';

export interface Event {
    datasetid: string;
    recordid: string;
    fields: Fields;
    record_timestamp: Date;
}