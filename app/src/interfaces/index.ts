interface AppAction {
    type: string;
    payload?: any;
    authorization?: string;
    token?: string
}

interface IUser {
    id?: number;
    name?: string;
    email?: string;
    countryCode?: string;
    phoneNumber?: string;
    isPhoneVerified?: Boolean;
    password?: string;
    otp?: string | null;
    photo?: string;
    profileStatus?: Boolean;
    newCountryCode?: string;
    newPhoneNumber?: string;
    uniqueDeviceId?: string;
    currentVersion?: string;
    userIpAddress?: string;
    serverIpAddress?: string;
    lastActivityDate?: Date;
    isBlocked?: Boolean;
    isDeleted?: Boolean;
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

interface Category{
    _id: string | number | any,
    name: string,
    image: any

}

type Dish = {
    _id: number,
    name: string;
    price: number;
    image: any;
};

interface IContact {
    id: number;
    phoneNumber: string;
    smsNumber: string;
    whatsappNumber: string;
    email: string;
}

interface IContactListItem {
    id: number,
    type: string,
    value: string,
    icon: string,
    method: Function
}



type GroupedItems = Record<string, Dish[]>;

export type {
    AppAction, SignedinUser, Drug, Notification, Category, GroupedItems, IUser, 
    IContact, IContactListItem
}