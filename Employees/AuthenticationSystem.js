
export class AuthenticationSystem{
    static verifyPassword(password, person){
        if("authenticate" in person && person.authenticate instanceof Function)  
            return person.authenticate(password)
        return false
    }
}