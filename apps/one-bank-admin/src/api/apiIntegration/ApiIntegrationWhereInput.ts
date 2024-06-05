import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ApiIntegrationWhereInput = {
  apiKey?: StringNullableFilter;
  description?: StringNullableFilter;
  endpoint?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
