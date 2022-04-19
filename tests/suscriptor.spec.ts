import 'mocha';
import {expect} from 'chai';
import {Revista} from '../src/revista'
import {Suscriptor} from '../src/suscriptor';

const revista = new Revista('HOLA!', 20);
const sub = new Suscriptor('Juan Diego', 1111);
const sub2 = new Suscriptor('Tana', 2222);

revista.subscribe(sub);
revista.subscribe(sub2);

console.log(`La revista ${revista.getName()} lanza una nueva publicación!`);
revista.newPost();

console.log(`${sub2.getName()} se ha desuscrito de ${revista.getName()}!`);
revista.unsubscribe(sub2);

console.log(`La revista ${revista.getName()} lanza una nueva publicación!`);
revista.newPost();


describe('Pruebas de la Clase Suscriptor', () => {
  it('Crea bien las instancias de la clase', () => {
    expect(sub).to.be.instanceOf(Suscriptor);
  });

  it('Getters correctos', () => {
    expect(sub.getDni()).to.be.eq(1111);
    expect(sub.getName()).to.be.eq('Juan Diego');
  });

  it('Método update', () => {
    expect(sub.update(revista)).to.be.eql(undefined);
  });
});