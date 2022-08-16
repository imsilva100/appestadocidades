import {Produto} from "./produto";
import {Nota_fiscal} from "./nota_fiscal";

export class Itens_nota {

  id: bigint | undefined;
  nota: Nota_fiscal | undefined;
  sequencia: number | undefined;
  produto: Produto | undefined;
  quantidade: number | undefined;
  valor: number | undefined

}


