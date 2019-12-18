export class Model{
    user;
    itens;
    dataAtual: String;

    constructor() {
        this.user = "Eduarda";
        this.itens = [
            new TodoItem("Dominar o mundo", false, "Alta", "2019-12-10"),
            new TodoItem("Falar com Trump", false, "Baixa", "2019-12-10"),
            new TodoItem("Preparar aula", false, "Alta", "2019-12-10"),
            new TodoItem("Caminhar 10km", true, "Média", "2019-12-10")
        ]
    }

    public sortBydueDate():void{
        this.itens.sort((a:TodoItem, b:TodoItem)=>{
            return +new Date(a.dataRealizacao) - +new Date(b.dataRealizacao);
        })
    }
     
    dataHoje(){
        let date = new Date;
        let dia = date.getDate();
        let mes = date.getMonth();
        let ano = date.getFullYear();
        this.dataAtual = dia +"-" +(mes+1) +"-" +ano;
        return this.dataAtual;
    }

}

export class TodoItem {
    action;
    done;
    prioridade;
    dataRealizacao: Date;

    constructor(action, done, prioridade, dataRealizacao) {
        this.action = action;
        this.done = done;
        this.prioridade = prioridade;
        this.dataRealizacao = dataRealizacao;
    }

}