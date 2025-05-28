import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppShell from '@/layout/AppShell';
import LogLinePage from '@/features/logline/LogLinePage';
import CommunicatorPage from '@/features/communicator/CommunicatorPage';
import NewPage from '@/features/new/NewPage';
import ThemeProvider from '@/core/theme/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <AppShell>
        <Routes>
          <Route path="/logline" element={<LogLinePage />} />
          <Route path="/chat" element={<CommunicatorPage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="*" element={<Navigate to="/logline" replace />} />
        </Routes>
      </AppShell>
    </ThemeProvider>
  );
}
