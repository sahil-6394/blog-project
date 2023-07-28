const auth = (req, res, next) => {
    if(!req.session.isLoggedIn) {
        return next()
    }
    return res.redirect('/');
}

module.exports = auth;

