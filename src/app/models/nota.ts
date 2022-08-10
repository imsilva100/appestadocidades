import {Cliente} from "./cliente";
import {ItensNota} from "./itens-nota";

export class Nota {
  id: bigint | undefined;
  numeroNota: bigint | undefined;
  dataNota: Date | undefined;
  itensNota: ItensNota | undefined;
  cliente: Cliente | undefined;

}
