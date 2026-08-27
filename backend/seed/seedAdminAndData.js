const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const User = require('../models/User');
const Poultry = require('../models/Poultry');

dotenv.config({ path: path.join(__dirname, '../.env') });

const sampleSellers = [
  {
    name: 'Ravi Kumar',
    email: 'ravi.poultry@example.com',
    phone: '+918309030289',
    password: 'Password@123',
    role: 'seller',
    farmName: 'Sri Lakshmi Naatu Kollu Farm',
    farmDescription: 'Specialized in 100% pure organic free-range Naatu Kollu (Natu Kodi), Gamefowl Aseel, Bhimavaram, Peruvidai, and Siruvidai country breeds raised naturally in farm fields.',
    village: 'Tadepalligudem',
    mandal: 'Tadepalligudem',
    district: 'West Godavari',
    state: 'Andhra Pradesh',
    pincode: '534101',
    whatsappEnabled: true,
    isActive: true,
  },
  {
    name: 'Suresh Kumar',
    email: 'suresh.poultry@example.com',
    phone: '+919848012345',
    password: 'Password@123',
    role: 'seller',
    farmName: 'Sri Venkateswara Native Naatu Kollu Farm',
    farmDescription: 'Authentic Gamefowl Aseel, Bhimavaram Aseel fighters, Kili Mookku Aseel Naatu Kollu roosters, and pure Country hens fed with natural grains.',
    village: 'Bhimavaram',
    mandal: 'Bhimavaram',
    district: 'West Godavari',
    state: 'Andhra Pradesh',
    pincode: '534201',
    whatsappEnabled: true,
    isActive: true,
  },
];

