import { SignedinUser } from "../interfaces"

const organisation = {
  links: {
    website: 'https://agriconnect.com',
    privacy_policy: 'https://agriconnect.com/privacypolicy',
    terms_and_conditions: 'https://agriconnect.com/termsofuse',
  }
}

const initialUser = {
  first_name: '',
  last_name: '',
  email: '',
  country_code: '',
  phone_number: '',
  dob: '',
  gender: '',
  address: '',
  otp: '',
  profile_status: false,
}

const initialUserState: SignedinUser = {
  user: initialUser,
  authorization: '',
  token: '',
}

export { organisation, initialUserState }