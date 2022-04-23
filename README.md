# Práctica 9: Manejo de ficheros con Node JS 
## Juan Marrero Domínguez alu0101333823
**[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101333823&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101333823)**
[![TestCoverage](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101333823/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101333823/actions/workflows/coveralls.yml)
[![Tests TDD](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101333823/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101333823/actions/workflows/node.js.yml)


### Introducción

En esta práctica trataremos de aprender a usar la API síncrona de Node JS mediante el manejo de ficheros. Se implementará una pequeña aplicación para el procesado de notas de texto. Se podrá añadir, modifcar, listar, leer y eliminar las diferentes notas que serán guardadas en ficheros JSON. Usaremos los paquetes __yargs__ y __chalk__ y la API proporcionada por Node. 

Una vez aprendamos sobre estos conceptos empezaremos con el desarrollo de la aplicación. Crearé dos clases básicas, ***Note*** y ***User***. La primera representará a las notas que guarden los usuarios, tienen su _título_, su _cuerpo_ y su _color_. Los usuarios tienen su propio nombre y a cada nombre le corresponderán unas notas. 

### Clase Note

Esta clase representará las notas de los usuarios, sólamente contiene 3 atributos con sus correspondientes _getters_ y _setters_: **title**, **body** y **colour**. Estos atributos son los strings que usaremos para crear las notas en formato JSON.

```ts
  /**
   * Note class. Represents the notes that the users will store
   */
  export class Note {
    /**
     * Constructor
     * @param title of the note 
     * @param body of the note 
     * @param colour of the note
     */
    constructor(private title: string, private body: string, 
      private colour: string) {}

    /**
     * @returns the title
     */
    public getTitle() {
      return this.title;
    }

    /**
     * @returns the colour
     */
    public getColour() {
      return this.colour;
    }

    /**
     * @returns the body
     */
    public getBody() {
      return this.body;
    }

    /**
     * Set's a new title
     * @param title new title to change
     */
    public setTitle(title: string) {
      this.title = title;
    }

    /**
     * Set's a new body
     * @param body new body to change
     */
    public setBody(body: string) {
      this.body = body;
    }

    /**
     * Set's a new colour
     * @param colour new colour to change
     */
    public setColour(colour: string) {
      this.colour = colour;
    }
  }
```

### Clase User

Representa a los usuarios. En el constructor se creará la carpeta en la que cada uno de los usuarios guardarán sus ficheros gracias al módulo **'fs'**. En caso de que se encuentre ya creada, se leerán todas las notas existentes en el directorio, guardándolas en la instancia objeto del usuario en concreto sobre el que se vaya a realizar cualquier operación.

Este usuario tendrá métodos para: 

  - Crear ficheros: para ello necesita los tres atributos de una nota, se los pasamos con los comandos _yargs_ (explicado esto más abajo) y con dicha información creará el fichero usando la API de Node JS. El formato será acomodado para los ficheros JSON sobre la misma escritura del fichero. En caso de que el fichero exista saltará un error por consola rojo indicando este incidente. ***NOTA:*** los únicos colores que se permiten para la escritura de ficheros son el amarillo, el magenta, el azul, el cyan y el blanco. El rojo y el verde estarán reservados para mensajes al usuario y el resto no se usarán.

  - Borrar ficheros: necesitará sólo del título del fichero. Se borrará tanto en el almacenamiento del objeto usuario como del árbol de directorios del proyecto. Se emplea el método **'fs.rm'** de la API de Node JS.

  - Leer fichero: a partir del título del fichero, se desplegará toda su información en el color de la propia nota.

  - Listar ficheros: se desplegarán todos los títulos de las notas del usuario en sus respectivos colores. 

  - Modificar notas: para realizar esta operación se requiere el título del fichero y sus parámetros que queramos cambiar. Si no quisiésemos cambiar alguno de los parámetros de la nota se dejaría vacío de la forma **' "" '**. 

  ```ts
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
          const jsonObject = JSON.parse(fs.readFileSync(`src/usersFolder/${this.userName}/${file}`).toString());
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
    * Modifies a Note
    * @param title of the note 
    * @param body of the note
    * @param colour of the note
    */
    public modifyNote(title: string, newTitle: string, body: string, colour: string) {
      if (fs.existsSync(`src/usersFolder/${this.userName}/${title}.json`)) {
        let index = 0;
        this.notes.forEach((note, i) => {
          if (note.getTitle() === title) {
            index = i;
          }
        });
        const note = this.notes[index];

        if (newTitle !== "") {
          note.setTitle(newTitle);
        }
        if (body !== "") {
          note.setBody(body);
        }
        if (colour !== "") {
          note.setColour(colour);
        }
        this.removeNote(title);
        this.addNote(note.getTitle(), note.getBody(), note.getColour());
      } else {
        console.log(chalk.red("Fichero no encontrado"));
      }
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
      if (!fs.existsSync(`src/usersFolder/${this.userName}/${title}.json`)) {
        console.log(chalk.red('El fichero no existe'));
      } else {
        this.notes.forEach((note, i) => {
          if (note.getTitle() === title ) {
            this.notes.splice(i, 1); 
          }
        });
        fs.rm(`src/usersFolder/${this.userName}/${title}.json`, () => {
          console.log(chalk.green(`El fichero ${title} ha sido eliminado satisfactoriamente!`));
        });
      }
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
      if (!fs.existsSync(`src/usersFolder/${this.userName}/${title}.json`)) {
        console.log(chalk.red('El fichero no existe'));
      } else {
        this.notes.forEach((note) => {
          if (note.getTitle() === title) {
            switch (note.getColour()) {
              case "magenta":
                console.log(chalk.magenta(`${note.getTitle()}: `));
                console.log(chalk.magenta(`\t${note.getBody()}`));
                break;        
              case "blue":
                console.log(chalk.blue(`${note.getTitle()}: `));
                console.log(chalk.blue(`\t${note.getBody()}`));
                break;
              case "white":
                console.log(chalk.white(`${note.getTitle()}: `));
                console.log(chalk.white(`\t${note.getBody()}`));
                break;
              case "cyan":
                console.log(chalk.cyan(`${note.getTitle()}: `));
                console.log(chalk.cyan(`\t${note.getBody()}`));
                break;
              case "yellow": 
                console.log(chalk.yellow(`${note.getTitle()}: `));
                console.log(chalk.yellow(`\t${note.getBody()}`));
                break;
              default:
                console.log(chalk.red(`Ningún color válido en la nota ${note.getTitle()}, bórrela`));
                break;
            }
          }
        });
      }
    }
  }
  ```

Estas clases han sido desarrolladas mediante la metodología TDD. La salida de las pruebas es muy larga, así que no adjudicaré captura de ello. Están apoyadas de integración contínua gracias a Coveralls y las GitHub actions. 

### Fichero App y demostración de comandos

El fichero app.ts contiene la recogida de comandos otorgados por el usuario con el paquete _yargs_. Cada uno de los comandos que mostraré de ejemplo a continuación llamarán al método de usuario correspondiente:

  - Creación de ficheros
  
    - Crear el fichero

    - No se puede fichero existente

    - Ficheros en distintos directorios según usuario

    - Un usuario solo puede acceder a sus propios ficheros

  - Lectura de ficheros



  - Listado de ficheros


  - Modificación de ficheros



  - Eliminación del fichero
