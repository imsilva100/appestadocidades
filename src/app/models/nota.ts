import {Cliente} from "./cliente";
import {ItensNota} from "./itens-nota";

export class Nota {
  id: bigint | undefined;
  numero: bigint | undefined;
  data: Date | undefined;
  itemNotaFiscal: ItensNota | undefined;
  cliente: Cliente | undefined;

}
