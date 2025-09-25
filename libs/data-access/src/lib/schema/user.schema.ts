// libs/data-access/src/lib/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Document } from 'mongoose'; // <-- Make sure Document is imported

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  // ... your properties (email, password)
  @Prop({ required: true, unique: true })
  email!: string;

  @Prop({ required: true })
  password!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// 👇 The fix is here
UserSchema.pre<UserDocument>('save', async function (this: UserDocument, next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
