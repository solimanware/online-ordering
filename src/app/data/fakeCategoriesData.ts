import { Category } from '../interfaces/categories';

// export const fakeCategoriesData: Category[] = [
//   {
//     id: '13',
//     sequence: '1',
//     fromTime: '17:00',
//     toTime: '20:00',
//     name: {
//       en: 'Beverages',
//       ar: 'المشروبات',
//     },
//     code: 'BEV',
//     description: {
//       en: 'Beverages such as tea, coffee, alcoholic and non-alcoholic beverages',
//       ar: 'مشروبات مثل الشاي والقهوة والمشروبات الكحولية وغير الكحولية',
//     },
//     imageUrl: 'https://picsum.photos/id/1080/160/220',
//     items: [
//       {
//         id: 'bev1',
//         sequence: '1',
//         fromTime: '17:00',
//         toTime: '20:00',
//         product_id: 1001,
//         barcode: Barcode.Empty,
//         name: {
//           en: 'Tomato Juice',
//           ar: 'عصير طماطم',
//         },
//         code: 'TJ001',
//         description: {
//           en: 'Fresh tomato juice',
//           ar: 'عصير طماطم طازج',
//         },
//         calories: 50,
//         tags: [],
//         uom: 'Units',
//         preparationTime: 5,
//         imageUrl: 'assets/images/tomato-juice.webp',
//         taxIds: [],
//         outOfStock: false,
//         price: {
//           currency: 'EGP',
//           amount: 25,
//         },

//         variantCategories: [
//           {
//             id: 'vc1',
//             name: {
//               en: 'Egg Style',
//               ar: 'طريقة البيض',
//             },
//             description: {
//               en: 'Choose how you want your eggs',
//               ar: 'اختر طريقة تحضير البيض',
//             },
//             variants: [
//               {
//                 id: 'v1',
//                 name: {
//                   en: 'Scrambled',
//                   ar: 'مخلوط',
//                 },
//                 code: 'EGG-SCRAMBLED',
//                 imageUrl: 'https://picsum.photos/id/1001/160/220',
//                 outOfStock: false,
//                 price: {
//                   currency: 'EGP',
//                   amount: 25,
//                 },
//               },
//               {
//                 id: 'v2',
//                 name: {
//                   en: 'Boiled',
//                   ar: 'مسلوق',
//                 },
//                 code: 'EGG-BOILED',
//                 imageUrl: 'https://picsum.photos/id/1002/160/220',
//                 outOfStock: false,
//                 price: {
//                   currency: 'EGP',
//                   amount: 30,
//                 },
//               },
//             ],
//           },
//         ],
//         modifierCategories: [
//           {
//             id: 'mc1',
//             variants: [],
//             name: {
//               en: 'Extras',
//               ar: 'إضافات',
//             },
//             description: {
//               en: 'Additional toppings for your omelette',
//               ar: 'إضافات إضافية للأومليت',
//             },
//             isMultiSelect: true,
//             allowRepeatedSelection: false,
//             maxSelection: 2,
//             minSelection: 0,
//             imageUrl: 'https://picsum.photos/id/1025/160/220',
//             modifiers: [
//               {
//                 id: 'm1',
//                 sequence: '1',
//                 name: {
//                   en: 'Cheese',
//                   ar: 'جبن',
//                 },
//                 description: {
//                   en: true,
//                   ar: true,
//                 },
//                 code: 'EX-CHEESE',
//                 barcode: '',
//                 uom: 'Units',
//                 imageUrl: 'https://picsum.photos/id/1026/160/220',
//                 taxIds: [],
//                 freeQty: 0,
//                 outOfStock: false,
//                 defaultQty: 0,
//                 price: {
//                   currency: 'EGP',
//                   amount: 10,
//                 },
//               },
//               {
//                 id: 'm2',
//                 sequence: '2',
//                 name: {
//                   en: 'Mushrooms',
//                   ar: 'فطر',
//                 },
//                 description: {
//                   en: true,
//                   ar: true,
//                 },
//                 code: 'EX-MUSHROOM',
//                 barcode: '',
//                 uom: 'Units',
//                 imageUrl: 'https://picsum.photos/id/1027/160/220',
//                 taxIds: [],
//                 freeQty: 0,
//                 outOfStock: false,
//                 defaultQty: 0,
//                 price: {
//                   currency: 'EGP',
//                   amount: 15,
//                 },
//               },
//             ],
//             price: {
//               currency: 'EGP',
//               amount: 0,
//             },
//           },
//         ],
//       },
//     ],
//     subCategories: [],
//   },
//   {
//     id: '50',
//     sequence: '1',
//     fromTime: '11:00',
//     toTime: '12:00',
//     name: {
//       en: 'Lunch',
//       ar: 'الغداء',
//     },
//     code: 'LUNCH',
//     description: {
//       en: 'Delicious lunch menu options',
//       ar: 'خيارات قائمة الغداء اللذيذة',
//     },
//     imageUrl:
//       'https://raw.githubusercontent.com/michael-carey/product-catalog/main/data/images/categories/lunch.jpeg',
//     items: [
//       {
//         id: '21',
//         sequence: '1',
//         fromTime: '11:00',
//         toTime: '12:00',
//         product_id: 1002,
//         barcode: Barcode.Empty,
//         name: {
//           en: 'Veggie Meatballs with Spaghetti',
//           ar: 'كرات اللحم النباتية مع السباغيتي',
//         },
//         code: 'VMS001',
//         description: {
//           en: 'Plant-based meatballs served with spaghetti and marinara sauce',
//           ar: 'كرات لحم نباتية تقدم مع السباغيتي وصلصة المارينارا',
//         },
//         calories: 450,
//         tags: ['vegetarian', 'pasta'],
//         uom: 'Units',
//         preparationTime: 20,
//         imageUrl: 'assets/images/veggie-meatballs.webp',
//         taxIds: [],
//         outOfStock: false,
//         price: {
//           currency: 'EGP',
//           amount: 85,
//         },
//         variantCategories: [],
//         modifierCategories: [],
//       },
//     ],
//     subCategories: [],
//   },
//   {
//     id: '14',
//     sequence: '2',
//     fromTime: '08:00',
//     toTime: '11:00',
//     name: {
//       en: 'Breakfast',
//       ar: 'وجبة الإفطار',
//     },
//     code: 'BRKF',
//     description: {
//       en: 'A variety of breakfast options including eggs, pastries, and cereals',
//       ar: 'مجموعة متنوعة من خيارات الإفطار تشمل البيض والمعجنات والحبوب',
//     },
//     imageUrl: 'https://picsum.photos/id/1082/160/220',
//     items: [
//       {
//         id: 'brkf1',
//         sequence: '1',
//         fromTime: '08:00',
//         toTime: '11:00',
//         product_id: 2001,
//         barcode: Barcode.Empty,
//         name: {
//           en: 'Omelette',
//           ar: 'أومليت',
//         },
//         code: 'OM001',
//         description: {
//           en: 'A fluffy omelette with cheese and vegetables',
//           ar: 'أومليت هش مع الجبن والخضروات',
//         },
//         calories: 250,
//         tags: [],
//         uom: 'Units',
//         preparationTime: 10,
//         imageUrl: 'assets/images/fluffy-omelette.webp',
//         taxIds: [],
//         outOfStock: false,
//         price: {
//           currency: 'EGP',
//           amount: 45,
//         },
//         variantCategories: [],
//         modifierCategories: [],
//       },
//       {
//         id: 'brkf2',
//         sequence: '2',
//         fromTime: '08:00',
//         toTime: '11:00',
//         product_id: 2002,
//         barcode: Barcode.Empty,
//         name: {
//           en: 'Croissant',
//           ar: 'كرواسون',
//         },
//         code: 'CRS001',
//         description: {
//           en: 'A buttery and flaky croissant',
//           ar: 'كرواسون زبداني ومقرمش',
//         },
//         calories: 180,
//         tags: [],
//         uom: 'Units',
//         preparationTime: 5,
//         imageUrl: 'assets/images/buttery-and-flaky-croissant.webp',
//         taxIds: [],
//         outOfStock: false,
//         price: {
//           currency: 'EGP',
//           amount: 30,
//         },
//         variantCategories: [],
//         modifierCategories: [],
//       },
//     ],
//     subCategories: [],
//   },
//   {
//     id: '15',
//     sequence: '3',
//     fromTime: '12:00',
//     toTime: '15:00',
//     name: {
//       en: 'Happy Hour',
//       ar: 'وجبة الغداء',
//     },
//     code: 'LNCH',
//     description: {
//       en: 'Delicious lunch meals including meats, salads, and rice dishes',
//       ar: 'وجبات غداء لذيذة تشمل اللحوم والسلطات وأطباق الأرز',
//     },
//     imageUrl: 'https://picsum.photos/id/1085/160/220',
//     items: [
//       {
//         id: 'lnch1',
//         sequence: '1',
//         fromTime: '12:00',
//         toTime: '15:00',
//         product_id: 3001,
//         barcode: Barcode.Empty,
//         name: {
//           en: 'Grilled Chicken',
//           ar: 'دجاج مشوي',
//         },
//         code: 'GC001',
//         description: {
//           en: 'Tender grilled chicken served with a side of vegetables',
//           ar: 'دجاج مشوي طري يقدم مع الخضار',
//         },
//         calories: 500,
//         tags: [],
//         uom: 'Units',
//         preparationTime: 20,
//         imageUrl: 'assets/images/grilled-chicken.webp',
//         taxIds: [],
//         outOfStock: false,
//         price: {
//           currency: 'EGP',
//           amount: 80,
//         },
//         variantCategories: [],
//         modifierCategories: [],
//       },
//       {
//         id: 'lnch2',
//         sequence: '2',
//         fromTime: '12:00',
//         toTime: '15:00',
//         product_id: 3002,
//         barcode: Barcode.Empty,
//         name: {
//           en: 'Caesar Salad',
//           ar: 'سلطة سيزر',
//         },
//         code: 'CS001',
//         description: {
//           en: 'Crisp romaine lettuce with Caesar dressing and croutons',
//           ar: 'خس روماني مقرمش مع صلصة السيزر والخبز المحمص',
//         },
//         calories: 350,
//         tags: [],
//         uom: 'Units',
//         preparationTime: 10,
//         imageUrl: 'assets/images/caesar-salad.webp',
//         taxIds: [],
//         outOfStock: false,
//         price: {
//           currency: 'EGP',
//           amount: 50,
//         },
//         variantCategories: [],
//         modifierCategories: [],
//       },
//     ],
//     subCategories: [],
//   },
//   {
//     id: '16',
//     sequence: '4',
//     fromTime: '18:00',
//     toTime: '22:00',
//     name: {
//       en: 'Dinner',
//       ar: 'وجبة العشاء',
//     },
//     code: 'DNR',
//     description: {
//       en: 'A variety of dinner meals including pasta, steaks, and seafood',
//       ar: 'مجموعة متنوعة من وجبات العشاء تشمل المعكرونة وشرائح اللحم والمأكولات البحرية',
//     },
//     imageUrl: 'https://picsum.photos/id/1088/160/220',
//     items: [
//       {
//         id: 'dnr1',
//         sequence: '1',
//         fromTime: '18:00',
//         toTime: '22:00',
//         product_id: 4001,
//         barcode: Barcode.Empty,
//         name: {
//           en: 'Spaghetti Bolognese',
//           ar: 'سباجيتي بولونيز',
//         },
//         code: 'SB001',
//         description: {
//           en: 'Spaghetti with rich and hearty Bolognese sauce',
//           ar: 'سباجيتي مع صلصة بولونيز الغنية والشهية',
//         },
//         calories: 600,
//         tags: [],
//         uom: 'Units',
//         preparationTime: 15,
//         imageUrl: 'assets/images/spaghetti-bolognese.webp',
//         taxIds: [],
//         outOfStock: false,
//         price: {
//           currency: 'EGP',
//           amount: 75,
//         },
//         variantCategories: [],
//         modifierCategories: [],
//       },
//       {
//         id: 'dnr2',
//         sequence: '2',
//         fromTime: '18:00',
//         toTime: '22:00',
//         product_id: 4002,
//         barcode: Barcode.Empty,
//         name: {
//           en: 'Grilled Salmon',
//           ar: 'سلمون مشوي',
//         },
//         code: 'GS001',
//         description: {
//           en: 'Grilled salmon with lemon butter sauce',
//           ar: 'سلمون مشوي مع صلصة الزبدة والليمون',
//         },
//         calories: 550,
//         tags: [],
//         uom: 'Units',
//         preparationTime: 20,
//         imageUrl: 'assets/images/grilled-salmon.webp',
//         taxIds: [],
//         outOfStock: false,
//         price: {
//           currency: 'EGP',
//           amount: 120,
//         },
//         variantCategories: [],
//         modifierCategories: [],
//       },
//     ],
//     subCategories: [],
//   },
// ];

