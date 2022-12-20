import { gerarArrayNumeros } from "./service";

test('Test generate numbers service', async () => {

    it('should generate 5 random numbers'), async () => {
        const arr = await gerarArrayNumeros(5)
        expect(arr.length).toBe(5);
    }
});

