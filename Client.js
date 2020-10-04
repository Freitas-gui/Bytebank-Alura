export class Client{
    
    constructor(name, cpf, rg){
        this.name=name
        this._cpf=cpf
        this._rg=rg

        this._password
    }

    get cpf(){
        return this._cpf
    }

    _rg
    get rg(){
        return this._rg
    }

    sigin(password){
        this._password = password
    }

    authenticate(password){
        if(password == this._password)
            return true
        return false
    }
    

}