import { Linking, PermissionsAndroid } from "react-native";
import Communications from 'react-native-communications';
import notifee, { AndroidImportance, AndroidStyle } from '@notifee/react-native'
import { check, request, PERMISSIONS } from 'react-native-permissions';

const callPhoneNumber = (phoneNumber: string) => {
  Communications.phonecall(phoneNumber, true);
};

const sendSms = (telephone_number: string) => {
  Communications.text(telephone_number, '');
}

const inboxWhatsappNumber = (whatsappNumber: string) => {
  Linking.openURL(`whatsapp://send?text=&phone=${whatsappNumber}`);
}

const sendEmail = (email: string) => {
  Linking.openURL(`mailto:${email}?subject=Message`);
};

const showLocalNotification = (title: string, body: string | any) => {
  const notification: any = {
    title: title,
    body: body,
    sound: 'default',
  };
};

const requestNotifeePermissions = async () => {
  await notifee.requestPermission()
}

const requestNotificationPermission = async () => {
  const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
  return result;
};

const checkNotificationPermission = async () => {
  const result = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
  return result;
};

const displayPushNotification = async (title: string, body: string, channelId: any = null, data: any = null) => {

  await requestNotifeePermissions()
  if (!channelId) {
    channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  }

  let config: any = {
    title: title,
    body: body,
    android: {
      channelId,
      importance: AndroidImportance.HIGH,
      style: { type: AndroidStyle.BIGTEXT, text: body },
      // smallIcon: 'name-of-a-small-icon',
      pressAction: {
        id: 'default',
      },
    },
  }

  if (data) {
    config.data = data
  }

  await notifee.displayNotification(config);
}

export {
  callPhoneNumber, sendSms, inboxWhatsappNumber, sendEmail, showLocalNotification,
  requestNotifeePermissions, displayPushNotification, checkNotificationPermission, requestNotificationPermission
}