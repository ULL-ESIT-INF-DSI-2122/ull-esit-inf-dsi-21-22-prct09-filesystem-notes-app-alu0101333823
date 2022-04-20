import {MapReduceAlgorithm} from './MapReduceAlgorithm';

export class ProdMapReduce extends MapReduceAlgorithm {
  constructor(protected myArray: number[]) {
    super(myArray);
  }

  /**
   * Particulary implementation for reduce
   * @param array array to be reduced
   */
  protected reduce(array: number[]): number {
    let result: number = 1;
    array.forEach(n => {
      result *= n;
    });
    return result;
  }
}