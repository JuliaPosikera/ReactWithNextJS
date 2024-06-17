const sql = require("better-sqlite3");
const db = sql("meals.db");

function deleteRecordById(id) {
  const deleteStmt = db.prepare("DELETE FROM meals WHERE id = ?");
  const info = deleteStmt.run(id);

  if (info.changes > 0) {
    console.log(`Record with ID ${id} was successfully deleted.`);
  } else {
    console.log(`No record found with ID ${id}.`);
  }
}

// const rows = db.prepare("SELECT * FROM meals").all();
// console.log("Data in meals table:");
// rows.forEach((row) => {
//   console.log(row);
// });

const idToDelete = 13;
deleteRecordById(idToDelete);
