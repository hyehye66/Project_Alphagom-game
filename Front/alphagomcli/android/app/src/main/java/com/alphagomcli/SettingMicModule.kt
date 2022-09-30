package com.alphagomcli

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.net.Uri
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class SettingMicModule (reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext){

//    private var reactContext: ReactApplicationContext

    // 해당 이름으로 JS에서 액세스 가능!
    override fun getName(): String {
        return "SettingMicModule"
    }

//    @ReactMethod
//    fun StartMicActivity(packageName: String) {
//
//        // Context from reactContext
//        val context: Context = reactContext
//        val activity: Activity? = currentActivity
//        var intent = Intent(reactContext, MicActivity::class.java)
//        activity?.startActivity(intent)
//    }
//
//    init {
//        this.reactContext = reactContext
//    }
}