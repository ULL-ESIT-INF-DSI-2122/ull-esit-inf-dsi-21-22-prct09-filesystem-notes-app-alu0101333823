import { Note } from "./note";
import * as chalk from 'chalk';
import * as fs from "fs";

/**
 * User class. Can manages notes
 */
export class User {
  private notes: Note[] = [];

  /**
   * Constructor. Creates a user by it's name and stores all of the current existing 
   * files for the user.
   * @param userName Name of the user
   */
  constructor(private userName: string) {    
    if (fs.existsSync(`src/usersFolder/${this.userName}`)) {
      const userFiles = fs.readdirSync(`src/usersFolder/${this.userName}/`);      
      userFiles.forEach((file) => {
        // const contenidoNota = fs.readFileSync(`src/usersFolder/${this.userName}/${file}`);
        const jsonObject = JSON.parse(fs.readFileSync(`src/usersFolder/${this.userName}/${file}`).toString());
        // console.log(notaJson);
        const newNote = new Note(jsonObject.title, jsonObject.body, jsonObject.colour);
        this.notes.push(newNote);
      });      
    } else {
      fs.mkdirSync(`src/usersFolder/${this.userName}`);
    }
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

  /**
   * Modifies a Note
   * @param title of the note 
   * @param body of the note
   * @param colour of the note
   */
  public modifyNote(title: string, body: string, colour: string) {
  }

  /**
   * Add's a new note for a user
   * @param title of the note
   * @param body of the note
   * @param colour of the note
   */
  public addNote(title: string, body: string, colour: string) {
    if (!fs.existsSync(`src/usersFolder/${this.userName}/${title}.json`)) {
      const note = new Note(title, body, colour);
      this.notes.push(note);
      fs.writeFile(`src/usersFolder/${this.userName}/${title}.json`, 
          `{\n\t"title": "${title}",
          \n\t"body": "${body}",
          \n\t"colour": "${colour}"\n}`, 
          () => {
            console.log(chalk.green('La nota ha sido añadida correctamente'));
          });
    } else {
      console.log(chalk.red('El fichero ya existe actualmente'));
    }
  }

  /**
   * Remove's a note from it's title
   * @param title of the note to be removed
   */
  public removeNote(title: string) {

  }

  /**
   * List all the notes of the user
   */
  public listNotes() {
    this.notes.forEach((note, index) => {
      const color = note.getColour();
      switch (color) {
        case "magenta":
          console.log(chalk.magenta(`${index + 1}) ${note.getTitle()}`));
          break;        
        case "blue":
          console.log(chalk.blue(`${index + 1}) ${note.getTitle()}`));
          break;
        case "green":
          console.log(chalk.green(`${index + 1}) ${note.getTitle()}`));
          break;
        case "white":
          console.log(chalk.white(`${index + 1}) ${note.getTitle()}`));
          break;
        case "cyan":
          console.log(chalk.cyan(`${index + 1}) ${note.getTitle()}`));
          break;
        case "yellow": 
          console.log(chalk.yellow(`${index + 1}) ${note.getTitle()}`));
          break;
        default:
          console.log(chalk.red(`Ningún color válido en la nota ${note.getTitle()}, bórrela`));
          break;
      }
    });
  }

  /**
   * Opens and reads all the content of a note
   * @param title of the note to read
   */
  public readNote(title: string) {
    
  }
}
