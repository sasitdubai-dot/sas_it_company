// Quick test script to verify database connection
// Run with: node test-connection.js

require('dotenv').config({ path: '.env.local' });

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testConnection() {
  console.log('🔍 Testing database connection...\n');
  
  // Check if DATABASE_URL is set
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error('❌ DATABASE_URL is not set in .env.local');
    process.exit(1);
  }
  
  // Check if password placeholder is still there
  if (dbUrl.includes('[YOUR-PASSWORD]')) {
    console.error('❌ ERROR: [YOUR-PASSWORD] placeholder found in DATABASE_URL!');
    console.error('   Please replace it with your actual Supabase database password.\n');
    console.error('   Current DATABASE_URL:', dbUrl.replace(/:[^:@]+@/, ':****@'));
    process.exit(1);
  }
  
  console.log('✅ DATABASE_URL is set');
  console.log('   Connection string:', dbUrl.replace(/:[^:@]+@/, ':****@'), '\n');
  
  try {
    // Try to connect
    console.log('🔄 Attempting to connect to database...');
    await prisma.$connect();
    console.log('✅ Successfully connected to database!\n');
    
    // Try a simple query
    console.log('🔄 Testing query...');
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Query successful!');
    console.log('   Result:', result, '\n');
    
    // Check if projects table exists
    console.log('🔄 Checking if projects table exists...');
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'projects'
    `;
    
    if (tables.length > 0) {
      console.log('✅ Projects table exists!\n');
    } else {
      console.log('⚠️  Projects table does not exist.');
      console.log('   Please run supabase-setup.sql in Supabase SQL Editor.\n');
    }
    
    console.log('🎉 All tests passed! Your database connection is working correctly.');
    
  } catch (error) {
    console.error('\n❌ Connection failed!\n');
    console.error('Error:', error.message);
    
    if (error.message.includes('Tenant or user not found')) {
      console.error('\n💡 This usually means:');
      console.error('   1. The password is incorrect');
      console.error('   2. The password contains special characters that need URL-encoding');
      console.error('   3. The database user doesn\'t exist\n');
      console.error('   Check UPDATE_PASSWORD.md for instructions on how to fix this.');
    } else if (error.message.includes('password authentication failed')) {
      console.error('\n💡 Password authentication failed.');
      console.error('   Please verify your database password in Supabase Dashboard.');
    } else if (error.message.includes('timeout')) {
      console.error('\n💡 Connection timeout.');
      console.error('   Check your internet connection and Supabase project status.');
    }
    
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();

