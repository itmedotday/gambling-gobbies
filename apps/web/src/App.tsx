import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { SiteLayout } from '@/components/layout/SiteLayout';
import LandingPage from '@/pages/LandingPage';
import LobbyPage from '@/pages/LobbyPage';
import GamePage from '@/pages/GamePage';
import SettingsPage from '@/pages/SettingsPage';
import PlaceholderPage from '@/pages/PlaceholderPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/lobby" element={<LobbyPage />} />
          <Route path="/play/:gameId" element={<GamePage />} />
          <Route path="/versus" element={<PlaceholderPage title="Versus" note="Challenge a friend — arrives in milestone M6." />} />
          <Route path="/leaderboard" element={<PlaceholderPage title="Ranks" note="Leaderboards arrive in milestone M5." />} />
          <Route path="/profile" element={<PlaceholderPage title="Profile" note="Profiles arrive in milestone M5." />} />
          <Route path="/fairness" element={<PlaceholderPage title="Provably Fair" note="The verifier arrives in milestone M5." />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<PlaceholderPage title="404" note="The goblins ate this page." />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}
