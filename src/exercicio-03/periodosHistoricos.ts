export default function solucao(ano: number): string {
  // seu código aqui
  if (ano <= 476) {
    return `ANTIGA`
  } else if (ano > 476 && ano <= 1453) {
    return `MEDIA`
  } else if (ano > 1453 && ano <= 1789) {
    return `MODERNA`
  } else (ano > 1789)
  return `CONTEMPORANEA`

}
