const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const verifyAccessToken = asyncHandler(async (req, res, next) => {
    // Kiểm tra xem có header Authorization không
    if (req?.headers?.authorization?.startsWith('Bearer ')) {
        const token = req.headers.authorization.split(' ')[1]; // Lấy token đúng cách
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid access token',
                });
            }
            req.user = decoded; // Lưu thông tin user vào request
            next(); // Chuyển sang middleware tiếp theo
        });
    } else {
        return res.status(401).json({
            success: false,
            message: 'Require authentication!',
        });
    }
});
const isAdmin =asyncHandler((req,res,next)=>{
    const {role}=req.user
    if(role!=='admin')
        return res.status(401).json({
            success:false,
            mes:'REQUIRE ADMIN ROLE'
    })
        next()
})

module.exports = {
    verifyAccessToken,
    isAdmin
};
