function baseService(alphabet) {
    async function toBase62(number) {
        if (number === 0) {
            return alphabet[0]
        }

        let result = '';

        while (code > 0) {
            result = alphabet [code / 62] + result;
            number = Math.floor(number / 62);

        }
        return code;
        
    }

}