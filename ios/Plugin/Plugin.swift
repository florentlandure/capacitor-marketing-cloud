import Foundation
import Capacitor
import MarketingCloudSDK

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SLMMarketingCloud)
public class SLMMarketingCloud: CAPPlugin {
    
    @objc func isPushEnabled(_ call: CAPPluginCall) {
        call.success([
            "value": MarketingCloudSDK.sharedInstance()
                .sfmc_pushEnabled()
        ])
    }
    
    @objc func enablePush(_ call: CAPPluginCall) {
        UIApplication.shared.registerForRemoteNotifications()
        MarketingCloudSDK.sharedInstance().sfmc_setPushEnabled(true)
        call.success()
    }
    
    @objc func disablePush(_ call: CAPPluginCall) {
        UIApplication.shared.unregisterForRemoteNotifications()
        MarketingCloudSDK.sharedInstance().sfmc_setPushEnabled(false)
        call.success()
    }
    
    @objc func getSystemToken(_ call: CAPPluginCall) {
        let device_token = MarketingCloudSDK.sharedInstance().sfmc_deviceToken()
        call.success([ "value": device_token ?? "" ])
    }
    
    @objc func getAttributes(_ call: CAPPluginCall) {
        let attributes = MarketingCloudSDK.sharedInstance().sfmc_attributes() ?? [:]
        call.success([ "value": attributes ])
    }
    
    @objc func setAttribute(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""
        let value = call.getString("value") ?? ""
        
        if (key.count > 0) {
            let is_set = MarketingCloudSDK.sharedInstance().sfmc_setAttributeNamed(key, value: value)
            call.success([ "value": is_set ])
        }
        else {
            call.error("No key was provided")
        }
    }
    
    @objc func setAttributes(_ call: CAPPluginCall) {
        let array = call.getArray("attributes", NSDictionary.self) ?? []
        
        if (array.count > 0) {
            let attributes = MarketingCloudSDK.sharedInstance().sfmc_setAttributes(array) ?? [:]
            call.success(["value": attributes ])
        } else {
            call.error("No attibutes were provided")
        }
    }
    
    @objc func clearAttribute(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""
        
        if (key.count > 0) {
            let is_cleared = MarketingCloudSDK.sharedInstance().sfmc_clearAttributeNamed(key)
            call.success(["value": is_cleared])
        }
        else {
            call.error("No key was provided")
        }
    }
    
    @objc func addTag(_ call: CAPPluginCall) {
        let tag = call.getString("tag") ?? ""
        
        if (tag.count > 0) {
            let is_added = MarketingCloudSDK.sharedInstance().sfmc_addTag(tag)
            call.success([ "value": is_added ])
        }
        else {
            call.error("Tag is empty")
        }
    }
    
    @objc func removeTag(_ call: CAPPluginCall) {
        let tag = call.getString("value") ?? ""
        
        if (tag.count > 0) {
            let is_removed = MarketingCloudSDK.sharedInstance().sfmc_removeTag(tag)
            call.success([ "value": is_removed ])
        }
        else {
            call.error("Tag is empty")
        }
    }
    
    @objc func getTags(_ call: CAPPluginCall) {
        let tags = MarketingCloudSDK.sharedInstance().sfmc_tags() ?? []
        call.success([ "value": tags ])
    }
    
    @objc func setContactKey(_ call: CAPPluginCall) {
        let contact_key = call.getString("value") ?? ""
        
        if (contact_key.count > 0) {
            let is_set = MarketingCloudSDK.sharedInstance().sfmc_setContactKey(contact_key)
            call.success([ "value": is_set ])
        }
        else {
            call.error("Contact key is empty")
        }
    }
    
    @objc func getContactKey(_ call: CAPPluginCall) {
        let contact_key = MarketingCloudSDK.sharedInstance().sfmc_contactKey() ?? ""
        call.success([ "value": contact_key ])
    }
    
    @objc func enableVerboseLogging(_ call: CAPPluginCall) {
        MarketingCloudSDK.sharedInstance().sfmc_setDebugLoggingEnabled(true)
        call.success()
    }
    
    @objc func disableVerboseLogging(_ call: CAPPluginCall) {
        MarketingCloudSDK.sharedInstance().sfmc_setDebugLoggingEnabled(false)
        call.success()
    }
    
    @objc func setOnNotificationOpenedListener(_ call: CAPPluginCall) {
        
    }
    
    @objc func setOnUrlActionListener(_ call: CAPPluginCall) {
        
    }
    
    @objc func logSdkState(_ call: CAPPluginCall) {
        let state = MarketingCloudSDK.sharedInstance().sfmc_getSDKState() ?? ""
        call.success([ "value": state ])
    }
    
}
