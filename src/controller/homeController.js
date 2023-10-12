import service from '../service/CRUDService'
import db from '../models/index'


let getData = async (req, res) => {
    let getData = await service.createGetData();
    return res.render('Get data user', getData)
}

let testData = (req, res) => {
    return res.render('test.ejs')
}

let postData = async (req, res) => {
    let message = await service.createUserService(req.body);
    console.log(message);
    return res.send('this program to post');
}



module.exports = {
    getData: getData,
    postData: postData,
    testData: testData,
}