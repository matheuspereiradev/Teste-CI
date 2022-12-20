import { Request, Response } from "express"
import { gerarArrayNumeros } from "./service"

export async function NumerosCotroller(req: Request, res: Response) {
    const quantidade = req.params.quantity
    const arr = await gerarArrayNumeros(+quantidade)
    res.json({
        numeros: arr
    })
}