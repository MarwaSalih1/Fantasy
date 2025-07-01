import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./FootballPitch.css";
import axiosInstance from '../axiosConfig';


// Type definitions
type Player = {
  id?: number;
  web_name?: string;
  now_cost?: number;
  total_points?: number;
  team?: {
    code: string;
    name: string;
  };
  element_type?: string;
  position?: string;
};

type TeamStructure = {
  goalkeepers: Player[];
  defenders: Player[];
  midfielders: Player[];
  forwards: Player[];
};

const SquadSelection: React.FC = () => {
  const navigate = useNavigate();
  const [isTeamPicked, setIsTeamPicked] = useState<boolean>(false);
  const [team, setTeam] = useState<TeamStructure>({
    goalkeepers: [{ position: "GK" }, { position: "GK" }],
    defenders: Array(5).fill({ position: "DEF" }),
    midfielders: Array(5).fill({ position: "MID" }),
    forwards: Array(3).fill({ position: "FWD" })
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const fetchRandomPlayers = async () => {
    try {
      const response = await axiosInstance.get("/squad/suggested-squad");
      const data = response.data;
      
      const transformedData: TeamStructure = {
        goalkeepers: data.Team.filter((player: Player) => player.element_type === "GK"),
        defenders: data.Team.filter((player: Player) => player.element_type === "DEF"),
        midfielders: data.Team.filter((player: Player) => player.element_type === "MID"),
        forwards: data.Team.filter((player: Player) => player.element_type === "FWD")
      };
      
      setTeam(transformedData);
      setTotalPrice(data["Total Team Price"] || 0);
      setIsTeamPicked(true);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleEnterSquad = async () => {
    try {
      const playerIds = [
        ...team.goalkeepers,
        ...team.defenders,
        ...team.midfielders,
        ...team.forwards
      ]
      .filter(player => player.id)
      .map(player => player.id);

      const response = await axiosInstance.post("/squad/squad-selected", playerIds);
      
      navigate('/formation', {
        state: {
          formation: response.data.Formation,
          team: response.data.Team,
          captainId: response.data.Captain.C[0],
          viceCaptainId: response.data.Captain.VC[0],
          XiScore: response.data["Xi Expected Score"],
          subsScore: response.data["Subs Expected Score"]
        }
      });
    } catch (error) {
      console.error("Error saving team:", error);
      alert("Failed to save team. Please try again.");
    }
  };

  const resetTeam = () => {
    setTeam({
      goalkeepers: [{ position: "GK" }, { position: "GK" }],
      defenders: Array(5).fill({ position: "DEF" }),
      midfielders: Array(5).fill({ position: "MID" }),
      forwards: Array(3).fill({ position: "FWD" })
    });
    setTotalPrice(0);
    setIsTeamPicked(false);
  };

  const PlayerCard: React.FC<{ player: Player }> = ({ player }) => (
    <Col className="player-card">
      <div className="player-card-content">
        {player.web_name ? (
          <>
            <img
              src={`https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${player.team?.code}-110.webp`}
              alt={`${player.team?.name} kit`}
              className="team-shirt"
            />
            <div className="player-info">
              <div>{player.web_name}</div>
              <small>${player.now_cost}m</small>
              <div>Total Points: {player.total_points}</div>
              <div>{player.team?.name} ({player.element_type})</div>
            </div>
          </>
        ) : (
          <div className="empty-player">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" viewBox="0 0 24 24">
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/>
            </svg>
            <div className="position-text">{player.position}</div>
          </div>
        )}
      </div>
    </Col>
  );

  return (
    <Container fluid className="pitch-container">
      <div className="football-pitch">
        <div className="text-center mb-3">
          <Badge color="danger" pill className="price-badge">
            Total Team Price: ${totalPrice.toFixed(1)}m
          </Badge>
        </div>

        {/* Player rows remain the same */}
        <Row className="player-row goalkeeper">
          {team.goalkeepers.map((player, index) => (
            <PlayerCard key={`gk-${index}`} player={player} />
          ))}
        </Row>
        {/* ... other positions ... */}

        <div className="text-center mt-4">
          <Button color="danger" className="mx-2" onClick={fetchRandomPlayers}>Auto Pick</Button>
          <Button color="danger" className="mx-2" onClick={resetTeam}>Reset</Button>
          <Button 
            color="info" 
            className="mx-2" 
            onClick={handleEnterSquad}
            disabled={!isTeamPicked}
          >
            Enter Squad
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SquadSelection;