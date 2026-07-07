import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { SiteLayout } from '@/components/layout/SiteLayout';
import LandingPage from '@/pages/LandingPage';
import LobbyPage from '@/pages/LobbyPage';
import GamePage from '@/pages/GamePage';
import SettingsPage from '@/pages/SettingsPage';
import ProfilePage from '@/pages/ProfilePage';
import LeaderboardPage from '@/pages/LeaderboardPage';
import FairnessPage from '@/pages/FairnessPage';
import VersusHubPage from '@/pages/VersusHubPage';
import VersusArenaPage from '@/pages/VersusArenaPage';
import PlaceholderPage from '@/pages/PlaceholderPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/lobby" element={<LobbyPage />} />
          <Route path="/play/:gameId" element={<GamePage />} />
          <Route path="/versus" element={<VersusHubPage />} />
          <Route path="/versus/:code" element={<VersusArenaPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/fairness" element={<FairnessPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<PlaceholderPage title="404" note="The goblins ate this page." />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}
