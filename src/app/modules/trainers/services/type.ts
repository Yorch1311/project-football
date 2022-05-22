/*
Interfaz que sirve para cualquier objeto que solo tenga (o necesites) el id 
y el nombre
*/
export interface Basic{
  _id: string;
  name: string;
}

export interface TournamentCategories {
  name: string;
  mixedCategories: Basic[];
  status: string;
}