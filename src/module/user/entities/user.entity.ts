import {
  BaseEntity,
  Column,
  Entity,
  //   JoinTable,
  //   ManyToMany,
  //   ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiHideProperty } from '@nestjs/swagger';
// import { Dept } from '../../dept/entities/dept.entity';
// import { Role } from '../../role/entities/role.entity';
// import { Post } from '../../post/entities/post.entity';
@Entity()
export class User extends BaseEntity {
  /* userId */
  @PrimaryGeneratedColumn({
    name: 'user_id',
    comment: '用户ID',
  })
  @Type()
  @IsNumber()
  userId: number;

  /* 用户账号 */

  @Column({
    name: 'user_name',
    comment: '用户账号',
    length: 30,
  })
  @IsString()
  userName: string;
  /* 用户昵称 */
  @Column({
    name: 'nick_name',
    comment: '用户昵称',
    length: 30,
  })
  @IsString()
  nickName: string;

  /* 用户类型 */
  @Column({
    name: 'user_type',
    comment: '用户类型(00系统用户)',
    length: 30,
  })
  @IsOptional()
  @IsString()
  userType?: string;

  /* 用户邮箱 */

  @Column({
    comment: '用户邮箱',
    length: 50,
    default: null,
  })
  @IsOptional()
  @IsEmail()
  email?: string;
  /* 手机号码 */
  @Column({
    comment: '手机号码',
    length: 11,
    default: null,
  })
  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  /* 手机号码 */
  @Column({
    comment: '用户性别(0男 1女 2未知)',
    type: 'char',
    length: 1,
    default: 0,
  })
  @IsOptional()
  @IsPhoneNumber()
  sex?: string;
  /* 头像地址*/

  @Column({
    comment: '头像地址',
    length: 100,
    default: '',
  })
  @IsOptional()
  @IsString()
  avatar?: string;

  /* 密码 */

  @Column({
    comment: '密码',
    length: 100,
    default: '',
    select: false,
  })
  @IsString()
  password: string;

  @ApiHideProperty()
  @Column({
    comment: '盐加密',
    length: 100,
    default: '',
    select: false,
  })
  salt: string;

  /**账号状态 */
  @Column({
    comment: '账号状态(0正常 1停用)',
    type: 'char',
    length: 1,
    default: '0',
  })
  @IsString()
  status: string;

  /* 最后登录时间 */
  @Column({
    name: 'login_date',
    comment: '最后登录时间',
    default: null,
  })
  @IsOptional()
  @IsString()
  loginDate?: Date;

  //   @ApiHideProperty()
  //   @ManyToOne(() => Dept, (dept) => dept.users)
  //   dept: Dept;

  //   @ApiHideProperty()
  //   @ManyToMany(() => Post, (post) => post.users)
  //   @JoinTable()
  //   posts: Post[];

  //   @ApiHideProperty()
  //   @ManyToMany(() => Role, (role) => role.users)
  //   @JoinTable()
  //   roles: Role[];
}
