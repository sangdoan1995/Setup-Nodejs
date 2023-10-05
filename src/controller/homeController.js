import service from '../service/CRUDService'


let GetData = async (req, res) => {
    let getData = await service.createGetData();
    return res.render('Get data user', getData)
}

let PostData = async (req, res) => {
    let message = await service.createUserService(req.body);
    console.log(message);
    return res.send('this program to post');
}





module.exports = {
    GetData: GetData,
    PostData: PostData,
}