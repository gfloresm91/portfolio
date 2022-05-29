export interface Recomendation {
  id: number;
  message: string;
  link: string;
  colaboratorData: Colaborator[];
}

interface Colaborator {
  id: number;
  idRecomendation: number;
  name: string;
  image: string;
  job: string;
}
