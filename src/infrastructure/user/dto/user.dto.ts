import { createZodDto } from '../../zod/create-zod-dto.js';
import { UserDtoSchema } from '../../../application/user/schemas/user.schema.js';

export class UserDto extends createZodDto(UserDtoSchema) {}
