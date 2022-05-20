//Estas son para el componente tournament detail
export interface Chip{
  id: number;
  titulo: string;
  estado: string;
}
export interface TournamentDetail {

    name: string;
    category: string[];
    type: string;
    places_detail: string[];
    admin_detail: string[];
    referee_detail: string[];
    coach_detail: string[];
    chips: Chip[];
    dates: string;
    time: string;

}

//interface para recepcion de datos
export interface Item {  
  id: number;  
  name: string;  
}

export interface Filter {
  value: string;
}

//interface para crear torneo
export interface tupla {    
  id_tournament?: number | any;
  name: string;
  category: number;
  branch: number[]; 
  type: number;
  town: number;
  places: number[];
  dates: string;  
  time: string;
  administrators: number[];
  referees: number[];
  coaches: number[];
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