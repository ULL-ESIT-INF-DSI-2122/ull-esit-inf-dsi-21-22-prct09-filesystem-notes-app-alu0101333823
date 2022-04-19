
import 'mocha';
import {expect} from 'chai';
import {Revista} from '../src/revista'
import { Suscriptor } from '../src/suscriptor';

const revista = new Revista('HOLA!', 20);
const sub = new Suscriptor('Juan Diego', 1111);

describe('Pruebas de la Clase Revista', () => {
  it('Crea bien las instancias de la clase', () => {
    expect(revista).to.be.instanceOf(Revista);
  });

  it('Getters correctos', () => {
    expect(revista.getName()).to.be.eq('HOLA!');
    expect(revista.getEdition()).to.be.eq(20);
    expect(revista.getPost()).to.be.eq(0);
    expect(revista.getSubscribers()).to.be.instanceOf(Array);
  });

  it('Método que suscribe', () => {
    expect(revista.subscribe(sub)).to.be.eql(undefined);
    // expect(revista.subscribe(sub)).to.throw(Error);
  });

  it('Método que desuscribe', () => {
    expect(revista.unsubscribe(sub)).to.be.eql(undefined);
    // expect(revista.unsubscribe(sub)).to.throw;
  });

  it('Método notify', () => {
    expect(revista.notify()).to.be.eql(undefined);
  });
});