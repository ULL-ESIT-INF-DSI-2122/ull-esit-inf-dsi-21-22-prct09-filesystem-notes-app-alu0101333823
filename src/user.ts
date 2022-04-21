import { Note } from "./note";

/**
 * User class. Can manages notes
 */
export class User {
  private notes: Note[] = [];

  constructor(private userName: string) {    
  }

  /**
   * @returns the user name
   */
  public getUserName() {
    return this.userName;
  }

  /**
   * @returns the notes of the user
   */
  public getNotes() {
    return this.notes;
  }

  public modifyNote() {

  }

  public addNote() {

  }

  public removeNote() {

  }

  public listNotes() {

  }

  public readNote() {
    
  }
}
