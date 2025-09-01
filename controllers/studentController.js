const db = require('../config/db');

// CREATE
exports.createStudent = (req, res) => {
  const { name, email, course, year_level } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'name and email are required' });

  const sql = 'INSERT INTO students (name, email, course, year_level) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, course || null, year_level || null], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'email must be unique' });
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Student created', id: result.insertId });
  });
};

// READ ALL
exports.getStudents = (req, res) => {
  db.query('SELECT * FROM students', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// READ BY ID
exports.getStudentById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM students WHERE id=?', [id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (rows.length === 0) return res.status(404).json({ error: 'student not found' });
    res.json(rows[0]);
  });
};

// UPDATE
exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, course, year_level } = req.body;
  db.query('UPDATE students SET name=?, course=?, year_level=? WHERE id=?',
    [name, course || null, year_level || null, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ error: 'student not found' });
      res.json({ message: 'Student updated' });
    }
  );
};

// DELETE
exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM students WHERE id=?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'student not found' });
    res.json({ message: 'Student deleted' });
  });
};