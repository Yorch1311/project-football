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
