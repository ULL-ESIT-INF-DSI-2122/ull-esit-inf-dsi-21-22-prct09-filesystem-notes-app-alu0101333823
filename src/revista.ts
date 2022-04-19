import {Suscriptor} from './suscriptor'

/**
 * Interface for observable classes
 */
interface Observable {
  subscribe(subscriber: Suscriptor): void;
  unsubscribe(subscriber: Suscriptor): void;
  notify(): void;
}

/**
 * Clase revista que será observada por la clase
 * Suscriptor
 */
export class Revista implements Observable {
  private subscribers: Suscriptor[];
  private posts: number; 

  /**
   * Constructor de la clase Revista
   * @param name nombre de la revista
   * @param edition número de edición
   * @param subscribers conjunto de suscriptores de la revista
   * @param posts número de publicaciones de la revista 
   */
  constructor(private name: string, private edition: number) {
    this.subscribers = [];
    this.posts = 0;
  }

  /**
   * Gets the name
   */
  getName() {
    return this.name;
  }

  /**
   * Gets the edition
   */
  getEdition() {
    return this.edition;
  }

  /**
   * Gets the subscribers
   */
  getSubscribers() {
    return this.subscribers;
  }

  /**
   * Gets the posts
   */
  getPost() {
    return this.posts;
  }

  /**
   * Añade al array subscribers un suscriptor
   * @param subscriber suscriptor a añadir
   */
  subscribe(suscriptor: Suscriptor) {
    if (this.subscribers.includes(suscriptor)) {
      throw new Error('The subscriber had already been subscribed');
    } else {
      this.subscribers.push(suscriptor);
    }
  }

  /**
   * Elinima un suscriptor de la base de datos de Revista
   * @param suscriptor el suscriptor a eliminar
   */
  unsubscribe(suscriptor: Suscriptor) {
    const index = this.subscribers.indexOf(suscriptor);
    if (index === -1) {
      throw new Error('The subscriber has not been subscribed');
    } else {
      this.subscribers.splice(index, 1);
    }
  }

  /**
   * Método que notifica a los suscriptores de alguna actualización 
   * en la revista
   */
  notify() {
    this.subscribers.forEach((subscriber) => subscriber.update(this));
  }

  /**
   * Función que publica una nueva edición de la revista y avisa a sus 
   * suscriptores
   */
  newPost() {
    this.posts++;
    this.notify();
  }
}