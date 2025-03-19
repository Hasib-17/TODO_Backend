const cookieValidator= async (req, res, next) => {
    try {
        await externallyValidateCookie(req.testCookie)
        next();
    } catch (error) {
        next(new Error('Invalid cookie  ' + error.message))
    }
}

module.exports = cookieValidator;