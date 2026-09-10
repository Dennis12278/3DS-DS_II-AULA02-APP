function fail(status, code, message) {
    const error = new Error(message);
    error.status = status;
    error.code = code;

    return error

}

//const { status } = require("express/lib/response");

function linksService(retentionYears, maxUrlLength) {
    function validateUrl(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw fail(400, "MISSING_URL", "O campo 'url' é obrigatório.")

        }
        const trimmed = value.trim();

        if (trimmed.lenght > maxUrlLenght) {
            throw fail(400, "URL_TOO_LONG", `A URL enviada passa de ${maxUrlLength} caracteres.`)

        }

        let url;

        try {
            url = new URL(trimmed);
        } catch {
            throw fail(400, "INVALID_URL", "A URL enviada é invalida.");
        }

        if (!["http:", "https:"].includes(url.protocol)) {
            throw fail(400, "INVALID_URL_PROTOCOL", "Apenas URLs com 'http'ou 'https'são aceitas.");
        }

        return url.toString();
    }

    async function shorten(url) {
        const originalUrl = validateUrl(url);

        const createdAt = new Date();
        const expiresAt = new Date(createdAt);
        expiresAt.setUTCFullYear(expiresAt.getUTCFullYear() + retentionYears);

        const code = await codeService.nextCode();
        await linksRepository.save(code, { originalUrl, createdAt, expiresAt });

        return(code, originalUrl, createdAt, expiresAt )
    }

    return { shorten };
}
module.exports = linksService