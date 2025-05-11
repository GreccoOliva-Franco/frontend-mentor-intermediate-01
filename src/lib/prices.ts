import assert from "assert";

export class Price {
  static toFinancial(input: number) {
    assert(typeof input === "number", "Input must be a number");

    return (input / 100).toFixed(2);
  }
}
