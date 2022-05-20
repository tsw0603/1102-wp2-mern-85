const errorHandleMiddleware_85 = (err, req, res, next) => {
    console.log('error', err);
    res.status(500).json({ msg: err})
}

export default errorHandleMiddleware_85;