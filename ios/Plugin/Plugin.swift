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
        let isEnabled = MarketingCloudSDK.sharedInstance()
                .sfmc_pushEnabled() ?? false
        call.resolve([
            "value": isEnabled
        ])
    }

    @objc func enablePush(_ call: CAPPluginCall) {
        UIApplication.shared.registerForRemoteNotifications()
        MarketingCloudSDK.sharedInstance().sfmc_setPushEnabled(true)
        call.resolve()
    }

    @objc func disablePush(_ call: CAPPluginCall) {
        UIApplication.shared.unregisterForRemoteNotifications()
        MarketingCloudSDK.sharedInstance().sfmc_setPushEnabled(false)
        call.resolve()
    }

    @objc func getSystemToken(_ call: CAPPluginCall) {
        let deviceToken = MarketingCloudSDK.sharedInstance().sfmc_deviceToken()
        call.resolve([ "value": deviceToken ?? "" ])
    }

    @objc func getAttributes(_ call: CAPPluginCall) {
        let attributes = MarketingCloudSDK.sharedInstance().sfmc_attributes() ?? [:]
        call.resolve([ "value": attributes ])
    }

    @objc func setAttribute(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""
        let value = call.getString("value") ?? ""

        if key.count > 0 {
            let isSet = MarketingCloudSDK.sharedInstance().sfmc_setAttributeNamed(key, value: value)
            call.resolve([ "value": isSet ])
        } else {
            call.reject("setAttribute - No key was provided")
        }
    }

    @objc func setAttributes(_ call: CAPPluginCall) {
        let array = call.getArray("attributes", NSDictionary.self) ?? []

        if array.count > 0 {
            let attributes = MarketingCloudSDK.sharedInstance().sfmc_setAttributes(array) ?? [:]
            call.resolve(["value": attributes ])
        } else {
            call.reject("setAttributes - No attibutes were provided")
        }
    }

    @objc func clearAttribute(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""

        if key.count > 0 {
            let isCleared = MarketingCloudSDK.sharedInstance().sfmc_clearAttributeNamed(key)
            call.resolve(["value": isCleared])
        } else {
            call.reject("clearAttribute - No key was provided")
        }
    }

    @objc func addTag(_ call: CAPPluginCall) {
        let tag = call.getString("tag") ?? ""

        if tag.count > 0 {
            let isAdded = MarketingCloudSDK.sharedInstance().sfmc_addTag(tag)
            call.resolve([ "value": isAdded ])
        } else {
            call.reject("addTag - Tag is empty")
        }
    }

    @objc func removeTag(_ call: CAPPluginCall) {
        let tag = call.getString("value") ?? ""

        if tag.count > 0 {
            let isRemoved = MarketingCloudSDK.sharedInstance().sfmc_removeTag(tag)
            call.resolve([ "value": isRemoved ])
        } else {
            call.reject("removeTag - Tag is empty")
        }
    }

    @objc func getTags(_ call: CAPPluginCall) {
        let tags = MarketingCloudSDK.sharedInstance().sfmc_tags() ?? []
        call.resolve([ "value": tags ])
    }

    @objc func setContactKey(_ call: CAPPluginCall) {
        let contactKey = call.getString("value") ?? ""

        if contactKey.count > 0 {
            let isSet = MarketingCloudSDK.sharedInstance().sfmc_setContactKey(contactKey)
            call.resolve([ "value": isSet ])
        } else {
            call.reject("setContactKey - Contact key is empty")
        }
    }

    @objc func getContactKey(_ call: CAPPluginCall) {
        let contactKey = MarketingCloudSDK.sharedInstance().sfmc_contactKey() ?? ""
        call.resolve([ "value": contactKey ])
    }

    @objc func enableVerboseLogging(_ call: CAPPluginCall) {
        MarketingCloudSDK.sharedInstance().sfmc_setDebugLoggingEnabled(true)
        call.resolve()
    }

    @objc func disableVerboseLogging(_ call: CAPPluginCall) {
        MarketingCloudSDK.sharedInstance().sfmc_setDebugLoggingEnabled(false)
        call.resolve()
    }

    @objc func setOnNotificationOpenedListener(_ call: CAPPluginCall) {

    }

    @objc func setOnUrlActionListener(_ call: CAPPluginCall) {

    }

    @objc func logSdkState(_ call: CAPPluginCall) {
        let state = MarketingCloudSDK.sharedInstance().sfmc_getSDKState() ?? ""
        call.resolve([ "value": state ])
    }
}
