/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialInsightWhereInput } from "./FinancialInsightWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FinancialInsightOrderByInput } from "./FinancialInsightOrderByInput";

@ArgsType()
class FinancialInsightFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FinancialInsightWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FinancialInsightWhereInput, { nullable: true })
  @Type(() => FinancialInsightWhereInput)
  where?: FinancialInsightWhereInput;

  @ApiProperty({
    required: false,
    type: [FinancialInsightOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FinancialInsightOrderByInput], { nullable: true })
  @Type(() => FinancialInsightOrderByInput)
  orderBy?: Array<FinancialInsightOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FinancialInsightFindManyArgs as FinancialInsightFindManyArgs };