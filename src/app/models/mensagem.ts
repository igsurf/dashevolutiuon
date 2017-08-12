export class Mensagem {
  constructor(
    public _id: number,
    public text: String,
    public timestamp: Date,
    public user: String,
  ) { }
}
