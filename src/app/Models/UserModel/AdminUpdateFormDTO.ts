import {UpdateVendeurFormDTO} from "./UpdateVendeurFormDTO";

export interface AdminUpdateFormDTO extends UpdateVendeurFormDTO{
  id: number
  role: number
}
