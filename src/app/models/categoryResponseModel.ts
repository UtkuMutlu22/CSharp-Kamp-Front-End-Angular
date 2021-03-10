// tslint:disable-next-line:quotemark
import { Category } from "./category";
// tslint:disable-next-line:quotemark
import { ResponseModel } from "./reponseModel";

export interface CategoryResponseModel extends ResponseModel{
  data: Category[];
}
