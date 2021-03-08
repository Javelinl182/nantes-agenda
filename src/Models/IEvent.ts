/**
 * Class representing an event as it is presented in the API's response.
 * The generic has been made via https://www.quicktype.io, and the json
 * response of the API.
 */

import { IFields } from './IFields';

export interface IEvent {
    datasetid:        string;
    recordid:         string;
    fields:           IFields;
    record_timestamp: Date;
}