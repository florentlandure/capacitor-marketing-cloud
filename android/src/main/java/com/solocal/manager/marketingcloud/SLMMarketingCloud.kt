package com.solocal.manager.marketingcloud

import com.getcapacitor.*
import com.salesforce.marketingcloud.MarketingCloudSdk

@NativePlugin
class SLMMarketingCloud : Plugin() {
    @PluginMethod
    fun echo(call: PluginCall) {
        val value = call.getString("value")
        val ret = JSObject()
        ret.put("value", value)
        call.success(ret)
    }

    @PluginMethod
    fun isPushEnabled(call: PluginCall) {
        MarketingCloudSdk.requestSdk { sdk ->
            val response = JSObject()
            response.put("value", sdk.pushMessageManager.isPushEnabled)
            call.success(response)
        }
    }
}