const samplePoultryListings = (seller1Id, seller2Id) => [
  {
    sellerId: seller2Id,
    name: 'Pure Gamefowl Aseel Fighter Cock',
    gender: 'Cock',
    breed: 'Gamefowl Aseel',
    age: 18,
    ageUnit: 'Months',
    weight: 4.1,
    weightUnit: 'KG',
    price: 10500,
    quantity: 2,
    village: 'Bhimavaram',
    mandal: 'Bhimavaram',
    district: 'West Godavari',
    state: 'Andhra Pradesh',
    pincode: '534201',
    location: 'Bhimavaram, West Godavari, Andhra Pradesh',
    healthStatus: 'Healthy',
    vaccinationStatus: 'Vaccinated',
    vaccinationDetails: 'Fully vaccinated & dewormed. High game lineage with supreme muscle stamina.',
    description: 'Elite Gamefowl Aseel Cock with powerful leg bone density, broad chest, fierce aggression, and top breeding genetics.',
    media: {
      images: [
        '/uploads/kathi_sandai_aseel.jpg',
        'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=800',
      ],
      videos: ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
    },
    approvalStatus: 'approved',
    isAvailable: true,
    views: 940,
  },
  {
    sellerId: seller2Id,
    name: 'Pure Bhimavaram Aseel Fighter Cock',
    gender: 'Cock',
    breed: 'Bhimavaram Aseel',
    age: 16,
    ageUnit: 'Months',
    weight: 3.9,
    weightUnit: 'KG',
    price: 9500,
    quantity: 3,
    village: 'Bhimavaram',
    mandal: 'Bhimavaram',
    district: 'West Godavari',
    state: 'Andhra Pradesh',
    pincode: '534201',
    location: 'Bhimavaram, West Godavari, Andhra Pradesh',
    healthStatus: 'Healthy',
    vaccinationStatus: 'Vaccinated',
    vaccinationDetails: 'Dewormed & fully vaccinated. World famous Bhimavaram champion fighter bloodline.',
    description: 'Original West Godavari Bhimavaram Aseel Cock with tall standing posture, massive muscular leg strength, and high breeding stamina.',
    media: {
      images: [
        '/uploads/kathi_sandai_aseel.jpg',
        'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=800',
      ],
      videos: ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
    },
    approvalStatus: 'approved',
    isAvailable: true,
    views: 820,
  },
  {
    sellerId: seller2Id,
    name: 'Kathi Sandai Naatu Kollu Fighter Cock',
    gender: 'Cock',
    breed: 'Aseel Naatu Kollu',
    age: 15,
    ageUnit: 'Months',
    weight: 3.6,
    weightUnit: 'KG',
    price: 8500,
    quantity: 3,
    village: 'Anakapalle',
    mandal: 'Anakapalle',
    district: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '531001',
    location: 'Anakapalle, Visakhapatnam, Andhra Pradesh',
    healthStatus: 'Healthy',
    vaccinationStatus: 'Vaccinated',
    vaccinationDetails: 'Regular health checks & deworming. Pure Kathi Sandai fighter lineage.',
    description: 'High stamina Kathi Sandai Aseel Naatu Kollu Cock with fierce posture, strong spurs, and broad chest.',
    media: {
      images: [
        '/uploads/kathi_sandai_aseel.jpg',
        'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=800',
      ],
      videos: [],
    },
    approvalStatus: 'approved',
    isAvailable: true,
    views: 650,
  },
  {
    sellerId: seller2Id,
    name: 'Kili Mookku Aseel Naatu Kollu Cock',
    gender: 'Cock',
    breed: 'Kili Mookku Aseel',
    age: 14,
    ageUnit: 'Months',
    weight: 3.8,
    weightUnit: 'KG',
    price: 7500,
    quantity: 4,
    village: 'Anakapalle',
    mandal: 'Anakapalle',
    district: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '531001',
    location: 'Anakapalle, Visakhapatnam, Andhra Pradesh',
    healthStatus: 'Healthy',
    vaccinationStatus: 'Vaccinated',
    vaccinationDetails: 'Fully vaccinated & dewormed. Champion lineage stock.',
    description: 'Authentic Kili Mookku (Parrot Beak) Aseel Naatu Kollu Cock with curved beak, thick broad tail, and muscular legs.',
    media: {
      images: [
        '/uploads/kathi_sandai_aseel.jpg',
        'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=800',
      ],
      videos: [],
    },
    approvalStatus: 'approved',
    isAvailable: true,
    views: 420,
  },
  {
    sellerId: seller1Id,
    name: 'Peruvidai Naatu Kollu Breeder Cock',
    gender: 'Cock',
    breed: 'Peruvidai Naatu Kollu',
    age: 12,
    ageUnit: 'Months',
    weight: 3.4,
    weightUnit: 'KG',
    price: 4500,
    quantity: 6,
    village: 'Tadepalligudem',
    mandal: 'Tadepalligudem',
    district: 'West Godavari',
    state: 'Andhra Pradesh',
    pincode: '534101',
    location: 'Tadepalligudem, West Godavari, Andhra Pradesh',
    healthStatus: 'Healthy',
    vaccinationStatus: 'Vaccinated',
    vaccinationDetails: 'Dewormed regularly. Excellent health and high breeding vigor.',
    description: 'Heavy size Peruvidai Naatu Kollu Rooster with massive leg strength, bright red comb, and heavy muscular body structure.',
    media: {
      images: [
        '/uploads/kathi_sandai_aseel.jpg',
        'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=800',
      ],
      videos: [],
    },
    approvalStatus: 'approved',
    isAvailable: true,
    views: 180,
  },
  {
    sellerId: seller1Id,
    name: 'Pure Organic Naatu Kollu Hen (8 Months)',
    gender: 'Hen',
    breed: 'Pure Naatu Kollu',
    age: 8,
    ageUnit: 'Months',
    weight: 1.5,
    weightUnit: 'KG',
    price: 1400,
    quantity: 15,
    village: 'Tadepalligudem',
    mandal: 'Tadepalligudem',
    district: 'West Godavari',
    state: 'Andhra Pradesh',
    pincode: '534101',
    location: 'Tadepalligudem, West Godavari, Andhra Pradesh',
    healthStatus: 'Healthy',
    vaccinationStatus: 'Vaccinated',
    vaccinationDetails: 'Dewormed & vaccinated. Free range raised on natural farm seeds & greens.',
    description: '100% Original Free-Range Naatu Kollu Hen (Natu Kodi). High egg laying capacity with rich natural brown eggs.',
    media: {
      images: [
        'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800',
        'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=800',
      ],
      videos: ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
    },
    approvalStatus: 'approved',
    isAvailable: true,
    views: 245,
  },
  {
    sellerId: seller2Id,
    name: 'Siruvidai Native Naatu Kollu Hen',
    gender: 'Hen',
    breed: 'Siruvidai Naatu Kollu',
    age: 7,
    ageUnit: 'Months',
    weight: 1.2,
    weightUnit: 'KG',
    price: 1100,
    quantity: 20,
    village: 'Anakapalle',
    mandal: 'Anakapalle',
    district: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '531001',
    location: 'Anakapalle, Visakhapatnam, Andhra Pradesh',
    healthStatus: 'Healthy',
    vaccinationStatus: 'Vaccinated',
    vaccinationDetails: 'Dewormed on natural herbal diet.',
    description: 'Traditional Siruvidai Naatu Kollu Hen. Highly active, agile, natural brooding hen for hatching country eggs.',
    media: {
      images: [
        'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800',
        'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=800',
      ],
      videos: [],
    },
    approvalStatus: 'approved',
    isAvailable: true,
    views: 195,
  },
  {
    sellerId: seller1Id,
    name: 'Black Naatu Kollu Hen (Kadaknath Native)',
    gender: 'Hen',
    breed: 'Kadaknath Naatu Kollu',
    age: 9,
    ageUnit: 'Months',
    weight: 1.7,
    weightUnit: 'KG',
    price: 2400,
    quantity: 12,
    village: 'Tadepalligudem',
    mandal: 'Tadepalligudem',
    district: 'West Godavari',
    state: 'Andhra Pradesh',
    pincode: '534101',
    location: 'Tadepalligudem, West Godavari, Andhra Pradesh',
    healthStatus: 'Healthy',
    vaccinationStatus: 'Vaccinated',
    vaccinationDetails: 'Marek & RDV vaccinated.',
    description: 'Pure Black Naatu Kollu Hen with black meat, black bones, and high protein/medicinal properties.',
    media: {
      images: [
        'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=800',
        'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800',
      ],
      videos: [],
    },
    approvalStatus: 'approved',
    isAvailable: true,
    views: 310,
  },
];

