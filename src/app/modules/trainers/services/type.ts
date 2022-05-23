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

export interface player {
  name: string;
  curp: string;
  playerNumber: number;
}

export interface team {  
  name: string;
  categoryId: string;
  players: player [];
  image: string;
}