const expected = (params, expected) => {
    // params 👈 null and undefined check
    if (params && Object.keys(params).length === 0 && Object.getPrototypeOf(params) === Object.prototype) {
        return false;
    }

    for (const iterator of expected) {
        if (!params.hasOwnProperty(iterator)){
            return false;
        }
    }

    return true;
}

export default expected;