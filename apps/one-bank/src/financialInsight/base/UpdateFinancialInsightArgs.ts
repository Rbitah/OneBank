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
import { FinancialInsightWhereUniqueInput } from "./FinancialInsightWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FinancialInsightUpdateInput } from "./FinancialInsightUpdateInput";

@ArgsType()
class UpdateFinancialInsightArgs {
  @ApiProperty({
    required: true,
    type: () => FinancialInsightWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinancialInsightWhereUniqueInput)
  @Field(() => FinancialInsightWhereUniqueInput, { nullable: false })
  where!: FinancialInsightWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FinancialInsightUpdateInput,
  })
  @ValidateNested()
  @Type(() => FinancialInsightUpdateInput)
  @Field(() => FinancialInsightUpdateInput, { nullable: false })
  data!: FinancialInsightUpdateInput;
}

export { UpdateFinancialInsightArgs as UpdateFinancialInsightArgs };
