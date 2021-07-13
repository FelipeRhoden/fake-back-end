import connection from '../database/connection';

export async function getUsers(req: any, res: any, next:any): Promise<void>{
    try{
      const users = await connection.select().table('users')

      res.json(users)
      return res.status(200);
    }catch(err){
      console.log(err)
      
    }
  }