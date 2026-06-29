## Data Structure

```ts
// <---------- ACCOMMODATION -------------> [Accommodation Addons/Extras will be added later]
export type RoomLocation = {
  name: Localized;
  mapUrl: null | string;
};

interface TravelTime {
  min: number;
  max: number;
  unit: "minutes" | "hours";
}

interface Transport {
  mode: Localized;
  icon?: string;
}
interface CommuteOption {
  travelTime: TravelTime;
  transport: Transport;
}

export type AccommodationPlan = {
  planName: Localized;
  amount: number;
  frequency: Frequency;
  optional: boolean;
};

export type Accommodation = {
  id: number;
  accommodationName: Localized;
  accommodationDescription?: Localized;
  image?: string;
  accommodationCategoryId: number;
  note?: Localized;
  minimumAge?: number;
  durationWeeks?: number;
  accommodationDates?: Dates;
  schoolId: number;
  priceFrequency: Frequency;
  location?: RoomLocation[] | null;
  commuteOptions?: CommuteOption[] | null;
  accommodationPlans: AccommodationPlan[]; // i.e
};
```

## References

instituteId:1
countryId:1
cityId:5
schoolId: 5
home-stay-16 category id : 1
student-residence-18 category is: 2

start the accommodations id from 25

## Task

Please extract the accomodities from the refrence page according to the provided structure
Also add ar (arabic) translations as well.
