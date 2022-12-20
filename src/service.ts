export async function gerarArrayNumeros(quantidade: number) {
    const result = []
    for (let i = 0; i < quantidade; i++) {
        result.push(Math.floor(Math.random() * 10))
    }
    return result
}