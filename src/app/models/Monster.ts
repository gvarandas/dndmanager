export default class Player {
  index: String;
  name: String;
  type: String;
  size: String;
  quantity: Number;

  constructor(nameParam: String = '', typeParam: String = '', sizeParam: String = '', quantity: Number = 0) {
    this.name = nameParam;
    this.type = typeParam;
    this.size = sizeParam;
    this.quantity = quantity;
  }
}
