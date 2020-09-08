exports.store = (req, res) => {
  const { message } = req.body
  console.log(req.user)
  return res.status(200).json({ data: [{ id: 1, name: 'Guilherme', message }] })
}
