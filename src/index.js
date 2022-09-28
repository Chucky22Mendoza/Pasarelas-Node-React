const app = require("./app");

/**
 * Método main para iniciar el servidor express
 * @since 1.0.0
 * @version 1.0.0
 * @author Jesús Mendoza <loginlock22@gmail.com>
 * @link https://loginlock-portfolio.js.org/
 */
async function main() {
    await app.listen(app.get("port"));
    console.log("Server listening on port " + app.get("port"));
}

main();