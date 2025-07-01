import { useState, useEffect } from 'react';
import { FPLApiService } from '../api/fplApi';
import { BootstrapStatic, Player, Team } from '../api/endpoints';

// Custom hook for fetching and managing FPL data
export const useFPLData = () => {
  const [bootstrapData, setBootstrapData] = useState<BootstrapStatic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBootstrapData = async () => {
      try {
        setLoading(true);
        const data = await FPLApiService.getBootstrapStatic();
        setBootstrapData(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch FPL data');
        console.error('Error fetching bootstrap data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBootstrapData();
  }, []);

  return {
    bootstrapData,
    loading,
    error,
    refetch: () => {
      setLoading(true);
      setError(null);
      // Re-fetch data
    }
  };
};

// Custom hook for player data
export const usePlayerData = (playerId?: number) => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [playerHistory, setPlayerHistory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!playerId) return;

    const fetchPlayerData = async () => {
      try {
        setLoading(true);
        const [playerData, historyData] = await Promise.all([
          FPLApiService.getPlayerById(playerId),
          FPLApiService.getPlayerSummary(playerId)
        ]);
        
        setPlayer(playerData || null);
        setPlayerHistory(historyData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch player data');
        console.error('Error fetching player data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerData();
  }, [playerId]);

  return {
    player,
    playerHistory,
    loading,
    error
  };
};

// Custom hook for manager data
export const useManagerData = (managerId?: number) => {
  const [managerInfo, setManagerInfo] = useState(null);
  const [managerHistory, setManagerHistory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!managerId) return;

    const fetchManagerData = async () => {
      try {
        setLoading(true);
        const [infoData, historyData] = await Promise.all([
          FPLApiService.getManagerInfo(managerId),
          FPLApiService.getManagerHistory(managerId)
        ]);
        
        setManagerInfo(infoData);
        setManagerHistory(historyData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch manager data');
        console.error('Error fetching manager data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchManagerData();
  }, [managerId]);

  return {
    managerInfo,
    managerHistory,
    loading,
    error
  };
};

// Custom hook for current gameweek
export const useCurrentGameweek = () => {
  const [currentGameweek, setCurrentGameweek] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentGameweek = async () => {
      try {
        const gameweek = await FPLApiService.getCurrentGameweek();
        setCurrentGameweek(gameweek);
      } catch (err) {
        console.error('Error fetching current gameweek:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentGameweek();
  }, []);

  return { currentGameweek, loading };
};