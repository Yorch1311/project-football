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