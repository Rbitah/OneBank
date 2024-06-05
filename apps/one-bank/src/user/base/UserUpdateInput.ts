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
import { BudgetUpdateManyWithoutUsersInput } from "./BudgetUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FinancialInsightUpdateManyWithoutUsersInput } from "./FinancialInsightUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { WebhookUpdateManyWithoutUsersInput } from "./WebhookUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BudgetUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BudgetUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BudgetUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  budgets?: BudgetUpdateManyWithoutUsersInput;

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
    type: () => FinancialInsightUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FinancialInsightUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FinancialInsightUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  financialInsights?: FinancialInsightUpdateManyWithoutUsersInput;

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
    type: () => NotificationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NotificationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NotificationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  notifications?: NotificationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: () => WebhookUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WebhookUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WebhookUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  webhooks?: WebhookUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };