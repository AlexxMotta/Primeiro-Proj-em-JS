do{
    var op = Number(prompt("CALCULADORA\n[1] Soma\n[2]Subtração\n[3] Divisão\n[4]Multiplicação\n[5] Divisão Interia\n[6] Potenciação\n[0]Fechar calculadora."))
    op!=0 ? num1 = Number(prompt("Digite o num 1")):null
    op!=0 ? num2 = Number(prompt("Digite o num 2")):null
    
    
    let resultado = 0
    let pro = ""
    //var soma = 0
    switch(op){
        case 0:
            break
        case 1:
            resultado= soma(num1,num2)
            pro = "soma"
            break
        case 2:
            resultado = sub(num1,num2)
            pro = "subtração"
            break
        case 3:
            resultado = div(num1,num2)
            pro = "divisão"
            break
        case 4:
            resultado = mult(num1,num2)
            pro = "multiplicação"
            break
        case 5:
            resultado = divInt(num1,num2)
            pro = "divisão interia (resto)"
            break
        case 6:
            resultado = pot(num1,num2)
            pro = "potenciação"
            break
        default:
            window.alert("Entrada invalida.")
            break
    }
    op!=0 ?window.alert(`Dado o processo de ${pro} nos números ${num1} e ${num2}, o resultado é ${resultado}`):null
}while(op != 0);