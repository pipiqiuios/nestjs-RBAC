import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // TypeOrmModule.forRoot({yang
    //   type: 'mysql',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'rbac_test',
    //   synchronize: true,
    //   logging: true,
    //   entities: [__dirname + '/**/*.entity{.ts,.js}']
    // }),
    // UserModule,
    // RoleModule,
    // PermissionModule,
  ],
})
export class AppModule {}
