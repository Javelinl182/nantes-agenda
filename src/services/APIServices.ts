import axios from 'axios'
import { IEvent } from '../Models/IEvent'
import { AxiosResponse } from '../Models/AxiosGenerics'

export class APIServices {
  public static async getEvents (): Promise<IEvent[]> {
    const APIResponse: AxiosResponse = await axios.get('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&rows=10')
    return APIResponse.data.records
  }
}
