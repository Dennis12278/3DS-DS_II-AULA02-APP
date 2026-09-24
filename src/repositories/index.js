function createRepositories(config) {
    if (config.driver === "memory") {

        const counterRepository = require("./memory/counter.repository");
        const linksRepository = require("./memory/links.repository");
   

        return {
            counterRepository: counterRepository(),
            linksRepository: linksRepository(),
            
        };
    }
}

module.exports = createRepositories;