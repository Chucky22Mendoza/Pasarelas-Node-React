const app = require("./app");
const https = require('https');
const fs = require('fs');
const path = require('path');

/**
 * Método main para iniciar el servidor express
 * @since 1.0.0
 * @version 1.0.0
 * @author Jesús Mendoza <loginlock22@gmail.com>
 * @link https://loginlock-portfolio.js.org/
 */
const main = async () => {
    /**
     * Create HTTP server.
     */
    // const options = {
    //     key: fs.readFileSync(path.join(__dirname, 'certificate', 'PRIVATEKEY.key'), 'utf8'),
    //     cert: fs.readFileSync(path.join(__dirname, 'certificate', 'f582836a1a1a5825.crt'), 'utf8'),
    //     ca: [
    //         fs.readFileSync(path.join(__dirname, 'certificate', 'gd_bundle-g2-g1.crt'), 'utf8')
    //     ],
    //     passphrase:'Jessy487$'
    // };
    // const server = https.createServer(options, app);

    // await server.listen(app.get("https_port"), () => {
    //     console.log('Https server listening on port ' + app.get('https_port'));
    // });

    await app.listen(app.get("port"));
    console.log("Server listening on port " + app.get("port"));
}

main();