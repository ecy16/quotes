import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { UserRoles } from 'src/auth/user.roles';
import { AuthGuard } from '@nestjs/passport';
import { ACGuard, UseRoles } from 'nest-access-control';

@Controller('quotes')
@UseGuards(RoleGuard)

export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}
 

  
  @Post('create')
  createQuotes(@Body() createQuoteDto:CreateQuoteDto) {
 return this.quotesService.create(createQuoteDto)
  }
  
  @Get()
  findAllQuotes() {
    return this.quotesService.findAllQuotes();
  }
  
  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id: number) {
    return this.quotesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(RoleGuard)
  @UseRoles({
    resource:  'quote',
    action:  'update',
    possession:  'any',
  })
  update(@Param('id') id: string, @Body() updateQuoteDto: UpdateQuoteDto) {
    return this.quotesService.update(+id, updateQuoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotesService.remove(+id);
  }
}
