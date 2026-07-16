import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
})

export default api;

// axios : because it is a promise based HTTP client for the browser and node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It also supports the Promise API that is native to JS ES6+.