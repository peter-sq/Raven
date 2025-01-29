
A small money transfer App using Node.js, Express, Knex.js, MySQL, and Raven Atlas API for bank transfers.
Features
✅ User authentication (JWT)
✅ Virtual bank account creation
✅ Deposit notifications (via webhooks)
✅ Fund transfers to other banks
✅ Transaction history retrieval

Tech Stack
Backend: Node.js, Express.js
Database: MySQL, Knex.js
External API: Raven Atlas API

Setup

Clone & Install
git clone https://github.com/your-username/RavenBank.git
cd RavenBank && npm install


Set Up .env File
DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=yourpassword  
DB_NAME=  
RAVEN_ATLAS_API_KEY=your_api_key  
JWT_SECRET=your_jwt_secret  
PORT=3001  

Run Migrations & Start Server

npm run migrate
npm run dev
