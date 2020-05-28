var userModel = require("../model/user.model")


module.exports = {
    addUser: addUser,
    listUser: listUser,
    deleteUser: deleteUser,
    findUser: findUser,
    updateUser: updateUser
}

function addUser(req, res) {
    console.log("succesful", req.body);
    try {
        if (req.body.name) {
            const userObj = new userModel({
                name: req.body.name
            })

            userObj.save(userObj, function (err, response) {
                if (err) {
                    res.json({ code: 501, message: "Erorr", data: err })
                }
                else {
                    res.json({ code: 200, message: "success", data: response })
                }

            })

        }
        else {
            res.json({ code: 501, message: "Missing Name" })
        }

    } catch (error) {
        res.json({ code: 501, message: "Erorr", data: error })

    }
}

//Do try and Catch
function listUser(req, res) {
    userModel.find(function (err, response) {
        res.json({ code: 200, message: "success", data: response })
    })

}

function deleteUser(req, res) {
    console.log("res", req.body)
    var userId = req.body.userId;
    userModel.findOneAndRemove({ _id: userId }, function (err, response) {
        if (!response) {
            res.json({ code: 501, message: "no data present" })
        }
        else {
            console.log("test1", response)
            res.json({ code: 200, message: "success", data: response })
        }
    })
}

function findUser(req, res) {
    console.log("params", req.params)
    console.log("query", req.query)
    var test = req.query.name;
    userModel.findOne({ name: test }, function (err, response) {
        console.log("response", response)
        if (err) {
            res.json({ code: 501, message: "unsuccessfull", data: err })
        }
        else {
            res.json({ code: 200, message: "successfull", data: response })
        }
    })


}

function updateUser(req, res) {
    console.log("req.params", req.params)
    var test = req.params.name;

    const userObj = {
        name: req.body.name
    }
    userModel.update({ name: test }, userObj, function (err, response) {
        if (!response) {
            console.log("1")
            res.json({ code: 501, message: "No such name found", data: err })
        }
        else {

            res.json({ code: 200, message: "successfull", data: response })

        }
    })
}
