export default class Player {
  name: String;
  race: String;
  class: String;

  constructor(nameParam: String = '', raceParam: String = '', classParam: String = '') {
    this.name = nameParam;
    this.race = raceParam;
    this.class = classParam;
  }
}
