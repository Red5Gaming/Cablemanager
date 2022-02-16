export class components {
  public name: string;
  public desc: string;
  public input: string;
  public output: string;
  public inNum: number
  public inputs: string[]

  constructor(name: string, desc: string, input: string, output: string, inNum: number, inputs: string[]) {
    this.name = name;
    this.desc = desc;
    this.input = input;
    this.output = output;
    this.inNum = inNum;
    this.inputs = inputs;
  }
}
