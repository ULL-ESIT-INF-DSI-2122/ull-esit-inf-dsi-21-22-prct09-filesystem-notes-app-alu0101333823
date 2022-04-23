import {expect} from 'chai';
import 'mocha';
import {Note} from '../src/note';

const note = new Note("Titulo", "Cuerpo", "Color");

describe('Pruebas de la clase Note', () => {
  it('Es instancia de su clase', () => {
    expect(note).to.be.instanceOf(Note);
  });

  it('Getters correctos', () => {
    expect(note.getBody()).to.be.eq("Cuerpo");
    expect(note.getTitle()).to.be.eq("Titulo");
    expect(note.getColour()).to.be.eq("Color");
  });

  it('Setters correctos', () => {
    expect(note.setBody("Cuerpo")).to.be.eql(undefined);
    expect(note.setTitle("Titulo")).to.be.eql(undefined);
    expect(note.setColour("Color")).to.be.eql(undefined);
  });
});
