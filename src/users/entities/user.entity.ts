import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
  } from 'typeorm';
  import * as bcrypt from 'bcrypt';
import { UserRoles } from 'src/auth/user.roles';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column()
    email: string;
  
    @Column()
    password: string;
@Column({ type:'enum', enum:UserRoles,
default:UserRoles.USER})
roles:UserRoles;
    
    // @BeforeInsert()
    // async hashPassword() {
    //   this.password = await bcrypt.hash(this.password, 10);
    // }
    // async validatePassword(password: string): Promise<boolean> {
    //   return bcrypt.compare(password, this.password);
    // }
  }
  