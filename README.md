# Number Classification API (Node.js)

## Description
This is a public API that classifies numbers and provides interesting mathematical properties, along with a fun fact.

## API Endpoint
- **URL**: "https://number-classification-api-bj7o.onrender.com"
- **Method**: "GET"
- **GET /api/classify-number?number={number}**: Returns JSON with:
  - Number
  - Prime status
  - Perfect number status
  - Properties (e.g., Armstrong, even, odd)
  - Digit sum
  - Fun fact from the Numbers API

### Example Request
```bash
GET https://number-classification-api-bj7o.onrender.com/api/classify-number?number=371
```

### Example Response (200 OK)
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)
```json
{
    "number": "alphabet",
    "error": true
}
```

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/taiwoak/number-classification-api.git
```

### Install Dependencies
```bash
npm install
```

### Run the Server
```bash
node index.js
```

## Deployment
The API is deployed and publicly accessible at: [number-classification-api](https://number-classification-api-bj7o.onrender.com)