import {Revista} from './revista'

/**
 * Interface for observer classes
 */
interface Observer {
  update(revista: Revista): void;
}

/**
 * Clase Suscriptor que será observadora de 
 * revista.
 */
export class Suscriptor implements Observer {

  /**
   * Constructor de la clase Suscriptor
   * @param name nombre de la persona
   * @param dni dni de la persona
   */
  constructor(private name: string, private dni: number) {
  }

  /**
   * Gets the name
   */
  getName() {
    return this.name;
  }

  /**
   * Gets the dni
   */
  getDni() {
    return this.dni;
  }

  /**
   * Notifica la actualización sobre la revista a la que está suscrita el
   * propio suscriptor
   * @param revista revista de la que se actualiza la información
   */
  update(revista: Revista) {
    if (revista instanceof Revista) {
      console.log(`Se ha publicado una nueva revista de una de tus suscripciones ${this.name}`);
    }
  }
}
