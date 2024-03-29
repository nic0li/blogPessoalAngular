import { Comentario } from "./Comentario";
import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Publicacao {

  public id: number;
  public titulo: string;
  public texto: string;
  public data: Date;
  public usuario: Usuario;
  public tema: Tema;
  public comentario: Comentario[];
}
