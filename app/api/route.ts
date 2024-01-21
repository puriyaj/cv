export default function POST(req, res) {
  console.log(req.body)
  res.status(200).json({name:"Pouria"})
}