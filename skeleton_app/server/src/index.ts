import express from "express";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("user.sqlite3");

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log("Start on port 3001.");
});

type User = {
  id: number;
  name: string;
  email: string;
};

// const users: User[] = [
//     { id: 1, name: "User1", email: "user1@test.local" },
//     { id: 2, name: "User2", email: "user2@test.local" },
//     { id: 3, name: "User3", email: "user3@test.local" }
// ]

//一覧取得
app.get("/users", (req: express.Request, res: express.Response) => {
  console.log("/users");
  let users: User[] = [];
  db.serialize(() => {
    console.log("db.serialize");
    db.all(
      "SELECT rowid AS id, name, email FROM user",
      (err, rows: { id: number; name: string; email: string }[]) => {
        console.log(rows);
        for (const row of rows) {
          users.push({
            id: row.id,
            name: row.name,
            email: row.email,
          });
        }
        console.log(users);

        res.send(JSON.stringify(users));
      }
    );
  });
});
