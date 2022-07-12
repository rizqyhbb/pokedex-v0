// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ member: [
    {name: "jack", age: 20},
    {name: "Jick", age: 50}
  ] })
}
