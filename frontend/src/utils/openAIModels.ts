import { OpenAIModel } from "../types/apiTypes";

const openAIModels: { value: OpenAIModel, label: string }[] = [
  {
    value: "llm-mini",
    label: "llm-mini"
  },
  {
    value: "llm",
    label: "llm"
  }
];

export default openAIModels;
