import { SearchByPropertyQuery } from "../types/queryBuilder";

export function queryBuilder(query: string): SearchByPropertyQuery {
  const validatorRegex = /^(\w\.?)*[\s?]*[=|<|>|>=|<=|\!=|@contains|@!contains|\$|\^|@regex|@in|@!in|@all][\s?]*(".+"|\d+|true|false)$/i;
  const key            = /^(\w\.?)*/i;
  const value          = /(".+"|\d+|true|false)$/i;
  const operator       = /[=|<|>|>=|<=|\!=|@contains|@!contains|\$|\^|@regex|@in|@!in|@all][\s?]/i;

  if (!validatorRegex.test(query)) {
    throw new Error(`Invalid query: ${query}`);
  }

  const parseOperator = () => {
    switch (query.match(operator)[0].toLowerCase()) {
      case "=":
        return "equals";
      case "!=":
        return "notEquals";
      case ">=":
        return "greaterThanOrEqualTo";
      case ">":
        return "greaterThan";
      case "<=":
        return "lessThanOrEqualTo";
      case "<":
        return "lessThan";
      case "@contains":
        return "contains";
      case "@!contains":
        return "notContains";
      case "^":
        return "startsWith";
      case "$":
        return "endsWith";
      case "@regex":
        return "matchesRegex"
      case "@in":
        return "in";
      case "@!in":
        return "notIn";
      case "@all":
        return "all";
    }
  }

  const parseValue = query.match(value)[0]
                          .replace(/^"/, "")
                          .replace(/"$/, "");

  return {
    key:      query.match(key)[0],
    value:    parseValue,
    operator: parseOperator()
  }
}