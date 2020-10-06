const sendResponse = (res, status, data) => {
  res.status(status)
  res.json({ data })
}

module.exports = {
  sendResponse,
}
