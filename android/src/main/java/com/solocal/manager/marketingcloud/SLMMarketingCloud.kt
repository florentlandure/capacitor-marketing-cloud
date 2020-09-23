package com.solocal.manager.marketingcloud

import com.getcapacitor.*
import com.salesforce.marketingcloud.MCLogListener
import com.salesforce.marketingcloud.MarketingCloudSdk

@NativePlugin
class SLMMarketingCloud : Plugin() {
    @PluginMethod
    fun isPushEnabled(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val res = JSObject()
            res.put("value", sdk.pushMessageManager.isPushEnabled)
            call.resolve(res)
        }
    }

    @PluginMethod
    fun enablePush(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            sdk.pushMessageManager.enablePush()
            call.resolve()
        }
    }

    @PluginMethod
    fun disablePush(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            sdk.pushMessageManager.disablePush()
            call.resolve()
        }
    }

    @PluginMethod
    fun getSystemToken(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val res = JSObject();
            res.put("value", sdk.registrationManager.systemToken)
            call.resolve(res)
        }
    }

    @PluginMethod
    fun getAttributes(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val res = JSObject();
            res.put("value", sdk.registrationManager.attributes)
            call.resolve(res)
        }
    }

    @PluginMethod
    fun setAttribute(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val key = call.getString("key")
            val value = call.getString("value")

            if (key.length > 0) {
                val res = JSObject()
                res.put("value", sdk.registrationManager.edit().setAttribute(key, value))
                call.resolve(res)
            } else {
                call.reject("No key was provided")
            }
        }
    }

    @PluginMethod
    fun setAttributes(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val attributes = call.getArray("attributes")

            for (i in 0 until attributes.length()) {
                val attr = attributes.getJSONObject(i)
                val key = attr.getString("key")
                val value = attr.getString("value")

                if (key.length > 0) {
                    sdk.registrationManager.edit().setAttribute(key, value)
                }
            }
            val res = JSObject()
            res.put("value", sdk.registrationManager.attributes)
            call.resolve(res)
        }
    }

    @PluginMethod
    fun clearAttribute(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val key = call.getString("key")
            val res = JSObject()
            res.put("value", sdk.registrationManager.edit().clearAttribute(key))
            call.resolve(res)
        }
    }

    @PluginMethod
    fun addTag(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val tag = call.getString("tag")

            if (tag.length > 0) {
                val res = JSObject()
                res.put("value", sdk.registrationManager.edit().addTag(tag))
                call.resolve(res)
            } else {
                call.reject("No tag was provided")
            }
        }
    }

    @PluginMethod
    fun removeTag(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val tag = call.getString("tag")
            val res = JSObject()
            res.put("value", sdk.registrationManager.edit().removeTag(tag))
            call.resolve(res)
        }
    }

    @PluginMethod
    fun getTags(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val res = JSObject();
            res.put("value", sdk.registrationManager.tags)
            call.resolve(res)
        }
    }

    @PluginMethod
    fun setContactKey(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val contactKey = call.getString("value")

            if (contactKey.length > 0) {
                val res = JSObject()
                res.put("value", sdk.registrationManager.edit().setContactKey(contactKey))
                call.resolve(res)
            } else {
                call.reject("Contact key is empty")
            }
        }
    }

    @PluginMethod
    fun getContactKey(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val res = JSObject();
            res.put("value", sdk.registrationManager.contactKey)
            call.resolve(res)
        }
    }

    @PluginMethod
    fun enableVerboseLogging(call: PluginCall) {
        MarketingCloudSdk.setLogLevel(MCLogListener.VERBOSE)
        MarketingCloudSdk.setLogListener(MCLogListener.AndroidLogListener())
        call.resolve()
    }

    @PluginMethod
    fun disableVerboseLogging(call: PluginCall) {
        MarketingCloudSdk.setLogListener(null)
        call.resolve()
    }

    @PluginMethod
    fun setOnNotificationOpenedListener(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->

        }
    }

    @PluginMethod
    fun setOnUrlActionListener(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->

        }
    }

    @PluginMethod
    fun logSdkState(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val res = JSObject();
            res.put("value", sdk.sdkState)
            call.resolve(res)
        }
    }
}