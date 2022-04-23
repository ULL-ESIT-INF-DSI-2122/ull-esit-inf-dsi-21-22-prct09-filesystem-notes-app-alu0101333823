import { User } from './user';
import * as chalk from 'chalk';
import * as yargs from 'yargs';

/**
 * Add command. Allows to create a new note for a user
 */
yargs.command( {
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    user: {
      describe: 'User',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' &&
      typeof argv.body === 'string' && typeof argv.color === 'string') {
      const user = new User(argv.user);
      user.addNote(argv.title, argv.body, argv.color);
    } else {
      console.log(chalk.red('Se ha producido algún error'));
    }
  },
});

/**
 * Modify command. Allows to modify a existing note from a user
 */
yargs.command( {
  command: 'mod',
  describe: 'Modifies a note',
  builder: {
    user: {
      describe: 'User',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' && 
      typeof argv.body === 'string' && typeof argv.color === 'string') {
      const user = new User(argv.user);
      user.modifyNote(argv.title, argv.body, argv.color);
      console.log(chalk.green('Se ha modificado una nota!'));
    } else {
      console.log(chalk.red('Se ha producido algún error'));
    }
  },
});

/**
 * Remove command. Deletes an existing note from a user
 */
yargs.command( {
  command: 'del',
  describe: 'Removes a note',
  builder: {
    user: {
      describe: 'User',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      const user = new User(argv.user);
      user.removeNote(argv.title);
      console.log(chalk.green('Se ha borrado la nota!'));
    }
  },
});

/**
 * List command. List all the notes from a user
 */
yargs.command( {
  command: 'list',
  describe: 'List notes from a user',
  builder: {
    user: {
      describe: 'User',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      const user = new User(argv.user);
      user.listNotes();
    }
  },
});

/**
 * Read command. Read a note from a user
 */
yargs.command( {
  command: 'read',
  describe: 'Read a note',
  builder: {
    user: {
      describe: 'User',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      const user = new User(argv.user);
      user.readNote(argv.title);
    }
  },
});

yargs.parse();
