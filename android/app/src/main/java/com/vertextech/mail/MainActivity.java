package com.vertextech.mail;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.os.Build;
import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    createMailNotificationChannel();
  }

  // Android 8+ needs a notification "channel". The server tags every push with
  // channel_id "mail", so it must exist before the first message arrives.
  private void createMailNotificationChannel() {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      NotificationChannel channel = new NotificationChannel(
          "mail", "New mail", NotificationManager.IMPORTANCE_HIGH);
      channel.setDescription("Alerts when new email arrives");
      NotificationManager manager = getSystemService(NotificationManager.class);
      if (manager != null) manager.createNotificationChannel(channel);
    }
  }
}
