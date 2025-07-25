// lib/socket.ts
import { io } from "socket.io-client";

const URL = "http://localhost:5000";

export const socket = io(URL, {
  transports: ["websocket"],
  withCredentials: true,
  autoConnect: false, // <-- add this to control connection manually
});
