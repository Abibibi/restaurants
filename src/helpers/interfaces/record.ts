export interface Hit {
  name: string;
  address: string;
  area: string;
  city: string;
  country: string;
  image_url: string;
  mobile_reserve_url: string;
  payment_options: string[];
  phone: string;
  postal_code: string;
  price: number;
  reserve_url: string;
  state: string;
  _geoloc: Geoloc;
  food_type: string;
  stars_count: number;
  reviews_count: number;
  neighborhood: string;
  phone_number: string;
  price_range: string;
  dining_style: string;
  rounded_stars_count: number;
  objectID: string;
  _snippetResult: SnippetResult;
  _highlightResult: HighlightResult;
  _rankingInfo: RankingInfo;
}

export interface Hits {
  hits: Hit[];
}

export interface Record {
  hit: Hit;
  resetHits: (hit: string) => void;
}

export interface Geoloc {
  lat: number;
  lng: number;
}

export interface SnippetResult {
  name: Name;
  address: Address;
  area: Area;
  city: City;
  country: Country;
  image_url: ImageUrl;
  mobile_reserve_url: MobileReserveUrl;
  payment_options: PaymentOption[];
  phone: Phone;
  postal_code: PostalCode;
  price: Price;
  reserve_url: ReserveUrl;
  state: State;
  _geoloc: Geoloc2;
  food_type: FoodType;
  stars_count: StarsCount;
  reviews_count: ReviewsCount;
  neighborhood: Neighborhood;
  phone_number: PhoneNumber;
  price_range: PriceRange;
  dining_style: DiningStyle;
  rounded_stars_count: RoundedStarsCount;
}

export interface Name {
  value: string;
  matchLevel: string;
}

export interface Address {
  value: string;
  matchLevel: string;
}

export interface Area {
  value: string;
  matchLevel: string;
}

export interface City {
  value: string;
  matchLevel: string;
}

export interface Country {
  value: string;
  matchLevel: string;
}

export interface ImageUrl {
  value: string;
  matchLevel: string;
}

export interface MobileReserveUrl {
  value: string;
  matchLevel: string;
}

export interface PaymentOption {
  value: string;
  matchLevel: string;
}

export interface Phone {
  value: string;
  matchLevel: string;
}

export interface PostalCode {
  value: string;
  matchLevel: string;
}

export interface Price {
  value: string;
  matchLevel: string;
}

export interface ReserveUrl {
  value: string;
  matchLevel: string;
}

export interface State {
  value: string;
  matchLevel: string;
}

export interface Geoloc2 {
  lat: Lat;
  lng: Lng;
}

export interface Lat {
  value: string;
  matchLevel: string;
}

export interface Lng {
  value: string;
  matchLevel: string;
}

export interface FoodType {
  value: string;
  matchLevel: string;
}

export interface StarsCount {
  value: string;
  matchLevel: string;
}

export interface ReviewsCount {
  value: string;
  matchLevel: string;
}

export interface Neighborhood {
  value: string;
  matchLevel: string;
}

export interface PhoneNumber {
  value: string;
  matchLevel: string;
}

export interface PriceRange {
  value: string;
  matchLevel: string;
}

export interface DiningStyle {
  value: string;
  matchLevel: string;
}

export interface RoundedStarsCount {
  value: string;
  matchLevel: string;
}

export interface HighlightResult {
  name: Name2;
  address: Address2;
  area: Area2;
  city: City2;
  country: Country2;
  payment_options: PaymentOption2[];
  postal_code: PostalCode2;
  state: State2;
  food_type: FoodType2;
  stars_count: StarsCount2;
  neighborhood: Neighborhood2;
  price_range: PriceRange2;
  dining_style: DiningStyle2;
  rounded_stars_count: RoundedStarsCount2;
}

export interface Name2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Address2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Area2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface City2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Country2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface PaymentOption2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface PostalCode2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface State2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface FoodType2 {
  value: string;
  matchLevel: string;
  fullyHighlighted: boolean;
  matchedWords: string[];
}

export interface StarsCount2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Neighborhood2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface PriceRange2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface DiningStyle2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface RoundedStarsCount2 {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface RankingInfo {
  nbTypos: number;
  firstMatchedWord: number;
  proximityDistance: number;
  userScore: number;
  geoDistance: number;
  geoPrecision: number;
  nbExactWords: number;
  words: number;
  filters: number;
}
