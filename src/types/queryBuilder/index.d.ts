export interface SearchByPropertyQuery {
  key:      string;
  value:    string;
  operator: string;
}

export interface QueryParams {
  prop:     string;
  operator: "or" | "and";
  value:    string;
}