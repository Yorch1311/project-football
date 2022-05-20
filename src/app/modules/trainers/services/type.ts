//Estas son para el componente tournament categories
export interface TournamentCategories {
  name: string;
  chips: {
    id_chip: string;
    name_category: string;
    name_branch: string;
    status: string;
  }[];
}
