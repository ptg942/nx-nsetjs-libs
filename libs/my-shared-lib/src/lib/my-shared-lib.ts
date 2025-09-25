import axios from 'axios';

const BASE_URL = 'https://openlibrary.org';

export interface Book {
  title: string;
  authors: { name: string }[];
  publish_date: string;
}

export class OpenLibraryService {
  async searchBooksByTitle(title: string): Promise<Book[]> {
    try {
      const response = await axios.get(`${BASE_URL}/search.json`, {
        params: { title: title }
      });
      // Обработка и возврат данных
      return response.data.docs.map((doc: any) => ({
        title: doc.title,
        authors: doc.author_name ? doc.author_name.map((name: string) => ({ name })) : [],
        publish_date: doc.first_publish_year,
      }));
    } catch (error) {
      console.error('Error fetching data from Open Library:', error);
      return [];
    }
  }
  async searchBooksByISBN(isbn: number): Promise<Book[]> {
    try {
      const response = await axios.get(`${BASE_URL}/search.json`, {
        params: { isbn }
      });
      // Обработка и возврат данных
      return response.data.docs.map((doc: any) => ({
        title: doc.title,
        authors: doc.author_name ? doc.author_name.map((name: string) => ({ name })) : [],
        publish_date: doc.first_publish_year,
      }));
    } catch (error) {
      console.error('Error fetching data from Open Library:', error);
      return [];
    }
  }
}
