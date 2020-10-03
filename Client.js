export class Client{
    name

    _cpf
    get cpf(){
        return this._cpf
    }

    _rg
    get rg(){
        return this._rg
    }

    constructor(name, cpf, rg){
        this.name=name
        this._cpf=cpf
        this._rg=rg
    }

}