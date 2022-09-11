import {Cliente} from "./cliente";
import {ItensNota} from "./itensNota";

  export class NotaFiscal {
  id: bigint | undefined;
  numeroNota: bigint | undefined;
  dataNota: Date | undefined;
  itensNota: ItensNota | undefined;
  cliente_id: Cliente | undefined;

}
