declare module '@capacitor/core' {
  interface PluginRegistry {
    SLMMarketingCloud: SLMMarketingCloudPlugin;
  }
}

export interface ISLMMCNotification {
  timeStamp: number;
  values: {
    alert: string;
    title?: string;
    url?: string;
    type?: string;
    [key: string]: string | undefined;
  };
}

export interface ISLMMCUrlAction {
  url: string;
}

// TODO: update links to documentation
export interface SLMMarketingCloudPlugin {
  /**
   * The current state of the pushEnabled flag in the native Marketing Cloud
   * SDK.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#isPushEnabled()|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_pushEnabled|iOS Docs}
   */
  isPushEnabled(): Promise<{ value: boolean }>;

  /**
   * Enables push messaging in the native Marketing Cloud SDK.
   * Returns true on success and false on failure
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#enablePush()|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setPushEnabled:|iOS Docs}
   */
  enablePush(): Promise<void>;

  /**
   * Disables push messaging in the native Marketing Cloud SDK.
   * Returns true on success and false on failure
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#disablePush()|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setPushEnabled:|iOS Docs}
   */
  disablePush(): Promise<void>;
  /**
   * Returns the token used by the Marketing Cloud to send push messages to
   * the device.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#getPushToken()|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_deviceToken|iOS Docs}
   */
  getSystemToken(): Promise<{ value: string }>;

  /**
   * Returns the maps of attributes set in the registration.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getAttributes()|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_attributes|iOS Docs}
   */
  getAttributes(): Promise<{ value: { [key: string]: string } }>;

  /**
   * Sets the value of an attribute in the registration.
   * @param  {string} options.key - The name of the attribute to be set in the
   *     registration.
   * @param  {string} options.value - The value of the `key` attribute to be set in
   *     the registration.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#setAttribute(java.lang.String,%20java.lang.String)|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setAttributes:|iOS Docs}
   */
  setAttribute(options: {
    key: string;
    value: string;
  }): Promise<{ value: boolean }>;

  /**
   * Sets the value of an attribute in the registration.
   * @param  {string} options.key - The name of the attribute to be set in the
   *     registration.
   * @param  {string} options.value - The value of the `key` attribute to be set in
   *     the registration.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#setAttribute(java.lang.String,%20java.lang.String)|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setAttributes:|iOS Docs}
   */
  setAttributes(options: {
    attributes: Array<{
      key: string;
      value: string;
    }>;
  }): Promise<{
    value: { [key: string]: string };
  }>;

  /**
   * Clears the value of an attribute in the registration.
   * @param  {string} options.key - The name of the attribute whose value should be
   *     cleared from the registration.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#clearAttribute(java.lang.String)|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_clearAttributeNamed:|iOS Docs}
   */
  clearAttribute(options: { key: string }): Promise<{ value: boolean }>;

  /**
   * @param  {string} options.value - The tag to be added to the list of tags in the
   *     registration.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#addTag(java.lang.String)|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_addTag:|iOS Docs}
   */
  addTag(options: { tag: string }): Promise<{ value: boolean }>;

  /**
   * @param  {string} options.tag - The tag to be removed from the list of tags in the
   *     registration.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#removeTag(java.lang.String)|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_removeTag:|iOS Docs}
   */
  removeTag(options: { tag: string }): Promise<{ value: boolean }>;

  /**
   * Returns the tags currently set on the device.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getTags()|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_tags|iOS Docs}
   */
  getTags(): Promise<{ value: string[] }>;

  /**
   * Sets the contact key for the device's user.
   * @param  {string} options.value - The value to be set as the contact key of
   *     the device's user.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#setContactKey(java.lang.String)|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setContactKey:|iOS Docs}
   */
  setContactKey(options: { value: string }): Promise<{ value: boolean }>;

  /**
   * Returns the contact key currently set on the device.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getContactKey()|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_contactKey|iOS Docs}
   */
  getContactKey(): Promise<{ value: string }>;

  /**
   * Enables verbose logging within the native Marketing Cloud SDK.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/MarketingCloudSdk.html#setLogLevel(int)|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setDebugLoggingEnabled:|iOS Docs}
   */
  enableVerboseLogging(): Promise<void>;

  /**
   * Disables verbose logging within the native Marketing Cloud SDK.
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/MarketingCloudSdk.html#setLogLevel(int)|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setDebugLoggingEnabled:|iOS Docs}
   */
  disableVerboseLogging(): Promise<void>;

  /**
   * @param {(notification: ISLMMCNotification) => any} options.listener
   * @since 6.1.0
   */
  setOnNotificationOpenedListener(options: {
    listener: (notification: ISLMMCNotification) => any;
  }): Promise<void>;

  /**
   * @callback module:MCCordovaPlugin~notificationOpenedCallback
   * @param {number} timeStamp - Time since epoch when the push message was
   *     opened.
   * @param {Object} values - The values of the notification message.
   * @param {string} values.alert - The alert text of the notification
   *     message.
   * @param {string} [values.title] - The title text of the notification
   *     message.
   * @param {string} [values.url] - The url associated with the notification
   *     message. This can be either a cloud-page url or an open-direct url.
   * @param {string} values.type - Indicates the type of notification message.
   *     Possible values: 'cloudPage', 'openDirect' or 'other'
   */

  /**
   * @param {(action: ISLMMCUrlAction) => any} options.listener
   * @since 6.3.0
   */
  setOnUrlActionListener(options: {
    listener: (action: ISLMMCUrlAction) => any;
  }): Promise<void>;

  /**
   * Instructs the native SDK to log the SDK state to the native logging system (Logcat for
   * Android and Xcode/Console.app for iOS).  This content can help diagnose most issues within
   * the SDK and will be requested by the Marketing Cloud support team.
   *
   * @since 6.3.1
   */
  logSdkState(): Promise<{ value: string }>;
}
