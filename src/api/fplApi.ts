import axiosInstance from './axiosInstance';
import { API_ENDPOINTS, BootstrapStatic, Player, Team } from './endpoints';

// Fantasy Premier League API service
export class FPLApiService {
  
  /**
   * Get bootstrap static data (players, teams, gameweeks, etc.)
   */
  static async getBootstrapStatic(): Promise<BootstrapStatic> {
    const response = await axiosInstance.get(API_ENDPOINTS.BOOTSTRAP_STATIC);
    return response.data;
  }

  /**
   * Get all fixtures
   */
  static async getFixtures() {
    const response = await axiosInstance.get(API_ENDPOINTS.FIXTURES);
    return response.data;
  }

  /**
   * Get player detailed stats
   */
  static async getPlayerSummary(playerId: number) {
    const response = await axiosInstance.get(API_ENDPOINTS.ELEMENT_SUMMARY(playerId));
    return response.data;
  }

  /**
   * Get manager's team information
   */
  static async getManagerInfo(managerId: number) {
    const response = await axiosInstance.get(API_ENDPOINTS.ENTRY(managerId));
    return response.data;
  }

  /**
   * Get manager's season history
   */
  static async getManagerHistory(managerId: number) {
    const response = await axiosInstance.get(API_ENDPOINTS.ENTRY_HISTORY(managerId));
    return response.data;
  }

  /**
   * Get manager's picks for a specific gameweek
   */
  static async getManagerPicks(managerId: number, gameweek: number) {
    const response = await axiosInstance.get(API_ENDPOINTS.ENTRY_PICKS(managerId, gameweek));
    return response.data;
  }

  /**
   * Get manager's transfer history
   */
  static async getManagerTransfers(managerId: number) {
    const response = await axiosInstance.get(API_ENDPOINTS.ENTRY_TRANSFERS(managerId));
    return response.data;
  }

  /**
   * Get league standings
   */
  static async getLeagueStandings(leagueId: number) {
    const response = await axiosInstance.get(API_ENDPOINTS.LEAGUES_CLASSIC(leagueId));
    return response.data;
  }

  /**
   * Get dream team for a gameweek
   */
  static async getDreamTeam(gameweek: number) {
    const response = await axiosInstance.get(API_ENDPOINTS.DREAM_TEAM(gameweek));
    return response.data;
  }

  /**
   * Helper method to get current gameweek
   */
  static async getCurrentGameweek(): Promise<number> {
    const data = await this.getBootstrapStatic();
    const currentEvent = data.events.find(event => event.is_current);
    return currentEvent?.id || 1;
  }

  /**
   * Helper method to get next gameweek
   */
  static async getNextGameweek(): Promise<number> {
    const data = await this.getBootstrapStatic();
    const nextEvent = data.events.find(event => event.is_next);
    return nextEvent?.id || 1;
  }

  /**
   * Helper method to get players by position
   */
  static async getPlayersByPosition(position: number): Promise<Player[]> {
    const data = await this.getBootstrapStatic();
    return data.elements.filter(player => player.element_type === position);
  }

  /**
   * Helper method to get team by ID
   */
  static async getTeamById(teamId: number): Promise<Team | undefined> {
    const data = await this.getBootstrapStatic();
    return data.teams.find(team => team.id === teamId);
  }

  /**
   * Helper method to get player by ID
   */
  static async getPlayerById(playerId: number): Promise<Player | undefined> {
    const data = await this.getBootstrapStatic();
    return data.elements.find(player => player.id === playerId);
  }

  /**
   * Helper method to get top players by points
   */
  static async getTopPlayersByPoints(limit: number = 10): Promise<Player[]> {
    const data = await this.getBootstrapStatic();
    return data.elements
      .sort((a, b) => b.total_points - a.total_points)
      .slice(0, limit);
  }

  /**
   * Helper method to get most transferred in players
   */
  static async getMostTransferredIn(limit: number = 10): Promise<Player[]> {
    const data = await this.getBootstrapStatic();
    return data.elements
      .sort((a, b) => b.transfers_in_event - a.transfers_in_event)
      .slice(0, limit);
  }

  /**
   * Helper method to get most selected players
   */
  static async getMostSelected(limit: number = 10): Promise<Player[]> {
    const data = await this.getBootstrapStatic();
    return data.elements
      .sort((a, b) => parseFloat(b.selected_by_percent) - parseFloat(a.selected_by_percent))
      .slice(0, limit);
  }
}

// Custom API service for your own backend (if you have one)
export class CustomApiService {
  
  /**
   * Get AI squad suggestions
   */
  static async getSquadSuggestions() {
    const response = await axiosInstance.get(API_ENDPOINTS.CUSTOM.SQUAD_SUGGESTIONS);
    return response.data;
  }

  /**
   * Analyze current squad
   */
  static async analyzeSquad(playerIds: number[]) {
    const response = await axiosInstance.post(API_ENDPOINTS.CUSTOM.SQUAD_ANALYSIS, {
      player_ids: playerIds
    });
    return response.data;
  }

  /**
   * Get transfer suggestions
   */
  static async getTransferSuggestions(currentSquad: number[]) {
    const response = await axiosInstance.post(API_ENDPOINTS.CUSTOM.TRANSFER_SUGGESTIONS, {
      current_squad: currentSquad
    });
    return response.data;
  }

  /**
   * Get captain recommendations
   */
  static async getCaptainRecommendations(gameweek: number) {
    const response = await axiosInstance.get(`${API_ENDPOINTS.CUSTOM.CAPTAIN_RECOMMENDATIONS}?gameweek=${gameweek}`);
    return response.data;
  }

  /**
   * Get chip strategies
   */
  static async getChipStrategies(managerId: number) {
    const response = await axiosInstance.get(`${API_ENDPOINTS.CUSTOM.CHIP_STRATEGIES}?manager_id=${managerId}`);
    return response.data;
  }

  /**
   * Get price predictions
   */
  static async getPricePredictions() {
    const response = await axiosInstance.get(API_ENDPOINTS.CUSTOM.PRICE_PREDICTIONS);
    return response.data;
  }

  /**
   * Get fixture analysis
   */
  static async getFixtureAnalysis(gameweeks: number[]) {
    const response = await axiosInstance.post(API_ENDPOINTS.CUSTOM.FIXTURE_ANALYSIS, {
      gameweeks
    });
    return response.data;
  }
}

export default { FPLApiService, CustomApiService };