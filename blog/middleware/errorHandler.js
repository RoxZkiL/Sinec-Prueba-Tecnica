module.exports = (err, _, res, _) => {
  console.error(err);
  res.status(500).json({ error: "Error interno del servidor" });
};
