import {Produto} from "./produto";
import {Nota} from "./nota";

export class ItensNota {

  id: bigint | undefined;
  notaFiscal: Nota | undefined;
  sequencial: number | undefined;
  produto: Produto | undefined;
  quantidade: number | undefined;
  valorTotal: number | undefined

}

export class ItemNotaFiscal1 {

  id: bigint | undefined;
  notaFiscal: number | undefined;
  sequencial: number | undefined;
  produto: number | undefined;
  quantidade: number | undefined;
  valorTotal: number | undefined

}

