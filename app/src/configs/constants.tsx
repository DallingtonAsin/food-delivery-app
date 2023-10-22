import { IUser, SignedinUser } from "../interfaces"

const organisation = {
  links: {
    website: 'https://agriconnect.com',
    privacy_policy: 'https://agriconnect.com/privacypolicy',
    terms_and_conditions: 'https://agriconnect.com/termsofuse',
  }
}

const initialUser: IUser = {
  id: 0,
  name: '',
  email: '',
  countryCode: '',
  phoneNumber: '',
  isPhoneVerified: false,
  password: '',
  otp: '',
  photo: '',
  profileStatus: false,
  newCountryCode: '',
  newPhoneNumber: '',
  uniqueDeviceId: '',
  currentVersion: '',
  userIpAddress: '',
  serverIpAddress: '',
  isBlocked: false,
  isDeleted: false

}

const initialUserState: SignedinUser = {
  user: initialUser,
  authorization: '',
  token: '',
}

const drawerScreenItems = [
  {
    icon: 'home',
    text: 'Home',
    screenToNavigate: 'Home',
  },

  {
    icon: 'user-circle',
    text: 'Profile',
    screenToNavigate: 'Profile',
  },

  {
    icon: 'shopping-cart',
    text: 'My Orders',
    screenToNavigate: 'Weather',
  },
]

export { organisation, initialUser, initialUserState, drawerScreenItems }