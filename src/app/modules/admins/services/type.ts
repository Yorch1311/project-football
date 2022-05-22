export interface TournamentDetail {
    name: string;
    category: string;
    type: string;
    places_detail: { name: string }[];
    admin_detail: { name: string, apellido1: string }[];
    referee_detail: { name: string, apellido1: string }[];
    coach_detail: { name: string, apellido1: string }[];
    chips: {
      id_chip: string;
      name_category: string;
      name_branch: string;
      status: string;
    }[];
    dates: string;
    time: string;
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
  category: { name : string};
  places_detail: { name : string}[];
  dates: string;
  statuses: {name : string};
}