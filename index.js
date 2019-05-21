const dt = require('node-decision-tree')

const treinamento = [
    {contas_dia:'sim',nome_limpo:'sim',renda:'alta',risco:'baixo'},
    {contas_dia:'nao',nome_limpo:'sim',renda:'alta',risco:'baixo'},
    {contas_dia:'nao',nome_limpo:'nao',renda:'alta',risco:'alto'},
    {contas_dia:'sim',nome_limpo:'sim',renda:'medio',risco:'medio'},
    {contas_dia:'nao',nome_limpo:'nao',renda:'baixa',risco:'alto'},
    {contas_dia:'sim',nome_limpo:'sim',renda:'baixa',risco:'alto'}
]

//const predicao = [{contas_dia:'nao',nome_limpo:'nao',renda:'medio'}]
const predicao = [{contas_dia:'sim',nome_limpo:'sim',renda:'baixa'}]

const entrada = ["contas_dia","nome_limpo","renda"]

const resultado = ["risco"]

const tree = new dt.Tree()

tree.fit(treinamento,entrada,resultado)

const previsao = tree.predict(predicao)

console.log("O RISCO DE CALOTE É: "+previsao)