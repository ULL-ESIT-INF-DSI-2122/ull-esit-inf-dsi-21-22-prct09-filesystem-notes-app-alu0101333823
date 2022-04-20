import {expect} from 'chai';
import 'mocha';
import {MapReduceAlgorithm} from '../src/MapReduceAlgorithm';
import {DivMapReduce} from '../src/DivMapReduce';

const mapReduce = new DivMapReduce([1, 2, 3, 4]);

describe('Pruebas de la clase DivMapReduce', () => {
  it('Es clase hija de MapReduceAlgorithm', () => {
    expect(mapReduce).to.be.instanceOf(MapReduceAlgorithm);
  });

  it('Ejecutamos run() y sus valores deben ser los correctos', () => {
    mapReduce.run();
    expect(mapReduce.getMyArray()).to.be.eql([2,4,6,8]);
    expect(mapReduce.getReducedValue()).to.be.eq(6);
  });
});