export interface Profile {
  name: string;
  personality: string;
  autoMessage?: string;
  triggerOnJoin?: boolean;
  triggerOnRespawn?: boolean;
  auth?: "offline" | "mojang" | "microsoft";
}

export type OpenAIModel = "llm-mini" | "llm";

export type UserSettings = {
  host: string;
  port: number;
  player_username: string;
  profiles: Profile[];
  whisper_to_player: boolean;
  voice_mode: boolean;
  key_binding: string;
  language: string;
  openai_api_key: string;
  model: string;
  useOwnApiKey: boolean;
  input_device_id: string;
};
