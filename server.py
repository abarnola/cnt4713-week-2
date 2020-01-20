import http.server
import socketserver
import os

PORT = int(os.environ.get('PORT', 5000))

handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(('', PORT), handler) as httpd:
    print('serving at port', PORT)
    httpd.serve_forever()
