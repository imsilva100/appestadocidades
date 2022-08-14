import {Cliente} from "./cliente";
import {ItensNota} from "./itens-nota";

export class Nota {
  id: bigint | undefined;
  numero_nota: bigint | undefined;
  data_nota: Date | undefined;
  itensNota: ItensNota | undefined;
  cliente_id: Cliente | undefined;

}
