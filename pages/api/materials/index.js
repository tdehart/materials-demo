import { materials } from '../../../utils/data';

export default function handler(req, res) {
  res.status(200).json(materials)
}