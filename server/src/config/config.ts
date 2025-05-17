export default {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '90d',
  },
  cookies:{
    expiresIn:process.env.COOKIES_EXPIRES_IN
  }
};
