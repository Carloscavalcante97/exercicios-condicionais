export default function solucao(
  marcacaoRoleta: number,
  quantidadeCaixa: number,
  precoPassagem: number
): string {
  // seu código aqui
  let valorEsperado: number = marcacaoRoleta * precoPassagem
  if (quantidadeCaixa == valorEsperado) {
    return `TUDO CERTO`
  } else if (quantidadeCaixa < valorEsperado) {
    return `DINHEIRO FALTANDO`
  } else return `DINHEIRO SOBRANDO`
}
