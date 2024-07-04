export default function solucao(
  notaAlunoA: number,
  notaAlunoB: number
): string {
  // seu código aqui
  if ((notaAlunoA - notaAlunoB) < 1.5) {
    return "DUPLA VALIDA"
  } else {
    return "DUPLA INVALIDA"
  }
}
