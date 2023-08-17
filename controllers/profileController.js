export const getProfile = (req, res) => {
    console.log(req.params);
    res.status(200).send({
        status: "success",
        data: [],
        message: "ye rha logged in user ka data"
    })
};

export const updatePofile = (req, res) => {
    console.log(req.params);
    res.status(200).send({
        status: "success",
        data: [],
        message: "ye rha logged in user ka updated data"
    })
};