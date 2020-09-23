import { WebPlugin } from '@capacitor/core';
import {
  ISLMMCNotification,
  ISLMMCUrlAction,
  SLMMarketingCloudPlugin,
} from './definitions';

export class SLMMarketingCloudWeb
  extends WebPlugin
  implements SLMMarketingCloudPlugin {
  constructor() {
    super({
      name: 'SLMMarketingCloud',
      platforms: ['web'],
    });
  }
  async isPushEnabled(): Promise<{ value: boolean }> {
    console.log('isPushEnabled');
    return { value: false };
  }

  async enablePush(): Promise<void> {
    console.log('enablePush');
    return;
  }

  async disablePush(): Promise<void> {
    console.log('disablePush');
    return;
  }

  async getSystemToken(): Promise<{ value: string }> {
    console.log('getSystemToken');
    return { value: '' };
  }

  async getAttributes(): Promise<{ value: { [key: string]: string } }> {
    console.log('getAttributes');
    return { value: {} };
  }

  async setAttribute(options: {
    key: string;
    value: string;
  }): Promise<{ value: boolean }> {
    console.log('setAttribute', options);
    return { value: true };
  }

  async setAttributes(options: {
    attributes: Array<{
      key: string;
      value: string;
    }>;
  }): Promise<{
    value: { [key: string]: string };
  }> {
    console.log('setAttributes', options);
    return { value: {} };
  }

  async clearAttribute(options: { key: string }): Promise<{ value: boolean }> {
    console.log('clearAttribute', options);
    return { value: true };
  }

  async addTag(options: { tag: string }): Promise<{ value: boolean }> {
    console.log('addTag', options);
    return { value: true };
  }

  async removeTag(options: { tag: string }): Promise<{ value: boolean }> {
    console.log('removeTag', options);
    return { value: true };
  }

  async getTags(): Promise<{ value: string[] }> {
    return { value: [] };
  }

  async setContactKey(options: { value: string }): Promise<{ value: boolean }> {
    console.log('setContactKey', options);
    return { value: true };
  }

  async getContactKey(): Promise<{ value: string }> {
    return { value: '' };
  }

  async enableVerboseLogging(): Promise<void> {
    console.log('enableVerboseLogging');
    return;
  }

  async disableVerboseLogging(): Promise<void> {
    console.log('disableVerboseLogging');
    return;
  }

  async setOnNotificationOpenedListener(options: {
    listener: (notification: ISLMMCNotification) => any;
  }): Promise<void> {
    console.log('setOnNotificationOpenedListener', options);
    return;
  }

  async setOnUrlActionListener(options: {
    listener: (action: ISLMMCUrlAction) => any;
  }): Promise<void> {
    console.log('setOnUrlActionListener', options);
    return;
  }

  async logSdkState(): Promise<{ value: string }> {
    console.log('logSdkState');
    return { value: '' };
  }
}

const SLMMarketingCloud = new SLMMarketingCloudWeb();

export { SLMMarketingCloud };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SLMMarketingCloud);
