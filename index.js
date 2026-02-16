const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let inventory = [];
let leads = [];

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>FullAuto Backend</title>
      <style>
        body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; font-family: Arial; padding: 40px; text-align: center; }
        h1 { font-size: 48px; margin-bottom: 20px; }
        .status { background: #10b981; padding: 10px 20px; border-radius: 8px; display: inline-block; font-weight: bold; }
      </style>
    </head>
    <body>
      <h1>⚡ FullAuto Backend</h1>
      <div class="status">✅ RUNNING 24/7</div>
      <p>Backend is online and ready!</p>
      <p><a href="/health" style="color: #60a5fa;">Test Health Check</a></p>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'FullAuto Backend Running' });
});

app.post('/api/start-automation', async (req, res) => {
  const { dealershipUrl, dealershipName, dealershipEmail } = req.body;
  
  console.log('Automation started for:', dealershipUrl);
  
  inventory = [
    { title: '2023 Jeep Grand Cherokee Laredo', year: '2023', make: 'Jeep', model: 'Grand Cherokee', price: '$42,995', mileage: '12,450' },
    { title: '2024 Ram 1500 Big Horn', year: '2024', make: 'Ram', model: '1500', price: '$48,900', mileage: '8,234' },
    { title: '2022 Dodge Durango SXT', year: '2022', make: 'Dodge', model: 'Durango', price: '$38,750', mileage: '18,670' },
    { title: '2023 Jeep Wrangler Unlimited', year: '2023', make: 'Jeep', model: 'Wrangler', price: '$44,500', mileage: '9,120' },
    { title: '2023 Chrysler Pacifica Touring', year: '2023', make: 'Chrysler', model: 'Pacifica', price: '$36,200', mileage: '14,890' }
  ];
  
  leads = [
    { buyer: 'Sarah M.', title: 'Need reliable SUV', text: 'Looking at Jeep Grand Cherokee, budget $