export const fakeCategoriesData: Category[] = [
  {
    id: '717',
    sequence: '2',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'عرض الاحد والثلاثاء',
      en: 'عرض الاحد والثلاثاء',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '14606',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض بروست 3',
          en: 'Broast Offer 3',
        },
        code: '',
        description: {
          ar: '3 قطع بروست + بطاطس + 1 عيش',
          en: '3 Pcs Broast  + Fries + 1 Bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13966155-25445381/Broast%20Offer%2031736676812.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4854',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 115,
                },
              },
              {
                id: '4855',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 115,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '7772',
        sequence: '10',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض 6 بروست ',
          en: 'Broast Offer 6',
        },
        code: '',
        description: {
          ar: 'قطع بروست 6+ 2 عيش',
          en: '6 Pieces Of  Boast +2 Bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/9581596-dc35ffda/Broast%20Offer%2061714678473.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '2546',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 265,
                },
              },
              {
                id: '2547',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 265,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '750',
    sequence: '3',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'ويك اند اوفر',
      en: 'Week End Offer',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '14537',
        sequence: '30',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: '9قطعه بروست ',
          en: '9 Pcs Chicken offer',
        },
        code: '',
        description: {
          ar: '9 قطع دجاج بروستد مقرمش بخلطة هارت أتاك ، تقدم مع2ارز كبير ، 2سلطة كول سلو وسط و 3 قطع خبز.',
          en: '9Broasted crispy chicken pieces with heart attack mixture, served with 2 rice large , 2medium coleslaw salad and 3 pieces of bread.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13943253-5e2f6f04/9%20Pcs%20Chicken%20offer1736419046.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: true,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4791',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: true,
                price: {
                  currency: 'EGP',
                  amount: 550,
                },
              },
              {
                id: '4792',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: true,
                price: {
                  currency: 'EGP',
                  amount: 550,
                },
              },
              {
                id: '4793',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: true,
                price: {
                  currency: 'EGP',
                  amount: 550,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '387',
    sequence: '4',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'عروض حصريه',
      en: 'Exclusive Offers',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '14107',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'توب  1',
          en: 'Top 1',
        },
        code: '',
        description: {
          ar: 'ساندوتش تومي قطعه بروست وكول سلو سمول',
          en: 'Tommy sandwich, one piece of broasted chicken and small coleslaw',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13820923-55917ef5/Top%2011734880872.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4623',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 199,
                },
              },
              {
                id: '4624',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 199,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14108',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'توب 2',
          en: 'Top 2',
        },
        code: '',
        description: {
          ar: '\n\n 2بروست، ارز و كول سلو سمول\n',
          en: '2 Broasted rice and small coleslaw',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13820925-f59ea44e/Top%2021734880896.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4625',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 199,
                },
              },
              {
                id: '4626',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 199,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14109',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'توب 3',
          en: 'Top 3',
        },
        code: '',
        description: {
          ar: '1 بروست، 2 ستربس، أرز، كول سلو و عيش',
          en: '1 fried chicken 2 strips, rice, coleslaw and bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13820929-b8f647f4/Top%2031734880935.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4656',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 235,
                },
              },
              {
                id: '4657',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 235,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14110',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'توب 4',
          en: 'Top 4',
        },
        code: '',
        description: {
          ar: 'تشيكن اوريجينال، ساندوتش تومي، أرز و كول سلو ميديم',
          en: 'Original chicken, tommy sandwich, rice and coleslaw medium',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13820931-0986b21b/Top%2041734880965.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14111',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'توب 5',
          en: 'Top 5',
        },
        code: '',
        description: {
          ar: '2 ميني راب، 2 تومي، فرايز سمول و كول سلو ميديم',
          en: '2 mini wraps, 2 tommies, small fries and medium coleslaw ',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13820933-029cf27f/Top%2051734880985.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '30',
    sequence: '5',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'عروض',
      en: 'offers',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '14045',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض الحريفة',
          en: 'EL 7arefa Offer',
        },
        code: '',
        description: {
          ar: 'ساندوتش فاير ان ذا هول، ساندوتش هانج أوفر، 2 فرايز سمول و 2 بيج كولا  ',
          en: 'Fire in the Hole Sandwich, Hangover Sandwich, 2 Small Fries and 2 Big Cola',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824107-fd7e8c00/EL%207arefa%20Offer1734952025.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14074',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض البطل ',
          en: 'Champion Offer',
        },
        code: '',
        description: {
          ar: '2 بروست، 1 استربس، فرايز سمول، كول سلو سمول و عيش',
          en: '2 broast, 1 strip, small fries, small coleslaw and bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824100-9929771d/Champion%20Offer1734951721.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4689',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 149,
                },
              },
              {
                id: '4690',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 149,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14634',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'Chucky Box Offer',
          en: 'Chucky Box Offer',
        },
        code: '',
        description: {
          ar: '',
          en: '',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl: '',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [
          {
            id: '471',
            variants: [],
            name: {
              ar: 'Chucky Box Fries',
              en: 'Chucky Box Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 1,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '15637',
                sequence: '1',
                name: {
                  ar: 'Chucky Box Fries',
                  en: 'Chucky Box Fries',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
          {
            id: '472',
            variants: [],
            name: {
              ar: 'Chucky Box 2 Maxi Cola',
              en: 'Chucky Box 2 Maxi Cola',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 1,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '15638',
                sequence: '1',
                name: {
                  ar: 'Chucky Box 2 Maxi Cola',
                  en: 'Chucky Box 2 Maxi Cola',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14050',
        sequence: '2',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض الابطال',
          en: 'Champions Offer',
        },
        code: '',
        description: {
          ar: 'ساندوتش فاير إن ذا هول، ساندوتش هانج أوفر، ساندوتش كلاسيك بيف، ساندوتش كرامليزد بيف، 4 فرايز سمول، 4 بيج كولا ',
          en: 'Fire in the Hole Sandwich, Hangover Sandwich, Classic Beef Sandwich, Caramelized Beef Sandwich, 4 Small Fries, 4 Big Cola',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824096-c748d56f/Champions%20Offer1734951646.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14044',
        sequence: '3',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض العالمي',
          en: 'EL 3almy Offer',
        },
        code: '',
        description: {
          ar: '3 بروست، 3 استربس، فرايز سمول، كول سلو ميديم و 2 عيش',
          en: '3 broast, 3 strips, small fries, medium coleslaw and 2 bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13819824-1f5bb8b8/%D8%B9%D8%B1%D8%B6%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A1734865052.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4691',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 270,
                },
              },
              {
                id: '4692',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 270,
                },
              },
              {
                id: '4693',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 270,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14046',
        sequence: '4',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض الملوك',
          en: 'Kings Offer',
        },
        code: '',
        description: {
          ar: 'ساندوتش هانج أوفر سنجل، تشيزي بيف، 2 فرايز سمول و 2 بيج كولا',
          en: 'Hangover Single Sandwich, Cheesy Beef, 2 Small Fries and 2 Big Cola',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824202-819a7cda/Kings%20Offer1734953901.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14047',
        sequence: '5',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض حامل اللقب ',
          en: '7aml El Laqb Offer',
        },
        code: '',
        description: {
          ar: '4 بروست، 4 استربس، 2 أرز، كول سلو ميديم و 3 عيش',
          en: '4 broast, 4 strips, 2 rice, medium coleslaw and 3 bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824205-402fb5fc/%D8%B9%D8%B1%D8%B6%20%D8%AD%D8%A7%D9%85%D9%84%20%D8%A7%D9%84%D9%84%D9%82%D8%A8%201734953938.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4707',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 335,
                },
              },
              {
                id: '4708',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 335,
                },
              },
              {
                id: '4709',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 335,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14049',
        sequence: '6',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض اللعيبة',
          en: 'El La3eba Offer',
        },
        code: '',
        description: {
          ar: '6 بروست، 3 استربس، فرايز لارج، 6 وينجز، أرز و 3 عيش',
          en: '6 broast, 3 strips, large fries, 6 wings, rice and 3 bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824180-77796f3e/El%20La3eba%20Offer1734953386.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4701',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 440,
                },
              },
              {
                id: '4702',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 440,
                },
              },
              {
                id: '4703',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 440,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '140',
            variants: [],
            name: {
              ar: 'اختيار الصوص',
              en: 'Sauce',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 2,
            minSelection: 1,
            imageUrl: '',
            modifiers: [
              {
                id: '1947',
                sequence: '8',
                name: {
                  ar: 'صوص باربكيو',
                  en: 'BBQ Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1947',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
              {
                id: '5367',
                sequence: '1',
                name: {
                  ar: 'بافلو صوص',
                  en: 'Buffalo Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
              {
                id: '1968',
                sequence: '30',
                name: {
                  ar: 'صوص فاير',
                  en: 'Fire Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1968',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
              {
                id: '1982',
                sequence: '38',
                name: {
                  ar: 'صوص سويت شيلى',
                  en: 'Sweet Chili Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1982',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14048',
        sequence: '7',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض الكابتن',
          en: 'El Captin Offer',
        },
        code: '',
        description: {
          ar: '4 بروست، 4 استربس، 2 فرايز، 6 وينجز، 2 أرز، 3 عيش و لتر ماكس كولا',
          en: '4 broast, 4 strips, 2 fries, 6 wings, 2 rice, 3 bread and 1 liter Max Cola',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824161-45d21215/El%20Captin%20Offer1734952798.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4694',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 410,
                },
              },
              {
                id: '4695',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 410,
                },
              },
              {
                id: '4696',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 410,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '140',
            variants: [],
            name: {
              ar: 'اختيار الصوص',
              en: 'Sauce',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 2,
            minSelection: 1,
            imageUrl: '',
            modifiers: [
              {
                id: '1947',
                sequence: '8',
                name: {
                  ar: 'صوص باربكيو',
                  en: 'BBQ Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1947',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
              {
                id: '5367',
                sequence: '1',
                name: {
                  ar: 'بافلو صوص',
                  en: 'Buffalo Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
              {
                id: '1968',
                sequence: '30',
                name: {
                  ar: 'صوص فاير',
                  en: 'Fire Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1968',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
              {
                id: '1982',
                sequence: '38',
                name: {
                  ar: 'صوص سويت شيلى',
                  en: 'Sweet Chili Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1982',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14051',
        sequence: '8',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض الماراثون',
          en: 'Marathon Offer',
        },
        code: '',
        description: {
          ar: '10 بروست، 10 استربس، 12 وينجز، كول سلو لارج، 4 عيش و لتر ماكس كولا',
          en: '10 Broast, 10 Strips, 12 Wings, Large Coleslaw, 4 Mushrooms and 1 Liter Max Cola',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824194-6180d717/Marathon%20Offer1734953736.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4704',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 950,
                },
              },
              {
                id: '4705',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 950,
                },
              },
              {
                id: '4706',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 950,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '140',
            variants: [],
            name: {
              ar: 'اختيار الصوص',
              en: 'Sauce',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 2,
            minSelection: 1,
            imageUrl: '',
            modifiers: [
              {
                id: '1947',
                sequence: '8',
                name: {
                  ar: 'صوص باربكيو',
                  en: 'BBQ Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1947',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
              {
                id: '5367',
                sequence: '1',
                name: {
                  ar: 'بافلو صوص',
                  en: 'Buffalo Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
              {
                id: '1968',
                sequence: '30',
                name: {
                  ar: 'صوص فاير',
                  en: 'Fire Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1968',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
              {
                id: '1982',
                sequence: '38',
                name: {
                  ar: 'صوص سويت شيلى',
                  en: 'Sweet Chili Sauce',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1982',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 0,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14042',
        sequence: '9',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض القائد ميكس',
          en: 'El Ka2ed Mix Offer',
        },
        code: '',
        description: {
          ar: '1 بروست، ميني راب و كول سلو سمول',
          en: '1 broast, mini wrap and small coleslaw',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824160-89956bc8/El%20Ka2ed%20Mix%20Offer1734952749.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14041',
        sequence: '10',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض القائد ريزيتو ',
          en: 'El Ka2ed Rezzeto Offer',
        },
        code: '',
        description: {
          ar: 'ساندوتش تومي، ريزيتو و كول سلو سمول ',
          en: "Tommy's Sandwich, Rezzeto and Coleslaw Small",
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824151-e70f18d5/El%20Ka2ed%20Rezzeto%20Offer1734952677.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '13843',
        sequence: '11',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض 9 قطع',
          en: '9 Pcs Chicken Offer',
        },
        code: '',
        description: {
          ar: '',
          en: '',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13789394-6c2c04c6/9%20Pcs%20Chicken%20Offer1734522246.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: true,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4524',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: true,
                price: {
                  currency: 'EGP',
                  amount: 399,
                },
              },
              {
                id: '4525',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: true,
                price: {
                  currency: 'EGP',
                  amount: 399,
                },
              },
              {
                id: '4526',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: true,
                price: {
                  currency: 'EGP',
                  amount: 399,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '14043',
        sequence: '12',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'عرض القائد راب',
          en: 'El Ka2ed Wrap Offer',
        },
        code: '',
        description: {
          ar: 'ميني راب، ساندوتش تومي، أرز و كول سلو سمول',
          en: 'Mini wrap, tommy sandwich, rice and small coleslaw',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13824136-4bdd0e2d/El%20Ka2ed%20Wrap%20Offer1734952455.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '43',
    sequence: '6',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'خصم يصل الى% 50',
      en: 'Up to 50% OFF',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '4900',
        sequence: '5',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: ' عرض ويف سنجل',
          en: 'Wave Single Offer',
        },
        code: '',
        description: {
          ar: 'عباره عن قطعه دجاج + قطعه ستربس + ارز + عيش\n',
          en: '1 pcs broasted + 1 pcs stips + Rice + bread\n',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/9265626-cd4ea884/wave%20Single1713434150.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '1488',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 115,
                },
              },
              {
                id: '1489',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 115,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '4537',
        sequence: '6',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: ' عرض ويف بن',
          en: 'Wave Bun Offer',
        },
        code: '',
        description: {
          ar: 'عباره عن ساندوتش تشيكن بن + بطاطس + كلوسلو\n',
          en: 'Chicken Bun Sandwich + french fries + Coleslaw Small\n',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/9265625-bf1a288a/wave%20Bun1713434093.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '4570',
        sequence: '21',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ويف بوكس',
          en: 'Wave Box',
        },
        code: '',
        description: {
          ar: ' ساندوتش 1ميني راب + 1 ساندوتش بيتي بان ميني بطاطس وسط،1 كول سلو صغير',
          en: '1 Mini Wrap Sandwich+1 Mini Petit Pan Sandwich , Medium Fries, 1 Small Coleslaw',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/6307495-015837b6/Combo%20Box%2021703675603.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '55',
    sequence: '7',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'منيو ال 120',
      en: 'Menu EL 120',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '2694',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'كومبو تشيكن',
          en: 'Combo Chicken',
        },
        code: '',
        description: {
          ar: 'اوريجينال تشيكن سندويتش+ بطاطس',
          en: 'Original Chicken Sandwich  +Fries',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/5014138-3623f5a5/Combo%20Chicken%20901698664137.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '2697',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'كومبو ميكس',
          en: 'Combo Mix',
        },
        code: '',
        description: {
          ar: 'قطعت بروست + ريزو+ كلوسلو',
          en: '1 PCs Broasted + Rezo +coleslaw',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/9033805-54e8bb3f/Combo%20Mix1712836939.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '531',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 120,
                },
              },
              {
                id: '532',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 120,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '2695',
        sequence: '2',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'كومبو بيف',
          en: 'Combo Beef',
        },
        code: '',
        description: {
          ar: 'اوريجينال بيف سندويتش + بطاطس ',
          en: 'Original Beef Sandwich  +Fries',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/5014505-63ea3b07/Combo%20Beef%20901698665827.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '2693',
        sequence: '4',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'سناك',
          en: 'Snack',
        },
        code: '',
        description: {
          ar: 'قطعتين بروست +بطاطس +كلوسلو +خبز',
          en: '2 PCs Broasted +Fries +coleslaw +Bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/5014184-8db3df4c/Snack%20901698664371.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '533',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 120,
                },
              },
              {
                id: '534',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 120,
                },
              },
              {
                id: '535',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 120,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '2698',
        sequence: '5',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ستريبس',
          en: 'Strips',
        },
        code: '',
        description: {
          ar: 'ثلاث قطع ستريبس + بطاطس',
          en: '3 PCs strips +Fries ',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/5014155-9978c293/Strips%20901698664228.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '536',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 120,
                },
              },
              {
                id: '537',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 120,
                },
              },
              {
                id: '538',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 120,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '156',
    sequence: '7',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'عروض السعاده',
      en: 'Happiness Deals',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '4505',
        sequence: '10',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: ' ميني بيتي بان كومبو',
          en: 'Petit Pan Combo',
        },
        code: '',
        description: {
          ar: 'ساندوتش ميني بيتي بان+ بطاطس صغير+ كول سلو صغير',
          en: 'Mini Petit Pan Sandwich + Small Fries + Small Coleslaw',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/6307504-d2c0d032/Petit%20Pan%20Combo1703675660.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '4603',
        sequence: '13',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'كومبو بوكس الـ4',
          en: 'Combo Box 4',
        },
        code: '',
        description: {
          ar: '2 ميني راب +2سندويتش تشيكن بن، بطاطس كبيرة، كول سلو وسط',
          en: '2 Mini Wrap + 2 Bun Chicken , Large Fries, Medium Coleslaw',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/6307492-f9c1718a/Combo%20Box%2041703675585.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '882',
    sequence: '10',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'عروض صيامى',
      en: 'Syami Offers',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '12721',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'بطاطس راب',
          en: 'Fries Wrap',
        },
        code: '',
        description: {
          ar: '',
          en: '',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13540740-7c2d3b6f/Fries%20Wrap1732725384.0.jpg',
        taxIds: [],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '12723',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'كوب جمبرى',
          en: 'Shrimp Cup',
        },
        code: '',
        description: {
          ar: '',
          en: '',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13540751-a9db81d5/Shrimp%20Cup1732725400.0.jpg',
        taxIds: [],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '12688',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'جمبرى راب',
          en: 'Shrimp Wrap',
        },
        code: '',
        description: {
          ar: '',
          en: '',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13540810-4ccf0ac1/Shrimp%20Wrap1732725468.0.jpg',
        taxIds: [],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '12722',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'راب جمبرى + بطاطس',
          en: 'Shrimp Wrap + Fries',
        },
        code: '',
        description: {
          ar: '',
          en: '',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13540825-7f118899/Shrimp%20Wrap%20%2B%20Fries1732725497.0.jpg',
        taxIds: [],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '33',
    sequence: '11',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'سندويتشات لحم',
      en: 'Beef Sandwiches',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '13249',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'كلاسيك بوكس',
          en: 'Classic Box',
        },
        code: '',
        description: {
          ar: 'قطعة من 220 جرام  برجر المحشو بالجبنة المميزة مع شرائح الخيار المخلل والخس مع صوص التكساس فى عيش البريوش + يقدم مع فرايز ',
          en: 'A piece of 220 Gm burger stuffed with special cheese , pickled cucumber slices, lettuce, and Texas sauce in brioche bread +served with fries .',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13715750-7e7faaf9/Classic%20Box1733670244.0.jpg',
        taxIds: [],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '4161',
                name: {
                  ar: 'سنجل',
                  en: 'Single',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 160,
                },
              },
              {
                id: '4162',
                name: {
                  ar: 'دبل',
                  en: 'Double',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 225,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '5263',
        sequence: '2',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'كرمالايز هارت بوكس',
          en: 'Caramelized Heart Box',
        },
        code: '',
        description: {
          ar: 'قطعة 220 جرام من البرجر المحشو بالجبنة المميزة مع صوص ثاوزند ايلاند وشرائح الخيار المخلل والخس الطماطم مع المشروم والبصل المكرمل وصو الباربكيو فى عيش البريوش + يقدم مع فرايز',
          en: 'A piece of 220 Gm burger stuffed with special cheese with thousand island sauce, pickled cucumber slices, lettuce, tomatoes, mushrooms, caramelized onions and barbecue sauce in brioche bread + served with fries.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13715678-f3cfcfc4/Caramelized%20Heart%20Box1733669907.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '1752',
                name: {
                  ar: 'سنجل',
                  en: 'Single',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 185,
                },
              },
              {
                id: '1753',
                name: {
                  ar: 'دبل',
                  en: 'Double',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 250,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1824',
        sequence: '3',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ساندوتش برجر لحم تشيزي هارت أتاك',
          en: 'Cheesy Heart Attack Box',
        },
        code: '',
        description: {
          ar: 'برجر لحم 220 جرام محشو بالجبنة، أصابع جبنة موتزاريلا، بيكون لحم بقري، خس، طماطم، شريحة جبنة شيدر، خيار مخلل و صوص هارت أتاك فى \n عيش البريوش +يقدم مع الفرايز ',
          en: '220 Gm Of Beef burger, mozzarella cheese sticks, beef bacon, lettuce, tomatoes, cheddar cheese slice, pickled cucumbers and heart attack sauce in brioche bread.+ served with fries',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13715702-3064bbe8/Cheesy%20Heart%20Attack%20Box1733669980.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '19',
                name: {
                  ar: 'دبل',
                  en: 'Double',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 250,
                },
              },
              {
                id: '20',
                name: {
                  ar: 'سنجل',
                  en: 'Single',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 185,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1868',
        sequence: '4',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ساندوتش برجر لحم تكساس أتاك',
          en: 'Texas Attack Box',
        },
        code: '',
        description: {
          ar: 'قطعة 220 جرام  من البرجر المحشو بالجبنة المميزة مع شرائح الخيار المخلل والخس الطماطم مع المشروم والبيف بيكون مع صوص التكساس فى عيش البريوش يقدم مع فرايز ',
          en: 'A piece of 220 Gm burger stuffed with special cheese with slices of pickles, lettuce, tomatoes, mushrooms, beef bacon, and Texas sauce in brioche bread, served with fries.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13715777-f22a6e8a/Texas%20Attack%20Box1733670319.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '60',
                name: {
                  ar: 'دبل',
                  en: 'Double',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 260,
                },
              },
              {
                id: '61',
                name: {
                  ar: 'سنجل',
                  en: 'Single',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 195,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '13283',
        sequence: '5',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'اضافة قطعة بيف',
          en: 'Extra Beef',
        },
        code: '',
        description: {
          ar: '',
          en: '',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl: '',
        taxIds: [],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '34',
    sequence: '12',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'سندويتشات دجاج',
      en: 'Chicken Sandwiches',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '1826',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ساندوتش دجاج هارت أتاك',
          en: 'Chicken Heart Attack',
        },
        code: '',
        description: {
          ar: 'صدور دجاج كرسبي، لحم رومي مدخن، شرائح جبنة شيدر على خس، طماطم، خيار مخلل، صوص الجبنة الشيدر مع قنبلة الجبنة و صوص الرانش المميزيقدم مع فرايز',
          en: 'Crispy chicken breasts, smoked turkey, cheddar cheese slices on lettuce, tomatoes, pickles, cheddar cheese sauce with cheese bomb and special ranch sauce served with fries',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13715958-1cf49d30/Chicken%20Heart%20Attack1733671442.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '22',
                name: {
                  ar: 'دبل',
                  en: 'Double',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 210,
                },
              },
              {
                id: '23',
                name: {
                  ar: 'سنجل',
                  en: 'Single',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 160,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '8431',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'نيويورك سندويتش',
          en: 'NewYork Sandwitch',
        },
        code: '',
        description: {
          ar: 'ساندوتش النيويورك أتاك بقطعتين تشيكن بالقرمشة المميزة مع صوص النيويورك',
          en: 'New York Attack sandwich with two pieces of chicken with special crunch and New York sauce',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/10005131-f50b2893/NewYork1716363356.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '2355',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '2508',
        name: {
          ar: 'تشيكن اوريجينال',
          en: 'Chicken Original',
        },
        code: '',
        description: {
          ar: 'صدور دجاج المقرمش مع صوص ثاوزند ايلاند والخس والخيار المخلل والطماطم  +يقدم مع فرايز',
          en: 'Crispy chicken breast with thousand island sauce, lettuce, pickles and tomatoes + served with fries',
        },
        calories: 1,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13715820-ab3bf110/Chicken%20Original1733670556.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1821',
        sequence: '2',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ساندوتش بيرند هارت',
          en: 'Burned Heart',
        },
        code: '',
        description: {
          ar: 'صدور دجاج المقرمش الحارة، بيكون لحم بقري، خس، طماطم، شرائح فلفل هالبينو، خيار مخلل، شرائح جبنة شيدر، جبنة موتزاريلا سايحة و صوص فولكانو حار+يقدم مع فرايز',
          en: 'Spicy crispy chicken breast, beef bacon, lettuce, tomatoes, jalapeno slices, pickles, cheddar cheese slices, melted mozzarella cheese and hot volcano sauce + served with fries',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13715797-ab50654e/Burned%20Heart1733670461.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '12',
                name: {
                  ar: 'دبل',
                  en: 'Double',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 200,
                },
              },
              {
                id: '13',
                name: {
                  ar: 'سنجل',
                  en: 'Single',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 150,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1834',
        sequence: '3',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ساندوتش فاير إن ذا هول',
          en: 'Fire In The Hole',
        },
        code: '',
        description: {
          ar: 'صدور دجاج كرسبي حار، شرائح هوت دوج، خس، طماطم، شرائح فلفل هالبينو، خيار مخلل، شرائح جبنة شيدر و صوص فولكانو حار يقدم مع فرايز',
          en: 'Spicy crispy chicken breasts, hot dog slices, lettuce, tomatoes, jalapeno slices, pickled cucumbers, cheddar cheese slices and hot volcano sauce served with fries.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13715981-c87814c5/Fire%20In%20The%20Hole1733671573.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '32',
                name: {
                  ar: 'دبل',
                  en: 'Double',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 200,
                },
              },
              {
                id: '33',
                name: {
                  ar: 'سنجل',
                  en: 'Single',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 150,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1838',
        sequence: '4',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ساندوتش هانج أوفر',
          en: 'Hangover Chicken',
        },
        code: '',
        description: {
          ar: 'صدور دجاج كرسبي، خس، طماطم، خيار مخلل، أصابع جبنة موتزاريلا مقلية، شرائح جبنة شيدر و صوص هارت أتاك المميز يقدم مع فرايز ',
          en: 'Crispy chicken breasts, lettuce, tomatoes, pickled cucumbers, fried mozzarella cheese sticks, cheddar cheese slices and heart attack sauce served with fries',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13716005-28e85ce6/Hangover%20Chicken1733671630.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '39',
                name: {
                  ar: 'دبل',
                  en: 'Double',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 200,
                },
              },
              {
                id: '40',
                name: {
                  ar: 'سنجل',
                  en: 'Single',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 150,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1853',
        sequence: '5',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ساندوتش ماسل أتاك',
          en: 'Muscle Attack',
        },
        code: '',
        description: {
          ar: 'صدور دجاج كرسبي، شرائح مشروم مشوي، خس، طماطم، خيار مخلل، شرائح جبنة شيدر و صوص زبدة مع ثوم يقدم مع فرايز ',
          en: 'Crispy chicken breasts, grilled mushroom slices, lettuce, tomatoes, pickled cucumbers, slices of cheddar cheese and butter sauce with garlic served with fries .',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13716011-a198d06a/Muscle%20Attack1733671670.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '51',
                name: {
                  ar: 'دبل',
                  en: 'Double',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 200,
                },
              },
              {
                id: '52',
                name: {
                  ar: 'سنجل',
                  en: 'Single',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 150,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1830',
        sequence: '6',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1902',
        name: {
          ar: 'ساندوتش كرانشي أتاك',
          en: 'Crunchy',
        },
        code: '',
        description: {
          ar: 'قطعتين استربس كبار، 1 قطعه لحم رومي، خس، قطعتيين شيدر، صوص جبنه وصوص مايونيز. يقدم مع فرايز ',
          en: '2 pieces large strips, 1 piece turkey, lettuce, 2 pieces cheddar, cheese sauce and mayonnaise sauce +served with fries',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13715972-2bcac518/Crunchy1733671510.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '4672',
        sequence: '7',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'بيج راب',
          en: 'Big Wrap',
        },
        code: '',
        description: {
          ar: 'قطعتين تشيكن فراى، جبنة شيدر في عيش التورتيلا مع الخس و الهلابينو ',
          en: 'A Piece Of Chicken fry, Cheddar Cheese In Tortilla Bread with Lettuce, Jalapeno.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/6102634-58849f0f/Big%20Wrap1702932589.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '4670',
        sequence: '8',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'رانش راب',
          en: 'Ranch wrap',
        },
        code: '',
        description: {
          ar: 'قطعتين ستربس مقرمش، جبنة شيدر في عيش التورتيلا مع الخس و الهلابينو و صوص رانش',
          en: 'Two Pieces Of Crispy Strips, Cheddar Cheese In Tortilla Bread with Lettuce, Jalapeno And Ranch Sauce.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/6102644-0cfd2d4d/Ranch%20wrap1702932631.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '4669',
        sequence: '9',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'فاير راب',
          en: 'Fire wrap',
        },
        code: '',
        description: {
          ar: 'قطعتين ستربس مقرمش، جبنة شيدر في عيش التورتيلا مع الخس و الهلابينو و صوص الفاير',
          en: 'Two Pieces Of Crispy Strips, Cheddar Cheese In Tortilla Bread with Lettuce, Jalapeno And Fire Sauce.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/6102640-02eda139/Fire%20wrap1702932618.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '4671',
        sequence: '10',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'اربيان راب',
          en: 'Arabian Wrap',
        },
        code: '',
        description: {
          ar: 'قطعتين ستربس مقرمش، جبنة شيدر في عيش التورتيلا مع الخس و الهلابينو و صوص ثوميه',
          en: 'Two Pieces Of Crispy Strips, Cheddar Cheese In Tortilla Bread with Lettuce, Jalapeno And Tomaya Sauce.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/6102636-9dec3883/Arabian%20Wrap1702932603.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1827',
        sequence: '11',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1827',
        name: {
          ar: 'ساندوتش راب دجاج',
          en: 'Chicken Wrap',
        },
        code: '',
        description: {
          ar: 'صدور دجاج كرسبي، خس و صوص السوزند ايلاند، تقدم في خبز تورتيلا يقدم مع فرايز',
          en: 'Crispy chicken breasts, lettuce and 1000 island sauce, served in tortilla bread +served with fries',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13715968-226c70d4/Chicken%20Wrap1733671486.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '31',
    sequence: '13',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'وجبات فرديه',
      en: 'Single Meals',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '2699',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'سنجل ميكس',
          en: 'Single Mix',
        },
        code: '',
        description: {
          ar: 'قطعتين من الدجاج البروست+قطعتين من الاستريبس+خبز',
          en: '2 Pcs Of Broasted Chicken+2 Pcs Of Strips+Bread ',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13723056-a3dc2751/Single%20Mix1733741896.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '440',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 145,
                },
              },
              {
                id: '441',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 145,
                },
              },
              {
                id: '442',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 145,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1841',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'وجبة دينر هارت أتاك',
          en: 'Heart Attack Dinner Meal',
        },
        code: '',
        description: {
          ar: '3 قطع دجاج بروستد متبلة مع خلطة هارت أتاك و 1 قطعة خبز',
          en: '3 marinated broasted chicken pieces with heart attack mixture and 1 bun bread.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13723048-25445381/Heart%20Attack%20Dinner%20Meal1733741778.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '432',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 130,
                },
              },
              {
                id: '433',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 130,
                },
              },
              {
                id: '434',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 130,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '2700',
        sequence: '2',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'سوبر دينر هارت اتاك',
          en: 'Heart Attack Super Dinner',
        },
        code: '',
        description: {
          ar: ' قطع 4 من الدجاج البروست  وقطعتين خبر ',
          en: '4 Psc chicken Broasted +2 bread ',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13723050-db37b1a6/Heart%20Attack%20Super%20Dinner1733741831.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '435',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 170,
                },
              },
              {
                id: '436',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 170,
                },
              },
              {
                id: '437',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 170,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1863',
        sequence: '3',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ريزيتو',
          en: 'Rezetto',
        },
        code: '',
        description: {
          ar: 'أرز وقطع دجاج كريسبي مع خلطة هارت اتاك الخاصة',
          en: 'Rice and crispy chicken pieces with heart attack special mixture.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/849-89afeb7f/Rezetto1651935423.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '438',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 65,
                },
              },
              {
                id: '439',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 65,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '29',
    sequence: '14',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'وجبات عائليه',
      en: 'Family Meals',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '1806',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'وجبة دجاج إستربس 10 قطع',
          en: '10 PCS Chicken Strips',
        },
        code: '',
        description: {
          ar: '10 صدور دجاج كرسبي مع خلطة هارت أتاك، تقدم مع  3 قطع خبز  ',
          en: '10 Crispy chicken breasts with heart attack mixture, served  3 pieces of bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13723015-4c379df3/10%20PCS%20Chicken%20Strips1733741343.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '76',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 300,
                },
              },
              {
                id: '77',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 300,
                },
              },
              {
                id: '134',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 300,
                },
              },
            ],
          },
        ],
        modifierCategories: [
          {
            id: '41',
            variants: [],
            name: {
              ar: 'بطاطس',
              en: 'Fries',
            },
            description: {
              ar: '',
              en: '',
            },
            isMultiSelect: true,
            allowRepeatedSelection: true,
            maxSelection: 0,
            minSelection: 0,
            imageUrl: '',
            modifiers: [
              {
                id: '1993',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (كبير)',
                  en: 'French Fries (Large)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1993',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '1994',
                sequence: '31',
                name: {
                  ar: 'بطاطس محمرة (وسط)',
                  en: 'French Fries (Medium)',
                },
                description: {
                  ar: '',
                  en: '',
                },
                code: '',
                barcode: '1994',
                uom: 'Units',
                imageUrl: '',
                taxIds: [
                  {
                    id: '55',
                    rate: 14,
                    priceIncluded: true,
                  },
                ],
                freeQty: 0,
                outOfStock: false,
                defaultQty: 0,
                price: {
                  currency: 'EGP',
                  amount: 30,
                },
              },
            ],
          },
        ],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1809',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'وجبة دجاج إستربس 20 قطع',
          en: '20 PCS Chicken Strips',
        },
        code: '',
        description: {
          ar: 'صدور دجاج كرسبي مع خلطة هارت أتاك، تقدم مع 6 قطع خبز 20',
          en: 'Crispy chicken breasts with heart attack mixture, served with 6 pieces of bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13723016-8392167d/20%20PCS%20Chicken%20Strips1733741379.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '80',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 590,
                },
              },
              {
                id: '81',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 590,
                },
              },
              {
                id: '136',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 590,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '5859',
        sequence: '2',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: '6قطعه بروست عائلي',
          en: 'Family 6 Pcs Chicken',
        },
        code: '',
        description: {
          ar: '6 قطع دجاج بروستد مقرمش بخلطة هارت أتاك و 2 قطع خبز.',
          en: '6Broasted crispy chicken pieces with heart attack mixture and 2 pieces of bread.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13723023-70e24d93/Family%206%20Pcs%20Chicken1733741453.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '2067',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 265,
                },
              },
              {
                id: '2068',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 265,
                },
              },
              {
                id: '2069',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 265,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '2624',
        sequence: '3',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: '9قطعه بروست عائلي',
          en: 'Family 9 Pcs Chicken',
        },
        code: '',
        description: {
          ar: '9 قطع دجاج بروستد مقرمش بخلطة هارت أتاك و 3 قطع خبز.',
          en: '9Broasted crispy chicken pieces with heart attack mixture and 3 pieces of bread.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13723029-6c2c04c6/Family%209%20Pcs%20Chicken1733741508.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '331',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 399,
                },
              },
              {
                id: '332',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 399,
                },
              },
              {
                id: '333',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 399,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '2014',
        sequence: '4',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: '12 قطعه بروست عائلي ',
          en: 'Family 12 Pcs Chicken',
        },
        code: '',
        description: {
          ar: '12 قطعة دجاج بروستد مقرمش بخلطة هارت أتاك الخاصة و 4قطع خبز .',
          en: '12 pieces of crispy broasted chicken with the special heart attack recipe , 4 pieces of bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13723030-577fc72b/Family%2012%20Pcs%20Chicken1733741577.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '141',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 550,
                },
              },
              {
                id: '142',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 550,
                },
              },
              {
                id: '143',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 550,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '2625',
        sequence: '5',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: '16 قطعه بروست عائلي',
          en: 'Family 16 Pcs Chicken',
        },
        code: '',
        description: {
          ar: 'دجاج بروستد مقرمش بخلطة هارت أتاك ، 5 قطع خبز .16',
          en: '16 Broasted crispy chicken with heart attack , 5 pieces of bread ',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13723038-c58a517f/Family%2016%20Pcs%20Chicken1733741614.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '334',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 675,
                },
              },
              {
                id: '335',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 675,
                },
              },
              {
                id: '336',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 675,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '2015',
        sequence: '6',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: '18 قطعه بروست عائلي',
          en: 'Family 18 Pcs Chicken',
        },
        code: '',
        description: {
          ar: 'دجاج بروستد مقرمش بخلطة هارت أتاك ، 6 قطع خبز .',
          en: 'Broasted crispy chicken with heart attack mix, 6 pieces of bread ',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13723040-afb7c5f2/Family%2018%20Pcs%20Chicken1733741650.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '17',
            name: {
              ar: 'اختيار الطعم',
              en: 'Choose Your Taste',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '144',
                name: {
                  ar: 'عادى',
                  en: 'Original',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 790,
                },
              },
              {
                id: '145',
                name: {
                  ar: 'حار',
                  en: 'Spicy',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 790,
                },
              },
              {
                id: '146',
                name: {
                  ar: 'مكس',
                  en: 'Mix',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 790,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '37',
    sequence: '15',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'وجبات الاطفال',
      en: 'Kids Meals',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '1825',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1825',
        name: {
          ar: 'وجبة أطفال أصابع دجاج',
          en: 'Chicken Fingers Kids Meal',
        },
        code: '',
        description: {
          ar: '2 قطعة دجاج كرسبي، تقدم مع بطاطس محمرة، إختيارك عصير برتقال و لعبة أطفال',
          en: '2 crispy chicken pieces, served with french fries, orange juice and kids toy.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/963-e15038dd/Chicken%20Fingers%20Kids%20Meal1651936053.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: true,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1831',
        sequence: '2',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1831',
        name: {
          ar: 'وجبة أطفال دبوس دجاج',
          en: 'Dabous Meal',
        },
        code: '',
        description: {
          ar: 'قطعة دبوس دجاج كرسبي، يقدم مع بطاطس محمرة، عصير برتقال و لعبة أطفال',
          en: 'Crispy chicken drumstick piece, served with french fries, orange juice and kids toy.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/969-d10883bc/Dabous%20Meal1651936082.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: true,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '39',
    sequence: '16',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'المقبلات',
      en: 'Appetizers',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '1823',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'بطاطس بالجبنة',
          en: 'Cheese Fries',
        },
        code: '',
        description: {
          ar: 'بطاطس بالجبنة',
          en: 'Cheese Fries',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/831-6768d92f/Cheese%20Fries1651935206.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '17',
                name: {
                  ar: 'كبير',
                  en: 'Large',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 80,
                },
              },
              {
                id: '18',
                name: {
                  ar: 'وسط',
                  en: 'Medium',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 60,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1852',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'أصابع جبنة موتزاريلا',
          en: 'Mozzarella Fingers',
        },
        code: '',
        description: {
          ar: 'أصابع جبنة موتزاريلا متبلة مع خلطة هارت أتاك، تقدم مع 2 صوص من إختيارك',
          en: 'Marinated mozzarella cheese sticks with heart attack mixture, served with 2 sauces of your choice.',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/819-0190d04e/Mozzarella%20Fingers1651935148.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '49',
                name: {
                  ar: 'كبير',
                  en: 'Large',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 105,
                },
              },
              {
                id: '50',
                name: {
                  ar: 'وسط',
                  en: 'Medium',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 80,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '6295',
        sequence: '3',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'وينجز6',
          en: '6 Wings',
        },
        code: '',
        description: {
          ar: '',
          en: '',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/7968067-3994f26e/Wings%20%28copy%29.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '223',
            name: {
              ar: 'اختيار صوص الوينجز',
              en: 'Wings Sauce',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '2249',
                name: {
                  ar: 'باربيكيو صوص',
                  en: 'BBQ Sauce',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 100,
                },
              },
              {
                id: '2250',
                name: {
                  ar: 'بافلو صوص',
                  en: 'Buffalo Sauce',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 100,
                },
              },
              {
                id: '2251',
                name: {
                  ar: 'فاير صوص',
                  en: 'Fire Sauce',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 100,
                },
              },
              {
                id: '2252',
                name: {
                  ar: 'سويت شيلى صوص',
                  en: 'Sweet Chili Sauce',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 100,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '6296',
        sequence: '4',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'وينجز12',
          en: '12 Wings',
        },
        code: '',
        description: {
          ar: '',
          en: '',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/7968073-3994f26e/6%20Wings%20%28copy%29.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '223',
            name: {
              ar: 'اختيار صوص الوينجز',
              en: 'Wings Sauce',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '2253',
                name: {
                  ar: 'باربيكيو صوص',
                  en: 'BBQ Sauce',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 185,
                },
              },
              {
                id: '2254',
                name: {
                  ar: 'بافلو صوص',
                  en: 'Buffalo Sauce',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 185,
                },
              },
              {
                id: '2255',
                name: {
                  ar: 'فاير صوص',
                  en: 'Fire Sauce',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 185,
                },
              },
              {
                id: '2256',
                name: {
                  ar: 'سويت شيلى صوص',
                  en: 'Sweet Chili Sauce',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 185,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '35',
    sequence: '17',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'اضافات',
      en: 'Extras',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '13382',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'كومبو ارز ',
          en: 'Combo Small rice',
        },
        code: '',
        description: {
          ar: 'ارز + كلوسلو صغير + مشروب غازى',
          en: 'Rice + Small ColeSlaw + Soft Drink',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13736762-0850cdd4/Combo%20Small%20rice1733846843.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '13381',
        sequence: '1',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'كومبو بطاطس ',
          en: 'Combo Small Fries',
        },
        code: '',
        description: {
          ar: 'بطاطس صغير + كلوسلو صغير + مشروب غازى',
          en: 'Small Fries + Small ColeSlaw + Soft Drink',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13736781-271e4345/Combo%20Small%20Fries1733846899.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '13349',
        sequence: '2',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'ميكس كومبو',
          en: 'Mix Combo',
        },
        code: '',
        description: {
          ar: 'ارز + بطاطس صغير + كلوسلو صغير + مشروب غازى',
          en: 'Rice+ Small Fries + Small Coleslaw + Soft Drink ',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13736579-dc35cb3f/Make%20it%20Combo1733846166.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '13383',
        sequence: '3',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'كومبو كبير',
          en: 'Combo Large',
        },
        code: '',
        description: {
          ar: 'بطاطس حجم كبير + كلوسلو وسط + لتر كولا',
          en: 'Large Fries + Medium Coleslaw + Liter Cola',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13736826-994a90ca/Combo%20Large1733847105.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1879',
        sequence: '5',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1945',
        name: {
          ar: 'صوص ثاوزاند آيلاند',
          en: '1000 Island Sauce',
        },
        code: '',
        description: {
          ar: 'صوص ثاوزاند آيلاند',
          en: '1000 Island Sauce',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1644-e3cd9a20/1000%20Island%20Sauce1666520845.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1881',
        sequence: '8',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1947',
        name: {
          ar: 'صوص باربكيو',
          en: 'BBQ Sauce',
        },
        code: '',
        description: {
          ar: 'صوص باربكيو',
          en: 'BBQ Sauce',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1650-145db184/BBQ%20Sauce1666520859.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1883',
        sequence: '9',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1949',
        name: {
          ar: 'إضافة خبز',
          en: 'Bread',
        },
        code: '',
        description: {
          ar: 'إضافة خبز',
          en: 'Bread',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1632-d0117883/Bread1666520520.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1884',
        sequence: '10',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1950',
        name: {
          ar: 'قطعه ستريبس',
          en: 'Breast Pcs Strips',
        },
        code: '',
        description: {
          ar: 'قطعه ستريبس',
          en: 'Breast Pcs Strips',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1656-2cd70d50/Breast%20Pcs%20Strips1666520897.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1943',
        sequence: '11',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '2018',
        name: {
          ar: 'قطعه بروست',
          en: 'Broast Chk',
        },
        code: '',
        description: {
          ar: 'قطعه بروست',
          en: 'Broast Chk',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1662-97ec3682/Broast%20Chk1666520932.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1919',
        sequence: '12',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1985',
        name: {
          ar: 'قطعه صدر',
          en: 'Chest Piece',
        },
        code: '',
        description: {
          ar: 'قطعه صدر',
          en: '\nchest piece',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/2288-d46ef08a/Chest%20Piece1672049987.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1886',
        sequence: '13',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'إضافة كول سلو',
          en: 'Coleslaw',
        },
        code: '',
        description: {
          ar: 'إضافة كول سلو',
          en: 'Coleslaw',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1674-da4b46fc/Coleslaw1666520978.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '67',
                name: {
                  ar: 'كبير',
                  en: 'Large',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 60,
                },
              },
              {
                id: '68',
                name: {
                  ar: 'وسط',
                  en: 'Medium',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 40,
                },
              },
              {
                id: '69',
                name: {
                  ar: 'صغير',
                  en: 'Small',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 25,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1889',
        sequence: '16',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1955',
        name: {
          ar: 'قطعه دبوس',
          en: 'Daboos Pcs',
        },
        code: '',
        description: {
          ar: 'قطعه دبوس',
          en: 'Daboos Pcs',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/2300-f002162b/Daboos%20Pcs1672050334.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1893',
        sequence: '19',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1959',
        name: {
          ar: 'إضافة برطمان جبنة',
          en: 'Extra Cheese Jar',
        },
        code: '',
        description: {
          ar: 'إضافة برطمان جبنة',
          en: 'Extra Cheese Jar',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1692-6c1f1f6d/Extra%20Cheese%20Jar1666521112.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1901',
        sequence: '29',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1967',
        name: {
          ar: 'قطعه فخد',
          en: 'Faghd Pcs',
        },
        code: '',
        description: {
          ar: 'قطعه فخد',
          en: 'Faghd Pcs',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1728-97ec3682/Faghd%20Pcs1666521228.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1902',
        sequence: '30',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1968',
        name: {
          ar: 'صوص فاير',
          en: 'Fire Sauce',
        },
        code: '',
        description: {
          ar: 'صوص فاير',
          en: 'Fire Sauce',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1734-ee856d1e/Fire%20Sauce1666521279.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1903',
        sequence: '31',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'بطاطس محمرة',
          en: 'French Fries',
        },
        code: '',
        description: {
          ar: 'بطاطس محمرة هارت أتاك',
          en: 'Heart attack french fries ',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1740-939973dc/French%20Fries1666521308.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '12',
            name: {
              ar: 'SIZE',
              en: 'SIZE',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '74',
                name: {
                  ar: 'كبير',
                  en: 'Large',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 55,
                },
              },
              {
                id: '75',
                name: {
                  ar: 'وسط',
                  en: 'Medium',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 45,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1905',
        sequence: '32',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1971',
        name: {
          ar: 'صوص هارت اتاك',
          en: 'Heart Attack Sauce',
        },
        code: '',
        description: {
          ar: 'صوص هارت اتاك',
          en: 'Heart Attack Sauce',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1746-d44c25b1/Heart%20Attack%20Sauce1666521342.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1908',
        sequence: '34',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1974',
        name: {
          ar: 'قطعه كيلى',
          en: 'Kelly',
        },
        code: '',
        description: {
          ar: 'قطعه كيلى',
          en: 'Kelly',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1752-97ec3682/Kelly1666521605.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1913',
        sequence: '36',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1979',
        name: {
          ar: 'صوص رانش',
          en: 'Ranch Sauce',
        },
        code: '',
        description: {
          ar: 'صوص رانش',
          en: 'Ranch Sauce',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1758-a460417f/Ranch%20Sauce1666521933.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1914',
        sequence: '37',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1980',
        name: {
          ar: 'إضافة أرز',
          en: 'Rice',
        },
        code: '',
        description: {
          ar: 'إضافة أرز',
          en: 'Rice',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/1764-f733445a/Rice1666521953.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
  {
    id: '32',
    sequence: '18',
    fromTime: '',
    toTime: '',
    name: {
      ar: 'مشروبات',
      en: 'Drinks',
    },
    code: '',
    description: {
      ar: '',
      en: '',
    },
    imageUrl: '',
    items: [
      {
        id: '13348',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: '1 لتر كولا',
          en: '1 Liter  Cola',
        },
        code: '',
        description: {
          ar: '1 لتر',
          en: '1 Liter',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13724598-244010f8/1%20Liter%20%20Cola1733750310.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '7210',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'بيج كولا',
          en: 'Big Cola',
        },
        code: '',
        description: {
          ar: '200 مم',
          en: '200 ml',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/8935028-c476f28e/Big%20Cola1712582800.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '13315',
        sequence: '0',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '',
        name: {
          ar: 'فى كولا',
          en: 'V Cola',
        },
        code: '',
        description: {
          ar: '300 مم',
          en: '300 ml',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/13724609-2e06bd18/V%20Cola1733750414.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1845',
        sequence: '2',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '1845',
        name: {
          ar: 'عصير',
          en: 'Juice',
        },
        code: '',
        description: {
          ar: 'عصير',
          en: 'juice',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/3005215-b5ef8c4b/Juice1691053360.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
      {
        id: '1848',
        sequence: '8',
        fromTime: '',
        toTime: '',
        product_id: '',
        barcode: '2067',
        name: {
          ar: 'مياه معدنيه',
          en: 'Mineral Water',
        },
        code: '',
        description: {
          ar: 'مياه',
          en: 'water',
        },
        calories: 0,
        tags: [],
        uom: 'Units',
        preparationTime: 0,
        imageUrl:
          'https://heartattack-egy.getfoodpoint.com/web/image/8216788-00a93075/Mineral%20Water1709365368.0.jpg',
        taxIds: [
          {
            id: '55',
            rate: 14,
            priceIncluded: true,
          },
        ],
        outOfStock: false,
        variantCategories: [
          {
            id: '18',
            name: {
              ar: 'mineral water',
              en: 'mineral water',
            },
            description: {
              ar: '',
              en: '',
            },
            variants: [
              {
                id: '98',
                name: {
                  ar: 'small',
                  en: 'small',
                },
                code: false,
                imageUrl: '',
                outOfStock: false,
                price: {
                  currency: 'EGP',
                  amount: 15,
                },
              },
              {
                id: '99',
                name: {
                  ar: 'large',
                  en: 'large',
                },
                code: false,
                imageUrl: '',
                outOfStock: true,
                price: {
                  currency: 'EGP',
                  amount: 20,
                },
              },
            ],
          },
        ],
        modifierCategories: [],
        price: {
          currency: 'EGP',
          amount: 0,
        },
      },
    ],
    subCategories: [],
  },
];
