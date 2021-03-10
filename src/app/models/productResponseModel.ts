// tslint:disable-next-line:quotemark
import { Product } from "./product";
// tslint:disable-next-line:quotemark
import { ResponseModel } from "./reponseModel";

export interface ProductResponseModel extends ResponseModel{

  data: Product[];
}
