export interface User {
  _id: string;
  name: string;
  role: { _id: string, name: string }
}

export interface Officials {
  admins: User[];
  coaches: User[];
  referees: User[];
}


export interface Team{
  _id: string;
  name: string;
  teamLogo: string;
  tournamentId: string;
  categoryId: string;
  Player: Player[];
}



export interface TeamsToPlay{
  _id: string;
  tournamentId: string;
  categoryId: string;
  initialStage: string;
  currentStage: string;
  semiFinal: TournamentStage;
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

/*
Interfaz que sirve para cualquier objeto que solo tenga (o necesites) el id 
y el nombre
*/
export interface Basic{
  _id: string;
  name: string;
}

export interface TournamentDetail {
  type: { name: string };
  dates: { init: string, final: string };
  officials: Officials;
  _id: string;
  name: string;
  category: { name: string };
  branches: Basic[];
  places: Basic[];
  hours: string;
  mixedCategories: { _id: string, name: string, status: string }[];
  status: string;
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

export interface player {
  name: string;
  curp: string;
  playerNumber: string;
}

export interface team {  
  name: string;
  categoryId: string;
  players: player [];
  image: string;
}

export interface teamList{
  _id: string;
  name: string;
  teamLogo: string;
}