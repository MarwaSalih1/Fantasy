import { Player, Team, ElementType } from '../api/endpoints';

// Helper functions for FPL data manipulation and calculations

/**
 * Format player price from API (comes as 55 for £5.5m)
 */
export const formatPrice = (price: number): string => {
  return `£${(price / 10).toFixed(1)}m`;
};

/**
 * Get position name from element type
 */
export const getPositionName = (elementType: number, elementTypes: ElementType[]): string => {
  const position = elementTypes.find(type => type.id === elementType);
  return position?.singular_name || 'Unknown';
};

/**
 * Get position short name
 */
export const getPositionShort = (elementType: number, elementTypes: ElementType[]): string => {
  const position = elementTypes.find(type => type.id === elementType);
  return position?.singular_name_short || 'UNK';
};

/**
 * Get team name from team ID
 */
export const getTeamName = (teamId: number, teams: Team[]): string => {
  const team = teams.find(t => t.id === teamId);
  return team?.name || 'Unknown Team';
};

/**
 * Get team short name
 */
export const getTeamShortName = (teamId: number, teams: Team[]): string => {
  const team = teams.find(t => t.id === teamId);
  return team?.short_name || 'UNK';
};

/**
 * Calculate player value (points per million)
 */
export const calculatePlayerValue = (player: Player): number => {
  const price = player.now_cost / 10;
  return price > 0 ? player.total_points / price : 0;
};

/**
 * Calculate form rating
 */
export const calculateFormRating = (form: string): number => {
  return parseFloat(form) || 0;
};

/**
 * Get player status color
 */
export const getPlayerStatusColor = (status: string): string => {
  switch (status) {
    case 'a': return 'text-green-600'; // Available
    case 'd': return 'text-yellow-600'; // Doubtful
    case 'i': return 'text-red-600'; // Injured
    case 'n': return 'text-red-600'; // Not available
    case 's': return 'text-orange-600'; // Suspended
    case 'u': return 'text-gray-600'; // Unavailable
    default: return 'text-gray-600';
  }
};

/**
 * Get player status text
 */
export const getPlayerStatusText = (status: string): string => {
  switch (status) {
    case 'a': return 'Available';
    case 'd': return 'Doubtful';
    case 'i': return 'Injured';
    case 'n': return 'Not Available';
    case 's': return 'Suspended';
    case 'u': return 'Unavailable';
    default: return 'Unknown';
  }
};

/**
 * Calculate expected points based on form and fixtures
 */
export const calculateExpectedPoints = (
  player: Player,
  fixtureMultiplier: number = 1
): number => {
  const form = parseFloat(player.form) || 0;
  const pointsPerGame = parseFloat(player.points_per_game) || 0;
  
  // Simple calculation - can be made more sophisticated
  return (form * 0.6 + pointsPerGame * 0.4) * fixtureMultiplier;
};

/**
 * Get fixture difficulty color
 */
export const getFixtureDifficultyColor = (difficulty: number): string => {
  if (difficulty <= 2) return 'bg-green-100 text-green-800';
  if (difficulty === 3) return 'bg-yellow-100 text-yellow-800';
  if (difficulty === 4) return 'bg-orange-100 text-orange-800';
  return 'bg-red-100 text-red-800';
};

/**
 * Sort players by various criteria
 */
export const sortPlayers = (
  players: Player[],
  sortBy: 'points' | 'form' | 'value' | 'price' | 'selected'
): Player[] => {
  return [...players].sort((a, b) => {
    switch (sortBy) {
      case 'points':
        return b.total_points - a.total_points;
      case 'form':
        return parseFloat(b.form) - parseFloat(a.form);
      case 'value':
        return calculatePlayerValue(b) - calculatePlayerValue(a);
      case 'price':
        return a.now_cost - b.now_cost;
      case 'selected':
        return parseFloat(b.selected_by_percent) - parseFloat(a.selected_by_percent);
      default:
        return 0;
    }
  });
};

/**
 * Filter players by position
 */
export const filterPlayersByPosition = (
  players: Player[],
  position: number
): Player[] => {
  return players.filter(player => player.element_type === position);
};

/**
 * Filter players by team
 */
export const filterPlayersByTeam = (
  players: Player[],
  teamId: number
): Player[] => {
  return players.filter(player => player.team === teamId);
};

/**
 * Get top players by position
 */
export const getTopPlayersByPosition = (
  players: Player[],
  position: number,
  limit: number = 5
): Player[] => {
  return filterPlayersByPosition(players, position)
    .sort((a, b) => b.total_points - a.total_points)
    .slice(0, limit);
};

/**
 * Calculate team strength
 */
export const calculateTeamStrength = (team: Team): number => {
  return (team.strength_overall_home + team.strength_overall_away) / 2;
};

/**
 * Get player image URL
 */
export const getPlayerImageUrl = (player: Player): string => {
  return `https://resources.premierleague.com/premierleague/photos/players/250x250/p${player.photo.replace('.jpg', '.png')}`;
};

/**
 * Get team badge URL
 */
export const getTeamBadgeUrl = (team: Team): string => {
  return `https://resources.premierleague.com/premierleague/badges/25/t${team.code}.png`;
};

/**
 * Get team kit URL
 */
export const getTeamKitUrl = (team: Team): string => {
  return `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${team.code}-110.webp`;
};

/**
 * Format large numbers (e.g., 1500000 -> 1.5M)
 */
export const formatLargeNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

/**
 * Calculate points per game
 */
export const calculatePointsPerGame = (totalPoints: number, gamesPlayed: number): number => {
  return gamesPlayed > 0 ? totalPoints / gamesPlayed : 0;
};

/**
 * Get next deadline
 */
export const getNextDeadline = (events: any[]): Date | null => {
  const nextEvent = events.find(event => event.is_next);
  return nextEvent ? new Date(nextEvent.deadline_time) : null;
};

/**
 * Check if player is flagged (injured, suspended, etc.)
 */
export const isPlayerFlagged = (player: Player): boolean => {
  return player.status !== 'a' && player.status !== '';
};

/**
 * Get player news summary
 */
export const getPlayerNewsSummary = (player: Player): string => {
  if (!player.news) return '';
  
  // Truncate long news
  if (player.news.length > 100) {
    return player.news.substring(0, 100) + '...';
  }
  
  return player.news;
};