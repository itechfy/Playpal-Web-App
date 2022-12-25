import { IsNotEmpty, IsString } from 'class-validator';

export class uploadDTO {
  @IsString()
  @IsNotEmpty()
  userID!: string;

  @IsString()
  DOB?: string;

  @IsString()
  experience?: string;
}
