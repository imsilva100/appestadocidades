import {Produto} from "./produto";
import {Nota} from "./nota";

export class ItensNota {

  id: bigint | undefined;
  nota: Nota | undefined;
  sequencia: number | undefined;
  produto: Produto | undefined;
  quantidade: number | undefined;
  valor: number | undefined

}

export class ItemNotaFiscal1 {

  id: bigint | undefined;
  nota: number | undefined;
  sequencia: number | undefined;
  produto: number | undefined;
  quantidade: number | undefined;
  valor: number | undefined

}

