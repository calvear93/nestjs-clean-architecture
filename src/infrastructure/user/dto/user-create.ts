import { createZodDto } from '../../zod/create-zod-dto.js';
import { UserCreateDtoSchema } from '../../../application/user/schemas/user-create.schema.js';

export class UserCreateDto extends createZodDto(UserCreateDtoSchema) {}
