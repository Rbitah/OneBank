/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BudgetCreateNestedManyWithoutUsersInput } from "./BudgetCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FinancialInsightCreateNestedManyWithoutUsersInput } from "./FinancialInsightCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { WebhookCreateNestedManyWithoutUsersInput } from "./WebhookCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => BudgetCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BudgetCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BudgetCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  budgets?: BudgetCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FinancialInsightCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FinancialInsightCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FinancialInsightCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  financialInsights?: FinancialInsightCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => WebhookCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WebhookCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WebhookCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  webhooks?: WebhookCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
