interface AppAction {
    type: string;
    payload?: any;
    authorization?: string;
    access_token?: string
}

interface IUser {
    id?: number,
    first_name: string,
    last_name: string,
    specialty?: string,
    specialty_id?: number,
    email?: string,
    country_code?: string,
    phone_number?: string,
    dob: string,
    gender: string,
    address?: string,
    primary_facility?: string,
    primary_facility_id?: number,
    other_facilities?: number[],
    is_individual?: boolean,
    qualification?: string,
    training_institute?: string,
    umdp_license_id?: string,
    bio_summary?: string,
    service_fee?: string,
    otp?: string,
    image?: string,
    is_patient?: boolean,
    profile_status?: boolean,
    is_registered?: boolean,
    is_verified?: boolean,
}

interface SignedinUser {
    user: IUser,
    authorization: string,
    token?: string,
}

interface Drug {
    id: number,
    name: string,
    description?: string,
    price: number,
    formatted_price?: string,
    image: string,
    status: string,
    quantity: number | 0,
    in_stock: boolean
}

interface Notification {
    id: string,
    notifiable_id: number,
    data: any,
    read_at: any,
    read: boolean,
    is_appointment: boolean
}

export type {
    AppAction, SignedinUser, Drug, Notification
}