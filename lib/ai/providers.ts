import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import {openai} from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model-gpt-4o': openai('gpt-4o'),
        'chat-model-gpt-4o-mini': openai('gpt-4o-mini'),
        'chat-model-claude-haiku': anthropic('claude-3-5-haiku-latest'),
        'chat-model-claude-sonet': anthropic('claude-3-5-sonnet-latest'),
        'chat-model-gemini-flash': google('gemini-1.5-flash'),
        'chat-model-gemini-pro': google('gemini-1.5-pro'),
        'title-model': openai('gpt-4o'),
        'artifact-model': openai('gpt-4o'),
      },
      imageModels: {
        'small-model': openai.image('dall-e-3'),
      },
    });
