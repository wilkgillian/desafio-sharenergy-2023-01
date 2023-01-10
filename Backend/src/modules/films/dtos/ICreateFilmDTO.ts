export interface ICreateFilmDTO {
  id?: string;
  title: string;
  description: string;
  created_at?: string;
  image: string;
  movie_banner?: string;
  movie_url?: string;
  director: string;
  producer: string;
  release_date: number;
  running_time: number;
  rt_score: number;
  genre: string;
}
