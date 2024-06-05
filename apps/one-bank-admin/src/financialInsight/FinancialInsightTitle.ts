import { FinancialInsight as TFinancialInsight } from "../api/financialInsight/FinancialInsight";

export const FINANCIALINSIGHT_TITLE_FIELD = "content";

export const FinancialInsightTitle = (record: TFinancialInsight): string => {
  return record.content?.toString() || String(record.id);
};
