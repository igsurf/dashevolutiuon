export class Auditoria {
  constructor(
    public id: number,
    public nome: String,
    public dataHora: Date,
    public status: String,
    public url: String
  ) { }
}
