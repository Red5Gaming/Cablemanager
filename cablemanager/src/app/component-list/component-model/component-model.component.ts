export class components {
  public name: string;
  public description: string;
  public input: string;
  public output: string;

  constructor(name: string, desc: string, input: string, output: string) {

    this.name = name
    this.description = desc;
    this.input = input;
    this.output = output
  }

}
