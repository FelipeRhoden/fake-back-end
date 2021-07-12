import { LowSync, JSONFile } from 'lowdb'

// Use JSON file for storage

type Users = {
  id: number;
  name: string;
  senha: string;
}
type Data = {
  users: Users[]; 
}
const adapter = new JSONFile<Data | null>('database.json')
const db = new LowSync<Data | null>(adapter)

db.read();

db.data ||= { users: []}

db.write()

export default db;