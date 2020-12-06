# jsondb

## Simple use
```js
import DB from "./src/db.js";

const users = new DB("database", "globals");

users.set("users"); // Create the users file

users.write("users", { username: "Leone Abbacchio", stand: "Moody Blues", gang: "Passione" }); // Write on this file
/* 
    {
        "username": "Leone Abbacchio",
        "stand": "Moody Blues",
        "gang": "Passione"
    }
*/
```

## Clear database
```js
import DB from "./src/db.js";

const users = new DB("database", "globals");

users.set("users"); // Create the users file

users.write("users", { username: "Bruno Bucciarati", stand: "Sticky Fingers", gang: "Passione" }); // Write on this file
/* 
    {
        "username": "Bruno Bucciarati",
        "stand": "Sticky Fingers",
        "gang": "Passione"
    }
*/

users.clear("users") // Clear the database 
/*
{}
*/
```