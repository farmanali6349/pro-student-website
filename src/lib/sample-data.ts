export interface Course {
  id: string;
  name: string;
  nameAr: string;
}

export interface School {
  id: string;
  name: string;
  nameAr: string;
  courses: Course[];
}

export interface City {
  id: string;
  name: string;
  nameAr: string;
  schools: School[];
}

export interface Country {
  id: string;
  name: string;
  nameAr: string;
  cities: City[];
}

export interface Region {
  id: string;
  name: string;
  nameAr: string;
  countries: Country[];
}

export const sampleRegions: Region[] = [
  {
    id: 'europe',
    name: 'Europe',
    nameAr: 'أوروبا',
    countries: [
      {
        id: 'uk',
        name: 'United Kingdom',
        nameAr: 'المملكة المتحدة',
        cities: [
          {
            id: 'london',
            name: 'London',
            nameAr: 'لندن',
            schools: [
              {
                id: 'oxford',
                name: 'University of Oxford',
                nameAr: 'جامعة أكسفورد',
                courses: [
                  { id: 'law', name: 'Law', nameAr: 'القانون' },
                  { id: 'medicine', name: 'Medicine', nameAr: 'الطب' },
                  { id: 'engineering', name: 'Engineering', nameAr: 'الهندسة' },
                ],
              },
              {
                id: 'cambridge',
                name: 'University of Cambridge',
                nameAr: 'جامعة كامبريدج',
                courses: [
                  { id: 'math', name: 'Mathematics', nameAr: 'الرياضيات' },
                  { id: 'physics', name: 'Physics', nameAr: 'الفيزياء' },
                  { id: 'cs', name: 'Computer Science', nameAr: 'علوم الحاسوب' },
                ],
              },
            ],
          },
          {
            id: 'manchester',
            name: 'Manchester',
            nameAr: 'مانشستر',
            schools: [
              {
                id: 'manchester-uni',
                name: 'University of Manchester',
                nameAr: 'جامعة مانشستر',
                courses: [
                  { id: 'business', name: 'Business', nameAr: 'إدارة الأعمال' },
                  { id: 'engineering', name: 'Engineering', nameAr: 'الهندسة' },
                  { id: 'science', name: 'Science', nameAr: 'العلوم' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'germany',
        name: 'Germany',
        nameAr: 'ألمانيا',
        cities: [
          {
            id: 'berlin',
            name: 'Berlin',
            nameAr: 'برلين',
            schools: [
              {
                id: 'hu-berlin',
                name: 'Humboldt University of Berlin',
                nameAr: 'جامعة هومبولدت برلين',
                courses: [
                  { id: 'philosophy', name: 'Philosophy', nameAr: 'الفلسفة' },
                  { id: 'economics', name: 'Economics', nameAr: 'الاقتصاد' },
                  { id: 'biology', name: 'Biology', nameAr: 'الأحياء' },
                ],
              },
            ],
          },
          {
            id: 'munich',
            name: 'Munich',
            nameAr: 'ميونخ',
            schools: [
              {
                id: 'tum',
                name: 'Technical University of Munich',
                nameAr: 'جامعة ميونخ التقنية',
                courses: [
                  { id: 'engineering', name: 'Engineering', nameAr: 'الهندسة' },
                  { id: 'cs', name: 'Computer Science', nameAr: 'علوم الحاسوب' },
                  { id: 'physics', name: 'Physics', nameAr: 'الفيزياء' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'asia',
    name: 'Asia',
    nameAr: 'آسيا',
    countries: [
      {
        id: 'singapore',
        name: 'Singapore',
        nameAr: 'سنغافورة',
        cities: [
          {
            id: 'singapore-city',
            name: 'Singapore',
            nameAr: 'سنغافورة',
            schools: [
              {
                id: 'nus',
                name: 'National University of Singapore',
                nameAr: 'الجامعة الوطنية في سنغافورة',
                courses: [
                  { id: 'business', name: 'Business', nameAr: 'إدارة الأعمال' },
                  { id: 'engineering', name: 'Engineering', nameAr: 'الهندسة' },
                  { id: 'medicine', name: 'Medicine', nameAr: 'الطب' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'japan',
        name: 'Japan',
        nameAr: 'اليابان',
        cities: [
          {
            id: 'tokyo',
            name: 'Tokyo',
            nameAr: 'طوكيو',
            schools: [
              {
                id: 'tokyo-uni',
                name: 'University of Tokyo',
                nameAr: 'جامعة طوكيو',
                courses: [
                  { id: 'engineering', name: 'Engineering', nameAr: 'الهندسة' },
                  { id: 'science', name: 'Science', nameAr: 'العلوم' },
                  { id: 'law', name: 'Law', nameAr: 'القانون' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'americas',
    name: 'Americas',
    nameAr: 'الأمريكتين',
    countries: [
      {
        id: 'usa',
        name: 'United States',
        nameAr: 'الولايات المتحدة الأمريكية',
        cities: [
          {
            id: 'boston',
            name: 'Boston',
            nameAr: 'بوسطن',
            schools: [
              {
                id: 'harvard',
                name: 'Harvard University',
                nameAr: 'جامعة هارفارد',
                courses: [
                  { id: 'business', name: 'Business', nameAr: 'إدارة الأعمال' },
                  { id: 'law', name: 'Law', nameAr: 'القانون' },
                  { id: 'medicine', name: 'Medicine', nameAr: 'الطب' },
                ],
              },
              {
                id: 'mit',
                name: 'MIT',
                nameAr: 'معهد ماساتشوستس للتكنولوجيا',
                courses: [
                  { id: 'engineering', name: 'Engineering', nameAr: 'الهندسة' },
                  { id: 'cs', name: 'Computer Science', nameAr: 'علوم الحاسوب' },
                  { id: 'physics', name: 'Physics', nameAr: 'الفيزياء' },
                ],
              },
            ],
          },
          {
            id: 'stanford',
            name: 'Stanford Area',
            nameAr: 'منطقة ستانفورد',
            schools: [
              {
                id: 'stanford',
                name: 'Stanford University',
                nameAr: 'جامعة ستانفورد',
                courses: [
                  { id: 'cs', name: 'Computer Science', nameAr: 'علوم الحاسوب' },
                  { id: 'engineering', name: 'Engineering', nameAr: 'الهندسة' },
                  { id: 'business', name: 'Business', nameAr: 'إدارة الأعمال' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'canada',
        name: 'Canada',
        nameAr: 'كندا',
        cities: [
          {
            id: 'toronto',
            name: 'Toronto',
            nameAr: 'تورنتو',
            schools: [
              {
                id: 'uoft',
                name: 'University of Toronto',
                nameAr: 'جامعة تورنتو',
                courses: [
                  { id: 'engineering', name: 'Engineering', nameAr: 'الهندسة' },
                  { id: 'medicine', name: 'Medicine', nameAr: 'الطب' },
                  { id: 'science', name: 'Science', nameAr: 'العلوم' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const destinationImages = [
  {
    id: 'london',
    title: 'London',
    titleAr: 'لندن',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80',
    description: 'Historic universities and world-class education',
    descriptionAr: 'جامعات تاريخية وتعليم عالمي الطراز',
  },
  {
    id: 'paris',
    title: 'Paris',
    titleAr: 'باريس',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
    description: 'Art, culture, and prestigious institutions',
    descriptionAr: 'الفن والثقافة والمؤسسات المرموقة',
  },
  {
    id: 'newyork',
    title: 'New York',
    titleAr: 'نيويورك',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80',
    description: 'Top universities and endless opportunities',
    descriptionAr: 'أفضل الجامعات والفرص اللامحدودة',
  },
  {
    id: 'singapore',
    title: 'Singapore',
    titleAr: 'سنغافورة',
    image: 'https://images.unsplash.com/photo-1537996051959-a7e67ed7c1c5?w=400&q=80',
    description: 'Modern city with excellent education',
    descriptionAr: 'مدينة حديثة بتعليم ممتاز',
  },
];

export const institutionImages = [
  {
    id: 'oxford',
    title: 'University of Oxford',
    titleAr: 'جامعة أكسفورد',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    description: 'Founded in 1096, one of the world\'s top universities',
    descriptionAr: 'تأسست عام 1096، واحدة من أفضل جامعات العالم',
  },
  {
    id: 'cambridge',
    title: 'University of Cambridge',
    titleAr: 'جامعة كامبريدج',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
    description: 'Excellence in research and teaching',
    descriptionAr: 'التميز في البحث والتدريس',
  },
  {
    id: 'harvard',
    title: 'Harvard University',
    titleAr: 'جامعة هارفارد',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
    description: 'A leading institution for higher learning',
    descriptionAr: 'مؤسسة رائدة للتعليم العالي',
  },
  {
    id: 'mit',
    title: 'MIT',
    titleAr: 'معهد ماساتشوستس للتكنولوجيا',
    image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=400&q=80',
    description: 'Innovation and technology excellence',
    descriptionAr: 'الابتكار وتميز التكنولوجيا',
  },
];

export const courseImages = [
  {
    id: 'engineering',
    title: 'Engineering',
    titleAr: 'الهندسة',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
    description: 'Build the future with cutting-edge technology',
    descriptionAr: 'بناء المستقبل بتكنولوجيا متقدمة',
  },
  {
    id: 'medicine',
    title: 'Medicine',
    titleAr: 'الطب',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&q=80',
    description: 'Lead healthcare innovation and research',
    descriptionAr: 'قيادة الابتكار والبحث في الرعاية الصحية',
  },
  {
    id: 'business',
    title: 'Business',
    titleAr: 'إدارة الأعمال',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
    description: 'Master business and entrepreneurship',
    descriptionAr: 'اتقان الأعمال والريادة',
  },
  {
    id: 'law',
    title: 'Law',
    titleAr: 'القانون',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80',
    description: 'Study law and justice systems worldwide',
    descriptionAr: 'دراسة القانون وأنظمة العدالة في جميع أنحاء العالم',
  },
];
