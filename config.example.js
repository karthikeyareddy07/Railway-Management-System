// Railway Management System Configuration Example
// Copy this file to config.js and update the values

module.exports = {
    // Server Configuration
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    
    // Database Configuration
    mongodbUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/railway',
    
    // JWT Configuration
    jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production',
    jwtExpiresIn: '24h',
    
    // CORS Configuration
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    
    // Logging
    logLevel: process.env.LOG_LEVEL || 'info'
}; 