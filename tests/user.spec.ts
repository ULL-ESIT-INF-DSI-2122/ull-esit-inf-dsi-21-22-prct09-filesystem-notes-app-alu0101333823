import {expect} from 'chai';
import 'mocha';
import {User} from '../src/user';

const user = new User("Pruebas");

describe('Pruebas de la clase User', () => {
  it('Es instancia de su clase', () => {
    expect(user).to.be.instanceOf(User);
  });

  it('Getters correctos', () => {
    expect(user.getUserName()).to.be.eq("Pruebas");
  });

  it('Método para añadir notas', () => {
    expect(user.addNote("Cuerpo", "Cuerpo", "cyan")).to.be.eql(undefined);
    expect(user.addNote("Cuerpo2", "Cuerpo", "yellow")).to.be.eql(undefined);
    expect(user.addNote("Cuerpo3", "Cuerpo", "blue")).to.be.eql(undefined);
    expect(user.addNote("Cuerpo4", "Cuerpo", "white")).to.be.eql(undefined);
    expect(user.addNote("Cuerpo5", "Cuerpo", "magenta")).to.be.eql(undefined);
  });

  it('Método para modificar notas', () => {
    expect(user.modifyNote("Cuerpo", "", "Cuerpo", "cyan")).to.be.eql(undefined);
  });
  
  it('Método para listar notas', () => {
    expect(user.listNotes()).to.be.eql(undefined);
  });
  
  it('Método para leer notas', () => {
    expect(user.readNote("Cuerpo")).to.be.eql(undefined);
    expect(user.readNote("Cuerpo2")).to.be.eql(undefined);
    expect(user.readNote("Cuerpo3")).to.be.eql(undefined);
    expect(user.readNote("Cuerpo4")).to.be.eql(undefined);
    expect(user.readNote("Cuerpo5")).to.be.eql(undefined);
  });
  
  it('Método para eliminar notas', () => {
    expect(user.removeNote("Cuerpo")).to.be.eql(undefined);
    expect(user.removeNote("Cuerpo2")).to.be.eql(undefined);
    expect(user.removeNote("Cuerpo3")).to.be.eql(undefined);
    expect(user.removeNote("Cuerpo4")).to.be.eql(undefined);
    expect(user.removeNote("Cuerpo5")).to.be.eql(undefined);
  });
});
