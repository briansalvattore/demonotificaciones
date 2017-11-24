package com.horses.demo.notifications;

import android.content.Intent;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;

/**
 * @author @briansalvattore on 9/11/2017.
 */

public class Notification2Activity extends AppCompatActivity {

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.activity_notifaction);


        if (getIntent().getExtras().get("status") != null) {

            if (Integer.parseInt(getIntent().getStringExtra("status")) == 1) {
                startActivity(new Intent(this, MainActivity.class));
            }
        }
    }
}
