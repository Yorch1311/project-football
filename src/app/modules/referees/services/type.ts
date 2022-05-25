/*
Interfaz que sirve para cualquier objeto que solo tenga (o necesites) el id
y el nombre
*/
export interface mixedCategories{
  _id: string;
  name: string;
  status: string;
}

export interface TournamentCategories {
  name: string;
  mixedCategories: mixedCategories[];
}

//interface para recepcion de datos
export interface Item {
  _id: String;
  name: String;
}

export interface Filter {
  value: string;
}

export interface date_crate_edit {
  init: string;
  final: string;
}

//interface para recibir a los oficials
export interface oficial {
  admins: Item[];
  coaches: Item[];
  referees: Item[];
}


//interface para crear torneo
export interface tupla {
  _id?: String;
  name: String;
  type: String;
  branches?: String[];
  category?: String;
  dates: date_crate_edit;
  city: String;
  places: String[];
  hours: String;
  admins: String[];
  coaches: String[];
  referees: String[];
}

//interfaz para mostrar tabla torneos
export interface Tournament {
  _id: string
  name: string;
  type: { name: string };
  category: { name: string };
  places: { name: string }[];
  dates: {init :string };
  status: string;
}

export interface MatchHistory{
  _id: string;
  _id_category: string;
  name: string;
  actual_phase: string;
  phases: {
    name: string;
    _id: string
    matchList:
      {
        _id: string;
        team1: { _id: string, name: string, teamLogo: string};
        team2: { _id: string, name: string, teamLogo: string};
      }[]

  }[]
}

// interfaces para recibir match-history
export interface Player{
  _id: string;
  name: string;
  curp: string;
  playerNumber: number;
}

export interface matches{
  _id: string;
  name: string;
  teamLogo: string;
  tournamentId: string;
  categoryId: string;
  payers: Player[];
  goals: number;
  status: string;
}

export interface semifinal{
  status: string;
  matches: matches [];
  _id: string;
}


export interface final{
  status: string;
  matches: matches [];
  _id: string;
}

export interface matchHistory{
  _id: string;
  tournamentId: string;
  categoryId: string;
  initialStage: string;
  currentStage:string;
  semiFinal?: semifinal;
  __v?:number;
  final?: final;
}

//para recibir en storage de referres
export interface team{
  _id: string;
  name: string;
  teamLogo: string;
}

export interface partido {
  _id: string;
  id_category: string;
  team1:  team;
  team2: team;
}

export interface Team{
  _id: string;
  name: string;
  teamLogo: string;
  tournamentId: string;
  categoryId: string;
  Player: Player[];
}

export interface TournamentMatch{
  _id: string;
  tournamentId: string;
  categoryId: string;
  initialStage: string;
  currentStage: string;
  final: TournamentStage;
  semiFinal: TournamentStage;
  quarterFinal: TournamentStage;
  top16: TournamentStage;
}

export interface TournamentStage{
  status: string;
  matches: Match[][];
  _id: string;
}

export interface Match{
  _id: string;
  name: string;
  teamLogo: string;
  tournamentId: string;
  categoryId: string;
  players: Player[];
  goals: number;
  status: string;
}
export interface Player{
  _id: string;
  name: string;
  curp: string;
  playerNumber: number;
}

