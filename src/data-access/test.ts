

export class UserAccessService {

    static async fetchUsers() {
        try {
            let res = await fetch('http://localhost:3001/users');
            return res.json();
    
        } catch (error){
            console.log(error);
            
        }    
    }



}

