const server = require("./server");
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`\n 🚀  Server ready at http://localhost:${PORT} \n`));
