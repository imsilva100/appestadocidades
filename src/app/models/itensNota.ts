import {Produto} from "./produto";
import {NotaFiscal} from "./notaFiscal";

export class ItensNota {

  id: bigint | undefined;
  nota: NotaFiscal | undefined;
  sequencia: number | undefined;
  produto: Produto | undefined;
  quantidade: number | undefined;
  valor: number | undefined

}


