import { createZodDto } from '../../zod/create-zod-dto.js';
import { UserUpdateDtoSchema } from '../../../application/user/schemas/user-update.schema.js';

export class UserUpdateDto extends createZodDto(UserUpdateDtoSchema) {}
