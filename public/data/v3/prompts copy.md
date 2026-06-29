## Data Structure

```ts
// <---------- COURSE ------------->
export type CoursePlan = {
  price: number;
  priceFrequency: Frequency;
  weekRange?: {
    min: number;
    max: number | null;
  };
  lessonsPerWeek?: number;
  note?: Localized;
};

export type Course = {
  id: number;
  courseName: Localized;
  courseDescription?: Localized;
  image?: string;
  discount?: number;
  instituteId: number;
  schoolId: number;
  coursePlans: CoursePlan[];
  courseCategoryId: number;
  requiredLevel?: Localized;
  minimumAge?: number;
  courseDates?: Dates;
  note?: Localized;
};
```

## References

instituteId:1
schoolId: 1
General English Course Category id : 1
IELTS Preparation Course Id is: 6

start the course id from 1

## Task

Please extract the courses from the refrence image according to the provided structure
Also add ar (arabic) translations as well.
