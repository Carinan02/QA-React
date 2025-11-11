const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/getAreas/:formName", (req, res) => {
  const { formName } = req.params;
  const sql = "SELECT * FROM a5_auditAreas WHERE area_form = ?";
  db.query(sql, [formName], (err, results) => {
    if (err) {
      console.error("Error Executing query: ", err);
      return res.status(500).json({ error: "Database Error" });
    }
    res.json(results);
  });
});

module.exports = router;
