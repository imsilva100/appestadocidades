import {Cliente} from "./cliente";
import {Itens_nota} from "./itens_nota";

export class Nota_fiscal {
  id: bigint | undefined;
  numero_nota: bigint | undefined;
  data_nota: Date | undefined;
  itensNota: Itens_nota | undefined;
  cliente_id: Cliente | undefined;

}
