const express = require('express');
const app = express();
const PORT = process.env.PORT || 3007;

app.use(express.static('public/dist'));

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
