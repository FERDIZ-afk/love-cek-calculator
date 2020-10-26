//Função do W3schools para fazer a contagem da porcentagem subir!
var j = 0;
function move(porcentagem) {
    console.log(porcentagem);
  if (j == 0) {
    j = 1;
    var elem = document.body;
    var width = 0;
    var id = setInterval(frame, 35);
    function frame() {
      if (width >= porcentagem) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        document.body.querySelector("#result").innerHTML=`<p id="porcentagem">${width + "%"}</p>`;
      }
    }
  }
}

//Variavel de Controle
let i = false;

document.body.querySelector("#calculadora").onclick=function(){
    if(i == false){
        var nome1 = document.body.querySelector("#nome1").value;
        var nome2 = document.body.querySelector("#nome2").value;
        var calculator = document.body.querySelector("#calculadora").value;

        console.log(nome1)
    
        /*Criar um objeto */
        xhttp=new XMLHttpRequest();
    
        /*Tratar o evento de alteração do status e estado da conexão com o servidor */
        xhttp.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200){
                /*Pega a resposta do servidor */
                
                //Pega os dados da API em formato JSON
                let dadosJSON = this.responseText;
    
                //Transforma os dados JSON em Objetos
                dadosJSON=JSON.parse(dadosJSON);
    
                //Testando se os dados estão sendo recebidos corretamente
                console.log(dadosJSON)
    
                //Mostra os Dados retornados pela API na TELA
                move(Number(dadosJSON.percentage));
                
            };
    
            
        }
        
        //Conecta com a API, e passa os valores dos campo do HTML (NOME1 e NOME2).
        xhttp.open("GET","https://love-calculator.p.rapidapi.com/getPercentage?fname="+nome1+"&sname="+nome2,true);
        xhttp.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");
        xhttp.setRequestHeader("x-rapidapi-key", "b7722ab525msha7180c0db412d74p1b9da2jsn8b1fdc66c725");
        xhttp.send();
        
        //Muda o valor do botão de CALCULAR para REFAZER
        document.body.querySelector("#calculadora").value = "Refazer"

        //Muda o valor da variavel de controle para true
        i = true;

    }else{
        //Muda o valor da variavel de controle para false
        i = false;

        //Zera os campos de pesquisa, calculo e resultado
        document.body.querySelector("#calculadora").value = "Calcular";
        document.body.querySelector("#result").innerHTML = "";
        document.body.querySelector("#nome1").value = "";
        document.body.querySelector("#nome2").value = "";
    }
 
}

