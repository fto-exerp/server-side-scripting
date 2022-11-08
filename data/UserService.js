const PocketBase = require('pocketbase/cjs')

const client = new PocketBase('http://127.0.0.1:8090');

class UserService {
    async createNewPerson(newUser) {
        return await client.records.create('bruger', newUser)
    }

    async getPersons(){
        try {
            return await client.records.getFullList('bruger') 
        } catch (error) {
            console.log(error)        
        }
    }
}


module.exports = new UserService()