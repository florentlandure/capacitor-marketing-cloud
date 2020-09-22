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
  async isPushEnabled(): Promise<boolean> {
    console.log('isPushEnabled');
    return false;
  }

  async enablePush(): Promise<void> {
    console.log('enablePush');
    return;
  }

  async disablePush(): Promise<void> {
    console.log('disablePush');
    return;
  }

  async getSystemToken(): Promise<string> {
    console.log('getSystemToken');
    return '';
  }

  async getAttributes(): Promise<{ [key: string]: string }> {
    console.log('getAttributes');
    return {};
  }

  async setAttribute(options: {
    key: string;
    value: string;
  }): Promise<boolean> {
    console.log('setAttribute', options);
    return true;
  }

  async clearAttribute(options: { key: string }): Promise<boolean> {
    console.log('clearAttribute', options);
    return true;
  }

  async addTag(options: { value: string }): Promise<boolean> {
    console.log('addTag', options);
    return true;
  }

  async removeTag(options: { tag: string }): Promise<boolean> {
    console.log('removeTag', options);
    return true;
  }

  async getTags(): Promise<string[]> {
    return [];
  }

  async setContactKey(options: { value: string }): Promise<boolean> {
    console.log('setContactKey', options);
    return true;
  }

  async getContactKey(): Promise<string> {
    return '';
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

  async logSdkState(): Promise<Object> {
    console.log('logSdkState');
    return {};
  }
}

const SLMMarketingCloud = new SLMMarketingCloudWeb();

export { SLMMarketingCloud };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SLMMarketingCloud);
