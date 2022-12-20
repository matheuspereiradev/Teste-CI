import { gerarArrayNumeros } from "./service";

describe('Test generate numbers service', () => {

    it('should generate 5 random numbers', async () => {
        const arr = await gerarArrayNumeros(5)
        expect(arr.length).toBe(5);
        
    })
});
