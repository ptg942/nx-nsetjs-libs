import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '@org/my-shared-lib'; // Импорт интерфейса из библиотеки

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('search')
  async searchBooks(@Query('title') title: string, @Query('isbn') isbn: number,): Promise<Book[]> {
    if (title) {
      return this.booksService.findBooksByTitle(title);
    }
    if (isbn) {
      return this.booksService.findBooksByISBN(isbn);
    }
    return [];
  }
}
