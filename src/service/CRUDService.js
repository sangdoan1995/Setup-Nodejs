import db from '../models/index'

let createUserService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let postdata = await db.User.create({
                email: data.email,
                firstname: data.firstname,
                lastname: data.lastname
            })
        } catch (e) {

        }
    })

}
let createGetData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.User.findAll({
                raw: true,
            });
            resolve(data)
        } catch (e) {
            reject(e);
        }
    })
}


module.exports = {
    createUserService: createUserService,
    createGetData: createGetData,
}