import { servicesCollection } from "../db";
class Service {
  data: any;
  errors: string[];
  constructor(data: any) {
    this.data = data;
    this.errors = [];
  }
}

export default Service;
