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
import { FinancialInsightWhereInput } from "./FinancialInsightWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FinancialInsightListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FinancialInsightWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialInsightWhereInput)
  @IsOptional()
  @Field(() => FinancialInsightWhereInput, {
    nullable: true,
  })
  every?: FinancialInsightWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinancialInsightWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialInsightWhereInput)
  @IsOptional()
  @Field(() => FinancialInsightWhereInput, {
    nullable: true,
  })
  some?: FinancialInsightWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinancialInsightWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialInsightWhereInput)
  @IsOptional()
  @Field(() => FinancialInsightWhereInput, {
    nullable: true,
  })
  none?: FinancialInsightWhereInput;
}
export { FinancialInsightListRelationFilter as FinancialInsightListRelationFilter };