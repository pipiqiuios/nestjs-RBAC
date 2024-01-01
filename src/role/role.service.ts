import { HttpException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { In, Repository } from 'typeorm';
import { Permission } from '../permission/entities/permission.entity';
@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    // 查询传入的permissionIds
    const permissions = await this.permissionRepository.find({
      where: { id: In(createRoleDto.permissionIds) },
    });
    const name = createRoleDto.name;
    const existRole = await this.roleRepository.findOne({ where: { name } });
    if (existRole) {
      throw new HttpException('角色已经存在', 500);
    }
    return await this.roleRepository.save({ name, permissions });
  }

  async findAll() {
    return await this.roleRepository.find({ relations: ['permissions'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
