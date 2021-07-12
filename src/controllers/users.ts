import db from '../db/db';

export function getUsers(req: any, res: any, next:any){
    const users = db.data?.users.values();

    res.json({ users })
    return res.status(200);
  }