const seedData = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.includes('<db_password>')) {
    console.error(`====================================================`);
    console.error(`❌ [MongoDB Atlas Password Required]`);
    console.error(`Please update 'backend/.env' with your real MongoDB Atlas password.`);
    console.error(`====================================================`);
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`☁️ [MongoDB Atlas Seed] Connected to cluster: ${conn.connection.host} / ${conn.connection.name}`);

    // 1. Create/Update Admin Account (jeevan@poultrymart.com / Jeevan1234)
    const adminEmail = 'jeevan@poultrymart.com';
    let admin = await User.findOne({ email: adminEmail });

    if (!admin) {
      admin = await User.create({
        name: 'Jeevan Admin',
        email: adminEmail,
        phone: '+919999999999',
        password: 'Jeevan1234',
        role: 'admin',
        isActive: true,
      });
      console.log('✅ Admin Account Created: jeevan@poultrymart.com / Jeevan1234');
    } else {
      admin.password = 'Jeevan1234';
      await admin.save();
      console.log('ℹ️ Admin Account updated: jeevan@poultrymart.com / Jeevan1234');
    }

    // 2. Check/Create Sample Sellers
    const sellerIds = [];
    for (const sData of sampleSellers) {
      let seller = await User.findOne({ email: sData.email });
      if (!seller) {
        seller = await User.create(sData);
        console.log(`✅ Sample Naatu Kollu Seller Created: ${seller.name} (${seller.farmName})`);
      } else {
        console.log(`ℹ️ Seller already exists: ${seller.email}`);
      }
      sellerIds.push(seller._id);
    }

    // Clear and re-seed poultry listings
    await Poultry.deleteMany({});
    if (sellerIds.length >= 2) {
      const demoListings = samplePoultryListings(sellerIds[0], sellerIds[1]);
      await Poultry.insertMany(demoListings);
      console.log(`✅ Seeded ${demoListings.length} Naatu Kollu listings including Gamefowl Aseel into MongoDB Atlas!`);
    }

    console.log('\n[MongoDB Atlas Seed Completed Successfully] Gamefowl & Naatu Kollu Marketplace ready!');
    process.exit(0);
  } catch (error) {
    console.error(`====================================================`);
    console.error(`❌ [MongoDB Atlas Seed Failed]: ${error.message}`);
    console.error(`====================================================`);
    process.exit(1);
  }
};

seedData();
