import { PermissionsAndroid } from 'react-native'

const requestAudioPermission = async () => {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        if (
            granted['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED) {
            // console.log(`You can use the mic`)
        } else {
            console.log(`Permission denied`)
        }
    } catch (err) {
        console.warn(err)
    }
}

const checkGalleryCameraPermissions = async () => {
    try {
      const galleryPermission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      const cameraPermission = PermissionsAndroid.PERMISSIONS.CAMERA;

      const galleryPermissionStatus = await PermissionsAndroid.check(galleryPermission);
      const cameraPermissionStatus = await PermissionsAndroid.check(cameraPermission);

      if (!galleryPermissionStatus || !cameraPermissionStatus) {
        requestPermissions(galleryPermission, cameraPermission);
      }
    } catch (error) {
      console.log('Error checking permissions:', error);
    }
  };

  const requestPermissions = async (galleryPermission: any, cameraPermission: any) => {
    try {
      const granted: any = await PermissionsAndroid.requestMultiple([galleryPermission, cameraPermission]);
      if (
        granted[galleryPermission] === PermissionsAndroid.RESULTS.GRANTED &&
        granted[cameraPermission] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Permissions granted.');
      } else {
        console.log('Permissions denied.');
      }
    } catch (error) {
      console.log('Error requesting permissions:', error);
    }
  };

export { requestAudioPermission, checkGalleryCameraPermissions }