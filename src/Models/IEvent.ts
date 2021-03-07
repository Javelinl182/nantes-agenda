import { IFields } from './IFields';

export interface IEvent {
    datasetid:        string;
    recordid:         string;
    fields:           IFields;
    record_timestamp: Date;
}