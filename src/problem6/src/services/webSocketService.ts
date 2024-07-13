import WebSocket from 'ws';
import { IncomingMessage } from 'http';
import { Server } from 'http';
import UserScore from '../models/score';

const wss = new WebSocket.Server({ noServer: true });

export const setupWebSocket = (server: Server) => {
  server.on('upgrade', (request: IncomingMessage, socket: any, head: Buffer) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });

  wss.on('connection', (ws) => {
    console.log('WebSocket client connected');
  });
};

export const updateTopScores = async () => {
  const topScores = await UserScore.find().sort({ score: -1 }).limit(10).exec();

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(topScores));
    }
  });
};
