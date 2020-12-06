import { mkdirSync, existsSync, writeFileSync, readFileSync } from "fs";

/**
 * The database
 */
export default class {
  #dir;
  /**
   *
   * @param {string} dirpath the path where create database folder
   * @param {string} name the name of the database folder
   */
  constructor(dirpath, name) {
    if (!existsSync(`${dirpath}/${name}`))
      mkdirSync(`${dirpath}/${name}`, { recursive: true });
    this.#dir = `${dirpath}/${name}`;
  }
  /**
   * set the file database
   * @param {string} name The name to sate database file
   */
  set(name) {
    if (existsSync(`${this.#dir}/${name}.json`))
      return false;
    else return writeFileSync(`${this.#dir}/${name}.json`, JSON.stringify({}, 2, 4));
  }
  /**
   * write on database
   * @param {object} data the data to write on file
   * @param {string} id the database to write datas
   */
  write(id, data) {
    let database = this.path(id);
    this._save(database, data);
  }
  /**
   * save data
   * @private
   * @param {string} path the path to save data
   * @param {string} data the data to save
   */
  _save(path, data) {
    writeFileSync(path, JSON.stringify(data, 2, 4), (err) => {
      if (err) console.error(err);
      else console.log("Succes data saving");
    });
  }
  /**
   * get a path on database
   * @param {string} name the name of the data file to get
   */
  path(name) {
    if (!existsSync(`${this.#dir}/${name}.json`)) return false;
     else {
      let path = `${this.#dir}/${name}.json`;
      return path;
     }
  }
  /**
   * clear a database
   * @param {string} id The name of the database
   */
  clear(id) {
    let name = this.path(id);
    if (name) return this.write(id, {});
    else return false;
  }
  /**
   * Get the database as object
   * @param {strring} id the database name
   */
  get(id) {
    if(!this.path(id)) return false;
    else {
      return JSON.parse(readFileSync(this.path(id)));
    }
  }
}
