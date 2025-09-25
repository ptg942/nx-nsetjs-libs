import { Injectable } from '@nestjs/common';
import { OpenLibraryService, Book } from '@org/my-shared-lib'; // Импорт из вашей библиотеки

@Injectable()
export class BooksService {
  private openLibraryService: OpenLibraryService;

  constructor() {
    this.openLibraryService = new OpenLibraryService();
  }

  async findBooksByTitle(title: string): Promise<Book[]> {
    return this.openLibraryService.searchBooksByTitle(title);
  }

  async findBooksByISBN(isbn: number): Promise<Book[]> {
    return this.openLibraryService.searchBooksByISBN(isbn);
  }
}
