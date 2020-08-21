import { client } from "../db";
client.db("Famulis").collection("Services");
class Service {
  data: any;
  errors: string[];
  constructor(data: any) {
    this.data = data;
    this.errors = [];
  }
}

export default Service;
