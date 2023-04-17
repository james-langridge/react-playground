// https://random-data-api.com/api/v2/users
// https://app.quicktype.io/

export type User = {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: Date;
  employment: Employment;
  address: Address;
  credit_card: CreditCard;
  subscription: Subscription;
};

export type Address = {
  city: string;
  street_name: string;
  street_address: string;
  zip_code: string;
  state: string;
  country: string;
  coordinates: Coordinates;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

export type CreditCard = {
  cc_number: string;
};

export type Employment = {
  title: string;
  key_skill: string;
};

export type Subscription = {
  plan: string;
  status: string;
  payment_method: string;
  term: string;
};
