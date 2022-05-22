/*
Representacion de los datos del usuario en la BD
*/
export interface User {
  _id: string;
  name: string;
  role: { _id: string, name: string }
}

/* 
  Interfaz que ya implementa a 3 oficiales del torneo
*/
export interface Officials {
  admins: User[];
  coaches: User[];
  referees: User[];
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
  mixedCategories: Basic[];
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

//interface para crear torneo
export interface tupla {
  id_tournament?: String;
  name: String;
  category: String;
  branch: String[];
  type: String;
  town: String;
  places: String[];
  dates: string;
  time: String;
  administrators: String[];
  referees: String[];
  coaches: String[];
}

//interfaz para mostrar tabla torneos
export interface Tournament {
  id_tournament: string
  name: string;
  type: { name: string };
  category: { name: string };
  places_detail: { name: string }[];
  dates: string;
  statuses: { name: string };
}