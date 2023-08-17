export const register = (req, res) => {
console.log('user ki registration ki Api');
console.log(req.body);
res.status(200).send({
    status: "success",
    message: "user signup successfully"
})
};

export const login = (req, res) => {
console.log('user ki registration ki Api');
console.log(req.body);
res.status(200).send({
    status: "success",
    message: "user login successfully"
})
};