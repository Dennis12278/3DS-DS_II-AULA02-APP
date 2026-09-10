function codesService(counterRepository, toBase62, blockSize = 1000 ) {

    var next = 0;
    var limit = 0;
    
    async function nextcode() {
        if (next >= limit) {
            next = await counterRepository.reserveBlock(blockSize);
            limit = next + blockSize;
        }

        return toBase62(next++);
        }


        return { nextCode }; 
        
}
