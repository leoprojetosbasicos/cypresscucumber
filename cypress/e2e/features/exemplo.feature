Feature: RadioButton
    Exemplo de interacao com RadioButton usando cucumber
    Usuario deve conseguir marcar uma opcao desejada utilizando click


Scenario: Marcando opcao2 no radiobutton
 Given  Que usuario está no site de treinamento
 When   Usuario escolher o radio "2"
 Then   A opcao desejada deve estar checada 
 