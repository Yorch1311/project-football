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

//interface para crear torneo
export interface tupla {    
  id_tournament?: string;
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
