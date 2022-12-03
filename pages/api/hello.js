export default function handler(req, res) {
    if (req.method === 'POST') {

    } else {
    res.status(200).json({ text: 'Hello' });
    };
  }