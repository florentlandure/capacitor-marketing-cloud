#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(SLMMarketingCloud, "SLMMarketingCloud",
           CAP_PLUGIN_METHOD(isPushEnabled, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(enablePush, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(disablePush, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getSystemToken, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getAttributes, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setAttribute, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setAttributes, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(clearAttribute, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(addTag, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(removeTag, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getTags, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setContactKey, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getContactKey, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(enableVerboseLogging, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(disableVerboseLogging, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setOnNotificationOpenedListener, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setOnUrlActionListener, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(logSdkState, CAPPluginReturnPromise);
           )
