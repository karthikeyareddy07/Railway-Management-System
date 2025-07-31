const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Train = require('./models/Train');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/railway', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected for seeding'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Sample trains data
const sampleTrains = [
  {
    name: 'Express 101',
    from: 'Mumbai',
    to: 'Delhi',
    seats: 200,
    price: 1500
  },
  {
    name: 'Superfast 202',
    from: 'Delhi',
    to: 'Kolkata',
    seats: 180,
    price: 1200
  },
  {
    name: 'Local 303',
    from: 'Chennai',
    to: 'Bangalore',
    seats: 150,
    price: 800
  },
  {
    name: 'Premium 404',
    from: 'Hyderabad',
    to: 'Mumbai',
    seats: 120,
    price: 2000
  },
  {
    name: 'Express 505',
    from: 'Pune',
    to: 'Ahmedabad',
    seats: 160,
    price: 1000
  }
];

// Sample admin user
const adminUser = {
  username: 'admin',
  password: 'admin123',
  name: 'Administrator',
  email: 'admin@railway.com',
  phone: '9876543210',
  role: 'admin'
};

// Seed function
async function seedDatabase() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Train.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Create admin user
    const hashedPassword = await bcrypt.hash(adminUser.password, 10);
    const admin = new User({
      ...adminUser,
      password: hashedPassword
    });
    await admin.save();
    console.log('👤 Admin user created');

    // Create sample trains
    for (const trainData of sampleTrains) {
      const train = new Train(trainData);
      await train.save();
    }
    console.log(`🚂 Created ${sampleTrains.length} sample trains`);

    // Create a regular user for testing
    const regularUser = new User({
      username: 'user',
      password: await bcrypt.hash('user123', 10),
      name: 'Test User',
      email: 'user@example.com',
      phone: '1234567890',
      role: 'user'
    });
    await regularUser.save();
    console.log('👤 Regular user created');

    console.log('\n✅ Database seeded successfully!');
    console.log('\n📋 Login Credentials:');
    console.log('Admin - Username: admin, Password: admin123');
    console.log('User - Username: user, Password: user123');
    
  } catch (error) {
    console.error('❌ Seeding error:', error);
  } finally {
    mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
}

// Run seeder
seedDatabase(); 