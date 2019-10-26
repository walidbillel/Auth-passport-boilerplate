module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash('errors_msg', 'Please log in to view dashboard');
        res.redirect('/users/login');
    }
}