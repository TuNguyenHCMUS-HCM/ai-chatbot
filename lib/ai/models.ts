export const DEFAULT_CHAT_MODEL: string = 'chat-model';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-gpt-4o',
    name: 'GPT-4o',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-gpt-4o-mini',
    name: 'GPT-4o Mini',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-claude-haiku',
    name: 'Claude 3.5 Haiku',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-claude-sonet',
    name: 'Claude 3.5 Sonnet',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-gemini-flash',
    name: 'Gemini 1.5 Flash',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-gemini-pro',
    name: 'Gemini 1.5 Pro',
    description: 'Primary model for all-purpose chat',
  },
];
