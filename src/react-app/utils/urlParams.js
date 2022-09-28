const lex = (url) => {
    const urlHREF = url;
    const paramsArray = {};
    if (urlHREF.includes("?")) {
        const querys = urlHREF.split("?")[1]; //split into query
        let params = querys;
        if (querys.includes("&")) { //Split all parameters into an array if present more than one parameter at the query
            params = querys.split("&");
        }
        if (typeof params === "string") { //Just one parameter
            let keyValue = params.split("=");
            paramsArray[keyValue[0]] = keyValue[1];
        }
        if (typeof params === "object") { //More than one parameter
            for (const iterator of params) {
                let keyValue = iterator.split("=");
                paramsArray[keyValue[0]] = keyValue[1];
            }
        }
    }
    return paramsArray;
}

export default lex;