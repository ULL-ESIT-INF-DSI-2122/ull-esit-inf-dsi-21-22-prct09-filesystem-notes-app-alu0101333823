
// export abstract class MapReduceAlgorithm {
//   private reducedValue: number = 0;  
//   /**
//    * Class constructor
//    * @param myArray array of values
//    */
//   constructor(protected myArray: number[]) {}

//   /**
//    * Defines the skeleton of the algorithm
//    */
//   public run() {
//     // Operación map
//     this.myArray = this.map(this.mapFunction);
//     // Operación reduce sobre map
//     this.reducedValue = this.reduce(this.myArray);
//   }

//   /**
//    * Function that will execute map(). Doubles the value
//    * of each element of the array
//    */
//   protected mapFunction(num: number) {
//     return num * 2;
//   }

//   /**
//    * Returns an array after making it some functionality on it
//    */
//   protected map(mapFuction: { (num: number): number; (arg0: number): number; }): number[] {
//     const newArr: number[] = [];
//     this.myArray.forEach(number => {
//       newArr.push(mapFuction(number));
//     });
//     return newArr;
//   }

//   /**
//    * @returns reducedValue
//    */
//   getReducedValue() {
//     return this.reducedValue;
//   }

//   /**
//    * @returns myArray
//    */
//   getMyArray() {
//     return this.myArray;
//   }

//   /**
//    * Method that reduces the array to one value
//    * @param array to be reduced
//    */
//   protected abstract reduce(array: number[]): number;
// }
