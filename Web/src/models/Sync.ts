import axios, { AxiosPromise } from "axios";

// Ensures type T needs to have an ID (creating a constraint)
interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  // Url will be passed in whenever sync is called
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    // Need a tsconfig file (tsc --init) to use optional properties (type is number or undefined, without the file the type is always number so it assumes the property will always be present)
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
