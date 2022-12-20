export async function gerarArrayNumeros(quantidade: number) {
    const result = []
    for (let i = 0; i < 2; i++) {
        result.push(Math.floor(Math.random() * 10))
    }
    return result
}