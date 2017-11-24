package com.horses.demo.notifications;

import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;

/**
 * @author @briansalvattore on 30/10/2017.
 */

public class FirebaseIdService extends FirebaseInstanceIdService {

    private static final String TAG = "FirebaseIdService";

    @SuppressWarnings("ConstantConditions")
    @Override
    public void onTokenRefresh() {
        String token = FirebaseInstanceId.getInstance().getToken();

        Log.d(TAG, "onTokenRefresh() called with: token = [ " + token + " ]");
        // TODO: 9/11/2017
    }
}
