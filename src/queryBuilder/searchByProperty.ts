import { SearchByPropertyQuery } from "../types/queryBuilder";

export function queryBuilder(query: string): SearchByPropertyQuery {
  const validatorRegex = /^(\w\.?)*[\s?]*[=|<|>][\s?]*(".+"|\d+|true|false)$/i;
  const key            = /^(\w\.?)*/i;
  const value          = /(".+"|\d+|true|false)$/i;
  const operator       = /[=|<|>]/i;

  if (!validatorRegex.test(query)) {
    throw new Error(`Invalid query: ${query}`);
  }

  const parseOperator = () => {
    switch (query.match(operator)[0]) {
      case "=":
        return "equals";
      case ">":
        return "greaterThan";
      case "<":
        return "lessThan";
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