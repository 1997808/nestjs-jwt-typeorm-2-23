import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  birthday?: Date;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  password?: string;
}
