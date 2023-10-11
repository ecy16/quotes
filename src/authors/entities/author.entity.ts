import { Quote } from "src/quotes/entities/quote.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(()=> Quote, (quote)=> quote.author )
    quote: Quote[]
}