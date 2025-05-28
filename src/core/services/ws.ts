import { io } from 'socket.io-client';
export const socket = io('wss://echo.websocket.events', { transports: ['websocket'] });
