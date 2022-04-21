
/**
 * Note class. Represents the notes that the users will store
 */
export class Note {
  /**
   * Constructor
   * @param title of the note 
   * @param body of the note 
   * @param color of the note
   */
  constructor(private title: string, private body: string, 
    private color: string) {}

  /**
   * @returns the title
   */
  public getTitle() {
    return this.title;
  }

  /**
   * @returns the color
   */
  public getColor() {
    return this.color;
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
   * Set's a new color
   * @param color new color to change
   */
  public setColor(color: string) {
    this.color = color;
  }
}
