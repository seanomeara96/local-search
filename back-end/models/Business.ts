import { businessCollection } from "../db";

interface businessData {
  name: string;
  locations: string[];
  email: string;
  number: string;
  openingHours: number[];
}
class Business {
  data: any;
  errors: string[];
  constructor(data: businessData) {
    this.data = data;
    this.errors = [];
  }
}
export default Business;
