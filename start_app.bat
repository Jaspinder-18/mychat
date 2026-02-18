@echo off
echo Starting SimpleConnect...
echo Please ensure MongoDB is running on localhost:27017

start "Backend Server" cmd /k "cd backend && npm run dev"
start "Frontend Client" cmd /k "cd frontend && npm run dev"

echo Servers starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
pause
