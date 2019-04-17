export default class Util {

    static toGraphQlObj(obj) {
        let query = '{'
        for (let key in obj) {
            if (!key.startsWith('_') && !key.startsWith('__')) {
                query += `
                    ${key}: ${typeof(obj[key]) === 'string' ? "\"" + obj[key] + "\"" : obj[key]},
                `
            }
        }
        query += '},'
        return query;
    }

    static toGraphQlList(list) {
        let query = "[";
        list.forEach(prod => {
            query += this.toGraphQlObj(prod);
        });
        query += ']'
        return query;
    }
}