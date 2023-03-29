export default function (state, ConType, end, write) {
  req.writeHead(state, {'Content-Type':ConType});
  if (write) {
    req.write(write);
  }
  req.end(end);
}