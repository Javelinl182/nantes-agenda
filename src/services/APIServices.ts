import axios from 'axios'
import Event from '../Models/Event'
import { AxiosResponse } from '../Models/AxiosGenerics'

export class APIServices {
  public static async getEvents (start: number): Promise<Event[]> {
    const APIResponse: AxiosResponse = await axios.get('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&rows=10&start=' + start)
    return APIResponse.data.records
  }
}
