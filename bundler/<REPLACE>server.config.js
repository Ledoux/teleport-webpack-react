const HOST = '0.0.0.0' // so we can test the project remotely over the same network
const PORT = 3000

module.exports = {
  host: HOST,
  port: PORT,
  url: `http://${HOST}:${PORT}`
}
