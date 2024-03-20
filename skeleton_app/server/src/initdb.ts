import sqlite3 from "sqlite3";

const db = new sqlite3.Database('user.sqlite3')

// db.serialize(() => {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (let i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", (err, row: { id: number, info: string}) => {
//       console.log(row.id + ": " + row.info);
//   });
// });

// db.close();

db.serialize(() => {
  db.run("CREATE TABLE user (name TEXT, email TEXT)");

  const stmt = db.prepare("INSERT INTO user VALUES (?, ?)");
  for (let i = 0; i < 10; i++) {
      stmt.run("User" + i, "user" + i + "@test.local");
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, name, email FROM user", (err, row: { id: number, name: string, email: string}) => {
      console.log(row.id + ": " + row.name, row.email);
  });
});

db.close();
