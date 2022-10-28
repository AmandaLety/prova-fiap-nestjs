import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/createRegister.dto';
import { UpdateRegisterDto } from './dto/updateRegister.dto';

@Injectable()
export class RegisterService {
  register: any;
  create(createRegisterDto: CreateRegisterDto) {
    return `Cliente ${name} cadastrado com sucesso!`;
  }

  findAll() {
    return `This action returns all register`;
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
}
