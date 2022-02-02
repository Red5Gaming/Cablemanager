export class components {
  public name: string;
  public desc: string;
  public input: string;
  public output: string;

  constructor(name: string, desc: string, input: string, output: string) {
    this.name = name;
    this.desc = desc;
    this.input = input;
    this.output = output;
  }
}
