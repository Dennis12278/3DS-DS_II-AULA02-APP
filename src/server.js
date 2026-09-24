const createApp = require("./app");
const createRepositories = require("./routes/repositories");
const env = require("./config/env")

const app = createApp(createRepositories(env));


app.listen(env.port, () => {
    console.log("API no ar em " + env.baseUrl);
    console.log("Portas: " + env.port);
    console.log("Driver:" + env.driver);
})