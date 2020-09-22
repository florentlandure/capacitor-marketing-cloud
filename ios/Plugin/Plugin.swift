import Foundation
import Capacitor
import MarketingCloudSDK

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SLMMarketingCloud)
public class SLMMarketingCloud: CAPPlugin {

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    
    @objc func isPushEnabled(_ call: CAPPluginCall) {
        call.success([
            "value": MarketingCloudSDK.sharedInstance()
                .sfmc_pushEnabled()
        ])
    }
}
