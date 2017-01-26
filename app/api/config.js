
const dev = process.env.NODE_ENV !== 'production';
export default dev ? 'http://jsonplaceholder.typicode.com' : 'http://jsonplaceholder.typicode.com';
