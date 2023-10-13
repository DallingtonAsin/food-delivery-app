

const routes = {

   patient: {
      index: 'patient',
      signin: 'patient/login',
      send_otp: 'patient/sms/verification-code',
      verify_otp: 'patient/verify-otp',
      verify_email: 'patient/verify-email',
      update_fcm_token: 'patient/fcm-token',
      register: 'patient/register',
      updateProfile: 'patient/profile/update',
      update_profile_pic: 'patient/profile-picture/update',
      delete_profile_pic: 'patient/profile-picture/delete',
      call_details: 'patient/calls',
      my_details: 'patient/details',
      wallet_balance: 'patient/wallet-balance',
      credit_transactions: 'patient/credit-transactions',
      debit_transactions: 'patient/debit-transactions',
      notifications: {
         all: 'patient/notifications',
         read: 'patient/notifications/read',
         unread: 'patient/notifications/unread',
         mark_as_read: 'patient/notifications/mark-as-read',
      },
      mark_doctor_favourite: 'patient/favourite-doctor',
      unmark_doctor_favourite: 'patient/favourite-doctor',
      rate_doctor: 'patient/rate-doctor',
      instant_calls: 'patient/instant-calls',
      change_phone: {
         request_change: 'patient/change-phone-number',
         verify_change: 'patient/verify-phone-number'
      },
      passwords: {
         reset: {
            verification_code: 'patient/password/reset/verification-code',
            verify_otp: 'patient/password/reset/verify',
            reset: 'patient/password/reset'
         },
         change_password: 'patient/password/update'
      },
      payments: {
         deposit: 'payments/deposit'
      }
   },

   doctor: {
      signin: 'doctor/login',
      send_otp: 'doctor/sms/verification-code',
      verify_otp: 'doctor/verify-otp',
      verify_email: 'doctor/verify-email',
      update_fcm_token: 'doctor/fcm-token',
      register: 'doctor/register',
      my_details: 'doctor/details',
      wallet_balance: 'doctor/wallet-balance',
      is_verified: 'doctor/is-verified',
      complete_registration: 'doctor/profile/complete',
      updateProfile: 'doctor/profile/update',
      update_profile_pic: 'doctor/profile-picture/update',
      delete_profile_pic: 'doctor/profile-picture/delete',
      update_online_status: 'doctor/online-status',
      update_auto_approve_status: 'doctor/appointments/auto-approve',
      languages: 'doctor/languages',
      schedule: 'doctor/schedule',
      rating: 'doctor/rating',
      call_details: 'doctor/calls',
      availability: 'doctor/availability',
      availability_windows: 'doctor/availability/windows',
      labtest_categories: 'labtest-categories',
      imagetest_categories: 'imagetest-categories',
      icd_10_codes: 'icd-10-codes',
      credit_transactions: 'doctor/credit-transactions',
      debit_transactions: 'doctor/debit-transactions',
      instant_calls: 'doctor/instant-calls',
      change_phone: {
         request_change: 'doctor/change-phone-number',
         verify_change: 'doctor/verify-phone-number'
      },
      notifications: {
         all: 'doctor/notifications',
         read: 'doctor/notifications/read',
         unread: 'doctor/notifications/unread',
         mark_as_read: 'doctor/notifications/mark-as-read',
      },
      passwords: {
         reset: {
            verification_code: 'doctor/password/reset/verification-code',
            verify_otp: 'doctor/password/reset/verify',
            reset: 'doctor/password/reset'
         },
         change_password: 'doctor/password/update'
      },
      payments: {
         withdraw: 'payments/withdraw',
      }
   },

   medical: {
      specialties: 'medical/specialties',
      facilities: 'medical/facilities',
      doctors: 'medical/doctors',
      doctors_by_specialty: 'medical/doctors/specialty',
      appointment_details: 'medical/appointments',
      appointment_status: 'medical/appointments',
      doctors_by_online_status: 'medical/doctors/status',
      administration_routes: 'medical/administration-routes',
      history: {
         patient: {
            held_calls: 'medical-history/calls/patient',
            tests: 'medical-history/labtests/patient',
            diagnosis: 'medical-history/diagnosis/patient',
            treatment: 'medical-history/treatment/patient'
         },
         doctor: {
            held_calls: 'medical-history/calls/doctor',
            tests: 'medical-history/labtests/doctor',
            diagnosis: 'medical-history/diagnosis/doctor',
            treatment: 'medical-history/treatment/doctor'
         }
      },
   },

   stream_chat: {
      token: {
         patient: 'stream/patient/token',
         doctor: 'stream/doctor/token',
      },
      initiate_chat: 'stream/initiate-chat',
   },

   drugs: {
      index: 'drugs',
      prescription: 'prescription-drugs'
   },

   consultations: {
      scheduled: {
         post_consultation: 'post-consultation/scheduled-calls'
      },
      instant: {
         post_consultation: 'post-consultation/instant-calls'
      },
   },

   appointments: {
      index: 'appointments',
      cancel: 'appointments/cancel',
      confirm: 'appointments/confirm',
      types: 'appointments/types',
      meeting: 'appointments/meeting',
      instant_call: 'instant-calls',
      patient: {
         myappointments: 'appointments/patient',
      },
      doctor: {
         myappointments: 'appointments/doctor',
      }
   },

   app: {
      company_info: 'company-information',
   },

   configurations: {
      app: 'configurations/app',
   },

}

export { routes }