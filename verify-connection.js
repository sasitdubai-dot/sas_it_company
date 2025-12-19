// Quick script to verify the connection string format
require('dotenv').config({ path: '.env.local' });

const dbUrl = process.env.DATABASE_URL;

console.log('🔍 Checking DATABASE_URL...\n');

if (!dbUrl) {
  console.error('❌ DATABASE_URL is not set!');
  process.exit(1);
}

console.log('✅ DATABASE_URL is set');
console.log('   Length:', dbUrl.length);
console.log('   Starts with:', dbUrl.substring(0, 30) + '...');
console.log('   Contains @:', dbUrl.includes('@') ? '✅' : '❌');
console.log('   Contains host:', dbUrl.includes('aws-1-ap-southeast-1') ? '✅' : '❌');
console.log('\n');

// Parse the connection string
try {
  const url = new URL(dbUrl);
  console.log('✅ Connection string is valid URL format');
  console.log('   Protocol:', url.protocol);
  console.log('   Username:', url.username);
  console.log('   Password:', url.password ? '***' + url.password.slice(-3) : 'NOT SET');
  console.log('   Host:', url.hostname);
  console.log('   Port:', url.port);
  console.log('   Database:', url.pathname);
  console.log('   Params:', url.search);
  
  if (!url.hostname) {
    console.error('\n❌ ERROR: Hostname is empty!');
    console.error('   This is the problem - the connection string is malformed.');
    console.error('\n   Current connection string (first 100 chars):');
    console.error('   ', dbUrl.substring(0, 100));
  } else {
    console.log('\n✅ Connection string format looks correct!');
  }
} catch (error) {
  console.error('❌ Error parsing connection string:', error.message);
  console.error('\n   Connection string:', dbUrl);
}

