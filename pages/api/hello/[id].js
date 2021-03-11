
export default (req, res) => {
    res.statusCode = 200
    res.json({ name: `John Doe ${req.query.id}` })
}