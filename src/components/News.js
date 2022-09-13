import React,{useState} from 'react'
import Newsitems from "./Newsitems";
// import articles from "./../articles.json"
// import {Menu} from "./data";
const News = () => {
    const Menu=[
    
        {
            "id": 3115116,
            "ownerID": 1135817,
            "userExternalID": "1135817",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.20084,
                "lng": 55.342691
            },
            "geography": {
                "lat": 25.20084,
                "lng": 55.342691
            },
            "purpose": "for-rent",
            "price": 13499,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "DUB-COV-SXYNM",
            "permitNumber": "DUB-COV-SXYNM",
            "projectNumber": null,
            "title": "Premium Furnished, Burj Khalifa & Creek Waterfront View",
            "title_l1": "شقة في ذي كوف مرسى خور دبي ذا لاجونز 2 غرف 13499 درهم - 5840787",
            "externalID": "5840787",
            "slug": "premium-furnished-burj-khalifa-creek-waterfront-view-5840787",
            "slug_l1": "premium-furnished-burj-khalifa-creek-waterfront-view-5840787",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 241,
                    "level": 2,
                    "externalID": "5539",
                    "name": "The Lagoons",
                    "name_l1": "ذا لاجونز",
                    "slug": "/dubai/the-lagoons",
                    "slug_l1": "/dubai/the-lagoons",
                    "type": "neighbourhood"
                },
                {
                    "id": 242,
                    "level": 3,
                    "externalID": "8617",
                    "name": "Dubai Creek Harbour",
                    "name_l1": "مرسى خور دبي",
                    "slug": "/dubai/the-lagoons/dubai-creek-harbour",
                    "slug_l1": "/dubai/the-lagoons/dubai-creek-harbour",
                    "type": "neighbourhood"
                },
                {
                    "id": 1281,
                    "level": 4,
                    "externalID": "10285",
                    "name": "The Cove",
                    "name_l1": "ذي كوف",
                    "slug": "/dubai/the-lagoons/dubai-creek-harbour/the-cove",
                    "slug_l1": "/dubai/the-lagoons/dubai-creek-harbour/the-cove",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1648107972,
            "updatedAt": 1662864745,
            "reactivatedAt": 1654670890.809398,
            "rooms": 2,
            "baths": 2,
            "area": 116.22170304,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 229387713,
                "externalID": "120826230",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.887004434533532,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/229387713/81bf26843de4401b96d70cb650ea4aad",
                "main": true
            },
            "photoCount": 23,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971523027007",
                "phone": "+97143827787",
                "whatsapp": "971523027007",
                "proxyMobile": "+971523079893",
                "phoneNumbers": [
                    "+97143827787"
                ],
                "mobileNumbers": [
                    "+971523027007"
                ]
            },
            "contactName": "Faisal Rehman",
            "agency": {
                "id": 29621443,
                "objectID": 29621443,
                "name": "Truebleu Vacation Homes Rental",
                "name_l1": "تأجير منازل العطلات Truebleu",
                "externalID": "11043",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "981603",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 168390390,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/168390390/3dda34107e794c5497bcd444b28a6ace"
                },
                "slug": "truebleu-vacation-homes-rental-11043",
                "slug_l1": "truebleu-vacation-homes-rental-11043",
                "tier": 4,
                "roles": [],
                "active": true,
                "createdAt": "2021-11-23T07:32:57.554833+00:00",
                "commercialNumber": null
            },
            "hash": "4256e7d",
            "keywords": [
                "دور",
                "مفروشة",
                "family",
                "مؤثثة",
                "furnished",
                "عوائل",
                "حديثة",
                "مودرن",
                "للعوائل",
                "floor",
                "modern",
                "مفروش"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1655804093.745719,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662533683.854597
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 886,
            "randBoostScore_l1": 886,
            "floorPlanID": 30209,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-41620784",
                "dldPropertySK": "dld|mea|ae|tabu-41624608"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 886,
            "indyScore_l1": 886,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                229387713,
                204720040,
                229387712,
                230194835,
                229387715,
                227642873,
                202210336,
                196286190,
                230194837,
                204720048,
                204720049,
                230194838,
                227642877,
                265209720,
                202210379,
                204720053,
                230194840,
                204720055,
                202210396,
                227642880,
                202210398,
                202210400,
                202210402
            ],
            "hidePrice": false,
            "objectID": "3115116",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "DUB-COV-SXYNM",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Premium Furnished, Burj Khalifa & Creek Waterfront View",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5840787",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Truebleu Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3515051,
            "ownerID": 1899149,
            "userExternalID": "1899149",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.115537684511,
                "lng": 55.134970843792
            },
            "geography": {
                "lat": 25.115537684511,
                "lng": 55.134970843792
            },
            "purpose": "for-rent",
            "price": 8500,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "4306-Ap-R-0002",
            "permitNumber": "7118057973",
            "projectNumber": null,
            "title": "Beautiful Studio with Sea and Dubai Eye view.",
            "title_l1": "شقة في بالم فيوز الغرب بالم فيوز نخلة جميرا 8500 درهم - 6219283",
            "externalID": "6219283",
            "slug": "beautiful-studio-with-sea-and-dubai-eye-view-6219283",
            "slug_l1": "beautiful-studio-with-sea-and-dubai-eye-view-6219283",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 14,
                    "level": 2,
                    "externalID": "5460",
                    "name": "Palm Jumeirah",
                    "name_l1": "نخلة جميرا",
                    "slug": "/dubai/palm-jumeirah",
                    "slug_l1": "/dubai/palm-jumeirah",
                    "type": "neighbourhood"
                },
                {
                    "id": 247,
                    "level": 3,
                    "externalID": "9530",
                    "name": "Palm Views",
                    "name_l1": "بالم فيوز",
                    "slug": "/dubai/palm-jumeirah/palm-views",
                    "slug_l1": "/dubai/palm-jumeirah/palm-views"
                },
                {
                    "id": 260,
                    "level": 4,
                    "externalID": "8260",
                    "name": "Palm Views West",
                    "name_l1": "بالم فيوز الغرب",
                    "slug": "/dubai/palm-jumeirah/palm-views/palm-views-west",
                    "slug_l1": "/dubai/palm-jumeirah/palm-views/palm-views-west",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1660031585,
            "updatedAt": 1662867975,
            "reactivatedAt": 1660031585,
            "rooms": 0,
            "baths": 1,
            "area": 50.91086592000001,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 268233456,
                "externalID": "129916365",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.742973770578146,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/268233456/5d1b4e198e0c4b79ac88c90c1e2c7fc0",
                "main": true
            },
            "photoCount": 12,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971555459386",
                "phone": "+971551234567",
                "whatsapp": "971561888436",
                "phoneNumbers": [
                    "+971551234567"
                ],
                "mobileNumbers": [
                    "+971555459386"
                ]
            },
            "contactName": "Tanin Holiday Homes Rental L. L. C",
            "agency": {
                "id": 29656893,
                "objectID": 29656893,
                "name": "Tanin Holiday Homes Rental L. L. C",
                "name_l1": "تانين هوليداي هومز رينتال ذ. م. م",
                "externalID": "101105",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "1074437",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 253226315,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/253226315/dc1027d245104bbe836173a9c027293b"
                },
                "slug": "tanin-holiday-homes-rental-llc-101105",
                "slug_l1": "tanin-holiday-homes-rental-llc-101105",
                "tier": 4,
                "roles": [],
                "active": true,
                "createdAt": "2022-08-04T06:40:22.489721+00:00",
                "commercialNumber": null
            },
            "hash": "566c070",
            "keywords": [
                "دور",
                "مفروشة",
                "مطبخ",
                "ارضي",
                "مول",
                "mall",
                "مؤثثة",
                "ground",
                "furnished",
                "طابق ارضي",
                "ارضية",
                "حديثة",
                "مودرن",
                "floor",
                "modern",
                "مفروش",
                "kitchen"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1660734492.55398,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1660820236.053578
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 801,
            "randBoostScore_l1": 801,
            "floorPlanID": 5666,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-18057939",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-18057973"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 801,
            "indyScore_l1": 801,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                268233456,
                268233457,
                268233458,
                268233459,
                268233460,
                268233461,
                268245504,
                268245505,
                268245506,
                268233465,
                268233466,
                268233467
            ],
            "hidePrice": false,
            "objectID": "3515051",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "4306-Ap-R-0002",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Beautiful Studio with Sea and Dubai Eye view.",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6219283",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Tanin Holiday Homes Rental L. L. C",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ground",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "طابق ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضية",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3515052,
            "ownerID": 1899149,
            "userExternalID": "1899149",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.186459,
                "lng": 55.282058
            },
            "geography": {
                "lat": 25.186459,
                "lng": 55.282058
            },
            "purpose": "for-rent",
            "price": 10000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "4306-Ap-R-0004",
            "permitNumber": "7131812962",
            "projectNumber": null,
            "title": "Luxury 1BR Majestine with Creek View All Bills Included",
            "title_l1": "شقة في داماك ميزون ماجستين الخليج التجاري 1 غرف 10000 درهم - 6219287",
            "externalID": "6219287",
            "slug": "luxury-1br-majestine-with-creek-view-all-bills-included-6219287",
            "slug_l1": "luxury-1br-majestine-with-creek-view-all-bills-included-6219287",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 54,
                    "level": 2,
                    "externalID": "5093",
                    "name": "Business Bay",
                    "name_l1": "الخليج التجاري",
                    "slug": "/dubai/business-bay",
                    "slug_l1": "/dubai/business-bay",
                    "type": "neighbourhood"
                },
                {
                    "id": 15875,
                    "level": 3,
                    "externalID": "12073",
                    "name": "Damac Maison Majestine",
                    "name_l1": "داماك ميزون ماجستين",
                    "slug": "/dubai/business-bay/damac-maison-majestine",
                    "slug_l1": "/dubai/business-bay/damac-maison-majestine",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1660031587,
            "updatedAt": 1662867987,
            "reactivatedAt": 1660031587,
            "rooms": 1,
            "baths": 2,
            "area": 96.06174336000001,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 259767350,
                "externalID": "128289310",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.574538154182306,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/259767350/9da9d4d33f7841099b5d9932b6286481",
                "main": true
            },
            "photoCount": 19,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971555459386",
                "phone": "+971551234567",
                "whatsapp": "971561888436",
                "phoneNumbers": [
                    "+971551234567"
                ],
                "mobileNumbers": [
                    "+971555459386"
                ]
            },
            "contactName": "Tanin Holiday Homes Rental L. L. C",
            "agency": {
                "id": 29656893,
                "objectID": 29656893,
                "name": "Tanin Holiday Homes Rental L. L. C",
                "name_l1": "تانين هوليداي هومز رينتال ذ. م. م",
                "externalID": "101105",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "1074437",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 253226315,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/253226315/dc1027d245104bbe836173a9c027293b"
                },
                "slug": "tanin-holiday-homes-rental-llc-101105",
                "slug_l1": "tanin-holiday-homes-rental-llc-101105",
                "tier": 4,
                "roles": [],
                "active": true,
                "createdAt": "2022-08-04T06:40:22.489721+00:00",
                "commercialNumber": null
            },
            "hash": "77618d2",
            "keywords": [
                "بلكونة",
                "guest",
                "فاخرة",
                "مودرن",
                "صغير",
                "mall",
                "صغيرة",
                "مفروشة",
                "حديثة",
                "مجلس",
                "مول",
                "مؤثثة",
                "modern",
                "ready",
                "مفروش",
                "bills included",
                "شامل الماء والكهرباء",
                "مطبخ",
                "all bills included",
                "kitchen",
                "furnished",
                "luxury",
                "balcony",
                "شامل",
                "small",
                "جاهزة"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1660718511.0645,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661148440.974705
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 796,
            "randBoostScore_l1": 796,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-16788791",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-31812962"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 796,
            "indyScore_l1": 796,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                259767350,
                253290207,
                260152509,
                253290211,
                257049878,
                253290216,
                253290220,
                253290224,
                257049886,
                253290231,
                253290235,
                253290237,
                253290241,
                253290243,
                253290245,
                253290247,
                253290249,
                260152536,
                257049901
            ],
            "hidePrice": false,
            "objectID": "3515052",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "4306-Ap-R-0004",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Luxury 1BR Majestine with Creek View All Bills Included",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6219287",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Tanin Holiday Homes Rental L. L. C",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صغير",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صغيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ready",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "bills included",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شامل الماء والكهرباء",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "all bills included",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شامل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "small",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جاهزة",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3516047,
            "ownerID": 1090133,
            "userExternalID": "1090133",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.240309107705,
                "lng": 55.253639646153
            },
            "geography": {
                "lat": 25.240309107705,
                "lng": 55.253639646153
            },
            "purpose": "for-rent",
            "price": 17998,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Ap-R-0991",
            "permitNumber": null,
            "projectNumber": null,
            "title": "Modern Furnished | Luxury Living | Family-Oriented",
            "title_l1": "شقة في برج لا كوت 4 لا كوت بورت دو لا مير لا مير جميرا 2 غرف 17998 درهم - 6220546",
            "externalID": "6220546",
            "slug": "modern-furnished-luxury-living-family-oriented-6220546",
            "slug_l1": "modern-furnished-luxury-living-family-oriented-6220546",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 23,
                    "level": 2,
                    "externalID": "5687",
                    "name": "Jumeirah",
                    "name_l1": "جميرا",
                    "slug": "/dubai/jumeirah",
                    "slug_l1": "/dubai/jumeirah",
                    "type": "neighbourhood"
                },
                {
                    "id": 3903,
                    "level": 3,
                    "externalID": "11908",
                    "name": "La Mer",
                    "name_l1": "لا مير",
                    "slug": "/dubai/jumeirah/la-mer",
                    "slug_l1": "/dubai/jumeirah/la-mer",
                    "type": "neighbourhood"
                },
                {
                    "id": 15878,
                    "level": 4,
                    "externalID": "12076",
                    "name": "Port De La Mer",
                    "name_l1": "بورت دو لا مير",
                    "slug": "/dubai/jumeirah/la-mer/port-de-la-mer",
                    "slug_l1": "/dubai/jumeirah/la-mer/port-de-la-mer",
                    "type": "neighbourhood"
                },
                {
                    "id": 17931,
                    "level": 5,
                    "externalID": "13657",
                    "name": "La Cote",
                    "name_l1": "لا كوت",
                    "slug": "/dubai/jumeirah/la-mer/port-de-la-mer/la-cote",
                    "slug_l1": "/dubai/jumeirah/la-mer/port-de-la-mer/la-cote",
                    "type": "neighbourhood"
                },
                {
                    "id": 18035,
                    "level": 6,
                    "externalID": "13743",
                    "name": "La Cote Tower 4",
                    "name_l1": "برج لا كوت 4",
                    "slug": "/dubai/jumeirah/la-mer/port-de-la-mer/la-cote/la-cote-tower-4",
                    "slug_l1": "/dubai/jumeirah/la-mer/port-de-la-mer/la-cote/la-cote-tower-4",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1660043143,
            "updatedAt": 1662867975,
            "reactivatedAt": 1660043143,
            "rooms": 2,
            "baths": 2,
            "area": 113.52751488,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 253508527,
                "externalID": "128311380",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.683766466400787,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/253508527/7bcb176b19814ddeb17740840c6072fc",
                "main": true
            },
            "photoCount": 20,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971565440231",
                "phone": "+97145572402",
                "whatsapp": "971565440231",
                "proxyPhone": "+97145128215",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971565440231"
                ]
            },
            "contactName": "Shahzad Gulfam",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "9888a1c",
            "keywords": [
                "مفروشة",
                "2 bedroom",
                "family",
                "مع بلكونة",
                "luxury",
                "حديثة",
                "مودرن",
                "للعوائل",
                "with balcony",
                "غرفتين نوم",
                "عوائل",
                "بلكونة",
                "مفروش",
                "فاخرة",
                "مؤثثة",
                "2 غرفة",
                "balcony",
                "furnished",
                "مع شرفة",
                "غرفتين",
                "modern"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1660299762.350721,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1660815282.705209
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 762,
            "randBoostScore_l1": 762,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-220425007",
                "dldPropertySK": "dld|mea|ae|tabu-220430063"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 762,
            "indyScore_l1": 762,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                253508527,
                253508523,
                261875028,
                253508529,
                259117771,
                253508533,
                257085680,
                253508538,
                262786093,
                253508541,
                256415305,
                253508544,
                262786096,
                253508548,
                269047336,
                264348830,
                257085690,
                264348831,
                262786101,
                261189596
            ],
            "hidePrice": false,
            "objectID": "3516047",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Ap-R-0991",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Modern Furnished | Luxury Living | Family-Oriented",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6220546",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مع بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "with balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مع شرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 2572068,
            "ownerID": 1046042,
            "userExternalID": "1046042",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.072222279941,
                "lng": 55.126414561542
            },
            "geography": {
                "lat": 25.072222279941,
                "lng": 55.126414561542
            },
            "purpose": "for-rent",
            "price": 15000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "ADR-24-JB",
            "permitNumber": "DUB-JUM-Q2USD",
            "projectNumber": null,
            "title": "Address JBR with Beach access",
            "title_l1": "شقة في برج جميرا جيت 1 العنوان ريزدنسز جميرا منتجع و سبا جميرا بيتش ريزيدنس 1 غرف 15000 درهم - 5304268",
            "externalID": "5304268",
            "slug": "address-jbr-with-beach-access-5304268",
            "slug_l1": "address-jbr-with-beach-access-5304268",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 87,
                    "level": 2,
                    "externalID": "5549",
                    "name": "Jumeirah Beach Residence (JBR)",
                    "name_l1": "جميرا بيتش ريزيدنس",
                    "slug": "/dubai/jumeirah-beach-residence-jbr",
                    "slug_l1": "/dubai/jumeirah-beach-residence-jbr",
                    "type": "neighbourhood"
                },
                {
                    "id": 2398,
                    "level": 3,
                    "externalID": "11395",
                    "name": "The Address Residences Jumeirah Resort and Spa",
                    "name_l1": "العنوان ريزدنسز جميرا منتجع و سبا",
                    "slug": "/dubai/jumeirah-beach-residence-jbr/the-address-residences-jumeirah-resort-and-spa",
                    "slug_l1": "/dubai/jumeirah-beach-residence-jbr/the-address-residences-jumeirah-resort-and-spa"
                },
                {
                    "id": 17772,
                    "level": 4,
                    "externalID": "13546",
                    "name": "Jumeirah Gate Tower 1",
                    "name_l1": "برج جميرا جيت 1",
                    "slug": "/dubai/jumeirah-beach-residence-jbr/the-address-residences-jumeirah-resort-and-spa/jumeirah-gate-tower-1",
                    "slug_l1": "/dubai/jumeirah-beach-residence-jbr/the-address-residences-jumeirah-resort-and-spa/jumeirah-gate-tower-1",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1627988119,
            "updatedAt": 1662462907,
            "reactivatedAt": 1643532668.294781,
            "rooms": 1,
            "baths": 2,
            "area": 59.27213952,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 253290889,
                "externalID": "124461265",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.48935882110203,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/253290889/0bd2299ee49b43e59c9ae006c9cd655f",
                "main": true
            },
            "photoCount": 27,
            "videoCount": 0,
            "panoramaCount": 1,
            "phoneNumber": {
                "mobile": "+971521956260",
                "phone": "+971553974206",
                "whatsapp": "971521956260",
                "proxyMobile": "+971524136236",
                "phoneNumbers": [
                    "+971553974206"
                ],
                "mobileNumbers": [
                    "+971521956260"
                ]
            },
            "contactName": "Solomon Shakey",
            "agency": {
                "id": 29537610,
                "objectID": 29537610,
                "name": "Carpe Diem Lifestyle Holiday Homes",
                "name_l1": "كارب ديم لايف ستايل عطلة المنازل",
                "externalID": "8956",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "801202",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 76445870,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/76445870/ed5b21ac818d4ddb8493a82512b8ed85"
                },
                "slug": "carpe-diem-lifestyle-holiday-homes-8956",
                "slug_l1": "carpe-diem-lifestyle-holiday-homes-8956",
                "tier": 3,
                "roles": [],
                "active": true,
                "createdAt": "2019-06-13T06:48:41.158630+00:00",
                "commercialNumber": null
            },
            "hash": "01cac28",
            "keywords": [
                "ايجار جديد",
                "خادمة",
                "واسعة",
                "جديدة اول ساكن",
                "مخدوم",
                "فاخرة",
                "new",
                "spacious",
                "serviced",
                "luxury",
                "جديدة",
                "كبيرة",
                "maid"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1658299778.507611,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661158520.814164
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 747,
            "randBoostScore_l1": 747,
            "floorPlanID": 4528,
            "furnishingStatus": "furnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 747,
            "indyScore_l1": 747,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                253290889,
                235215533,
                226620197,
                264175085,
                226620207,
                258935350,
                256870397,
                226638624,
                236230805,
                236230806,
                228908723,
                260296630,
                226638644,
                236230808,
                226638648,
                236230809,
                226638651,
                226620282,
                228908735,
                228908736,
                226620303,
                226620308,
                226638663,
                256870412,
                226620328,
                256870419,
                226638672
            ],
            "hidePrice": false,
            "objectID": "2572068",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "ADR-24-JB",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Address JBR with Beach access",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5304268",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Carpe Diem Lifestyle Holiday Homes",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مخدوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "serviced",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3150108,
            "ownerID": 1913198,
            "userExternalID": "1913198",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.062234309979,
                "lng": 55.202316037017
            },
            "geography": {
                "lat": 25.062234309979,
                "lng": 55.202316037017
            },
            "purpose": "for-rent",
            "price": 7999,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Ap-R-0842",
            "permitNumber": "825776",
            "projectNumber": null,
            "title": "Fully Furnished | Gymnasium | Family-Oriented",
            "title_l1": "شقة في مساكن الزبيدي الضاحية 14 قرية جميرا الدائرية 2 غرف 7999 درهم - 5874364",
            "externalID": "5874364",
            "slug": "fully-furnished-gymnasium-family-oriented-5874364",
            "slug_l1": "fully-furnished-gymnasium-family-oriented-5874364",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 3327,
                    "level": 3,
                    "externalID": "11454",
                    "name": "JVC District 14",
                    "name_l1": "الضاحية 14",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-14",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-14",
                    "type": "neighbourhood"
                },
                {
                    "id": 15838,
                    "level": 4,
                    "externalID": "12039",
                    "name": "Al Zubaidi Residence",
                    "name_l1": "مساكن الزبيدي",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/al-zubaidi-residence",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/al-zubaidi-residence",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1649324574,
            "updatedAt": 1662797159,
            "reactivatedAt": 1661517382.745259,
            "rooms": 2,
            "baths": 3,
            "area": 120.773952,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 235809095,
                "externalID": "125477727",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 8.993104295994726,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/235809095/c9f4ee99ef464192a2df53fc549cc73c",
                "main": true
            },
            "photoCount": 10,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971526217980",
                "phone": "+97145572402",
                "whatsapp": "971526217980",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971526217980"
                ]
            },
            "contactName": "Ahmad Akkilla",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "ef564af",
            "keywords": [
                "مصعد",
                "موقف سيارة",
                "heating",
                "shared",
                "parking",
                "مفروشة",
                "شيرنج",
                "غسيل",
                "مؤثثة",
                "مفروش",
                "مطبخ",
                "للعوائل",
                "عوائل",
                "elevator",
                "تدفئة",
                "laundry",
                "kitchen",
                "مشتركة",
                "family",
                "furnished"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1650793136.237465,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661840291.273395
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 744,
            "randBoostScore_l1": 744,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 744,
            "indyScore_l1": 744,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                235809095,
                253647667,
                233620321,
                235809097,
                235104920,
                266993146,
                236427994,
                245744201,
                245744202,
                245744203
            ],
            "hidePrice": false,
            "objectID": "3150108",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Ap-R-0842",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Fully Furnished | Gymnasium | Family-Oriented",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5874364",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مصعد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "heating",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "shared",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شيرنج",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "elevator",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "تدفئة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مشتركة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3412730,
            "ownerID": 1030536,
            "userExternalID": "1030536",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.058737,
                "lng": 55.199515
            },
            "geography": {
                "lat": 25.058737,
                "lng": 55.199515
            },
            "purpose": "for-rent",
            "price": 4498,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Ap-R-0965",
            "permitNumber": "825766",
            "projectNumber": null,
            "title": "Modern Furnished | Swimming Pool | Family-Oriented",
            "title_l1": "شقة في اوكسفورد بوليفارد الضاحية 15 قرية جميرا الدائرية 4498 درهم - 6122784",
            "externalID": "6122784",
            "slug": "modern-furnished-swimming-pool-family-oriented-6122784",
            "slug_l1": "modern-furnished-swimming-pool-family-oriented-6122784",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 2757,
                    "level": 3,
                    "externalID": "11455",
                    "name": "JVC District 15",
                    "name_l1": "الضاحية 15",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-15",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-15",
                    "type": "neighbourhood"
                },
                {
                    "id": 17589,
                    "level": 4,
                    "externalID": "13384",
                    "name": "Oxford Boulevard",
                    "name_l1": "اوكسفورد بوليفارد",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-15/oxford-boulevard",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-15/oxford-boulevard",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1657530565,
            "updatedAt": 1662797098,
            "reactivatedAt": 1657530565,
            "rooms": 0,
            "baths": 1,
            "area": 39.29798592,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 250424349,
                "externalID": "125922517",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 8.1690405124682,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/250424349/c7fca43fea544d9aad5e62ddc27f6564",
                "main": true
            },
            "photoCount": 11,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971562851646",
                "phone": "+97145572402",
                "whatsapp": "971562851646",
                "proxyMobile": "+971529515606",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971562851646"
                ]
            },
            "contactName": "Abdul Bari",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "3baf7e2",
            "keywords": [
                "modern",
                "موقف سيارة",
                "مفروش",
                "فاخرة",
                "مودرن",
                "family",
                "furnished",
                "مفروشة",
                "حديثة",
                "parking",
                "luxury",
                "للعوائل",
                "عوائل",
                "مؤثثة"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1657785597.247362,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661854543.991963
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 706,
            "randBoostScore_l1": 706,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 706,
            "indyScore_l1": 706,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                250424349,
                264137344,
                253636087,
                265433946,
                248308382,
                245604860,
                259806132,
                244792298,
                245604862,
                254819238,
                236319561
            ],
            "hidePrice": false,
            "objectID": "3412730",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Ap-R-0965",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Modern Furnished | Swimming Pool | Family-Oriented",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6122784",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3604222,
            "ownerID": 1845745,
            "userExternalID": "1845745",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.205335,
                "lng": 55.344219
            },
            "geography": {
                "lat": 25.205335,
                "lng": 55.344219
            },
            "purpose": "for-rent",
            "price": 14999,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Ap-R-1021",
            "permitNumber": null,
            "projectNumber": null,
            "title": "High Floor | Modern Furnished | Nearby Marina",
            "title_l1": "شقة في Creekside 18 Tower B B كريك سايد 18‬ كريك سايد 18مرسى خور دبي ذا لاجونز 2 غرف 14999 درهم - 6303430",
            "externalID": "6303430",
            "slug": "high-floor-modern-furnished-nearby-marina-6303430",
            "slug_l1": "high-floor-modern-furnished-nearby-marina-6303430",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 241,
                    "level": 2,
                    "externalID": "5539",
                    "name": "The Lagoons",
                    "name_l1": "ذا لاجونز",
                    "slug": "/dubai/the-lagoons",
                    "slug_l1": "/dubai/the-lagoons",
                    "type": "neighbourhood"
                },
                {
                    "id": 242,
                    "level": 3,
                    "externalID": "8617",
                    "name": "Dubai Creek Harbour",
                    "name_l1": "مرسى خور دبي",
                    "slug": "/dubai/the-lagoons/dubai-creek-harbour",
                    "slug_l1": "/dubai/the-lagoons/dubai-creek-harbour",
                    "type": "neighbourhood"
                },
                {
                    "id": 1297,
                    "level": 4,
                    "externalID": "9522",
                    "name": "Creekside 18",
                    "name_l1": "كريك سايد 18",
                    "slug": "/dubai/the-lagoons/dubai-creek-harbour/creekside-18",
                    "slug_l1": "/dubai/the-lagoons/dubai-creek-harbour/creekside-18"
                },
                {
                    "id": 1703,
                    "level": 5,
                    "externalID": "9168",
                    "name": "Creekside 18 Tower B",
                    "name_l1": "B كريك سايد 18‬",
                    "slug": "/dubai/the-lagoons/dubai-creek-harbour/creekside-18/creekside-18-tower-b",
                    "slug_l1": "/dubai/the-lagoons/dubai-creek-harbour/creekside-18/creekside-18-tower-b",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1662358962,
            "updatedAt": 1662796705,
            "reactivatedAt": 1662358962,
            "rooms": 2,
            "baths": 2,
            "area": 104.88753216,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 266745677,
                "externalID": "129726426",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.334897199977604,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/266745677/7649bbf88f194212a5bb6142cc596e59",
                "main": true
            },
            "photoCount": 15,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971547922720",
                "phone": "+97145572402",
                "whatsapp": "971547922720",
                "proxyMobile": "+971588011059",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971547922720",
                    "+547922720"
                ]
            },
            "contactName": "Chafiq",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "9df9a37",
            "keywords": [
                "شيرنج",
                "دور",
                "مؤثثة",
                "حديثة",
                "floor",
                "مودرن",
                "مفروشة",
                "furnished",
                "مشتركة",
                "modern",
                "shared",
                "مفروش"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662380393.936289,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662618237.419098
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 693,
            "randBoostScore_l1": 693,
            "floorPlanID": 34486,
            "furnishingStatus": "furnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 693,
            "indyScore_l1": 693,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                266745677,
                266634754,
                266634755,
                266634757,
                266634758,
                266865737,
                269047322,
                268170481,
                266946051,
                266634763,
                266634764,
                266745688,
                266946068,
                266946070,
                266634768
            ],
            "hidePrice": false,
            "objectID": "3604222",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Ap-R-1021",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "High Floor | Modern Furnished | Nearby Marina",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6303430",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "شيرنج",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مشتركة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "shared",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3515053,
            "ownerID": 1899149,
            "userExternalID": "1899149",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.117028845734,
                "lng": 55.136408507824
            },
            "geography": {
                "lat": 25.117028845734,
                "lng": 55.136408507824
            },
            "purpose": "for-rent",
            "price": 8500,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "4306-Ap-R-0003",
            "permitNumber": "7117637823",
            "projectNumber": null,
            "title": "Stylish Studio in Palm Views with Amazing Views",
            "title_l1": "شقة في بالم فيوز الشرق بالم فيوز نخلة جميرا 8500 درهم - 6219285",
            "externalID": "6219285",
            "slug": "stylish-studio-in-palm-views-with-amazing-views-6219285",
            "slug_l1": "stylish-studio-in-palm-views-with-amazing-views-6219285",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 14,
                    "level": 2,
                    "externalID": "5460",
                    "name": "Palm Jumeirah",
                    "name_l1": "نخلة جميرا",
                    "slug": "/dubai/palm-jumeirah",
                    "slug_l1": "/dubai/palm-jumeirah",
                    "type": "neighbourhood"
                },
                {
                    "id": 247,
                    "level": 3,
                    "externalID": "9530",
                    "name": "Palm Views",
                    "name_l1": "بالم فيوز",
                    "slug": "/dubai/palm-jumeirah/palm-views",
                    "slug_l1": "/dubai/palm-jumeirah/palm-views"
                },
                {
                    "id": 248,
                    "level": 4,
                    "externalID": "8259",
                    "name": "Palm Views East",
                    "name_l1": "بالم فيوز الشرق",
                    "slug": "/dubai/palm-jumeirah/palm-views/palm-views-east",
                    "slug_l1": "/dubai/palm-jumeirah/palm-views/palm-views-east",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1660031586,
            "updatedAt": 1662867976,
            "reactivatedAt": 1660031586,
            "rooms": 0,
            "baths": 1,
            "area": 47.00893824000001,
            "score": 99,
            "score_l1": 64,
            "coverPhoto": {
                "id": 268245484,
                "externalID": "129916324",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.631505689068092,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/268245484/d46347891a544890a1c2093efd16d611",
                "main": true
            },
            "photoCount": 14,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971555459386",
                "phone": "+971551234567",
                "whatsapp": "971561888436",
                "phoneNumbers": [
                    "+971551234567"
                ],
                "mobileNumbers": [
                    "+971555459386"
                ]
            },
            "contactName": "Tanin Holiday Homes Rental L. L. C",
            "agency": {
                "id": 29656893,
                "objectID": 29656893,
                "name": "Tanin Holiday Homes Rental L. L. C",
                "name_l1": "تانين هوليداي هومز رينتال ذ. م. م",
                "externalID": "101105",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "1074437",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 253226315,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/253226315/dc1027d245104bbe836173a9c027293b"
                },
                "slug": "tanin-holiday-homes-rental-llc-101105",
                "slug_l1": "tanin-holiday-homes-rental-llc-101105",
                "tier": 4,
                "roles": [],
                "active": true,
                "createdAt": "2022-08-04T06:40:22.489721+00:00",
                "commercialNumber": null
            },
            "hash": "5484a75",
            "keywords": [
                "دور",
                "مفروشة",
                "مطبخ",
                "ارضي",
                "مول",
                "mall",
                "مؤثثة",
                "ground",
                "furnished",
                "طابق ارضي",
                "ارضية",
                "حديثة",
                "مودرن",
                "floor",
                "modern",
                "مفروش",
                "kitchen"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1660734352.257817,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1660816175.195228
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 685,
            "randBoostScore_l1": 685,
            "floorPlanID": 5663,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-17637760",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-17637823"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 685,
            "indyScore_l1": 685,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                268245484,
                268245485,
                268245486,
                268233229,
                268233231,
                268245489,
                268245490,
                268245491,
                268233237,
                268233238,
                268245494,
                268245495,
                268233243,
                268233244
            ],
            "hidePrice": false,
            "objectID": "3515053",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "4306-Ap-R-0003",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Stylish Studio in Palm Views with Amazing Views",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6219285",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Tanin Holiday Homes Rental L. L. C",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ground",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "طابق ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضية",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3201633,
            "ownerID": 1912668,
            "userExternalID": "1912668",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.067073483869,
                "lng": 55.203469325513
            },
            "geography": {
                "lat": 25.067073483869,
                "lng": 55.203469325513
            },
            "purpose": "for-rent",
            "price": 7488,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "2504",
            "permitNumber": "JUMPANIIQG1",
            "projectNumber": null,
            "title": "Elegantly Decorated 1 Bedroom Apartment| Brand New | Skyline View",
            "title_l1": "شقة في ابراج بلووم المنطقة 10 قرية جميرا الدائرية 1 غرف 7488 درهم - 5920792",
            "externalID": "5920792",
            "slug": "elegantly-decorated-1-bedroom-apartment-brand-new-skyline-view-5920792",
            "slug_l1": "elegantly-decorated-1-bedroom-apartment-brand-new-skyline-view-5920792",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 2478,
                    "level": 3,
                    "externalID": "11840",
                    "name": "JVC District 10",
                    "name_l1": "المنطقة 10",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-10",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-10",
                    "type": "neighbourhood"
                },
                {
                    "id": 1547,
                    "level": 4,
                    "externalID": "9140",
                    "name": "Bloom Towers",
                    "name_l1": "ابراج بلووم",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-10/bloom-towers",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-10/bloom-towers",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1651149236,
            "updatedAt": 1662865394,
            "reactivatedAt": 1651149236,
            "rooms": 1,
            "baths": 1,
            "area": 73.76501376,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 236901797,
                "externalID": "122405049",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.80742459156214,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/236901797/f149fa83441c4eba99b4368d0c4078ce",
                "main": true
            },
            "photoCount": 29,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971581697283",
                "whatsapp": "971581697283",
                "proxyMobile": "+971527571157",
                "proxyPhone": "+97144298820",
                "mobileNumbers": [
                    "+971581697283"
                ]
            },
            "contactName": "Eman Hajji",
            "agency": {
                "id": 29589916,
                "objectID": 29589916,
                "name": "B L V D Holiday Homes Rental L. L. C",
                "name_l1": "بي ال في دي هوليداي هومز رينتال ذ",
                "externalID": "10204",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "906876",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 99895298,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/99895298/9fc421847605425f9f3227a49d9db7f9"
                },
                "slug": "b-l-v-d-holiday-homes-rental-llc-10204",
                "slug_l1": "b-l-v-d-holiday-homes-rental-llc-10204",
                "tier": 4,
                "roles": [],
                "active": true,
                "createdAt": "2021-01-03T05:56:44.120343+00:00",
                "commercialNumber": null
            },
            "hash": "2d43216",
            "keywords": [
                "ايجار جديد",
                "1 bedroom",
                "modern",
                "balcony",
                "kitchen",
                "بلكونة",
                "جديدة اول ساكن",
                "مودرن",
                "new",
                "brand new",
                "ساكن اول",
                "حديثة",
                "مطبخ",
                "اول ساكن",
                "جديدة",
                "غرفة واحدة"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1659705543.227117,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661925038.561333
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 664,
            "randBoostScore_l1": 664,
            "floorPlanID": 3518,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-101896089",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-101908957"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 664,
            "indyScore_l1": 664,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                236901797,
                234800085,
                236948583,
                237985127,
                229835870,
                210676664,
                236901800,
                229835872,
                229835873,
                232706396,
                229835875,
                229835876,
                262446867,
                240641191,
                210676673,
                229835879,
                234800091,
                236948587,
                236948588,
                234800094,
                229835884,
                229835885,
                254286621,
                229835887,
                234800096,
                229835889,
                229835890,
                229835891,
                236901807
            ],
            "hidePrice": false,
            "objectID": "3201633",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "2504",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Elegantly Decorated 1 Bedroom Apartment| Brand New | Skyline View",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5920792",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "B L V D Holiday Homes Rental L. L. C",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "1 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "brand new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ساكن اول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفة واحدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3055240,
            "ownerID": 697842,
            "userExternalID": "697842",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.050708,
                "lng": 55.213872
            },
            "geography": {
                "lat": 25.050708,
                "lng": 55.213872
            },
            "purpose": "for-rent",
            "price": 7499,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Ap-R-0779",
            "permitNumber": "825766",
            "projectNumber": null,
            "title": "Modern Furnished | Family-Oriented | JVC",
            "title_l1": "شقة في بانثيون بوليفارد الضاحية 13 قرية جميرا الدائرية 1 غرف 7499 درهم - 5785839",
            "externalID": "5785839",
            "slug": "modern-furnished-family-oriented-jvc-5785839",
            "slug_l1": "modern-furnished-family-oriented-jvc-5785839",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 1935,
                    "level": 3,
                    "externalID": "11385",
                    "name": "JVC District 13",
                    "name_l1": "الضاحية 13",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-13",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-13",
                    "type": "neighbourhood"
                },
                {
                    "id": 1967,
                    "level": 4,
                    "externalID": "11298",
                    "name": "Pantheon Boulevard",
                    "name_l1": "بانثيون بوليفارد",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-13/pantheon-boulevard",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-13/pantheon-boulevard",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1646315518,
            "updatedAt": 1662864741,
            "reactivatedAt": 1646315518,
            "rooms": 1,
            "baths": 2,
            "area": 92.81013696000001,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 235815251,
                "externalID": "125375502",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.593797795139153,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/235815251/4041c344456c40d588c6e90c4b38a0e2",
                "main": true
            },
            "photoCount": 13,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971505065919",
                "phone": "+97145572402",
                "whatsapp": "971505065919",
                "proxyMobile": "+971588034684",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971505065919"
                ]
            },
            "contactName": "Negar",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "183229e",
            "keywords": [
                "مفروشة",
                "2 bedroom",
                "family",
                "جديدة اول ساكن",
                "مصعد",
                "حديثة",
                "مودرن",
                "للعوائل",
                "ايجار جديد",
                "شيرنج",
                "ready",
                "brand new",
                "غرفتين نوم",
                "عوائل",
                "جديدة",
                "مفروش",
                "new",
                "مشتركة",
                "اول ساكن",
                "مؤثثة",
                "2 غرفة",
                "shared",
                "جاهزة",
                "موقف سيارة",
                "parking",
                "elevator",
                "ساكن اول",
                "furnished",
                "غرفتين",
                "modern"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1658735869.759808,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661859430.104035
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 664,
            "randBoostScore_l1": 664,
            "floorPlanID": 11793,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-104544945",
                "dldPropertySK": "dld|mea|ae|tabu-104551025"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 664,
            "indyScore_l1": 664,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                235815251,
                234336456,
                245199161,
                248766561,
                253119184,
                244308673,
                234336468,
                244308677,
                236625839,
                260116200,
                245199165,
                234750433,
                244308687
            ],
            "hidePrice": false,
            "objectID": "3055240",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Ap-R-0779",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Modern Furnished | Family-Oriented | JVC",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5785839",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مصعد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شيرنج",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ready",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "brand new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مشتركة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "shared",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جاهزة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "elevator",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ساكن اول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 2547026,
            "ownerID": 792123,
            "userExternalID": "792123",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.062218,
                "lng": 55.217732
            },
            "geography": {
                "lat": 25.062218,
                "lng": 55.217732
            },
            "purpose": "for-rent",
            "price": 5500,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "303",
            "permitNumber": "JUM-DIA-KJPKM",
            "projectNumber": null,
            "title": "FOR IMMEDIATE BOOKING! LUXURY FULLY FURNISHED  1BHK IN JVC",
            "title_l1": "احجز شقة جديدة غرفة وصاله في منطقة الجميرا الدائرية",
            "externalID": "5278487",
            "slug": "for-immediate-booking-luxury-fully-furnished-1bhk-in-jvc-5278487",
            "slug_l1": "for-immediate-booking-luxury-fully-furnished-1bhk-in-jvc-5278487",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 3327,
                    "level": 3,
                    "externalID": "11454",
                    "name": "JVC District 14",
                    "name_l1": "الضاحية 14",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-14",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-14",
                    "type": "neighbourhood"
                },
                {
                    "id": 676,
                    "level": 4,
                    "externalID": "8453",
                    "name": "Diamond Views",
                    "name_l1": "دايموند فيوز",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/diamond-views",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/diamond-views"
                },
                {
                    "id": 4028,
                    "level": 5,
                    "externalID": "7521",
                    "name": "Diamond Views III",
                    "name_l1": "دايموند فيوز 3",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/diamond-views/diamond-views-iii",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/diamond-views/diamond-views-iii",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1626527067,
            "updatedAt": 1662863471,
            "reactivatedAt": 1626527067,
            "rooms": 1,
            "baths": 1,
            "area": 67.72631616000001,
            "score": 100,
            "score_l1": 100,
            "coverPhoto": {
                "id": 170789642,
                "externalID": "109579097",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.285278339367572,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/170789642/1ce161680fb5454fa83d4c1d450c6031",
                "main": true
            },
            "photoCount": 18,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971589159379",
                "phone": "+97143388004",
                "whatsapp": "971589159381",
                "proxyMobile": "+971588020051",
                "phoneNumbers": [
                    "+97143388004"
                ],
                "mobileNumbers": [
                    "+971589159379"
                ]
            },
            "contactName": "Ahsan Zain Eddin",
            "agency": {
                "id": 29551757,
                "objectID": 29551757,
                "name": "Your Keys Holiday Homes Rental LLC",
                "name_l1": "يور كيز هوليداي هومز رينتال",
                "externalID": "9290",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "865561",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 83780295,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/83780295/40f206ab5d1c4021832a1ee8ad194b55"
                },
                "slug": "your-keys-holiday-homes-rental-llc-9290",
                "slug_l1": "your-keys-holiday-homes-rental-llc-9290",
                "tier": 3,
                "roles": [],
                "active": true,
                "createdAt": "2019-12-30T06:02:03.954644+00:00",
                "commercialNumber": null
            },
            "hash": "9ddab93",
            "keywords": [
                "مفروشة",
                "نظيف",
                "luxury",
                "مطبخ",
                "clean",
                "spacious",
                "كبيرة",
                "مفروش",
                "kitchen",
                "دور",
                "new",
                "مؤثثة",
                "furnished",
                "فاخرة",
                "جديدة",
                "parking",
                "واسعة",
                "floor",
                "موقف سيارة"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1643376712.131768,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1660545066.573544
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 652,
            "randBoostScore_l1": 652,
            "floorPlanID": 3271,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-15409923",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-15410415"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 652,
            "indyScore_l1": 652,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                170789642,
                170789617,
                170789667,
                170789627,
                170789646,
                170789611,
                170789663,
                170789615,
                170789607,
                170789621,
                170789624,
                170789629,
                170789634,
                170789639,
                170789658,
                170789660,
                170789669,
                170789671
            ],
            "hidePrice": false,
            "objectID": "2547026",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "303",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "FOR IMMEDIATE BOOKING! LUXURY FULLY FURNISHED  1BHK IN JVC",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5278487",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Your Keys Holiday Homes Rental LLC",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "نظيف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "clean",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 2817196,
            "ownerID": 792123,
            "userExternalID": "792123",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.062218,
                "lng": 55.217732
            },
            "geography": {
                "lat": 25.062218,
                "lng": 55.217732
            },
            "purpose": "for-rent",
            "price": 5800,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "319C",
            "permitNumber": "JUM- DI-MOQTX",
            "projectNumber": null,
            "title": "EXQUISITE LARGE FULLY FURNISHED 1BR WITH POOL VIEW IN JVC!",
            "title_l1": "EXQUISITE LARGE FULLY FURNISHED 1BR WITH POOL VIEW IN JVC!",
            "externalID": "5553799",
            "slug": "exquisite-large-fully-furnished-1br-with-pool-view-in-jvc-5553799",
            "slug_l1": "exquisite-large-fully-furnished-1br-with-pool-view-in-jvc-5553799",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 3327,
                    "level": 3,
                    "externalID": "11454",
                    "name": "JVC District 14",
                    "name_l1": "الضاحية 14",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-14",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-14",
                    "type": "neighbourhood"
                },
                {
                    "id": 676,
                    "level": 4,
                    "externalID": "8453",
                    "name": "Diamond Views",
                    "name_l1": "دايموند فيوز",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/diamond-views",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/diamond-views"
                },
                {
                    "id": 4028,
                    "level": 5,
                    "externalID": "7521",
                    "name": "Diamond Views III",
                    "name_l1": "دايموند فيوز 3",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/diamond-views/diamond-views-iii",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/diamond-views/diamond-views-iii",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1638089957,
            "updatedAt": 1662864106,
            "reactivatedAt": 1638089957,
            "rooms": 1,
            "baths": 1,
            "area": 60.66568512000001,
            "score": 100,
            "score_l1": 100,
            "coverPhoto": {
                "id": 171239276,
                "externalID": "114795021",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.758865552506222,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/171239276/186ae200a12b4dcea8fd927de4e280f5",
                "main": true
            },
            "photoCount": 21,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971589159379",
                "phone": "+97143388004",
                "whatsapp": "971589159381",
                "proxyMobile": "+971588020051",
                "phoneNumbers": [
                    "+97143388004"
                ],
                "mobileNumbers": [
                    "+971589159379"
                ]
            },
            "contactName": "Ahsan Zain Eddin",
            "agency": {
                "id": 29551757,
                "objectID": 29551757,
                "name": "Your Keys Holiday Homes Rental LLC",
                "name_l1": "يور كيز هوليداي هومز رينتال",
                "externalID": "9290",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "865561",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 83780295,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/83780295/40f206ab5d1c4021832a1ee8ad194b55"
                },
                "slug": "your-keys-holiday-homes-rental-llc-9290",
                "slug_l1": "your-keys-holiday-homes-rental-llc-9290",
                "tier": 3,
                "roles": [],
                "active": true,
                "createdAt": "2019-12-30T06:02:03.954644+00:00",
                "commercialNumber": null
            },
            "hash": "8af8cdb",
            "keywords": [
                "موقف سيارة",
                "دور",
                "floor",
                "كبيرة",
                "parking",
                "شامل ماء وكهرباء",
                "مفروشة",
                "spacious",
                "نظيف",
                "مؤثثة",
                "clean",
                "واسعة",
                "مفروش",
                "شامل الماء والكهرباء",
                "with pool",
                "مطبخ",
                "مع مسبح",
                "kitchen",
                "furnished",
                "including all bills"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1638255075.175382,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662640013.646858
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 634,
            "randBoostScore_l1": 634,
            "floorPlanID": 3268,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-15409923",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-15410607"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 634,
            "indyScore_l1": 634,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                171239276,
                215978463,
                174262721,
                171630704,
                176941745,
                171239270,
                171239279,
                171761006,
                171630707,
                171239286,
                175251131,
                173148617,
                184377600,
                175251134,
                171239292,
                171630712,
                173148620,
                171630714,
                173148621,
                241344927,
                173148623
            ],
            "hidePrice": false,
            "objectID": "2817196",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "319C",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "EXQUISITE LARGE FULLY FURNISHED 1BR WITH POOL VIEW IN JVC!",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5553799",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Your Keys Holiday Homes Rental LLC",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شامل ماء وكهرباء",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "نظيف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "clean",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شامل الماء والكهرباء",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "with pool",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مع مسبح",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "including all bills",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 2847466,
            "ownerID": 1055160,
            "userExternalID": "1055160",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.124281,
                "lng": 55.129256
            },
            "geography": {
                "lat": 25.124281,
                "lng": 55.129256
            },
            "purpose": "for-rent",
            "price": 225000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "F19M",
            "permitNumber": "PALVIL7JUNG",
            "projectNumber": null,
            "title": "Sea view signature 7 BDR Villa in Palm Jumeirah",
            "title_l1": "فیلا في فلل سجنتشر سعفة F فلل سجنتشر نخلة جميرا نخلة جميرا 7 غرف 225000 درهم - 5584340",
            "externalID": "5584340",
            "slug": "sea-view-signature-7-bdr-villa-in-palm-jumeirah-5584340",
            "slug_l1": "sea-view-signature-7-bdr-villa-in-palm-jumeirah-5584340",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 14,
                    "level": 2,
                    "externalID": "5460",
                    "name": "Palm Jumeirah",
                    "name_l1": "نخلة جميرا",
                    "slug": "/dubai/palm-jumeirah",
                    "slug_l1": "/dubai/palm-jumeirah",
                    "type": "neighbourhood"
                },
                {
                    "id": 234,
                    "level": 3,
                    "externalID": "5467",
                    "name": "Signature Villas Palm Jumeirah",
                    "name_l1": "فلل سجنتشر نخلة جميرا",
                    "slug": "/dubai/palm-jumeirah/signature-villas-palm-jumeirah",
                    "slug_l1": "/dubai/palm-jumeirah/signature-villas-palm-jumeirah"
                },
                {
                    "id": 3788,
                    "level": 4,
                    "externalID": "11229",
                    "name": "Signature Villas Frond F",
                    "name_l1": "فلل سجنتشر سعفة F",
                    "slug": "/dubai/palm-jumeirah/signature-villas-palm-jumeirah/signature-villas-frond-f",
                    "slug_l1": "/dubai/palm-jumeirah/signature-villas-palm-jumeirah/signature-villas-frond-f",
                    "type": "neighbourhood"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 5,
                    "level": 1,
                    "externalID": "3",
                    "name": "Villas",
                    "name_l1": "فلل",
                    "slug": "villas",
                    "slug_l1": "villas",
                    "nameSingular": "Villa",
                    "nameSingular_l1": "فیلا"
                }
            ],
            "createdAt": 1639390334,
            "updatedAt": 1662864118,
            "reactivatedAt": 1654238710.008254,
            "rooms": 7,
            "baths": 8,
            "area": 1243.9717056,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 173824375,
                "externalID": "115433308",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.930717296014196,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/173824375/74c145eccb334fa4aab068a8924ae25e",
                "main": true
            },
            "coverVideo": {
                "externalID": 185769,
                "title": null,
                "host": "youtube",
                "url": "https://youtu.be/OCoRRKNqdVM",
                "orderIndex": 0
            },
            "photoCount": 22,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971505635253",
                "phone": "+9714673829",
                "whatsapp": "971505635253",
                "proxyMobile": "+971522384684",
                "phoneNumbers": [
                    "+9714673829"
                ],
                "mobileNumbers": [
                    "+971505635253"
                ]
            },
            "contactName": "Luxury Stays Vacation Homes Rental LLC",
            "agency": {
                "id": 29592792,
                "objectID": 29592792,
                "name": "Luxury Stays Vacation Home Rentals LLC",
                "name_l1": "إقامات فاخرة للعطلات للإيجار",
                "externalID": "10294",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "930358",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 102209242,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/102209242/92a58aa978cd4fb1bb5bd2c940366c28"
                },
                "slug": "luxury-stays-vacation-home-rentals-llc-10294",
                "slug_l1": "luxury-stays-vacation-home-rentals-llc-10294",
                "tier": 3,
                "roles": [],
                "active": true,
                "createdAt": "2021-02-10T12:09:21.507114+00:00",
                "commercialNumber": null
            },
            "hash": "54a07ff",
            "keywords": [
                "مفروشة",
                "sea view",
                "مطبخ",
                "غسيل",
                "مجلس",
                "luxury",
                "maid",
                "kitchen",
                "laundry",
                "مستقلة",
                "خادمة",
                "نظيف",
                "حديقة",
                "مفروش",
                "clean",
                "فاخرة",
                "driver",
                "مؤثثة",
                "furnished",
                "guest",
                "independent",
                "سائق",
                "garden",
                "اطلالة على البحر"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1642090551.833003,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661403943.126534
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 627,
            "randBoostScore_l1": 627,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldPropertySK": "dld|mea|ae|tabu+ejari-5309472"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 627,
            "indyScore_l1": 627,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                173824375,
                173824374,
                179570716,
                183601583,
                187914899,
                173824379,
                174265942,
                173824381,
                174265944,
                179558557,
                174265949,
                173824385,
                173824386,
                174265952,
                179558558,
                187914900,
                174265971,
                183601586,
                174265980,
                181535049,
                173824397,
                173824399
            ],
            "hidePrice": false,
            "objectID": "2847466",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "F19M",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Sea view signature 7 BDR Villa in Palm Jumeirah",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5584340",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Luxury Stays Vacation Home Rentals LLC",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "sea view",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مستقلة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "نظيف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديقة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "clean",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "driver",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "independent",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "سائق",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "garden",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اطلالة على البحر",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3055208,
            "ownerID": 697842,
            "userExternalID": "697842",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.050708,
                "lng": 55.213872
            },
            "geography": {
                "lat": 25.050708,
                "lng": 55.213872
            },
            "purpose": "for-rent",
            "price": 8499,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Ap-R-0778",
            "permitNumber": "825766",
            "projectNumber": null,
            "title": "Modern Furnished | Family-Oriented | JVC",
            "title_l1": "شقة في بانثيون بوليفارد الضاحية 13 قرية جميرا الدائرية 2 غرف 8499 درهم - 5785790",
            "externalID": "5785790",
            "slug": "modern-furnished-family-oriented-jvc-5785790",
            "slug_l1": "modern-furnished-family-oriented-jvc-5785790",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 1935,
                    "level": 3,
                    "externalID": "11385",
                    "name": "JVC District 13",
                    "name_l1": "الضاحية 13",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-13",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-13",
                    "type": "neighbourhood"
                },
                {
                    "id": 1967,
                    "level": 4,
                    "externalID": "11298",
                    "name": "Pantheon Boulevard",
                    "name_l1": "بانثيون بوليفارد",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-13/pantheon-boulevard",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-13/pantheon-boulevard",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1646315055,
            "updatedAt": 1662864741,
            "reactivatedAt": 1649935596.674666,
            "rooms": 2,
            "baths": 2,
            "area": 89.46562752000001,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 237343873,
                "externalID": "125478234",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.6321659791653,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/237343873/418bdc9e4766428fb49d4560d466b5fc",
                "main": true
            },
            "photoCount": 13,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971505065919",
                "phone": "+97145572402",
                "whatsapp": "971505065919",
                "proxyMobile": "+971588034684",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971505065919"
                ]
            },
            "contactName": "Negar",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "8f497c1",
            "keywords": [
                "2 bedroom",
                "مصعد",
                "موقف سيارة",
                "دور",
                "floor",
                "مودرن",
                "2 غرفة",
                "new",
                "غرفتين",
                "ساكن اول",
                "مفروشة",
                "حديثة",
                "parking",
                "ترس",
                "جديدة",
                "مؤثثة",
                "ايجار جديد",
                "modern",
                "مفروش",
                "جديدة اول ساكن",
                "brand new",
                "مطبخ",
                "للعوائل",
                "عوائل",
                "elevator",
                "terrace",
                "kitchen",
                "غرفتين نوم",
                "family",
                "furnished",
                "اول ساكن"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1658735602.616586,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661859592.782
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 599,
            "randBoostScore_l1": 599,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-104544945",
                "dldPropertySK": "dld|mea|ae|tabu-104552153"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 599,
            "indyScore_l1": 599,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                237343873,
                247003445,
                235815247,
                250008618,
                257713907,
                263372044,
                235815259,
                250008621,
                239881072,
                247886586,
                245086741,
                260116202,
                235815275
            ],
            "hidePrice": false,
            "objectID": "3055208",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Ap-R-0778",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Modern Furnished | Family-Oriented | JVC",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5785790",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "2 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مصعد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ساكن اول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ترس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "brand new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "elevator",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "terrace",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3135059,
            "ownerID": 1171362,
            "userExternalID": "1171362",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.068527,
                "lng": 55.128906
            },
            "geography": {
                "lat": 25.068527,
                "lng": 55.128906
            },
            "purpose": "for-rent",
            "price": 10000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "S107",
            "permitNumber": "954129",
            "projectNumber": null,
            "title": "◑Beautiful 1 Bed Apt◑Fast Wifi ◑Parking ◑",
            "title_l1": "شقة في برج استوديو ون دبي مارينا 1 غرف 10000 درهم - 5859853",
            "externalID": "5859853",
            "slug": "beautiful-1-bed-apt-fast-wifi-parking-5859853",
            "slug_l1": "beautiful-1-bed-apt-fast-wifi-parking-5859853",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 36,
                    "level": 2,
                    "externalID": "5003",
                    "name": "Dubai Marina",
                    "name_l1": "دبي مارينا",
                    "slug": "/dubai/dubai-marina",
                    "slug_l1": "/dubai/dubai-marina",
                    "type": "neighbourhood"
                },
                {
                    "id": 113,
                    "level": 3,
                    "externalID": "8891",
                    "name": "Studio One Tower",
                    "name_l1": "برج استوديو ون",
                    "slug": "/dubai/dubai-marina/studio-one-tower-",
                    "slug_l1": "/dubai/dubai-marina/studio-one-tower-",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1648747789,
            "updatedAt": 1662865074,
            "reactivatedAt": 1660939611.994931,
            "rooms": 1,
            "baths": 2,
            "area": 66.33277056,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 263974315,
                "externalID": "121203612",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.56578681821918,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/263974315/464dd93c5db14f868c390586e0d6a3b4",
                "main": true
            },
            "photoCount": 7,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971554247963",
                "whatsapp": "971554247963",
                "proxyMobile": "+971521860516",
                "mobileNumbers": [
                    "+971554247963"
                ]
            },
            "contactName": "Luke International Rental Homes",
            "agency": {
                "id": 29617052,
                "objectID": 29617052,
                "name": "Luke International Rental Homes L. L. C.",
                "name_l1": "لوك انترناشيونال رينتال هومز ذ.",
                "externalID": "10898",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "954129",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 156097530,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/156097530/1e8de505bfa84319bfc0b21312de7615"
                },
                "slug": "luke-international-rental-homes-llc-10898",
                "slug_l1": "luke-international-rental-homes-llc-10898",
                "tier": 4,
                "roles": [],
                "active": true,
                "createdAt": "2021-10-10T13:01:33.604591+00:00",
                "commercialNumber": null
            },
            "hash": "6bdce6f",
            "keywords": [
                "كبيرة",
                "parking",
                "موقف سيارة",
                "serviced",
                "مجلس",
                "guest",
                "نظيف",
                "واسعة",
                "kitchen",
                "balcony",
                "مطبخ",
                "عوائل",
                "spacious",
                "clean",
                "مخدوم",
                "families",
                "بلكونة"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1651309670.461693,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662035320.519856
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 596,
            "randBoostScore_l1": 596,
            "floorPlanID": 1867,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-35712710",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-35714184"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 596,
            "indyScore_l1": 596,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                263974315,
                263974316,
                198530500,
                198530502,
                265200176,
                234232508,
                209509409
            ],
            "hidePrice": false,
            "objectID": "3135059",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "S107",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "◑Beautiful 1 Bed Apt◑Fast Wifi ◑Parking ◑",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5859853",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Luke International Rental Homes L. L. C.",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "serviced",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "نظيف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "clean",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مخدوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "families",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3198534,
            "ownerID": 1030536,
            "userExternalID": "1030536",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.00402253951,
                "lng": 55.286084812296
            },
            "geography": {
                "lat": 25.00402253951,
                "lng": 55.286084812296
            },
            "purpose": "for-rent",
            "price": 5499,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Ap-R-0872",
            "permitNumber": "825766",
            "projectNumber": null,
            "title": "Fully Furnished | Fitness Club | Family-Oriented",
            "title_l1": "شقة في شقق أونا تاون سكوير 1 غرف 5499 درهم - 5917714",
            "externalID": "5917714",
            "slug": "fully-furnished-fitness-club-family-oriented-5917714",
            "slug_l1": "fully-furnished-fitness-club-family-oriented-5917714",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 386,
                    "level": 2,
                    "externalID": "8539",
                    "name": "Town Square",
                    "name_l1": "تاون سكوير",
                    "slug": "/dubai/town-square",
                    "slug_l1": "/dubai/town-square",
                    "type": "neighbourhood"
                },
                {
                    "id": 3205,
                    "level": 3,
                    "externalID": "11816",
                    "name": "UNA Apartments",
                    "name_l1": "شقق أونا",
                    "slug": "/dubai/town-square/una-apartments",
                    "slug_l1": "/dubai/town-square/una-apartments",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1651050852,
            "updatedAt": 1662865403,
            "reactivatedAt": 1651050852,
            "rooms": 1,
            "baths": 1,
            "area": 44.5934592,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 267804704,
                "externalID": "129862764",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.090652017441812,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/267804704/76474393ee1b44f7bb664d0c88bd7eaa",
                "main": true
            },
            "coverVideo": {
                "externalID": 376965,
                "title": null,
                "host": "youtube",
                "url": "https://youtube.com/shorts/9rkOoYLXKb8",
                "orderIndex": 0
            },
            "photoCount": 15,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971562851646",
                "phone": "+97145572402",
                "whatsapp": "971562851646",
                "proxyMobile": "+971529515606",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971562851646"
                ]
            },
            "contactName": "Abdul Bari",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "48f1eae",
            "keywords": [
                "مفروشة",
                "family",
                "مول",
                "جديدة اول ساكن",
                "مطار",
                "مؤثثة",
                "furnished",
                "عوائل",
                "حديثة",
                "مودرن",
                "للعوائل",
                "ايجار جديد",
                "airport",
                "modern",
                "جديدة",
                "مفروش",
                "new",
                "mall"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1651838587.047956,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662613683.200003
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 585,
            "randBoostScore_l1": 585,
            "floorPlanID": 22658,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-147789979",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-147822870"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 585,
            "indyScore_l1": 585,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                267804704,
                267804705,
                267804706,
                267804708,
                267804710,
                267804711,
                267804712,
                267804713,
                267804714,
                267804715,
                267804716,
                269047353,
                267804718,
                269047355,
                267804720
            ],
            "hidePrice": false,
            "objectID": "3198534",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Ap-R-0872",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Fully Furnished | Fitness Club | Family-Oriented",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5917714",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "airport",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3399256,
            "ownerID": 1030536,
            "userExternalID": "1030536",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.028531206109,
                "lng": 55.258403611384
            },
            "geography": {
                "lat": 25.028531206109,
                "lng": 55.258403611384
            },
            "purpose": "for-rent",
            "price": 17999,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Vl-R-0962",
            "permitNumber": "825766",
            "projectNumber": null,
            "title": "Modern Furnished | Maids Room | Family-Oriented",
            "title_l1": "فیلا في فلل ستايل فندي فيلات فينيتو داماك هيلز 3 غرف 17999 درهم - 6111564",
            "externalID": "6111564",
            "slug": "modern-furnished-maids-room-family-oriented-6111564",
            "slug_l1": "modern-furnished-maids-room-family-oriented-6111564",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 279,
                    "level": 2,
                    "externalID": "9026",
                    "name": "DAMAC Hills",
                    "name_l1": "داماك هيلز",
                    "slug": "/dubai/damac-hills",
                    "slug_l1": "/dubai/damac-hills",
                    "type": "neighbourhood"
                },
                {
                    "id": 1957,
                    "level": 3,
                    "externalID": "11427",
                    "name": "Veneto",
                    "name_l1": "فيلات فينيتو",
                    "slug": "/dubai/damac-hills/veneto",
                    "slug_l1": "/dubai/damac-hills/veneto",
                    "type": "neighbourhood"
                },
                {
                    "id": 1958,
                    "level": 4,
                    "externalID": "11428",
                    "name": "Fendi Styled Villas",
                    "name_l1": "فلل ستايل فندي",
                    "slug": "/dubai/damac-hills/veneto/fendi-styled-villas",
                    "slug_l1": "/dubai/damac-hills/veneto/fendi-styled-villas",
                    "type": "neighbourhood"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 5,
                    "level": 1,
                    "externalID": "3",
                    "name": "Villas",
                    "name_l1": "فلل",
                    "slug": "villas",
                    "slug_l1": "villas",
                    "nameSingular": "Villa",
                    "nameSingular_l1": "فیلا"
                }
            ],
            "createdAt": 1657017495,
            "updatedAt": 1662867024,
            "reactivatedAt": 1657017495,
            "rooms": 3,
            "baths": 4,
            "area": 135.82424448,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 244727361,
                "externalID": "125704910",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.147410587924242,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/244727361/e8da0cc3ac84407985c68570b32ecbfa",
                "main": true
            },
            "photoCount": 24,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971562851646",
                "phone": "+97145572402",
                "whatsapp": "971562851646",
                "proxyMobile": "+971529515606",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971562851646"
                ]
            },
            "contactName": "Abdul Bari",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "067bea2",
            "keywords": [
                "مفروشة",
                "غسيل",
                "family",
                "3 bedroom",
                "luxury",
                "حديثة",
                "مودرن",
                "للعوائل",
                "maid",
                "laundry",
                "خادمة",
                "عوائل",
                "بلكونة",
                "مفروش",
                "فاخرة",
                "مؤثثة",
                "balcony",
                "furnished",
                "modern",
                "3 غرف"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1657785719.834711,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661925571.05538
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 581,
            "randBoostScore_l1": 581,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldPropertySK": "dld|mea|ae|tabu+ejari-383296383"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 581,
            "indyScore_l1": 581,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                244727361,
                244727365,
                239189663,
                269047339,
                264246248,
                252838129,
                239868299,
                234724183,
                265902458,
                254247141,
                255486125,
                247038532,
                249005870,
                248308600,
                265902459,
                252838177,
                236968140,
                264246252,
                236416297,
                249005874,
                245743200,
                257827384,
                236021036,
                252838201
            ],
            "hidePrice": false,
            "objectID": "3399256",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Vl-R-0962",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Modern Furnished | Maids Room | Family-Oriented",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6111564",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3120190,
            "ownerID": 713291,
            "userExternalID": "713291",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.067073483869,
                "lng": 55.203469325513
            },
            "geography": {
                "lat": 25.067073483869,
                "lng": 55.203469325513
            },
            "purpose": "for-rent",
            "price": 7488,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "2804",
            "permitNumber": "JUMPANURZJC",
            "projectNumber": null,
            "title": "Gorgeous 1 Bedroom Apartment | Brand New| City view",
            "title_l1": "شقة رائعة من غرفة نوم واحدة | علامة تجارية جديدة | اطلالة المدينة",
            "externalID": "5845896",
            "slug": "gorgeous-1-bedroom-apartment-brand-new-city-view-5845896",
            "slug_l1": "gorgeous-1-bedroom-apartment-brand-new-city-view-5845896",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 2478,
                    "level": 3,
                    "externalID": "11840",
                    "name": "JVC District 10",
                    "name_l1": "المنطقة 10",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-10",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-10",
                    "type": "neighbourhood"
                },
                {
                    "id": 1547,
                    "level": 4,
                    "externalID": "9140",
                    "name": "Bloom Towers",
                    "name_l1": "ابراج بلووم",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-10/bloom-towers",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-10/bloom-towers",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1648281717,
            "updatedAt": 1662865085,
            "reactivatedAt": 1651057800.339148,
            "rooms": 1,
            "baths": 1,
            "area": 73.76501376,
            "score": 98,
            "score_l1": 98,
            "coverPhoto": {
                "id": 199652904,
                "externalID": "121126515",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.745662002603378,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/199652904/5bee51226f324a7dacaf55e0843cdc5e",
                "main": true
            },
            "photoCount": 34,
            "videoCount": 0,
            "panoramaCount": 1,
            "phoneNumber": {
                "mobile": "+971521838437",
                "phone": "+97142779821",
                "whatsapp": "971521838437",
                "proxyMobile": "+971521303874",
                "proxyPhone": "+97144298820",
                "phoneNumbers": [
                    "+97142779821"
                ],
                "mobileNumbers": [
                    "+971521838437"
                ]
            },
            "contactName": "Rami Mrassi",
            "agency": {
                "id": 29589916,
                "objectID": 29589916,
                "name": "B L V D Holiday Homes Rental L. L. C",
                "name_l1": "بي ال في دي هوليداي هومز رينتال ذ",
                "externalID": "10204",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "906876",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 99895298,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/99895298/9fc421847605425f9f3227a49d9db7f9"
                },
                "slug": "b-l-v-d-holiday-homes-rental-llc-10204",
                "slug_l1": "b-l-v-d-holiday-homes-rental-llc-10204",
                "tier": 4,
                "roles": [],
                "active": true,
                "createdAt": "2021-01-03T05:56:44.120343+00:00",
                "commercialNumber": null
            },
            "hash": "b8b45a9",
            "keywords": [
                "مطبخ",
                "جديدة اول ساكن",
                "حديثة",
                "مودرن",
                "ايجار جديد",
                "واسعة",
                "1 bedroom",
                "kitchen",
                "brand new",
                "بلكونة",
                "جديدة",
                "new",
                "غرفة واحدة",
                "اول ساكن",
                "صالة",
                "spacious",
                "balcony",
                "lounge",
                "ساكن اول",
                "modern"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1659784434.676738,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661755627.281197
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 556,
            "randBoostScore_l1": 556,
            "floorPlanID": 33303,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-101896089",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-101910649"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 556,
            "indyScore_l1": 556,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                199652904,
                207645474,
                210676681,
                207661765,
                229835896,
                206640582,
                207645479,
                229835897,
                234799913,
                206640586,
                227795890,
                206640588,
                227795892,
                227795894,
                206640591,
                227795896,
                207661774,
                229835900,
                227795901,
                199652974,
                210676700,
                199652978,
                227795903,
                206640609,
                206640610,
                210676702,
                227795905,
                206640613,
                254286617,
                227795908,
                206640616,
                199652990,
                258646551,
                248840227
            ],
            "hidePrice": false,
            "objectID": "3120190",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "2804",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Gorgeous 1 Bedroom Apartment | Brand New| City view",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5845896",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "B L V D Holiday Homes Rental L. L. C",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "1 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "brand new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفة واحدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صالة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "lounge",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ساكن اول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3131203,
            "ownerID": 1090133,
            "userExternalID": "1090133",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.052848,
                "lng": 55.206056
            },
            "geography": {
                "lat": 25.052848,
                "lng": 55.206056
            },
            "purpose": "for-rent",
            "price": 5799,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Ap-R-0831",
            "permitNumber": "825766",
            "projectNumber": null,
            "title": "Modern Furnished | Gymnasium | Family-Oriented",
            "title_l1": "شقة في مساكن الزين الضاحية 14 قرية جميرا الدائرية 1 غرف 5799 درهم - 5854870",
            "externalID": "5854870",
            "slug": "modern-furnished-gymnasium-family-oriented-5854870",
            "slug_l1": "modern-furnished-gymnasium-family-oriented-5854870",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 3327,
                    "level": 3,
                    "externalID": "11454",
                    "name": "JVC District 14",
                    "name_l1": "الضاحية 14",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-14",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-14",
                    "type": "neighbourhood"
                },
                {
                    "id": 17006,
                    "level": 4,
                    "externalID": "12943",
                    "name": "Al Zain Residence",
                    "name_l1": "مساكن الزين",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/al-zain-residence",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-14/al-zain-residence",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1648627247,
            "updatedAt": 1662865074,
            "reactivatedAt": 1648627247,
            "rooms": 1,
            "baths": 2,
            "area": 92.90304,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 255676037,
                "externalID": "125370168",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.342392048312604,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/255676037/99ceb37ebbdd4be587270a1db25e9b2e",
                "main": true
            },
            "photoCount": 17,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971565440231",
                "phone": "+97145572402",
                "whatsapp": "971565440231",
                "proxyPhone": "+97145128215",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971565440231"
                ]
            },
            "contactName": "Shahzad Gulfam",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "143aa28",
            "keywords": [
                "مصعد",
                "موقف سيارة",
                "مودرن",
                "heating",
                "shared",
                "new",
                "parking",
                "ساكن اول",
                "مفروشة",
                "حديثة",
                "شيرنج",
                "جديدة",
                "غسيل",
                "مؤثثة",
                "ايجار جديد",
                "modern",
                "مفروش",
                "جديدة اول ساكن",
                "brand new",
                "مطبخ",
                "للعوائل",
                "عوائل",
                "elevator",
                "تدفئة",
                "laundry",
                "kitchen",
                "مشتركة",
                "family",
                "furnished",
                "اول ساكن"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1655992333.381267,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1660633185.586242
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 554,
            "randBoostScore_l1": 554,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldPropertySK": "dld|mea|ae|tabu-116062"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 554,
            "indyScore_l1": 554,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                255676037,
                255676038,
                235808911,
                234954151,
                235808913,
                261189624,
                239034664,
                239034665,
                239546892,
                233620161,
                246992833,
                234269857,
                265906430,
                258408910,
                233130314,
                244308555,
                234269861
            ],
            "hidePrice": false,
            "objectID": "3131203",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Ap-R-0831",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Modern Furnished | Gymnasium | Family-Oriented",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5854870",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مصعد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "heating",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "shared",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ساكن اول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شيرنج",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "brand new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "elevator",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "تدفئة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مشتركة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 2587434,
            "ownerID": 1040765,
            "userExternalID": "1040765",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.042657,
                "lng": 55.221357
            },
            "geography": {
                "lat": 25.042657,
                "lng": 55.221357
            },
            "purpose": "for-rent",
            "price": 6000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "BVH-1BR-NAJ",
            "permitNumber": "DUBNAJD7IRH",
            "projectNumber": null,
            "title": "Fully Furnished Spacious 1BR apartment with all bills included",
            "title_l1": "شقة فسيحة مفروشة بالكامل من غرفة نوم واحدة مع جميع الفواتير مشمولة",
            "externalID": "5319734",
            "slug": "fully-furnished-spacious-1br-apartment-with-all-bills-included-5319734",
            "slug_l1": "fully-furnished-spacious-1br-apartment-with-all-bills-included-5319734",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 67,
                    "level": 2,
                    "externalID": "5274",
                    "name": "Dubai Sports City",
                    "name_l1": "مدينة دبي الرياضية",
                    "slug": "/dubai/dubai-sports-city",
                    "slug_l1": "/dubai/dubai-sports-city",
                    "type": "neighbourhood"
                },
                {
                    "id": 17004,
                    "level": 3,
                    "externalID": "12941",
                    "name": "Najma Tower A",
                    "name_l1": "برج نجمة A",
                    "slug": "/dubai/dubai-sports-city/najma-tower-a",
                    "slug_l1": "/dubai/dubai-sports-city/najma-tower-a",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1628614508,
            "updatedAt": 1661761343,
            "reactivatedAt": 1628614508,
            "rooms": 1,
            "baths": 2,
            "area": 74.322432,
            "score": 100,
            "score_l1": 100,
            "coverPhoto": {
                "id": 253638852,
                "externalID": "125373554",
                "title": "Living Room",
                "orderIndex": 0,
                "nimaScore": 9.4990172013662,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/253638852/d40a333186e142618a82ef935290bb98",
                "main": true
            },
            "photoCount": 12,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971528717152",
                "phone": "+97142434366",
                "whatsapp": "971528717152",
                "phoneNumbers": [
                    "+97142434366"
                ],
                "mobileNumbers": [
                    "+971528717152"
                ]
            },
            "contactName": "Bhavan Vacation Homes LLC",
            "agency": {
                "id": 29600799,
                "objectID": 29600799,
                "name": "Bhavan Vacation Homes L. L. C",
                "name_l1": "بهافن لبيوت العطلت ش. ذ. م. م",
                "externalID": "10540",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "949192",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 106017926,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/106017926/25d52a60bdd04b70b70e90a17690bdcd"
                },
                "slug": "bhavan-vacation-homes-llc-10540",
                "slug_l1": "bhavan-vacation-homes-llc-10540",
                "tier": 3,
                "roles": [],
                "active": true,
                "createdAt": "2021-05-30T07:53:31.065032+00:00",
                "commercialNumber": null
            },
            "hash": "94942a1",
            "keywords": [
                "مفروشة",
                "واسعة",
                "شيرنج",
                "mall",
                "مول",
                "كبيرة",
                "all bills included",
                "مفروش",
                "مشتركة",
                "شامل",
                "مؤثثة",
                "shared",
                "صالة",
                "spacious",
                "lounge",
                "موقف سيارة",
                "parking",
                "furnished",
                "bills included",
                "شامل الماء والكهرباء"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1655384118.938948,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661761343.460106
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 469,
            "randBoostScore_l1": 469,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 469,
            "indyScore_l1": 469,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                253638852,
                250967141,
                232600825,
                236027241,
                236617210,
                253638855,
                236617214,
                232586311,
                236027246,
                170954432,
                236027247,
                236617218
            ],
            "hidePrice": false,
            "objectID": "2587434",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "BVH-1BR-NAJ",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Fully Furnished Spacious 1BR apartment with all bills included",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5319734",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Bhavan Vacation Homes L. L. C",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شيرنج",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "all bills included",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مشتركة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شامل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "shared",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صالة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "lounge",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "bills included",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شامل الماء والكهرباء",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 2205838,
            "ownerID": 713291,
            "userExternalID": "713291",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.050708,
                "lng": 55.213872
            },
            "geography": {
                "lat": 25.050708,
                "lng": 55.213872
            },
            "purpose": "for-rent",
            "price": 7500,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "107",
            "permitNumber": "JUMPANKMZSO",
            "projectNumber": null,
            "title": "Fantastic Offer!! Brand New 2 Bedroom Apartment With  An Expansive Balcony | All Inclusive",
            "title_l1": "عرض رائع !! شقة جديدة من غرفتي نوم مع شرفة واسعة | الجميع مشمول",
            "externalID": "4939165",
            "slug": "fantastic-offer-brand-new-2-bedroom-apartment-with-an-expansive-balcony-all-inclusive-4939165",
            "slug_l1": "fantastic-offer-brand-new-2-bedroom-apartment-with-an-expansive-balcony-all-inclusive-4939165",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 1935,
                    "level": 3,
                    "externalID": "11385",
                    "name": "JVC District 13",
                    "name_l1": "الضاحية 13",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-13",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-13",
                    "type": "neighbourhood"
                },
                {
                    "id": 1967,
                    "level": 4,
                    "externalID": "11298",
                    "name": "Pantheon Boulevard",
                    "name_l1": "بانثيون بوليفارد",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-13/pantheon-boulevard",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-13/pantheon-boulevard",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1609691763,
            "updatedAt": 1662863469,
            "reactivatedAt": 1650623269.173507,
            "rooms": 2,
            "baths": 2,
            "area": 88.62950016,
            "score": 100,
            "score_l1": 100,
            "coverPhoto": {
                "id": 268623510,
                "externalID": "128415090",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.862398389737688,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/268623510/1db726d9f6da4a61b3d584ac944c5ae9",
                "main": true
            },
            "coverVideo": {
                "externalID": 129304,
                "title": "Holiday Boulevard",
                "host": "youtube",
                "url": "https://www.youtube.com/watch?v=qDLB8b40vfw",
                "orderIndex": 0
            },
            "photoCount": 42,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971521838437",
                "phone": "+97142779821",
                "whatsapp": "971521838437",
                "proxyMobile": "+971521303874",
                "proxyPhone": "+97144298820",
                "phoneNumbers": [
                    "+97142779821"
                ],
                "mobileNumbers": [
                    "+971521838437"
                ]
            },
            "contactName": "Rami Mrassi",
            "agency": {
                "id": 29589916,
                "objectID": 29589916,
                "name": "B L V D Holiday Homes Rental L. L. C",
                "name_l1": "بي ال في دي هوليداي هومز رينتال ذ",
                "externalID": "10204",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "906876",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 99895298,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/99895298/9fc421847605425f9f3227a49d9db7f9"
                },
                "slug": "b-l-v-d-holiday-homes-rental-llc-10204",
                "slug_l1": "b-l-v-d-holiday-homes-rental-llc-10204",
                "tier": 4,
                "roles": [],
                "active": true,
                "createdAt": "2021-01-03T05:56:44.120343+00:00",
                "commercialNumber": null
            },
            "hash": "1773f18",
            "keywords": [
                "مول",
                "مودرن",
                "بلكونة",
                "اول ساكن",
                "new",
                "2 bedroom",
                "clean",
                "واسعة",
                "جديدة",
                "lounge",
                "صالة",
                "kitchen",
                "حديثة",
                "with balcony",
                "غرفتين",
                "brand new",
                "mall",
                "مع شرفة",
                "2 غرفة",
                "غرفتين نوم",
                "airport",
                "modern",
                "مطار",
                "affordable",
                "سعر جيد",
                "مطبخ",
                "ايجار جديد",
                "ساكن اول",
                "غرفة واحدة",
                "balcony",
                "جديدة اول ساكن",
                "spacious",
                "نظيف",
                "1 bedroom"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1651037539.389226,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661424589.601548
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 462,
            "randBoostScore_l1": 462,
            "floorPlanID": 11793,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-104544945",
                "dldPropertySK": "dld|mea|ae|tabu-104549051"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 462,
            "indyScore_l1": 462,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                268623510,
                254304880,
                254304883,
                268623513,
                254304888,
                254304892,
                268623516,
                254304894,
                254304896,
                254304899,
                254304902,
                254304905,
                254304910,
                268623523,
                254304921,
                254304927,
                254304930,
                254304940,
                254304944,
                254304948,
                248920279,
                254304953,
                254304958,
                254304959,
                254304963,
                254304966,
                254304968,
                254319208,
                254304971,
                254304974,
                254304975,
                254304976,
                254304979,
                254304981,
                254305190,
                268623549,
                254305198,
                268623552,
                254305206,
                254305212,
                254305215,
                254305218
            ],
            "hidePrice": false,
            "objectID": "2205838",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "107",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Fantastic Offer!! Brand New 2 Bedroom Apartment With  An Expansive Balcony | All Inclusive",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "4939165",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "B L V D Holiday Homes Rental L. L. C",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "clean",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "lounge",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صالة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "with balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "brand new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مع شرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "airport",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "affordable",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "سعر جيد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ساكن اول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفة واحدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "نظيف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "1 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3243510,
            "ownerID": 1161679,
            "userExternalID": "1161679",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.115382142211,
                "lng": 55.205143801192
            },
            "geography": {
                "lat": 25.115382142211,
                "lng": 55.205143801192
            },
            "purpose": "for-rent",
            "price": 8000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "SBO-1707",
            "permitNumber": "HH|870557",
            "projectNumber": null,
            "title": "Extraordinary 1BR Apartment In SBO Tower | Rates are only valid for current month",
            "title_l1": "شقة في برج SBO البرشاء 1 البرشاء 1 غرف 8000 درهم - 5962052",
            "externalID": "5962052",
            "slug": "extraordinary-1br-apartment-in-sbo-tower-rates-are-only-valid-for-current-month-5962052",
            "slug_l1": "extraordinary-1br-apartment-in-sbo-tower-rates-are-only-valid-for-current-month-5962052",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 105,
                    "level": 2,
                    "externalID": "5661",
                    "name": "Al Barsha",
                    "name_l1": "البرشاء",
                    "slug": "/dubai/al-barsha",
                    "slug_l1": "/dubai/al-barsha",
                    "type": "neighbourhood"
                },
                {
                    "id": 106,
                    "level": 3,
                    "externalID": "7978",
                    "name": "Al Barsha 1",
                    "name_l1": "البرشاء 1",
                    "slug": "/dubai/al-barsha/al-barsha-1",
                    "slug_l1": "/dubai/al-barsha/al-barsha-1",
                    "type": "neighbourhood"
                },
                {
                    "id": 22524,
                    "level": 4,
                    "externalID": "14522",
                    "name": "SBO Tower",
                    "name_l1": "برج SBO",
                    "slug": "/dubai/al-barsha/al-barsha-1/sbo-tower",
                    "slug_l1": "/dubai/al-barsha/al-barsha-1/sbo-tower",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1652945248,
            "updatedAt": 1662710615,
            "reactivatedAt": 1652945248,
            "rooms": 1,
            "baths": 2,
            "area": 86.86434240000001,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 264114363,
                "externalID": "123138039",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.428523374805081,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/264114363/6be5609220a248ba97a4a076aaeeab0a",
                "main": true
            },
            "photoCount": 12,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971585163509",
                "phone": "+97143839689",
                "whatsapp": "97143839689",
                "phoneNumbers": [
                    "+97143839689"
                ],
                "mobileNumbers": [
                    "+971585163509"
                ]
            },
            "contactName": "Ayushi Saxena",
            "agency": {
                "id": 29563834,
                "objectID": 29563834,
                "name": "Baytik Almthali Vacation Homes Rental L. L. C",
                "name_l1": "بيت المثالي لتأجير منازل العطلات",
                "externalID": "9546",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "870557",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 90939874,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/90939874/9dffd9ac705b41d09737bd55a34fbf2b"
                },
                "slug": "baytik-almthali-vacation-homes-rental-llc-9546",
                "slug_l1": "baytik-almthali-vacation-homes-rental-llc-9546",
                "tier": 3,
                "roles": [],
                "active": true,
                "createdAt": "2020-05-03T09:26:16.117614+00:00",
                "commercialNumber": null
            },
            "hash": "c7d7b26",
            "keywords": [
                "غرفة واحدة",
                "مفروشة",
                "موقف سيارة",
                "مطبخ",
                "parking",
                "fitted",
                "مؤثثة",
                "furnished",
                "جاهز",
                "1 bedroom",
                "مفروش",
                "kitchen"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1661862151.246035,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662710615.289883
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 460,
            "randBoostScore_l1": 460,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 460,
            "indyScore_l1": 460,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                264114363,
                226125469,
                226125470,
                263765801,
                268645432,
                226125473,
                226125474,
                226125475,
                234516531,
                268645433,
                236616162,
                219982652
            ],
            "hidePrice": false,
            "objectID": "3243510",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "SBO-1707",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Extraordinary 1BR Apartment In SBO Tower | Rates are only valid for current month",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5962052",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Baytik Almthali Vacation Homes Rental L. L. C",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "غرفة واحدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "fitted",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جاهز",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "1 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3567701,
            "ownerID": 1090133,
            "userExternalID": "1090133",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.067073483869,
                "lng": 55.203469325513
            },
            "geography": {
                "lat": 25.067073483869,
                "lng": 55.203469325513
            },
            "purpose": "for-rent",
            "price": 6498,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Ap-R-1008",
            "permitNumber": null,
            "projectNumber": null,
            "title": "Modern Furnished | Swimming Pool | Family-Oriented",
            "title_l1": "شقة في ابراج بلووم المنطقة 10 قرية جميرا الدائرية 1 غرف 6498 درهم - 6270907",
            "externalID": "6270907",
            "slug": "modern-furnished-swimming-pool-family-oriented-6270907",
            "slug_l1": "modern-furnished-swimming-pool-family-oriented-6270907",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 2478,
                    "level": 3,
                    "externalID": "11840",
                    "name": "JVC District 10",
                    "name_l1": "المنطقة 10",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-10",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-10",
                    "type": "neighbourhood"
                },
                {
                    "id": 1547,
                    "level": 4,
                    "externalID": "9140",
                    "name": "Bloom Towers",
                    "name_l1": "ابراج بلووم",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-10/bloom-towers",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-10/bloom-towers",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1661346910,
            "updatedAt": 1662868610,
            "reactivatedAt": 1661346910,
            "rooms": 1,
            "baths": 1,
            "area": 61.87342464,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 265433933,
                "externalID": "129241021",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.579038858670629,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/265433933/b6184c951e254143aa1b1dcb16df7e19",
                "main": true
            },
            "photoCount": 9,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971565440231",
                "phone": "+97145572402",
                "whatsapp": "971565440231",
                "proxyPhone": "+97145128215",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971565440231"
                ]
            },
            "contactName": "Shahzad Gulfam",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "48d7a84",
            "keywords": [
                "مفروش",
                "family",
                "مودرن",
                "modern",
                "مؤثثة",
                "صالة",
                "مفروشة",
                "للعوائل",
                "furnished",
                "lounge",
                "عوائل",
                "حديثة"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1661692007.385592,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661837134.387096
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 451,
            "randBoostScore_l1": 451,
            "floorPlanID": 3519,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-101952859",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-101984131"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 451,
            "indyScore_l1": 451,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                265433933,
                267150680,
                265899320,
                262232071,
                264882048,
                262232078,
                264882050,
                262232083,
                262232085
            ],
            "hidePrice": false,
            "objectID": "3567701",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Ap-R-1008",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Modern Furnished | Swimming Pool | Family-Oriented",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6270907",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صالة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "lounge",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3120242,
            "ownerID": 1818899,
            "userExternalID": "1818899",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.179952,
                "lng": 55.265432
            },
            "geography": {
                "lat": 25.179952,
                "lng": 55.265432
            },
            "purpose": "for-rent",
            "price": 15998,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": "monthly",
            "referenceNumber": "1120-Ap-R-0819",
            "permitNumber": "825766",
            "projectNumber": null,
            "title": "Family-Oriented | Modern Furnished | Convenient Location",
            "title_l1": "شقة في إيليت بيزنس باي ريزيدنس الخليج التجاري 4 غرف 15998 درهم - 5845946",
            "externalID": "5845946",
            "slug": "family-oriented-modern-furnished-convenient-location-5845946",
            "slug_l1": "family-oriented-modern-furnished-convenient-location-5845946",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 54,
                    "level": 2,
                    "externalID": "5093",
                    "name": "Business Bay",
                    "name_l1": "الخليج التجاري",
                    "slug": "/dubai/business-bay",
                    "slug_l1": "/dubai/business-bay",
                    "type": "neighbourhood"
                },
                {
                    "id": 131,
                    "level": 3,
                    "externalID": "11272",
                    "name": "Elite Business Bay Residence",
                    "name_l1": "إيليت بيزنس باي ريزيدنس",
                    "slug": "/dubai/business-bay/elite-business-bay-residence",
                    "slug_l1": "/dubai/business-bay/elite-business-bay-residence",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1648282656,
            "updatedAt": 1662865075,
            "reactivatedAt": 1648282656,
            "rooms": 4,
            "baths": 4,
            "area": 201.78540288,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 254831614,
                "externalID": "125367247",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.047645089218804,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/254831614/ddf1954367724df5a3b113c47fa5c816",
                "main": true
            },
            "photoCount": 23,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971567048233",
                "phone": "+97145572402",
                "whatsapp": "971567048233",
                "proxyMobile": "+971525207049",
                "phoneNumbers": [
                    "+97145572402"
                ],
                "mobileNumbers": [
                    "+971567048233"
                ]
            },
            "contactName": "DANI HATOUM",
            "agency": {
                "id": 29536933,
                "objectID": 29536933,
                "name": "Like Home Vacation Homes Rental",
                "name_l1": "مثل تأجير منازل العطلات المنزلية",
                "externalID": "8933",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "825766",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75770747,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26"
                },
                "slug": "like-home-vacation-homes-rental-8933",
                "slug_l1": "like-home-vacation-homes-rental-8933",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-26T07:31:53.147487+00:00",
                "commercialNumber": null
            },
            "hash": "56fbdb4",
            "keywords": [
                "موقف سيارة",
                "دور",
                "floor",
                "مودرن",
                "طابق ارضي",
                "mall",
                "ارضي",
                "parking",
                "airport",
                "مفروشة",
                "حديثة",
                "مول",
                "مؤثثة",
                "modern",
                "ارضية",
                "مفروش",
                "للعوائل",
                "عوائل",
                "ground",
                "4 bedroom",
                "family",
                "furnished",
                "4 غرف",
                "مطار"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1649149119.466457,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661429643.967549
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 442,
            "randBoostScore_l1": 442,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-53216779",
                "dldPropertySK": "dld|mea|ae|tabu-53219381"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 442,
            "indyScore_l1": 442,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                254831614,
                258424286,
                254266273,
                235808941,
                236427755,
                232574157,
                263808693,
                232574163,
                260116192,
                261195781,
                233620188,
                239546881,
                257487026,
                248949793,
                264348839,
                235808953,
                255486195,
                244308621,
                238667870,
                239546898,
                261935405,
                268483037,
                234751035
            ],
            "hidePrice": false,
            "objectID": "3120242",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1120-Ap-R-0819",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Family-Oriented | Modern Furnished | Convenient Location",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5845946",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Like Home Vacation Homes Rental",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "طابق ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "airport",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضية",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ground",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطار",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
    
    
        {
            "id": 3349256,
            "ownerID": 1168760,
            "userExternalID": "1168760",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.190677,
                "lng": 55.281575
            },
            "geography": {
                "lat": 25.190677,
                "lng": 55.281575
            },
            "purpose": "for-sale",
            "price": 799999,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "3148-Ap-S-0145",
            "permitNumber": "6510057300",
            "projectNumber": null,
            "title": "Studio for Sale / vacant / In Downtown",
            "title_l1": "شقة في برج فيوز بوديوم برج فيوز وسط مدينة دبي 799999 درهم - 6058254",
            "externalID": "6058254",
            "slug": "studio-for-sale-vacant-in-downtown-6058254",
            "slug_l1": "studio-for-sale-vacant-in-downtown-6058254",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 10,
                    "level": 2,
                    "externalID": "6901",
                    "name": "Downtown Dubai",
                    "name_l1": "وسط مدينة دبي",
                    "slug": "/dubai/downtown-dubai",
                    "slug_l1": "/dubai/downtown-dubai",
                    "type": "neighbourhood"
                },
                {
                    "id": 900,
                    "level": 3,
                    "externalID": "5103",
                    "name": "Burj Views",
                    "name_l1": "برج فيوز",
                    "slug": "/dubai/downtown-dubai/burj-views",
                    "slug_l1": "/dubai/downtown-dubai/burj-views"
                },
                {
                    "id": 4004,
                    "level": 4,
                    "externalID": "10350",
                    "name": "Burj Views Podium",
                    "name_l1": "برج فيوز بوديوم",
                    "slug": "/dubai/downtown-dubai/burj-views/burj-views-podium",
                    "slug_l1": "/dubai/downtown-dubai/burj-views/burj-views-podium",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1655815693,
            "updatedAt": 1662452390,
            "reactivatedAt": 1655815693,
            "rooms": 0,
            "baths": 1,
            "area": 55.2773088,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 229937840,
                "externalID": "124827461",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 8.579092154765021,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/229937840/ea84b1b7e1824c1ebcf6fa9b50bd55fb",
                "main": true
            },
            "photoCount": 14,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971556412405",
                "phone": "+97145803941",
                "whatsapp": "971551123505",
                "proxyMobile": "+971529008763",
                "phoneNumbers": [
                    "+97145803941"
                ],
                "mobileNumbers": [
                    "+971556412405"
                ]
            },
            "contactName": "U N I Real Estate Broker",
            "agency": {
                "id": 29627128,
                "objectID": 29627128,
                "name": "UNI Real Estate Broker",
                "name_l1": "UNI Real Estate Broker",
                "externalID": "11231",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "1009117",
                        "authority": "DED"
                    },
                    {
                        "number": "28643",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 181285619,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/181285619/9ef2961b73684ec6ae64536c9c966d9a"
                },
                "slug": "uni-real-estate-broker-11231",
                "slug_l1": "uni-real-estate-broker-11231",
                "tier": 3,
                "roles": [],
                "active": true,
                "createdAt": "2022-01-21T08:10:43.289164+00:00",
                "commercialNumber": null
            },
            "hash": "407a497",
            "keywords": [
                "mall",
                "مول"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1656065420.316753,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662378543.83283
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 810,
            "randBoostScore_l1": 810,
            "floorPlanID": 26581,
            "furnishingStatus": "unfurnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 131,
            "indyScore_l1": 131,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                229937840,
                229493938,
                229485874,
                229493940,
                229493941,
                229485877,
                229485878,
                229485879,
                229937843,
                229937844,
                229937845,
                229485883,
                229485884,
                229493950
            ],
            "hidePrice": false,
            "objectID": "3349256",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "3148-Ap-S-0145",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Studio for Sale / vacant / In Downtown",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6058254",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "UNI Real Estate Broker",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3082241,
            "ownerID": 785789,
            "userExternalID": "785789",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.18572054657,
                "lng": 55.291743008322
            },
            "geography": {
                "lat": 25.18572054657,
                "lng": 55.291743008322
            },
            "purpose": "for-sale",
            "price": 1110000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "MA-PMT-1BS - 9529",
            "permitNumber": "7117446254",
            "projectNumber": null,
            "title": "Luxury+Furnished 1BR | Vacant | 8% ROI",
            "title_l1": "شقة في برج A أبراج داماك من باراماونت للفنادق والمنتجعات الخليج التجاري 1 غرف 1110000 درهم - 5809888",
            "externalID": "5809888",
            "slug": "luxury-furnished-1br-vacant-8-roi-5809888",
            "slug_l1": "luxury-furnished-1br-vacant-8-roi-5809888",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 54,
                    "level": 2,
                    "externalID": "5093",
                    "name": "Business Bay",
                    "name_l1": "الخليج التجاري",
                    "slug": "/dubai/business-bay",
                    "slug_l1": "/dubai/business-bay",
                    "type": "neighbourhood"
                },
                {
                    "id": 322,
                    "level": 3,
                    "externalID": "8285",
                    "name": "DAMAC Towers by Paramount Hotels and Resorts",
                    "name_l1": "أبراج داماك من باراماونت للفنادق والمنتجعات",
                    "slug": "/dubai/business-bay/damac-towers-by-paramount-hotels-and-resorts",
                    "slug_l1": "/dubai/business-bay/damac-towers-by-paramount-hotels-and-resorts",
                    "type": "condo-building"
                },
                {
                    "id": 6400,
                    "level": 4,
                    "externalID": "9069",
                    "name": "Tower A",
                    "name_l1": "برج A",
                    "slug": "/dubai/business-bay/damac-towers-by-paramount-hotels-and-resorts/tower-a",
                    "slug_l1": "/dubai/business-bay/damac-towers-by-paramount-hotels-and-resorts/tower-a",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1647083225,
            "updatedAt": 1662951137,
            "reactivatedAt": 1647083225,
            "rooms": 1,
            "baths": 1,
            "area": 89.6514336,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 262465602,
                "externalID": "129269575",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.136634236694896,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/262465602/3231665f96cd4dbb9cbb19749caf14da",
                "main": true
            },
            "photoCount": 13,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971565266237",
                "phone": "+97144579928",
                "whatsapp": "971565266218",
                "proxyMobile": "+971521170122",
                "phoneNumbers": [
                    "+97144579928"
                ],
                "mobileNumbers": [
                    "+971565266237"
                ]
            },
            "contactName": "Kahsay Abdurahman",
            "agency": {
                "id": 239,
                "objectID": 239,
                "name": "Maverick Real Estate",
                "name_l1": "ماافيريك للوساطة العقارية",
                "externalID": "7962",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "16455",
                        "authority": "RERA"
                    },
                    {
                        "number": "732122",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 27680075,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/27680075/1f7a4fb142fe4f83974639c4ba5d8b26"
                },
                "slug": "maverick-real-estate-7962",
                "slug_l1": "maverick-real-estate-7962",
                "tier": 3,
                "roles": [],
                "active": true,
                "createdAt": "2017-12-14T16:28:51.143594+00:00",
                "commercialNumber": null
            },
            "hash": "84eb73c",
            "keywords": [
                "مخدوم",
                "مؤثثة",
                "موقف سيارة",
                "floor",
                "مفروش",
                "جديدة",
                "salon",
                "balcony",
                "investment",
                "مجلس",
                "guest",
                "غرفة واحدة",
                "new",
                "استثمار",
                "furnished",
                "1 bedroom",
                "دور",
                "مفروشة",
                "مطبخ",
                "fitted",
                "spacious",
                "فاخرة",
                "صالون",
                "ايجار جديد",
                "بلكونة",
                "واسعة",
                "parking",
                "luxury",
                "kitchen",
                "كبيرة",
                "جديدة اول ساكن",
                "جاهز",
                "serviced"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1648026126.952309,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661852575.982802
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 768,
            "randBoostScore_l1": 768,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-17446070",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-17446452"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 52,
            "indyScore_l1": 52,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                262465602,
                262465604,
                262465605,
                262465603,
                262465608,
                262465611,
                262465612,
                262465613,
                262465610,
                262465614,
                262465609,
                262465606,
                262465607
            ],
            "hidePrice": false,
            "objectID": "3082241",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "MA-PMT-1BS - 9529",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Luxury+Furnished 1BR | Vacant | 8% ROI",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5809888",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Maverick Real Estate",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مخدوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "salon",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "investment",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفة واحدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "استثمار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "1 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "fitted",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صالون",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جاهز",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "serviced",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3208515,
            "ownerID": 824639,
            "userExternalID": "824639",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.193453,
                "lng": 55.272879
            },
            "geography": {
                "lat": 25.193453,
                "lng": 55.272879
            },
            "purpose": "for-sale",
            "price": 3500000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "L-189412",
            "permitNumber": "6512936100",
            "projectNumber": null,
            "title": "Rare Upgraded Villa | Vacant | Exclusive",
            "title_l1": "فیلا في ذا ريزيدينس 1 ذا ریزیدنسز وسط مدينة دبي 2 غرف 3500000 درهم - 5927207",
            "externalID": "5927207",
            "slug": "rare-upgraded-villa-vacant-exclusive-5927207",
            "slug_l1": "rare-upgraded-villa-vacant-exclusive-5927207",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 10,
                    "level": 2,
                    "externalID": "6901",
                    "name": "Downtown Dubai",
                    "name_l1": "وسط مدينة دبي",
                    "slug": "/dubai/downtown-dubai",
                    "slug_l1": "/dubai/downtown-dubai",
                    "type": "neighbourhood"
                },
                {
                    "id": 166,
                    "level": 3,
                    "externalID": "5142",
                    "name": "The Residences",
                    "name_l1": "ذا ریزیدنسز",
                    "slug": "/dubai/downtown-dubai/the-residences",
                    "slug_l1": "/dubai/downtown-dubai/the-residences"
                },
                {
                    "id": 874,
                    "level": 4,
                    "externalID": "8860",
                    "name": "The Residence 1",
                    "name_l1": "ذا ريزيدينس 1",
                    "slug": "/dubai/downtown-dubai/the-residences/the-residence-1",
                    "slug_l1": "/dubai/downtown-dubai/the-residences/the-residence-1",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 5,
                    "level": 1,
                    "externalID": "3",
                    "name": "Villas",
                    "name_l1": "فلل",
                    "slug": "villas",
                    "slug_l1": "villas",
                    "nameSingular": "Villa",
                    "nameSingular_l1": "فیلا"
                }
            ],
            "createdAt": 1651747144,
            "updatedAt": 1662951778,
            "reactivatedAt": 1651747144,
            "rooms": 2,
            "baths": 2,
            "area": 152.45388864,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 253295783,
                "externalID": "128286414",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 6.172772045804322,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/253295783/a34875394ef0489b832cb05f0698ac82",
                "main": true
            },
            "coverVideo": {
                "externalID": 391366,
                "title": null,
                "host": "youtube",
                "url": "https://www.youtube.com/watch?v=3VcnhqSFDiM",
                "orderIndex": 0
            },
            "photoCount": 17,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971585778542",
                "phone": "+97144294444",
                "whatsapp": "971585778542",
                "proxyMobile": "+971553393345",
                "phoneNumbers": [
                    "+97144294444"
                ],
                "mobileNumbers": [
                    "+971585778542"
                ]
            },
            "contactName": "Lee Weston",
            "agency": {
                "id": 29603656,
                "objectID": 29603656,
                "name": "Allsopp & Allsopp - Business Bay",
                "name_l1": "ألسوب و ألسوب- مبيعات الخليج التجاري",
                "externalID": "10642",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "613873",
                        "authority": "DED"
                    },
                    {
                        "number": "1815",
                        "authority": "RERA"
                    },
                    {
                        "number": "802652",
                        "authority": "DED"
                    },
                    {
                        "number": "1062772",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 108123704,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/108123704/bceea7cecf5146d29b2610fff7e20af4"
                },
                "slug": "allsopp-allsopp-business-bay-10642",
                "slug_l1": "allsopp-allsopp-business-bay-10642",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2021-07-04T07:37:08.711932+00:00",
                "commercialNumber": null
            },
            "hash": "8d93f42",
            "keywords": [
                "استثمار",
                "ready",
                "ترس",
                "modern",
                "investment",
                "مودرن",
                "موقف سيارة",
                "parking",
                "terrace",
                "جاهزة",
                "حديثة"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1656164516.170691,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1659963998.235168
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 761,
            "randBoostScore_l1": 761,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-149059",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-149059"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 81,
            "indyScore_l1": 81,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                253295783,
                248572083,
                248572082,
                248572084,
                248572085,
                248572087,
                248572086,
                248572088,
                248572090,
                248572095,
                248572092,
                248572094,
                248572091,
                210087435,
                210087434,
                209859991,
                253295784
            ],
            "hidePrice": false,
            "objectID": "3208515",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "L-189412",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Rare Upgraded Villa | Vacant | Exclusive",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5927207",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Allsopp & Allsopp - Business Bay",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "استثمار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ready",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ترس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "investment",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "terrace",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جاهزة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3472974,
            "ownerID": 1159916,
            "userExternalID": "1159916",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.11326,
                "lng": 55.13694
            },
            "geography": {
                "lat": 25.11326,
                "lng": 55.13694
            },
            "purpose": "for-sale",
            "price": 3400000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "2986-Ap-S-0429",
            "permitNumber": "7124690500",
            "projectNumber": null,
            "title": "3 Bedroom  | Sea Views | Vacant On Transfer",
            "title_l1": "شقة في مساكن مارينا 1 مساكن المارينا نخلة جميرا 3 غرف 3400000 درهم - 6179450",
            "externalID": "6179450",
            "slug": "3-bedroom-sea-views-vacant-on-transfer-6179450",
            "slug_l1": "3-bedroom-sea-views-vacant-on-transfer-6179450",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 14,
                    "level": 2,
                    "externalID": "5460",
                    "name": "Palm Jumeirah",
                    "name_l1": "نخلة جميرا",
                    "slug": "/dubai/palm-jumeirah",
                    "slug_l1": "/dubai/palm-jumeirah",
                    "type": "neighbourhood"
                },
                {
                    "id": 27,
                    "level": 3,
                    "externalID": "5485",
                    "name": "Marina Residences",
                    "name_l1": "مساكن المارينا",
                    "slug": "/dubai/palm-jumeirah/marina-residences",
                    "slug_l1": "/dubai/palm-jumeirah/marina-residences"
                },
                {
                    "id": 28,
                    "level": 4,
                    "externalID": "8837",
                    "name": "Marina Residences 1",
                    "name_l1": "مساكن مارينا 1",
                    "slug": "/dubai/palm-jumeirah/marina-residences/marina-residences-1",
                    "slug_l1": "/dubai/palm-jumeirah/marina-residences/marina-residences-1",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1658989924,
            "updatedAt": 1662967179,
            "reactivatedAt": 1658989924,
            "rooms": 3,
            "baths": 5,
            "area": 226.49761152,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 263375555,
                "externalID": "127555880",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 8.824939611226,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/263375555/a489a56138a94e1893eea2af571bf454",
                "main": true
            },
            "coverVideo": {
                "externalID": 390645,
                "title": null,
                "host": "youtube",
                "url": "https://youtu.be/jGK52WKoT64",
                "orderIndex": 0
            },
            "photoCount": 10,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971544550589",
                "phone": "+971544550589",
                "proxyMobile": "+971525173978",
                "phoneNumbers": [
                    "+971544550589"
                ],
                "mobileNumbers": [
                    "+971544550589"
                ]
            },
            "contactName": "Jonathan Caunce",
            "agency": {
                "id": 29621446,
                "objectID": 29621446,
                "name": "Williams International Real Estate LLC",
                "name_l1": "ويليامز انترناشيونال العقارية ذ",
                "externalID": "11044",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "951444",
                        "authority": "DED"
                    },
                    {
                        "number": "26502",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 168393109,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/168393109/e92c56d4d49944bca58b100e0cbcdde4"
                },
                "slug": "williams-international-real-estate-llc-11044",
                "slug_l1": "williams-international-real-estate-llc-11044",
                "tier": 2,
                "roles": [],
                "active": true,
                "createdAt": "2021-11-23T07:52:44.295194+00:00",
                "commercialNumber": null
            },
            "hash": "8fe7708",
            "keywords": [
                "ترس",
                "خادمة",
                "مؤثثة",
                "sea view",
                "floor",
                "مفروش",
                "3 غرف",
                "3 غرف جديدة",
                "furnished",
                "دور",
                "مفروشة",
                "3 bedroom",
                "terrace",
                "اطلالة على البحر",
                "laundry",
                "ثلاثه غرفة",
                "maid",
                "ثلاث غرف",
                "غسيل"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1659210155.330417,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662641281.662534
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 743,
            "randBoostScore_l1": 743,
            "floorPlanID": 8455,
            "furnishingStatus": null,
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-150253",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-246905"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 237,
            "indyScore_l1": 237,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                263375555,
                258743856,
                252353343,
                256587756,
                260635632,
                260635634,
                250089997,
                253173665,
                253194969,
                247978548
            ],
            "hidePrice": false,
            "objectID": "3472974",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "2986-Ap-S-0429",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "3 Bedroom  | Sea Views | Vacant On Transfer",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6179450",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Williams International Real Estate LLC",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "ترس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "sea view",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "terrace",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اطلالة على البحر",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ثلاثه غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ثلاث غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3527395,
            "ownerID": 1680171,
            "userExternalID": "1680171",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.055795,
                "lng": 55.201555
            },
            "geography": {
                "lat": 25.055795,
                "lng": 55.201555
            },
            "purpose": "for-sale",
            "price": 600000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "LAY-JVC8-YOZ72",
            "permitNumber": "71171435154",
            "projectNumber": null,
            "title": "Pay & Move I Multiple options available I Brand New",
            "title_l1": "شقة في لايا مانشون الضاحية 15 قرية جميرا الدائرية 1 غرف 600000 درهم - 6234344",
            "externalID": "6234344",
            "slug": "pay-move-i-multiple-options-available-i-brand-new-6234344",
            "slug_l1": "pay-move-i-multiple-options-available-i-brand-new-6234344",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 59,
                    "level": 2,
                    "externalID": "5416",
                    "name": "Jumeirah Village Circle (JVC)",
                    "name_l1": "قرية جميرا الدائرية",
                    "slug": "/dubai/jumeirah-village-circle-jvc",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc",
                    "type": "neighbourhood"
                },
                {
                    "id": 2757,
                    "level": 3,
                    "externalID": "11455",
                    "name": "JVC District 15",
                    "name_l1": "الضاحية 15",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-15",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-15",
                    "type": "neighbourhood"
                },
                {
                    "id": 17405,
                    "level": 4,
                    "externalID": "13260",
                    "name": "Laya Mansion",
                    "name_l1": "لايا مانشون",
                    "slug": "/dubai/jumeirah-village-circle-jvc/jvc-district-15/laya-mansion",
                    "slug_l1": "/dubai/jumeirah-village-circle-jvc/jvc-district-15/laya-mansion",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1660290492,
            "updatedAt": 1662522698,
            "reactivatedAt": 1660290492,
            "rooms": 1,
            "baths": 2,
            "area": 68.2837344,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 257423811,
                "externalID": "128541460",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 8.440143889294632,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/257423811/e8d7f42f2589456c8061b2a5f376e4e1",
                "main": true
            },
            "photoCount": 8,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971586603616",
                "phone": "+97145539027",
                "whatsapp": "971586603616",
                "proxyMobile": "+971527958031",
                "phoneNumbers": [
                    "+97145539027"
                ],
                "mobileNumbers": [
                    "+971586603616"
                ]
            },
            "contactName": "Peace Homes Real Estate (Business Bay)",
            "agency": {
                "id": 29631904,
                "objectID": 29631904,
                "name": "Peace Homes Real Estate (Business Bay)",
                "name_l1": "بيس هومز العقارية (الخليج التجاري)",
                "externalID": "100113",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "718452",
                        "authority": "DED"
                    },
                    {
                        "number": "15689",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 192502235,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/192502235/7081fdc0ee0f48f3a8d95a1dcec071e1"
                },
                "slug": "peace-homes-real-estate-business-bay-100113",
                "slug_l1": "peace-homes-real-estate-business-bay-100113",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2022-03-07T08:53:10.310292+00:00",
                "commercialNumber": null
            },
            "hash": "9af8f78",
            "keywords": [
                "shared",
                "اول ساكن",
                "شيرنج",
                "مطبخ",
                "جديدة",
                "brand new",
                "غرفة واحدة",
                "مؤثثة",
                "جاهزة",
                "مفروشة",
                "موقف سيارة",
                "ايجار جديد",
                "new",
                "ready",
                "ساكن اول",
                "parking",
                "1 bedroom",
                "مفروش",
                "kitchen",
                "balcony",
                "مشتركة",
                "بلكونة",
                "furnished",
                "جديدة اول ساكن"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1660737670.501236,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661145610.327742
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 709,
            "randBoostScore_l1": 709,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 291,
            "indyScore_l1": 291,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                257423811,
                257423813,
                255221798,
                260112004,
                259685895,
                255221802,
                257423836,
                260112009
            ],
            "hidePrice": false,
            "objectID": "3527395",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "LAY-JVC8-YOZ72",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Pay & Move I Multiple options available I Brand New",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6234344",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Peace Homes Real Estate (Business Bay)",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "shared",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شيرنج",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "brand new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفة واحدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جاهزة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ready",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ساكن اول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "1 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مشتركة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3605253,
            "ownerID": 1868436,
            "userExternalID": "1868436",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.085800170898,
                "lng": 55.148498535156
            },
            "geography": {
                "lat": 25.085800170898,
                "lng": 55.148498535156
            },
            "purpose": "for-sale",
            "price": 5300000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "axc-3422865",
            "permitNumber": "6510210300",
            "projectNumber": null,
            "title": "Full Marina View | Upgraded | Spacious",
            "title_l1": "شقة في برج الفيروز أبراج مرسى دبي (أبراج إعمار الستة) دبي مارينا 3 غرف 5300000 درهم - 6304312",
            "externalID": "6304312",
            "slug": "full-marina-view-upgraded-spacious-6304312",
            "slug_l1": "full-marina-view-upgraded-spacious-6304312",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 36,
                    "level": 2,
                    "externalID": "5003",
                    "name": "Dubai Marina",
                    "name_l1": "دبي مارينا",
                    "slug": "/dubai/dubai-marina",
                    "slug_l1": "/dubai/dubai-marina",
                    "type": "neighbourhood"
                },
                {
                    "id": 3712,
                    "level": 3,
                    "externalID": "8422",
                    "name": "Dubai Marina Towers (Emaar 6 Towers)",
                    "name_l1": "أبراج مرسى دبي (أبراج إعمار الستة)",
                    "slug": "/dubai/dubai-marina/dubai-marina-towers-emaar-6-towers",
                    "slug_l1": "/dubai/dubai-marina/dubai-marina-towers-emaar-6-towers"
                },
                {
                    "id": 4084,
                    "level": 4,
                    "externalID": "5076",
                    "name": "Al Fairooz Tower",
                    "name_l1": "برج الفيروز",
                    "slug": "/dubai/dubai-marina/dubai-marina-towers-emaar-6-towers/al-fairooz-tower",
                    "slug_l1": "/dubai/dubai-marina/dubai-marina-towers-emaar-6-towers/al-fairooz-tower",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1662368109,
            "updatedAt": 1662955323,
            "reactivatedAt": 1662368109,
            "rooms": 3,
            "baths": 4,
            "area": 226.59051456,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 266787308,
                "externalID": "129741750",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 6.000017608940085,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/266787308/ae093737d95149f8aa58fa9a49fdb3b2",
                "main": true
            },
            "photoCount": 16,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971526726277",
                "phone": "+97142427373",
                "whatsapp": "971526726277",
                "proxyMobile": "+971521045518",
                "phoneNumbers": [
                    "+97142427373"
                ],
                "mobileNumbers": [
                    "+971526726277"
                ]
            },
            "contactName": "David Csemer",
            "agency": {
                "id": 29542445,
                "objectID": 29542445,
                "name": "Ax Capital Real Estate",
                "name_l1": "اكس كابيتال العقارية",
                "externalID": "9124",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "21635",
                        "authority": "RERA"
                    },
                    {
                        "number": "813677",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 79845378,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/79845378/2e8051c06dce4d33baa401bae21e6db5"
                },
                "slug": "ax-capital-real-estate-9124",
                "slug_l1": "ax-capital-real-estate-9124",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2019-09-11T11:08:04.185398+00:00",
                "commercialNumber": null
            },
            "hash": "2349b2c",
            "keywords": [
                "للعوائل",
                "دور",
                "عوائل",
                "3 غرف",
                "موقف سيارة",
                "floor",
                "واسعة",
                "3 bedroom",
                "parking",
                "family",
                "مطبخ",
                "kitchen",
                "كبيرة",
                "spacious"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662449261.876553,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662546097.433131
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 699,
            "randBoostScore_l1": 699,
            "floorPlanID": 30949,
            "furnishingStatus": null,
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-149272",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-159328"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 699,
            "indyScore_l1": 699,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                266787308,
                266787312,
                266787314,
                266787317,
                266787321,
                266787335,
                266787344,
                266787348,
                266787351,
                266787355,
                266787356,
                266787358,
                266787359,
                266787364,
                266787367,
                266787371
            ],
            "hidePrice": false,
            "objectID": "3605253",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "axc-3422865",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Full Marina View | Upgraded | Spacious",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6304312",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Ax Capital Real Estate",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3431310,
            "ownerID": 1775826,
            "userExternalID": "1775826",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.071367,
                "lng": 55.124955
            },
            "geography": {
                "lat": 25.071367,
                "lng": 55.124955
            },
            "purpose": "for-sale",
            "price": 3999990,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "B-AS-67491",
            "permitNumber": "7129932081",
            "projectNumber": null,
            "title": "Vacant | Panoramic Sea View | Brand New",
            "title_l1": "شقة في أبراج 5242 دبي مارينا 3 غرف 3999990 درهم - 6138884",
            "externalID": "6138884",
            "slug": "vacant-panoramic-sea-view-brand-new-6138884",
            "slug_l1": "vacant-panoramic-sea-view-brand-new-6138884",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 36,
                    "level": 2,
                    "externalID": "5003",
                    "name": "Dubai Marina",
                    "name_l1": "دبي مارينا",
                    "slug": "/dubai/dubai-marina",
                    "slug_l1": "/dubai/dubai-marina",
                    "type": "neighbourhood"
                },
                {
                    "id": 1221,
                    "level": 3,
                    "externalID": "8695",
                    "name": "5242 Towers",
                    "name_l1": "أبراج 5242",
                    "slug": "/dubai/dubai-marina/5242-towers",
                    "slug_l1": "/dubai/dubai-marina/5242-towers",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1657978769,
            "updatedAt": 1662961721,
            "reactivatedAt": 1657978769,
            "rooms": 3,
            "baths": 4,
            "area": 160.44355008,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 238212595,
                "externalID": "126166197",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 8.705700546169282,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/238212595/ffbe3f3c97c245b2bf27368e96cafbb5",
                "main": true
            },
            "coverVideo": {
                "externalID": 389920,
                "title": null,
                "host": "youtube",
                "url": "https://www.youtube.com/watch?v=_314EN9cShs",
                "orderIndex": 0
            },
            "photoCount": 28,
            "videoCount": 1,
            "panoramaCount": 1,
            "phoneNumber": {
                "mobile": "+97145563242",
                "phone": "+97143691700",
                "whatsapp": "971569551551",
                "phoneNumbers": [
                    "+97143691700"
                ],
                "mobileNumbers": [
                    "+97145563242"
                ]
            },
            "contactName": "Georgii Bobokhidze",
            "agency": {
                "id": 29583360,
                "objectID": 29583360,
                "name": "fäm Properties - Branch 6",
                "name_l1": "الفرع 6-فام العقارية",
                "externalID": "9959",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "613164",
                        "authority": "DED"
                    },
                    {
                        "number": "1858",
                        "authority": "RERA"
                    },
                    {
                        "number": "718828",
                        "authority": "DED"
                    },
                    {
                        "number": "839535",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 96047205,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/96047205/35a7b5d0fa1a45689c8e5981f818de8d"
                },
                "slug": "fam-properties-branch-6-9959",
                "slug_l1": "fam-properties-branch-6-9959",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2020-09-27T03:29:22.928108+00:00",
                "commercialNumber": null
            },
            "hash": "918f289",
            "keywords": [
                "كبيرة",
                "guest",
                "spacious",
                "maid",
                "2 bedroom",
                "new",
                "sea view",
                "مجلس",
                "اطلالة على البحر",
                "جديدة",
                "floor",
                "مشتركة",
                "خادمة",
                "دور",
                "ايجار جديد",
                "غرفتين نوم",
                "ساكن اول",
                "مصعد",
                "shared",
                "3 bedroom",
                "اول ساكن",
                "balcony",
                "مطبخ",
                "واسعة",
                "2 غرفة",
                "kitchen",
                "شيرنج",
                "بلكونة",
                "غرفتين",
                "brand new",
                "3 غرف",
                "elevator",
                "جديدة اول ساكن"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1658307668.879528,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1661514466.030413
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 693,
            "randBoostScore_l1": 693,
            "floorPlanID": 34616,
            "furnishingStatus": null,
            "extraFields": {
                "dldBuildingNK": "tabu-29931313",
                "dldPropertySK": "dld|mea|ae|tabu-29932081"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 180,
            "indyScore_l1": 180,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                238212595,
                238212598,
                238212613,
                238212601,
                238212640,
                238212583,
                238212652,
                238212654,
                238212592,
                238212616,
                238212622,
                238212648,
                238212634,
                238212631,
                238212604,
                238212610,
                238212637,
                238212607,
                238212586,
                238212625,
                238212628,
                238212643,
                238969839,
                238969840,
                238969842,
                238969844,
                238969845,
                238969847
            ],
            "hidePrice": false,
            "objectID": "3431310",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "B-AS-67491",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Vacant | Panoramic Sea View | Brand New",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6138884",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "fäm Properties - Branch 6",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "sea view",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اطلالة على البحر",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مشتركة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ساكن اول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مصعد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "shared",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شيرنج",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "brand new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "elevator",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3337236,
            "ownerID": 1159916,
            "userExternalID": "1159916",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.107612,
                "lng": 55.146046
            },
            "geography": {
                "lat": 25.107612,
                "lng": 55.146046
            },
            "purpose": "for-sale",
            "price": 2025000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "2986-Ap-S-0366",
            "permitNumber": "7113720421",
            "projectNumber": null,
            "title": "Two Bedroom | Partial Sea View | Vacant Soon",
            "title_l1": "شقة في جولدن مايل 5 جولدن مايل نخلة جميرا 2 غرف 2025000 درهم - 6046928",
            "externalID": "6046928",
            "slug": "two-bedroom-partial-sea-view-vacant-soon-6046928",
            "slug_l1": "two-bedroom-partial-sea-view-vacant-soon-6046928",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 14,
                    "level": 2,
                    "externalID": "5460",
                    "name": "Palm Jumeirah",
                    "name_l1": "نخلة جميرا",
                    "slug": "/dubai/palm-jumeirah",
                    "slug_l1": "/dubai/palm-jumeirah",
                    "type": "neighbourhood"
                },
                {
                    "id": 245,
                    "level": 3,
                    "externalID": "9531",
                    "name": "Golden Mile",
                    "name_l1": "جولدن مايل",
                    "slug": "/dubai/palm-jumeirah/golden-mile",
                    "slug_l1": "/dubai/palm-jumeirah/golden-mile"
                },
                {
                    "id": 1193,
                    "level": 4,
                    "externalID": "10424",
                    "name": "Golden Mile 5",
                    "name_l1": "جولدن مايل 5",
                    "slug": "/dubai/palm-jumeirah/golden-mile/golden-mile-5",
                    "slug_l1": "/dubai/palm-jumeirah/golden-mile/golden-mile-5",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1655450751,
            "updatedAt": 1662967220,
            "reactivatedAt": 1655450751,
            "rooms": 2,
            "baths": 3,
            "area": 175.21513344,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 228003128,
                "externalID": "124623899",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.634445122257205,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/228003128/e43b49dc45c9407a8d2aa4ec3384610e",
                "main": true
            },
            "coverVideo": {
                "externalID": 381529,
                "title": null,
                "host": "youtube",
                "url": "https://youtu.be/jGK52WKoT64",
                "orderIndex": 0
            },
            "photoCount": 12,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971544550589",
                "phone": "+971544550589",
                "proxyMobile": "+971525173978",
                "phoneNumbers": [
                    "+971544550589"
                ],
                "mobileNumbers": [
                    "+971544550589"
                ]
            },
            "contactName": "Jonathan Caunce",
            "agency": {
                "id": 29621446,
                "objectID": 29621446,
                "name": "Williams International Real Estate LLC",
                "name_l1": "ويليامز انترناشيونال العقارية ذ",
                "externalID": "11044",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "951444",
                        "authority": "DED"
                    },
                    {
                        "number": "26502",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 168393109,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/168393109/e92c56d4d49944bca58b100e0cbcdde4"
                },
                "slug": "williams-international-real-estate-llc-11044",
                "slug_l1": "williams-international-real-estate-llc-11044",
                "tier": 2,
                "roles": [],
                "active": true,
                "createdAt": "2021-11-23T07:52:44.295194+00:00",
                "commercialNumber": null
            },
            "hash": "743111d",
            "keywords": [
                "صالة",
                "balcony",
                "دور",
                "بلكونة",
                "sea view",
                "floor",
                "lounge",
                "مطبخ",
                "اطلالة على البحر",
                "kitchen"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1655809630.716357,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662470683.052352
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 683,
            "randBoostScore_l1": 683,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 123,
            "indyScore_l1": 123,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                228003128,
                228003129,
                228003130,
                228003131,
                228003132,
                228003133,
                228003134,
                228886451,
                228012607,
                236051514,
                228003138,
                228003139
            ],
            "hidePrice": false,
            "objectID": "3337236",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "2986-Ap-S-0366",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Two Bedroom | Partial Sea View | Vacant Soon",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6046928",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Williams International Real Estate LLC",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "صالة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "sea view",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "lounge",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اطلالة على البحر",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3604682,
            "ownerID": 1878771,
            "userExternalID": "1878771",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.087609,
                "lng": 55.172853
            },
            "geography": {
                "lat": 25.087609,
                "lng": 55.172853
            },
            "purpose": "for-sale",
            "price": 3250000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "2986-Ap-S-0519",
            "permitNumber": "7116546923",
            "projectNumber": null,
            "title": "3 Bed Triplex | Roof Terrace | Vacant On Transfer",
            "title_l1": "شقة في برج بانوراما ذا فيوز 3 بانوراما - ذا فيوز ذا فيوز 3 غرف 3250000 درهم - 6303911",
            "externalID": "6303911",
            "slug": "3-bed-triplex-roof-terrace-vacant-on-transfer-6303911",
            "slug_l1": "3-bed-triplex-roof-terrace-vacant-on-transfer-6303911",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 286,
                    "level": 2,
                    "externalID": "5258",
                    "name": "The Views",
                    "name_l1": "ذا فيوز",
                    "slug": "/dubai/the-views",
                    "slug_l1": "/dubai/the-views",
                    "type": "neighbourhood"
                },
                {
                    "id": 1013,
                    "level": 3,
                    "externalID": "8088",
                    "name": "Panorama",
                    "name_l1": "بانوراما - ذا فيوز",
                    "slug": "/dubai/the-views/panorama",
                    "slug_l1": "/dubai/the-views/panorama"
                },
                {
                    "id": 1530,
                    "level": 4,
                    "externalID": "11210",
                    "name": "Panorama at the Views Tower 3",
                    "name_l1": "برج بانوراما ذا فيوز 3",
                    "slug": "/dubai/the-views/panorama/panorama-at-the-views-tower-3",
                    "slug_l1": "/dubai/the-views/panorama/panorama-at-the-views-tower-3",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1662363970,
            "updatedAt": 1662970576,
            "reactivatedAt": 1662363970,
            "rooms": 3,
            "baths": 4,
            "area": 224.26793856,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 266737561,
                "externalID": "129735539",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 6.725043482258222,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/266737561/cdc19994035949b281964604586fbfe0",
                "main": true
            },
            "coverVideo": {
                "externalID": 398380,
                "title": null,
                "host": "youtube",
                "url": "https://youtu.be/iM8f9d2bh0w",
                "orderIndex": 0
            },
            "photoCount": 20,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971501137016",
                "phone": "+971501137016",
                "whatsapp": "971501137016",
                "phoneNumbers": [
                    "+971501137016"
                ],
                "mobileNumbers": [
                    "+971501137016"
                ]
            },
            "contactName": "Michael Railes",
            "agency": {
                "id": 29621446,
                "objectID": 29621446,
                "name": "Williams International Real Estate LLC",
                "name_l1": "ويليامز انترناشيونال العقارية ذ",
                "externalID": "11044",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "951444",
                        "authority": "DED"
                    },
                    {
                        "number": "26502",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 168393109,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/168393109/e92c56d4d49944bca58b100e0cbcdde4"
                },
                "slug": "williams-international-real-estate-llc-11044",
                "slug_l1": "williams-international-real-estate-llc-11044",
                "tier": 2,
                "roles": [],
                "active": true,
                "createdAt": "2021-11-23T07:52:44.295194+00:00",
                "commercialNumber": null
            },
            "hash": "883fb06",
            "keywords": [
                "ترس",
                "خادمة",
                "sharing",
                "موقف سيارة",
                "balcony",
                "3 غرف",
                "مجلس",
                "guest",
                "3 غرف جديدة",
                "3 bedroom",
                "terrace",
                "مطبخ",
                "laundry",
                "ثلاثه غرفة",
                "شيرنج",
                "maid",
                "بلكونة",
                "parking",
                "kitchen",
                "ثلاث غرف",
                "غسيل"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662379997.414893,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662704734.94634
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 671,
            "randBoostScore_l1": 671,
            "floorPlanID": 32590,
            "furnishingStatus": null,
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-16539663",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-16546923"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 671,
            "indyScore_l1": 671,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                266737561,
                266737562,
                266737563,
                266737564,
                266718547,
                266717577,
                266717579,
                266767027,
                266718551,
                268619402,
                266767032,
                266717589,
                266767042,
                268509016,
                266717594,
                266717595,
                266718559,
                266809939,
                266718561,
                266717599
            ],
            "hidePrice": false,
            "objectID": "3604682",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "2986-Ap-S-0519",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "3 Bed Triplex | Roof Terrace | Vacant On Transfer",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6303911",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Williams International Real Estate LLC",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "ترس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "sharing",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "terrace",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ثلاثه غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شيرنج",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ثلاث غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 2393633,
            "ownerID": 1019010,
            "userExternalID": "1019010",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.1216745,
                "lng": 55.139328899643
            },
            "geography": {
                "lat": 25.1216745,
                "lng": 55.139328899643
            },
            "purpose": "for-sale",
            "price": 19999990,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "LUL-S-1103",
            "permitNumber": "6511213500",
            "projectNumber": null,
            "title": "Hot Deal | 5 Bedrooms | Atlantis View | Vacant",
            "title_l1": "فیلا في جاردن هومز سعفة B جاردن هومز نخلة جميرا نخلة جميرا 5 غرف 19999990 درهم - 5118786",
            "externalID": "5118786",
            "slug": "hot-deal-5-bedrooms-atlantis-view-vacant-5118786",
            "slug_l1": "hot-deal-5-bedrooms-atlantis-view-vacant-5118786",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 14,
                    "level": 2,
                    "externalID": "5460",
                    "name": "Palm Jumeirah",
                    "name_l1": "نخلة جميرا",
                    "slug": "/dubai/palm-jumeirah",
                    "slug_l1": "/dubai/palm-jumeirah",
                    "type": "neighbourhood"
                },
                {
                    "id": 31,
                    "level": 3,
                    "externalID": "5483",
                    "name": "Garden Homes Palm Jumeirah",
                    "name_l1": "جاردن هومز نخلة جميرا",
                    "slug": "/dubai/palm-jumeirah/garden-homes-palm-jumeirah",
                    "slug_l1": "/dubai/palm-jumeirah/garden-homes-palm-jumeirah"
                },
                {
                    "id": 1136,
                    "level": 4,
                    "externalID": "11241",
                    "name": "Garden Homes Frond B",
                    "name_l1": "جاردن هومز سعفة B",
                    "slug": "/dubai/palm-jumeirah/garden-homes-palm-jumeirah/garden-homes-frond-b",
                    "slug_l1": "/dubai/palm-jumeirah/garden-homes-palm-jumeirah/garden-homes-frond-b",
                    "type": "neighbourhood"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 5,
                    "level": 1,
                    "externalID": "3",
                    "name": "Villas",
                    "name_l1": "فلل",
                    "slug": "villas",
                    "slug_l1": "villas",
                    "nameSingular": "Villa",
                    "nameSingular_l1": "فیلا"
                }
            ],
            "createdAt": 1619100109,
            "updatedAt": 1662370200,
            "reactivatedAt": 1652794210.144752,
            "rooms": 5,
            "baths": 6,
            "area": 464.5152,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 214366306,
                "externalID": "123024740",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 5.851346531084,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/214366306/731a051e479c4823904cdebe19fbd6eb",
                "main": true
            },
            "photoCount": 18,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971509785229",
                "phone": "+97145806906",
                "whatsapp": "971509785229",
                "proxyMobile": "+971528459768",
                "phoneNumbers": [
                    "+97145806906"
                ],
                "mobileNumbers": [
                    "+971509785229"
                ]
            },
            "contactName": "Maya Jaber",
            "agency": {
                "id": 29596405,
                "objectID": 29596405,
                "name": "LuxLiving Real Estate",
                "name_l1": "عقارات لوكس ليفينج",
                "externalID": "10402",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "749899",
                        "authority": "DED"
                    },
                    {
                        "number": "16939",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 102963106,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/102963106/25f0b0c3a6d24196a6201a3e658eb7fc"
                },
                "slug": "luxliving-real-estate-10402",
                "slug_l1": "luxliving-real-estate-10402",
                "tier": 3,
                "roles": [],
                "active": true,
                "createdAt": "2021-03-28T08:36:55.387934+00:00",
                "commercialNumber": null
            },
            "hash": "ce33016",
            "keywords": [
                "fitted",
                "استثمار",
                "للعوائل",
                "laundry",
                "مول",
                "حديقة",
                "balcony",
                "عوائل",
                "parking",
                "5 غرف",
                "بلكونة",
                "maid",
                "family",
                "واسعة",
                "مطبخ",
                "كبيرة",
                "مؤثثة",
                "موقف سيارة",
                "kitchen",
                "garden",
                "جاهز",
                "mall",
                "investment",
                "خادمة",
                "spacious",
                "غسيل",
                "5 bedroom"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1652880091.186142,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662363882.577463
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 623,
            "randBoostScore_l1": 623,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 16,
            "indyScore_l1": 16,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                214366306,
                214366308,
                214366310,
                214366312,
                226519159,
                226519160,
                226519161,
                226519162,
                226519163,
                226519164,
                226519165,
                226519166,
                214366320,
                214366321,
                214366322,
                214366323,
                214366325,
                226519167
            ],
            "hidePrice": true,
            "objectID": "2393633",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "LUL-S-1103",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Hot Deal | 5 Bedrooms | Atlantis View | Vacant",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5118786",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "LuxLiving Real Estate",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "fitted",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "استثمار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديقة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "5 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "garden",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جاهز",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "investment",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "5 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3606819,
            "ownerID": 1170775,
            "userExternalID": "1170775",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.201524,
                "lng": 55.269977
            },
            "geography": {
                "lat": 25.201524,
                "lng": 55.269977
            },
            "purpose": "for-sale",
            "price": 3050000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "DJDT-S-47680",
            "permitNumber": "7118034467",
            "projectNumber": null,
            "title": "Vacant | Serviced Apartment | Most Desired Layout",
            "title_l1": "شقة في العنوان ريزدينسز سكاي فيو 2 العنوان ريزيدنس سكاي فيو وسط مدينة دبي 1 غرف 3050000 درهم - 6305921",
            "externalID": "6305921",
            "slug": "vacant-serviced-apartment-most-desired-layout-6305921",
            "slug_l1": "vacant-serviced-apartment-most-desired-layout-6305921",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 10,
                    "level": 2,
                    "externalID": "6901",
                    "name": "Downtown Dubai",
                    "name_l1": "وسط مدينة دبي",
                    "slug": "/dubai/downtown-dubai",
                    "slug_l1": "/dubai/downtown-dubai",
                    "type": "neighbourhood"
                },
                {
                    "id": 1218,
                    "level": 3,
                    "externalID": "9287",
                    "name": "The Address Residence Sky View",
                    "name_l1": "العنوان ريزيدنس سكاي فيو",
                    "slug": "/dubai/downtown-dubai/the-address-residence-sky-view",
                    "slug_l1": "/dubai/downtown-dubai/the-address-residence-sky-view"
                },
                {
                    "id": 1219,
                    "level": 4,
                    "externalID": "10344",
                    "name": "The Address Sky View Tower 2",
                    "name_l1": "العنوان ريزدينسز سكاي فيو 2",
                    "slug": "/dubai/downtown-dubai/the-address-residence-sky-view/the-address-sky-view-tower-2",
                    "slug_l1": "/dubai/downtown-dubai/the-address-residence-sky-view/the-address-sky-view-tower-2",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1662384311,
            "updatedAt": 1662955643,
            "reactivatedAt": 1662384311,
            "rooms": 1,
            "baths": 2,
            "area": 97.64109504000001,
            "score": 91,
            "score_l1": 56,
            "coverPhoto": {
                "id": 267009173,
                "externalID": "129769542",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.128387367407413,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/267009173/90d854c4f1b84485998bd129b0e1d3a7",
                "main": true
            },
            "coverVideo": {
                "externalID": 399091,
                "title": null,
                "host": "youtube",
                "url": "https://youtu.be/_cG3WW81rw4",
                "orderIndex": 0
            },
            "photoCount": 23,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971503796870",
                "phone": "+97143994937",
                "whatsapp": "97143994937",
                "proxyMobile": "+971527368154",
                "phoneNumbers": [
                    "+97143994937"
                ],
                "mobileNumbers": [
                    "+971503796870"
                ]
            },
            "contactName": "Damir Jajetovic",
            "agency": {
                "id": 50,
                "objectID": 50,
                "name": "Exclusive Links Real Estate Brokers",
                "name_l1": "إكسيكلوسيف لينكس للوساطة العقارية",
                "externalID": "4677",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "600637",
                        "authority": "DED"
                    },
                    {
                        "number": "708",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 27679888,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/27679888/e70d3b8e299548d6b4b7b25199b8ecd2"
                },
                "slug": "exclusive-links-real-estate-brokers-4677",
                "slug_l1": "exclusive-links-real-estate-brokers-4677",
                "tier": 2,
                "roles": [],
                "active": true,
                "createdAt": "2017-12-14T16:27:49.779386+00:00",
                "commercialNumber": null
            },
            "hash": "2e4e856",
            "keywords": [
                "مفروش",
                "new",
                "صالة",
                "kitchen",
                "families",
                "mall",
                "مفروشة",
                "عوائل",
                "واسعة",
                "spacious",
                "terrace",
                "lounge",
                "balcony",
                "furnished",
                "جديدة اول ساكن",
                "غرفة واحدة",
                "فاخرة",
                "مطبخ",
                "جديدة",
                "دور",
                "اطلالة على البحر",
                "كبيرة",
                "بلكونة",
                "floor",
                "sea view",
                "ترس",
                "مؤثثة",
                "serviced",
                "1 bedroom",
                "مول",
                "ايجار جديد",
                "luxury",
                "مخدوم"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662618650.607066,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662640693.145049
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 613,
            "randBoostScore_l1": 613,
            "floorPlanID": null,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-18034371",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-18034467"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 613,
            "indyScore_l1": 613,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                267009173,
                267009179,
                267009182,
                267009188,
                267009190,
                267009191,
                267009195,
                267009198,
                267009201,
                267009210,
                267009215,
                267009220,
                267009225,
                267009228,
                267009231,
                267009234,
                267009237,
                267130894,
                267130895,
                267130896,
                267130897,
                267130898,
                267130899
            ],
            "hidePrice": false,
            "objectID": "3606819",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "DJDT-S-47680",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Vacant | Serviced Apartment | Most Desired Layout",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6305921",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Exclusive Links Real Estate Brokers",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صالة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "families",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "terrace",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "lounge",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفة واحدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اطلالة على البحر",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "sea view",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ترس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "serviced",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "1 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مخدوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3606722,
            "ownerID": 905572,
            "userExternalID": "905572",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.034131,
                "lng": 55.286168
            },
            "geography": {
                "lat": 25.034131,
                "lng": 55.286168
            },
            "purpose": "for-sale",
            "price": 1600000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "1035-Th-S-27059",
            "permitNumber": "6942956352",
            "projectNumber": null,
            "title": "Single Row TH | 2Bed+Maid | Casa Dora Serena",
            "title_l1": "تاون هاوس في كاسا دورا سيرينا 2 غرف 1600000 درهم - 6305836",
            "externalID": "6305836",
            "slug": "single-row-th-2bed-maid-casa-dora-serena-6305836",
            "slug_l1": "single-row-th-2bed-maid-casa-dora-serena-6305836",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 3534,
                    "level": 2,
                    "externalID": "8939",
                    "name": "Serena",
                    "name_l1": "سيرينا",
                    "slug": "/dubai/serena",
                    "slug_l1": "/dubai/serena",
                    "type": "neighbourhood"
                },
                {
                    "id": 3535,
                    "level": 3,
                    "externalID": "8940",
                    "name": "Casa Dora",
                    "name_l1": "كاسا دورا",
                    "slug": "/dubai/serena/casa-dora",
                    "slug_l1": "/dubai/serena/casa-dora",
                    "type": "neighbourhood"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 8,
                    "level": 1,
                    "externalID": "16",
                    "name": "Townhouses",
                    "name_l1": "تاون هاوس",
                    "slug": "townhouses",
                    "slug_l1": "townhouses",
                    "nameSingular": "Townhouse",
                    "nameSingular_l1": "تاون هاوس"
                }
            ],
            "createdAt": 1662383451,
            "updatedAt": 1662955639,
            "reactivatedAt": 1662383451,
            "rooms": 2,
            "baths": 3,
            "area": 176.23706688,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 266991616,
                "externalID": "129768051",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 7.441437174869348,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/266991616/8fdb57893bb04378a7a1ffc82d4f6ffc",
                "main": true
            },
            "photoCount": 23,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971563057968",
                "phone": "+97143682287",
                "whatsapp": "971563057968",
                "proxyMobile": "+971521045652",
                "proxyPhone": "+97142451759",
                "phoneNumbers": [
                    "+97143682287"
                ],
                "mobileNumbers": [
                    "+971563057968"
                ]
            },
            "contactName": "Fawad Ali",
            "agency": {
                "id": 40,
                "objectID": 40,
                "name": "Patriot Real Estate",
                "name_l1": "باتريوت للوساطة العقارية",
                "externalID": "7737",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "766741",
                        "authority": "DED"
                    },
                    {
                        "number": "17286",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 27679879,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/27679879/c7094e7e2f2c43a6a2f1c1bd65856171"
                },
                "slug": "patriot-real-estate-7737",
                "slug_l1": "patriot-real-estate-7737",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2017-12-14T16:27:46.391811+00:00",
                "commercialNumber": null
            },
            "hash": "2c8b5cf",
            "keywords": [
                "floor",
                "غرفتين نوم",
                "laundry",
                "2 غرفة",
                "kitchen",
                "maid",
                "خادمة",
                "استثمار",
                "balcony",
                "موقف سيارة",
                "مول",
                "parking",
                "غرفتين",
                "investment",
                "غسيل",
                "مع مسبح",
                "بلكونة",
                "mall",
                "دور",
                "2 bedroom",
                "with pool",
                "مطبخ"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662458572.206944,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662460391.514687
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 609,
            "randBoostScore_l1": 609,
            "floorPlanID": 938,
            "furnishingStatus": "unfurnished",
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-42956352",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-42956352"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 609,
            "indyScore_l1": 609,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                266991616,
                266991617,
                267040434,
                266991619,
                266991620,
                267056224,
                266991622,
                266991623,
                267387952,
                267056228,
                266991626,
                266991627,
                266991628,
                269183481,
                267387954,
                267040443,
                267405546,
                267056232,
                266991634,
                266991635,
                266991639,
                266991642,
                266991646
            ],
            "hidePrice": false,
            "objectID": "3606722",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1035-Th-S-27059",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Single Row TH | 2Bed+Maid | Casa Dora Serena",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6305836",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Patriot Real Estate",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "استثمار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "investment",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مع مسبح",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "with pool",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3246149,
            "ownerID": 678830,
            "userExternalID": "678830",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.085213,
                "lng": 55.295656
            },
            "geography": {
                "lat": 25.085213,
                "lng": 55.295656
            },
            "purpose": "for-sale",
            "price": 4199999,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "1116-Vl-S-0330",
            "permitNumber": "65141014991",
            "projectNumber": null,
            "title": "Fully upgraded | Beautiful landscaped garden  | Luxurious 5BR villa",
            "title_l1": "فیلا في فلل B ليفينغ ليجيندز دبي لاند 5 غرف 4199999 درهم - 5964008",
            "externalID": "5964008",
            "slug": "fully-upgraded-beautiful-landscaped-garden-luxurious-5br-villa-5964008",
            "slug_l1": "fully-upgraded-beautiful-landscaped-garden-luxurious-5br-villa-5964008",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 51,
                    "level": 2,
                    "externalID": "5746",
                    "name": "Dubailand",
                    "name_l1": "دبي لاند",
                    "slug": "/dubai/dubailand",
                    "slug_l1": "/dubai/dubailand",
                    "type": "neighbourhood"
                },
                {
                    "id": 52,
                    "level": 3,
                    "externalID": "8612",
                    "name": "Living Legends",
                    "name_l1": "ليفينغ ليجيندز",
                    "slug": "/dubai/dubailand/living-legend",
                    "slug_l1": "/dubai/dubailand/living-legend",
                    "type": "neighbourhood"
                },
                {
                    "id": 16929,
                    "level": 4,
                    "externalID": "12900",
                    "name": "B Villas",
                    "name_l1": "فلل B",
                    "slug": "/dubai/dubailand/living-legend/b-villas",
                    "slug_l1": "/dubai/dubailand/living-legend/b-villas"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 5,
                    "level": 1,
                    "externalID": "3",
                    "name": "Villas",
                    "name_l1": "فلل",
                    "slug": "villas",
                    "slug_l1": "villas",
                    "nameSingular": "Villa",
                    "nameSingular_l1": "فیلا"
                }
            ],
            "createdAt": 1652964066,
            "updatedAt": 1662962216,
            "reactivatedAt": 1652964066,
            "rooms": 5,
            "baths": 5,
            "area": 414.3475584,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 268431172,
                "externalID": "129949262",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 5.993773240604769,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/268431172/ea463ec4ca9a43c6a6edb7428f215861",
                "main": true
            },
            "photoCount": 26,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971558039088",
                "phone": "+97145522022",
                "whatsapp": "971558039088",
                "proxyMobile": "+971553554321",
                "phoneNumbers": [
                    "+97145522022"
                ],
                "mobileNumbers": [
                    "+971558039088"
                ]
            },
            "contactName": "Ivona Solcic",
            "agency": {
                "id": 29536515,
                "objectID": 29536515,
                "name": "Al Eassa Real Estate Est",
                "name_l1": "موسسة العيسى العقارية",
                "externalID": "8918",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "10725",
                        "authority": "RERA"
                    },
                    {
                        "number": "221454",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 75246936,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75246936/5739dbc6bb64409d9e61bd86fa2d8608"
                },
                "slug": "al-eassa-real-estate-est-8918",
                "slug_l1": "al-eassa-real-estate-est-8918",
                "tier": 3,
                "roles": [],
                "active": true,
                "createdAt": "2019-05-16T05:57:35.800098+00:00",
                "commercialNumber": null
            },
            "hash": "c464124",
            "keywords": [
                "families",
                "واسعة",
                "مجلس",
                "4 غرف نوم",
                "خادمة",
                "spacious",
                "kitchen",
                "كبيرة",
                "غسيل",
                "5 bedroom",
                "ارضي",
                "garden",
                "guest",
                "family",
                "مستقلة",
                "حديقة",
                "airport",
                "4 bedroom",
                "ground",
                "شيرنج",
                "5 غرف",
                "للعوائل",
                "مطار",
                "صالون",
                "floor",
                "ارضية",
                "طابق ارضي",
                "دور",
                "salon",
                "independent",
                "sharing",
                "مطبخ",
                "maid",
                "laundry",
                "عوائل",
                "4 غرف"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1658227163.349074,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662962216.82309
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 608,
            "randBoostScore_l1": 608,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 80,
            "indyScore_l1": 80,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                268431172,
                268431173,
                268430256,
                268431175,
                268431176,
                268431177,
                268431178,
                268430583,
                257030950,
                268430584,
                268431182,
                268430586,
                268430587,
                268431185,
                268431186,
                268431187,
                268430591,
                268431189,
                268431190,
                268431191,
                268431192,
                268431193,
                268430597,
                268431195,
                268430599,
                268431197
            ],
            "hidePrice": false,
            "objectID": "3246149",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "1116-Vl-S-0330",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Fully upgraded | Beautiful landscaped garden  | Luxurious 5BR villa",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5964008",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Al Eassa Real Estate Est",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "families",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 غرف نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "5 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "garden",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مستقلة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديقة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "airport",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ground",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شيرنج",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "5 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صالون",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضية",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "طابق ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "salon",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "independent",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "sharing",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3609173,
            "ownerID": 1159918,
            "userExternalID": "1159918",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.047046,
                "lng": 55.190178
            },
            "geography": {
                "lat": 25.047046,
                "lng": 55.190178
            },
            "purpose": "for-sale",
            "price": 3475000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "2986-Vl-S-0522",
            "permitNumber": "6511849300",
            "projectNumber": null,
            "title": "Upgraded | Corner Plot | Vacant Now",
            "title_l1": "فیلا في فلل ميدترينيان مثلث قرية الجميرا (JVT) 2 غرف 3475000 درهم - 6308040",
            "externalID": "6308040",
            "slug": "upgraded-corner-plot-vacant-now-6308040",
            "slug_l1": "upgraded-corner-plot-vacant-now-6308040",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 56,
                    "level": 2,
                    "externalID": "6893",
                    "name": "Jumeirah Village Triangle (JVT)",
                    "name_l1": "مثلث قرية الجميرا (JVT)",
                    "slug": "/dubai/jumeirah-village-triangle-jvt",
                    "slug_l1": "/dubai/jumeirah-village-triangle-jvt",
                    "type": "neighbourhood"
                },
                {
                    "id": 2310,
                    "level": 3,
                    "externalID": "9365",
                    "name": "Mediterranean Villas",
                    "name_l1": "فلل ميدترينيان",
                    "slug": "/dubai/jumeirah-village-triangle-jvt/mediterranean-villas",
                    "slug_l1": "/dubai/jumeirah-village-triangle-jvt/mediterranean-villas"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 5,
                    "level": 1,
                    "externalID": "3",
                    "name": "Villas",
                    "name_l1": "فلل",
                    "slug": "villas",
                    "slug_l1": "villas",
                    "nameSingular": "Villa",
                    "nameSingular_l1": "فیلا"
                }
            ],
            "createdAt": 1662451960,
            "updatedAt": 1662969626,
            "reactivatedAt": 1662451960,
            "rooms": 2,
            "baths": 2,
            "area": 249.9091776,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 268395838,
                "externalID": "129802172",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 5.999534746387776,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/268395838/35b02b64490e4f0cacc658c1011a7dd4",
                "main": true
            },
            "coverVideo": {
                "externalID": 398636,
                "title": null,
                "host": "youtube",
                "url": "https://youtu.be/kbYUJ1vPTqE",
                "orderIndex": 0
            },
            "photoCount": 16,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971585118300",
                "phone": "+971585118300",
                "whatsapp": "971585118300",
                "proxyMobile": "+971527286531",
                "phoneNumbers": [
                    "+971585118300"
                ],
                "mobileNumbers": [
                    "+971585118300"
                ]
            },
            "contactName": "Emma Jean",
            "agency": {
                "id": 29621446,
                "objectID": 29621446,
                "name": "Williams International Real Estate LLC",
                "name_l1": "ويليامز انترناشيونال العقارية ذ",
                "externalID": "11044",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "951444",
                        "authority": "DED"
                    },
                    {
                        "number": "26502",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 168393109,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/168393109/e92c56d4d49944bca58b100e0cbcdde4"
                },
                "slug": "williams-international-real-estate-llc-11044",
                "slug_l1": "williams-international-real-estate-llc-11044",
                "tier": 2,
                "roles": [],
                "active": true,
                "createdAt": "2021-11-23T07:52:44.295194+00:00",
                "commercialNumber": null
            },
            "hash": "1e966b6",
            "keywords": [
                "with a private pool",
                "مع مسبح",
                "عوائل",
                "ترس",
                "خادمة",
                "floor",
                "مع مسبح خاص",
                "طابق ارضي",
                "حديثة",
                "جديدة",
                "modern",
                "مجلس",
                "guest",
                "new",
                "دور",
                "ارضية",
                "مودرن",
                "family",
                "independent",
                "مستقلة",
                "مطبخ",
                "terrace",
                "ground",
                "ايجار جديد",
                "للعوائل",
                "maid",
                "private pool",
                "مسبح خاص",
                "حديقة",
                "ارضي",
                "kitchen",
                "جديدة اول ساكن",
                "garden"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662546682.344005,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662640866.387211
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 605,
            "randBoostScore_l1": 605,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {
                "dldPropertySK": "dld|mea|ae|tabu+ejari-5301785"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 605,
            "indyScore_l1": 605,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                268395838,
                267312672,
                267312673,
                267312674,
                268395842,
                267312676,
                267312677,
                267312678,
                268395846,
                267319747,
                267319750,
                267312682,
                267319752,
                267312684,
                267319755,
                267312686
            ],
            "hidePrice": false,
            "objectID": "3609173",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "2986-Vl-S-0522",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Upgraded | Corner Plot | Vacant Now",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6308040",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Williams International Real Estate LLC",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "with a private pool",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مع مسبح",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ترس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مع مسبح خاص",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "طابق ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضية",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "independent",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مستقلة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "terrace",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ground",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "private pool",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مسبح خاص",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديقة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "garden",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3604287,
            "ownerID": 680207,
            "userExternalID": "680207",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.094452946692,
                "lng": 55.308935107734
            },
            "geography": {
                "lat": 25.094452946692,
                "lng": 55.308935107734
            },
            "purpose": "for-sale",
            "price": 13000000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "L-196052",
            "permitNumber": "6510102060",
            "projectNumber": null,
            "title": "Large Plot | Vacant | D Type | 6 Bedroom",
            "title_l1": "فیلا في جاسمين ليف 4 جاسمين ليف البراري 6 غرف 13000000 درهم - 6303443",
            "externalID": "6303443",
            "slug": "large-plot-vacant-d-type-6-bedroom-6303443",
            "slug_l1": "large-plot-vacant-d-type-6-bedroom-6303443",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 29,
                    "level": 2,
                    "externalID": "6709",
                    "name": "Al Barari",
                    "name_l1": "البراري",
                    "slug": "/dubai/al-barari",
                    "slug_l1": "/dubai/al-barari",
                    "type": "neighbourhood"
                },
                {
                    "id": 30,
                    "level": 3,
                    "externalID": "9411",
                    "name": "Jasmine Leaf",
                    "name_l1": "جاسمين ليف",
                    "slug": "/dubai/al-barari/jasmine-leaf",
                    "slug_l1": "/dubai/al-barari/jasmine-leaf",
                    "type": "neighbourhood"
                },
                {
                    "id": 6399,
                    "level": 4,
                    "externalID": "9006",
                    "name": "Jasmine Leaf 4",
                    "name_l1": "جاسمين ليف 4",
                    "slug": "/dubai/al-barari/jasmine-leaf/jasmine-leaf-4",
                    "slug_l1": "/dubai/al-barari/jasmine-leaf/jasmine-leaf-4",
                    "type": "neighbourhood"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 5,
                    "level": 1,
                    "externalID": "3",
                    "name": "Villas",
                    "name_l1": "فلل",
                    "slug": "villas",
                    "slug_l1": "villas",
                    "nameSingular": "Villa",
                    "nameSingular_l1": "فیلا"
                }
            ],
            "createdAt": 1662359112,
            "updatedAt": 1662617472,
            "reactivatedAt": 1662359112,
            "rooms": 6,
            "baths": 7,
            "area": 1179.868608,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 267345672,
                "externalID": "129804997",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 6.724022379883024,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/267345672/ece2b0f367ec47aea1eb5da54484ba93",
                "main": true
            },
            "photoCount": 20,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971585980281",
                "phone": "+97144294444",
                "whatsapp": "971585980281",
                "proxyMobile": "+971588024207",
                "phoneNumbers": [
                    "+97144294444"
                ],
                "mobileNumbers": [
                    "+971585980281"
                ]
            },
            "contactName": "Mark Andersen",
            "agency": {
                "id": 29603658,
                "objectID": 29603658,
                "name": "Allsopp & Allsopp - JGE",
                "name_l1": "شركة ألسوب و ألسوب للوساطة العقارية - عقارات جميرا للجولف",
                "externalID": "10644",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "613873",
                        "authority": "DED"
                    },
                    {
                        "number": "1815",
                        "authority": "RERA"
                    },
                    {
                        "number": "802652",
                        "authority": "DED"
                    },
                    {
                        "number": "1062772",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 108128263,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/108128263/a516051bc06e4836a9a7486980c8d153"
                },
                "slug": "allsopp-allsopp-jge-10644",
                "slug_l1": "allsopp-allsopp-jge-10644",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2021-07-04T07:37:08.805004+00:00",
                "commercialNumber": null
            },
            "hash": "f7c74b6",
            "keywords": [
                "driver",
                "elevator",
                "6 bedroom",
                "maid",
                "مول",
                "خادمة",
                "6 غرف",
                "حديقة",
                "mall",
                "سائق",
                "مصعد",
                "garden"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662385719.723248,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662471219.612972
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 604,
            "randBoostScore_l1": 604,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 604,
            "indyScore_l1": 604,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                267345672,
                267345673,
                267345674,
                267345675,
                267345676,
                267345677,
                267345678,
                267345679,
                267345680,
                267345681,
                267345682,
                267345683,
                267345684,
                267345685,
                267345686,
                267345687,
                267345688,
                267345689,
                267345690,
                267345691
            ],
            "hidePrice": false,
            "objectID": "3604287",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "L-196052",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Large Plot | Vacant | D Type | 6 Bedroom",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6303443",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Allsopp & Allsopp - JGE",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "driver",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "elevator",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "6 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "6 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديقة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "سائق",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مصعد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "garden",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 2978786,
            "ownerID": 824639,
            "userExternalID": "824639",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.194911,
                "lng": 55.282549
            },
            "geography": {
                "lat": 25.194911,
                "lng": 55.282549
            },
            "purpose": "for-sale",
            "price": 3700000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "SUP141239",
            "permitNumber": "7117766927",
            "projectNumber": null,
            "title": "Vacant on Transfer | Burj & Fountain View",
            "title_l1": "شقة في العنوان رزيدنس فاونتن فيوز 2 العنوان رزيدنس فاونتن فيوز وسط مدينة دبي 2 غرف 3700000 درهم - 5718697",
            "externalID": "5718697",
            "slug": "vacant-on-transfer-burj-fountain-view-5718697",
            "slug_l1": "vacant-on-transfer-burj-fountain-view-5718697",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 10,
                    "level": 2,
                    "externalID": "6901",
                    "name": "Downtown Dubai",
                    "name_l1": "وسط مدينة دبي",
                    "slug": "/dubai/downtown-dubai",
                    "slug_l1": "/dubai/downtown-dubai",
                    "type": "neighbourhood"
                },
                {
                    "id": 1118,
                    "level": 3,
                    "externalID": "8200",
                    "name": "The Address Residence Fountain Views",
                    "name_l1": "العنوان رزيدنس فاونتن فيوز",
                    "slug": "/dubai/downtown-dubai/the-address-residence-fountain-views",
                    "slug_l1": "/dubai/downtown-dubai/the-address-residence-fountain-views",
                    "type": "condo-building"
                },
                {
                    "id": 1200,
                    "level": 4,
                    "externalID": "10230",
                    "name": "The Address Fountain Views 2",
                    "name_l1": "العنوان رزيدنس فاونتن فيوز 2",
                    "slug": "/dubai/downtown-dubai/the-address-residence-fountain-views/the-address-fountain-views-2",
                    "slug_l1": "/dubai/downtown-dubai/the-address-residence-fountain-views/the-address-fountain-views-2",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1644236583,
            "updatedAt": 1662950819,
            "reactivatedAt": 1644236583,
            "rooms": 2,
            "baths": 3,
            "area": 134.80231104,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 185410829,
                "externalID": "118080287",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 6.074167845607425,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/185410829/eda2fb0c803d4341a5633497549c61fa",
                "main": true
            },
            "coverVideo": {
                "externalID": 372494,
                "title": null,
                "host": "youtube",
                "url": "https://www.youtube.com/watch?v=83YzvH88k64",
                "orderIndex": 0
            },
            "photoCount": 16,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971585778542",
                "phone": "+97144294444",
                "whatsapp": "971585778542",
                "proxyMobile": "+971553393345",
                "phoneNumbers": [
                    "+97144294444"
                ],
                "mobileNumbers": [
                    "+971585778542"
                ]
            },
            "contactName": "Lee Weston",
            "agency": {
                "id": 29603656,
                "objectID": 29603656,
                "name": "Allsopp & Allsopp - Business Bay",
                "name_l1": "ألسوب و ألسوب- مبيعات الخليج التجاري",
                "externalID": "10642",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "613873",
                        "authority": "DED"
                    },
                    {
                        "number": "1815",
                        "authority": "RERA"
                    },
                    {
                        "number": "802652",
                        "authority": "DED"
                    },
                    {
                        "number": "1062772",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 108123704,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/108123704/bceea7cecf5146d29b2610fff7e20af4"
                },
                "slug": "allsopp-allsopp-business-bay-10642",
                "slug_l1": "allsopp-allsopp-business-bay-10642",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2021-07-04T07:37:08.711932+00:00",
                "commercialNumber": null
            },
            "hash": "8d5b104",
            "keywords": [
                "غرفتين نوم",
                "furnished",
                "2 bedroom",
                "balcony",
                "بلكونة",
                "مؤثثة",
                "مفروشة",
                "2 غرفة",
                "مجلس",
                "luxury",
                "guest",
                "مفروش",
                "غرفتين",
                "فاخرة"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1646567360.650503,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1660566376.452257
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 601,
            "randBoostScore_l1": 601,
            "floorPlanID": 7605,
            "furnishingStatus": "furnished",
            "extraFields": {
                "dldBuildingNK": "tabu-17766642",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-17766927"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 47,
            "indyScore_l1": 47,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                185410829,
                185410831,
                185410835,
                185410841,
                185410839,
                185410837,
                185410845,
                185410849,
                185410846,
                185410847,
                185410848,
                185410842,
                185410843,
                185410851,
                185410844,
                185410833
            ],
            "hidePrice": false,
            "objectID": "2978786",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "SUP141239",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Vacant on Transfer | Burj & Fountain View",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "5718697",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Allsopp & Allsopp - Business Bay",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "غرفتين نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3475902,
            "ownerID": 775829,
            "userExternalID": "775829",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.094402131674,
                "lng": 55.248033472087
            },
            "geography": {
                "lat": 25.094402131674,
                "lng": 55.248033472087
            },
            "purpose": "for-sale",
            "price": 5619999,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "TREO-S-16207",
            "permitNumber": "6531910557",
            "projectNumber": null,
            "title": "Road Facing || Type E3 || Notice served",
            "title_l1": "فیلا في سيدرا 1 فلل سيدرا دبي هيلز استيت 4 غرف 5619999 درهم - 6182283",
            "externalID": "6182283",
            "slug": "road-facing-type-e3-notice-served-6182283",
            "slug_l1": "road-facing-type-e3-notice-served-6182283",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 53,
                    "level": 2,
                    "externalID": "8288",
                    "name": "Dubai Hills Estate",
                    "name_l1": "دبي هيلز استيت",
                    "slug": "/dubai/dubai-hills-estate",
                    "slug_l1": "/dubai/dubai-hills-estate",
                    "type": "neighbourhood"
                },
                {
                    "id": 859,
                    "level": 3,
                    "externalID": "9187",
                    "name": "Sidra Villas",
                    "name_l1": "فلل سيدرا",
                    "slug": "/dubai/dubai-hills-estate/sidra-hills",
                    "slug_l1": "/dubai/dubai-hills-estate/sidra-hills"
                },
                {
                    "id": 1776,
                    "level": 4,
                    "externalID": "11667",
                    "name": "Sidra 1",
                    "name_l1": "سيدرا 1",
                    "slug": "/dubai/dubai-hills-estate/sidra-villas/sidra-1",
                    "slug_l1": "/dubai/dubai-hills-estate/sidra-villas/sidra-1",
                    "type": "neighbourhood"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 5,
                    "level": 1,
                    "externalID": "3",
                    "name": "Villas",
                    "name_l1": "فلل",
                    "slug": "villas",
                    "slug_l1": "villas",
                    "nameSingular": "Villa",
                    "nameSingular_l1": "فیلا"
                }
            ],
            "createdAt": 1659018307,
            "updatedAt": 1662101866,
            "reactivatedAt": 1659018307,
            "rooms": 4,
            "baths": 4,
            "area": 327.29740992,
            "score": 98,
            "score_l1": 63,
            "coverPhoto": {
                "id": 246541795,
                "externalID": "127614757",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 8.52696408916637,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/246541795/5f2fdec5117e4332aa8a5f05855add35",
                "main": true
            },
            "coverVideo": {
                "externalID": 390869,
                "title": null,
                "host": "youtube",
                "url": "https://youtu.be/OmtzB2xmtOY",
                "orderIndex": 0
            },
            "photoCount": 18,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971504295911",
                "phone": "+97144364055",
                "whatsapp": "971504295911",
                "proxyMobile": "+971528455235",
                "phoneNumbers": [
                    "+97144364055"
                ],
                "mobileNumbers": [
                    "+971504295911"
                ]
            },
            "contactName": "Chris-lieb Van Wyk",
            "agency": {
                "id": 29549604,
                "objectID": 29549604,
                "name": "Treo Homes",
                "name_l1": "تريو هومز",
                "externalID": "9237",
                "product": "featured",
                "productScore": 1,
                "licenses": [
                    {
                        "number": "790494",
                        "authority": "DED"
                    },
                    {
                        "number": "19898",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 82639262,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/82639262/40f8ccfe1cfd41aba887f5acdb14c578"
                },
                "slug": "treo-homes-9237",
                "slug_l1": "treo-homes-9237",
                "tier": 2,
                "roles": [],
                "active": true,
                "createdAt": "2019-11-18T12:57:40.684142+00:00",
                "commercialNumber": null
            },
            "hash": "872e113",
            "keywords": [
                "مشتركة",
                "شيرنج",
                "4 غرف نوم",
                "shared",
                "4 غرف",
                "4 bedroom"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1659214081.912857,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1659442792.597812
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 600,
            "randBoostScore_l1": 600,
            "floorPlanID": 34483,
            "furnishingStatus": "unfurnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 228,
            "indyScore_l1": 228,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                246541795,
                246541796,
                246541797,
                246541798,
                246559635,
                246559636,
                246559637,
                246559638,
                246559639,
                246559640,
                246559641,
                246559642,
                246559643,
                246559644,
                246559645,
                246559646,
                246559647,
                246559648
            ],
            "hidePrice": false,
            "objectID": "3475902",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "TREO-S-16207",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Road Facing || Type E3 || Notice served",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6182283",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Treo Homes",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مشتركة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "شيرنج",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 غرف نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "shared",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3583795,
            "ownerID": 1892872,
            "userExternalID": "1892872",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.046923,
                "lng": 55.190087
            },
            "geography": {
                "lat": 25.046923,
                "lng": 55.190087
            },
            "purpose": "for-sale",
            "price": 1650000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "2986-Th-S-0507",
            "permitNumber": "6511768500",
            "projectNumber": null,
            "title": "Quiet Location | Park Backing | Vacant On Transfer",
            "title_l1": "تاون هاوس في تاون هاوس طراز البحر المتوسط مثلث قرية الجميرا (JVT) 1 غرف 1650000 درهم - 6285311",
            "externalID": "6285311",
            "slug": "quiet-location-park-backing-vacant-on-transfer-6285311",
            "slug_l1": "quiet-location-park-backing-vacant-on-transfer-6285311",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 56,
                    "level": 2,
                    "externalID": "6893",
                    "name": "Jumeirah Village Triangle (JVT)",
                    "name_l1": "مثلث قرية الجميرا (JVT)",
                    "slug": "/dubai/jumeirah-village-triangle-jvt",
                    "slug_l1": "/dubai/jumeirah-village-triangle-jvt",
                    "type": "neighbourhood"
                },
                {
                    "id": 2784,
                    "level": 3,
                    "externalID": "9376",
                    "name": "Mediterranean Townhouses",
                    "name_l1": "تاون هاوس طراز البحر المتوسط",
                    "slug": "/dubai/jumeirah-village-triangle-jvt/mediterranean-townhouses",
                    "slug_l1": "/dubai/jumeirah-village-triangle-jvt/mediterranean-townhouses"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 8,
                    "level": 1,
                    "externalID": "16",
                    "name": "Townhouses",
                    "name_l1": "تاون هاوس",
                    "slug": "townhouses",
                    "slug_l1": "townhouses",
                    "nameSingular": "Townhouse",
                    "nameSingular_l1": "تاون هاوس"
                }
            ],
            "createdAt": 1661838673,
            "updatedAt": 1662955331,
            "reactivatedAt": 1661838673,
            "rooms": 1,
            "baths": 1,
            "area": 151.98937344,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 268182620,
                "externalID": "129408343",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 7.151244196611346,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/268182620/f0427026dca94070891803a29f9db025",
                "main": true
            },
            "coverVideo": {
                "externalID": 397181,
                "title": null,
                "host": "youtube",
                "url": "https://youtu.be/R750Cwj18UA",
                "orderIndex": 0
            },
            "photoCount": 15,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971585402750",
                "phone": "+971585402750",
                "whatsapp": "971585402750",
                "phoneNumbers": [
                    "+971585402750"
                ],
                "mobileNumbers": [
                    "+971585402750"
                ]
            },
            "contactName": "Mark McCabe",
            "agency": {
                "id": 29621446,
                "objectID": 29621446,
                "name": "Williams International Real Estate LLC",
                "name_l1": "ويليامز انترناشيونال العقارية ذ",
                "externalID": "11044",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "951444",
                        "authority": "DED"
                    },
                    {
                        "number": "26502",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 168393109,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/168393109/e92c56d4d49944bca58b100e0cbcdde4"
                },
                "slug": "williams-international-real-estate-llc-11044",
                "slug_l1": "williams-international-real-estate-llc-11044",
                "tier": 2,
                "roles": [],
                "active": true,
                "createdAt": "2021-11-23T07:52:44.295194+00:00",
                "commercialNumber": null
            },
            "hash": "f8ea43e",
            "keywords": [
                "طابق ارضي",
                "family",
                "kitchen",
                "furnished",
                "للعوائل",
                "استثمار",
                "garden",
                "ارضية",
                "حديثة",
                "investment",
                "مجلس",
                "terrace",
                "lounge",
                "modern",
                "موقف سيارة",
                "مودرن",
                "عوائل",
                "مفروش",
                "مفروشة",
                "مطبخ",
                "مؤثثة",
                "دور",
                "ترس",
                "ارضي",
                "floor",
                "ground",
                "صالة",
                "guest",
                "حديقة",
                "parking"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1661932768.732901,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662015180.925842
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 576,
            "randBoostScore_l1": 576,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {
                "dldPropertySK": "dld|mea|ae|tabu+ejari-5302059"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 509,
            "indyScore_l1": 509,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                268182620,
                263745330,
                266408951,
                263745332,
                263745333,
                263745334,
                263745335,
                268613855,
                266766991,
                265522785,
                263743351,
                263745345,
                263743353,
                263743355,
                263743356
            ],
            "hidePrice": false,
            "objectID": "3583795",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "2986-Th-S-0507",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Quiet Location | Park Backing | Vacant On Transfer",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6285311",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Williams International Real Estate LLC",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "طابق ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "استثمار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "garden",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضية",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "investment",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "terrace",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "lounge",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "modern",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مودرن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ترس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ground",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صالة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديقة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3604812,
            "ownerID": 847278,
            "userExternalID": "847278",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.064122791021,
                "lng": 55.191117525101
            },
            "geography": {
                "lat": 25.064122791021,
                "lng": 55.191117525101
            },
            "purpose": "for-sale",
            "price": 2725000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "ES-10520",
            "permitNumber": "6914496300",
            "projectNumber": null,
            "title": "Corner Plot Type 3E Vacant Now Springs 7",
            "title_l1": "فیلا في الينابيع 7 الينابيع 3 غرف 2725000 درهم - 6303864",
            "externalID": "6303864",
            "slug": "corner-plot-type-3e-vacant-now-springs-7-6303864",
            "slug_l1": "corner-plot-type-3e-vacant-now-springs-7-6303864",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 159,
                    "level": 2,
                    "externalID": "5245",
                    "name": "The Springs",
                    "name_l1": "الينابيع",
                    "slug": "/dubai/the-springs",
                    "slug_l1": "/dubai/the-springs",
                    "type": "neighbourhood"
                },
                {
                    "id": 844,
                    "level": 3,
                    "externalID": "7955",
                    "name": "The Springs 7",
                    "name_l1": "الينابيع 7",
                    "slug": "/dubai/the-springs/the-springs-7",
                    "slug_l1": "/dubai/the-springs/the-springs-7",
                    "type": "neighbourhood"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 5,
                    "level": 1,
                    "externalID": "3",
                    "name": "Villas",
                    "name_l1": "فلل",
                    "slug": "villas",
                    "slug_l1": "villas",
                    "nameSingular": "Villa",
                    "nameSingular_l1": "فیلا"
                }
            ],
            "createdAt": 1662363555,
            "updatedAt": 1662622754,
            "reactivatedAt": 1662363555,
            "rooms": 3,
            "baths": 2,
            "area": 208.66022784,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 266726255,
                "externalID": "129734725",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 6.256318210047228,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/266726255/8cb4671eaa7a463d90d74e6ec12939be",
                "main": true
            },
            "photoCount": 13,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971552347295",
                "phone": "+97143069999",
                "whatsapp": "971552347295",
                "proxyMobile": "+971522065098",
                "phoneNumbers": [
                    "+97143069999"
                ],
                "mobileNumbers": [
                    "+971552347295"
                ]
            },
            "contactName": "Tom Rees",
            "agency": {
                "id": 28,
                "objectID": 28,
                "name": "Espace Real Estate",
                "name_l1": "إسباس للوساطة العقارية",
                "externalID": "2938",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "604270",
                        "authority": "DED"
                    },
                    {
                        "number": "936",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 27679880,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/27679880/69f1e0a8ad1b41829543bb3297dc6b47"
                },
                "slug": "espace-real-estate-2938",
                "slug_l1": "espace-real-estate-2938",
                "tier": 2,
                "roles": [],
                "active": true,
                "createdAt": "2017-12-14T16:27:41.892454+00:00",
                "commercialNumber": null
            },
            "hash": "cdcff6d",
            "keywords": [
                "floor",
                "جاهزة",
                "جديدة",
                "غسيل",
                "ready",
                "balcony",
                "3 غرف",
                "مجلس",
                "guest",
                "3 غرف جديدة",
                "new",
                "دور",
                "3 bedroom",
                "مطبخ",
                "laundry",
                "spacious",
                "ايجار جديد",
                "ثلاثه غرفة",
                "بلكونة",
                "واسعة",
                "حديقة",
                "kitchen",
                "ثلاث غرف",
                "كبيرة",
                "جديدة اول ساكن",
                "garden"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662374438.674535,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662450635.89354
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 572,
            "randBoostScore_l1": 572,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 572,
            "indyScore_l1": 572,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                266726255,
                266726256,
                266726257,
                266726258,
                266726259,
                266726260,
                266726261,
                266726262,
                266726263,
                266726264,
                266726265,
                266726266,
                266726267
            ],
            "hidePrice": false,
            "objectID": "3604812",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "ES-10520",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Corner Plot Type 3E Vacant Now Springs 7",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6303864",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Espace Real Estate",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جاهزة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ready",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ثلاثه غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديقة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ثلاث غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "garden",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3596708,
            "ownerID": 1919368,
            "userExternalID": "1919368",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.201669,
                "lng": 55.263344
            },
            "geography": {
                "lat": 25.201669,
                "lng": 55.263344
            },
            "purpose": "for-sale",
            "price": 3960486,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "B-AS-20810",
            "permitNumber": "7133214522",
            "projectNumber": null,
            "title": "Fully Furnished | The Perfect Holiday Home",
            "title_l1": "شقة في بناية 18B سيتي ووك الوصل 2 غرف 3960486 درهم - 6296689",
            "externalID": "6296689",
            "slug": "fully-furnished-the-perfect-holiday-home-6296689",
            "slug_l1": "fully-furnished-the-perfect-holiday-home-6296689",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 914,
                    "level": 2,
                    "externalID": "5654",
                    "name": "Al Wasl",
                    "name_l1": "الوصل",
                    "slug": "/dubai/al-wasl",
                    "slug_l1": "/dubai/al-wasl",
                    "type": "neighbourhood"
                },
                {
                    "id": 24,
                    "level": 3,
                    "externalID": "8733",
                    "name": "City Walk",
                    "name_l1": "سيتي ووك",
                    "slug": "/dubai/al-wasl/city-walk",
                    "slug_l1": "/dubai/al-wasl/city-walk",
                    "type": "neighbourhood"
                },
                {
                    "id": 16115,
                    "level": 4,
                    "externalID": "12248",
                    "name": "Building 18B",
                    "name_l1": "بناية 18B",
                    "slug": "/dubai/al-wasl/city-walk/building-18b",
                    "slug_l1": "/dubai/al-wasl/city-walk/building-18b",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1662106386,
            "updatedAt": 1662967054,
            "reactivatedAt": 1662106386,
            "rooms": 2,
            "baths": 4,
            "area": 170.29127232,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 265564324,
                "externalID": "129615367",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.744912342537987,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/265564324/06bb02b2eaba4a57b8fa602ccbd4abfd",
                "main": true
            },
            "photoCount": 11,
            "videoCount": 0,
            "panoramaCount": 1,
            "phoneNumber": {
                "mobile": "+97143691700",
                "phone": "+97143691700",
                "phoneNumbers": [
                    "+97143691700"
                ],
                "mobileNumbers": [
                    "+97143691700"
                ]
            },
            "contactName": "Shehaab Alfalasi",
            "agency": {
                "id": 29583353,
                "objectID": 29583353,
                "name": "fäm Properties - Branch 1",
                "name_l1": "الفرع 1  فام العقارية",
                "externalID": "9953",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "613164",
                        "authority": "DED"
                    },
                    {
                        "number": "1858",
                        "authority": "RERA"
                    },
                    {
                        "number": "718828",
                        "authority": "DED"
                    },
                    {
                        "number": "839535",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 96047095,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/96047095/b7f880a25e9e4eabb9f6d6450f6a02bd"
                },
                "slug": "fam-properties-branch-1-9953",
                "slug_l1": "fam-properties-branch-1-9953",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2020-09-27T03:02:11.902065+00:00",
                "commercialNumber": null
            },
            "hash": "b3ad7c5",
            "keywords": [
                "مخدوم",
                "خادمة",
                "مؤثثة",
                "موقف سيارة",
                "floor",
                "مفروش",
                "mall",
                "balcony",
                "مول",
                "investment",
                "استثمار",
                "furnished",
                "دور",
                "مفروشة",
                "مطبخ",
                "laundry",
                "فاخرة",
                "maid",
                "بلكونة",
                "parking",
                "luxury",
                "kitchen",
                "غسيل",
                "serviced"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662724732.415535,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662967054.045589
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 566,
            "randBoostScore_l1": 566,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {
                "dldBuildingNK": "tabu-33214414",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-33214522"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 566,
            "indyScore_l1": 566,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                265564324,
                265564325,
                265564326,
                265564327,
                265564328,
                265564329,
                265564330,
                265564331,
                265564332,
                265564333,
                265564334
            ],
            "hidePrice": false,
            "objectID": "3596708",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "B-AS-20810",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Fully Furnished | The Perfect Holiday Home",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6296689",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "fäm Properties - Branch 1",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مخدوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "investment",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "استثمار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "serviced",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3398140,
            "ownerID": 1876843,
            "userExternalID": "1876843",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.075237999976,
                "lng": 55.354553154656
            },
            "geography": {
                "lat": 25.075237999976,
                "lng": 55.354553154656
            },
            "purpose": "for-sale",
            "price": 1750000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "L-193785",
            "permitNumber": "65175183776",
            "projectNumber": null,
            "title": "Great community | 3 Bedroom | Single Row",
            "title_l1": "تاون هاوس في امارانتا 3 امارانتا فيلانوفا دبي لاند 3 غرف 1750000 درهم - 6110093",
            "externalID": "6110093",
            "slug": "great-community-3-bedroom-single-row-6110093",
            "slug_l1": "great-community-3-bedroom-single-row-6110093",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 51,
                    "level": 2,
                    "externalID": "5746",
                    "name": "Dubailand",
                    "name_l1": "دبي لاند",
                    "slug": "/dubai/dubailand",
                    "slug_l1": "/dubai/dubailand",
                    "type": "neighbourhood"
                },
                {
                    "id": 720,
                    "level": 3,
                    "externalID": "9035",
                    "name": "Villanova",
                    "name_l1": "فيلانوفا",
                    "slug": "/dubai/dubailand/villanova",
                    "slug_l1": "/dubai/dubailand/villanova",
                    "type": "neighbourhood"
                },
                {
                    "id": 1123,
                    "level": 4,
                    "externalID": "9107",
                    "name": "Amaranta",
                    "name_l1": "امارانتا",
                    "slug": "/dubai/dubailand/villanova/amaranta",
                    "slug_l1": "/dubai/dubailand/villanova/amaranta",
                    "type": "neighbourhood"
                },
                {
                    "id": 75949,
                    "level": 5,
                    "externalID": "14118",
                    "name": "Amaranta 3",
                    "name_l1": "امارانتا 3",
                    "slug": "/dubai/dubailand/villanova/amaranta/amaranta-3",
                    "slug_l1": "/dubai/dubailand/villanova/amaranta/amaranta-3",
                    "type": "neighbourhood"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 8,
                    "level": 1,
                    "externalID": "16",
                    "name": "Townhouses",
                    "name_l1": "تاون هاوس",
                    "slug": "townhouses",
                    "slug_l1": "townhouses",
                    "nameSingular": "Townhouse",
                    "nameSingular_l1": "تاون هاوس"
                }
            ],
            "createdAt": 1657005280,
            "updatedAt": 1662111765,
            "reactivatedAt": 1657005280,
            "rooms": 3,
            "baths": 3,
            "area": 179.02415808,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 253986969,
                "externalID": "128365944",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 6.715561986150561,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/253986969/34e180d8a4f64e75b7014dbd556479f0",
                "main": true
            },
            "coverVideo": {
                "externalID": 389744,
                "title": null,
                "host": "youtube",
                "url": "https://www.youtube.com/watch?v=DKlIHiDox1E",
                "orderIndex": 0
            },
            "photoCount": 11,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971585338249",
                "phone": "+97144294444",
                "phoneNumbers": [
                    "+97144294444"
                ],
                "mobileNumbers": [
                    "+971585338249"
                ]
            },
            "contactName": "Kirsty Rands",
            "agency": {
                "id": 29651683,
                "objectID": 29651683,
                "name": "Allsopp & Allsopp - Motor City Sales",
                "name_l1": "آلسوب و آلسوب للوساطة العقارية",
                "externalID": "100844",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "613873",
                        "authority": "DED"
                    },
                    {
                        "number": "1815",
                        "authority": "RERA"
                    },
                    {
                        "number": "802652",
                        "authority": "DED"
                    },
                    {
                        "number": "1062772",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 232082988,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/232082988/1ceb717892d249c6adbd7515036d712b"
                },
                "slug": "allsopp-allsopp-motor-city-sales-100844",
                "slug_l1": "allsopp-allsopp-motor-city-sales-100844",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2022-06-28T11:34:44.802820+00:00",
                "commercialNumber": null
            },
            "hash": "58edf8a",
            "keywords": [
                "3 bedroom",
                "للعوائل",
                "maid",
                "ساكن اول",
                "عوائل",
                "اول ساكن",
                "خادمة",
                "ground",
                "3 غرف",
                "استثمار",
                "موقف سيارة",
                "kitchen",
                "مطبخ",
                "جديدة اول ساكن",
                "جديدة",
                "ارضية",
                "طابق ارضي",
                "ارضي",
                "with pool",
                "brand new",
                "مع مسبح",
                "family",
                "parking",
                "ايجار جديد",
                "ثلاث غرف",
                "ثلاثه غرفة",
                "garden",
                "3 غرف جديدة",
                "new",
                "حديقة",
                "investment"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1657616090.370854,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1659082105.008271
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 562,
            "randBoostScore_l1": 562,
            "floorPlanID": null,
            "furnishingStatus": "unfurnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 142,
            "indyScore_l1": 142,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                253986969,
                241023892,
                253986972,
                253986975,
                241023894,
                241023895,
                241023893,
                253986978,
                234573693,
                234573694,
                234573695
            ],
            "hidePrice": false,
            "objectID": "3398140",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "L-193785",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Great community | 3 Bedroom | Single Row",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6110093",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Allsopp & Allsopp - Motor City Sales",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "3 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ساكن اول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ground",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "استثمار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضية",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "طابق ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "with pool",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "brand new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مع مسبح",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ثلاث غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ثلاثه غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "garden",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديقة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "investment",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3600226,
            "ownerID": 340195,
            "userExternalID": "340195",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.127874,
                "lng": 55.355857
            },
            "geography": {
                "lat": 25.127874,
                "lng": 55.355857
            },
            "purpose": "for-sale",
            "price": 1200000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "108-Ap-S-11409",
            "permitNumber": "71100008121",
            "projectNumber": null,
            "title": "Villa View | Semi Furnished | Vacant | High Floor | Brand New",
            "title_l1": "شقة في جرنلاند ريزيدنس دستركت 11 مدينة محمد بن راشد 2 غرف 1200000 درهم - 6299343",
            "externalID": "6299343",
            "slug": "villa-view-semi-furnished-vacant-high-floor-brand-new-6299343",
            "slug_l1": "villa-view-semi-furnished-vacant-high-floor-brand-new-6299343",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 302,
                    "level": 2,
                    "externalID": "8256",
                    "name": "Mohammed Bin Rashid City",
                    "name_l1": "مدينة محمد بن راشد",
                    "slug": "/dubai/mohammad-bin-rashid-city",
                    "slug_l1": "/dubai/mohammad-bin-rashid-city",
                    "type": "neighbourhood"
                },
                {
                    "id": 371,
                    "level": 3,
                    "externalID": "8573",
                    "name": "District 11",
                    "name_l1": "دستركت 11",
                    "slug": "/dubai/mohammad-bin-rashid-city/district-11",
                    "slug_l1": "/dubai/mohammad-bin-rashid-city/district-11"
                },
                {
                    "id": 2139,
                    "level": 4,
                    "externalID": "11293",
                    "name": "Grenland Residence",
                    "name_l1": "جرنلاند ريزيدنس",
                    "slug": "/dubai/mohammad-bin-rashid-city/district-11/grenland-residence",
                    "slug_l1": "/dubai/mohammad-bin-rashid-city/district-11/grenland-residence",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1662192779,
            "updatedAt": 1662971913,
            "reactivatedAt": 1662192779,
            "rooms": 2,
            "baths": 3,
            "area": 131.17909248,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 266967770,
                "externalID": "129658507",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 8.660123365732943,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/266967770/345b4f7a45cc42dd852566623f75c20c",
                "main": true
            },
            "photoCount": 17,
            "videoCount": 0,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971551007971",
                "phone": "+971506538711",
                "whatsapp": "971551007971",
                "proxyMobile": "+971521045753",
                "phoneNumbers": [
                    "+971506538711"
                ],
                "mobileNumbers": [
                    "+971551007971"
                ]
            },
            "contactName": "Waqar Bukhari",
            "agency": {
                "id": 83,
                "objectID": 83,
                "name": "AIM Properties",
                "name_l1": "آيم للعقارات",
                "externalID": "6775",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "12454",
                        "authority": "RERA"
                    },
                    {
                        "number": "695029",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 27681386,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/27681386/45d1a28520e2443097e4e92072a80904"
                },
                "slug": "aim-properties-6775",
                "slug_l1": "aim-properties-6775",
                "tier": 2,
                "roles": [],
                "active": true,
                "createdAt": "2017-12-14T16:28:00.831945+00:00",
                "commercialNumber": null
            },
            "hash": "f3eda37",
            "keywords": [
                "مؤثثة",
                "موقف سيارة",
                "floor",
                "مفروش",
                "طابق ارضي",
                "جديدة",
                "اول ساكن",
                "investment",
                "brand new",
                "new",
                "استثمار",
                "furnished",
                "دور",
                "ارضية",
                "مفروشة",
                "فاخرة",
                "ground",
                "ايجار جديد",
                "ساكن اول",
                "parking",
                "luxury",
                "ارضي",
                "جديدة اول ساكن"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662444222.562786,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662965899.586887
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 561,
            "randBoostScore_l1": 561,
            "floorPlanID": 3174,
            "furnishingStatus": "unfurnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 561,
            "indyScore_l1": 561,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                266967770,
                266917114,
                266967795,
                266037450,
                269559255,
                266037454,
                266967821,
                266037459,
                269150870,
                266037463,
                266037464,
                266967857,
                269559259,
                269150874,
                266077638,
                269150875,
                266037477
            ],
            "hidePrice": false,
            "objectID": "3600226",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "108-Ap-S-11409",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Villa View | Semi Furnished | Vacant | High Floor | Brand New",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6299343",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "AIM Properties",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "طابق ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "investment",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "brand new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "استثمار",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضية",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "فاخرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ground",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ساكن اول",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "luxury",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ارضي",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3597087,
            "ownerID": 1159916,
            "userExternalID": "1159916",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.112154,
                "lng": 55.137438
            },
            "geography": {
                "lat": 25.112154,
                "lng": 55.137438
            },
            "purpose": "for-sale",
            "price": 6700000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "2986-Ap-S-0517",
            "permitNumber": "7125954000",
            "projectNumber": null,
            "title": "3 Bedroom | Fully Upgraded | Furnished",
            "title_l1": "شقة في أوشيانا الكاريبي أوشيانا نخلة جميرا 3 غرف 6700000 درهم - 6297076",
            "externalID": "6297076",
            "slug": "3-bedroom-fully-upgraded-furnished-6297076",
            "slug_l1": "3-bedroom-fully-upgraded-furnished-6297076",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 14,
                    "level": 2,
                    "externalID": "5460",
                    "name": "Palm Jumeirah",
                    "name_l1": "نخلة جميرا",
                    "slug": "/dubai/palm-jumeirah",
                    "slug_l1": "/dubai/palm-jumeirah",
                    "type": "neighbourhood"
                },
                {
                    "id": 80,
                    "level": 3,
                    "externalID": "5461",
                    "name": "Oceana",
                    "name_l1": "أوشيانا",
                    "slug": "/dubai/palm-jumeirah/oceana",
                    "slug_l1": "/dubai/palm-jumeirah/oceana"
                },
                {
                    "id": 981,
                    "level": 4,
                    "externalID": "8722",
                    "name": "Oceana Caribbean",
                    "name_l1": "أوشيانا الكاريبي",
                    "slug": "/dubai/palm-jumeirah/oceana/oceana-caribbean",
                    "slug_l1": "/dubai/palm-jumeirah/oceana/oceana-caribbean",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1662113556,
            "updatedAt": 1662967171,
            "reactivatedAt": 1662113556,
            "rooms": 3,
            "baths": 3,
            "area": 211.8189312,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 265618164,
                "externalID": "129621411",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.713278471439025,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/265618164/5e04e90407a24cf984ab874cec875618",
                "main": true
            },
            "coverVideo": {
                "externalID": 398009,
                "title": null,
                "host": "youtube",
                "url": "https://youtu.be/cryAkPl0V7g",
                "orderIndex": 0
            },
            "photoCount": 18,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971544550589",
                "phone": "+971544550589",
                "proxyMobile": "+971525173978",
                "phoneNumbers": [
                    "+971544550589"
                ],
                "mobileNumbers": [
                    "+971544550589"
                ]
            },
            "contactName": "Jonathan Caunce",
            "agency": {
                "id": 29621446,
                "objectID": 29621446,
                "name": "Williams International Real Estate LLC",
                "name_l1": "ويليامز انترناشيونال العقارية ذ",
                "externalID": "11044",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "951444",
                        "authority": "DED"
                    },
                    {
                        "number": "26502",
                        "authority": "RERA"
                    }
                ],
                "logo": {
                    "id": 168393109,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/168393109/e92c56d4d49944bca58b100e0cbcdde4"
                },
                "slug": "williams-international-real-estate-llc-11044",
                "slug_l1": "williams-international-real-estate-llc-11044",
                "tier": 2,
                "roles": [],
                "active": true,
                "createdAt": "2021-11-23T07:52:44.295194+00:00",
                "commercialNumber": null
            },
            "hash": "4a277cb",
            "keywords": [
                "مؤثثة",
                "sea view",
                "floor",
                "lounge",
                "renovated",
                "مفروش",
                "جديدة",
                "3 غرف",
                "مجلس",
                "guest",
                "3 غرف جديدة",
                "new",
                "صالة",
                "furnished",
                "دور",
                "مفروشة",
                "3 bedroom",
                "مجدده",
                "مطبخ",
                "اطلالة على البحر",
                "ايجار جديد",
                "ثلاثه غرفة",
                "kitchen",
                "ثلاث غرف",
                "جديدة اول ساكن"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662380585.351964,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662450884.71364
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 548,
            "randBoostScore_l1": 548,
            "floorPlanID": null,
            "furnishingStatus": null,
            "extraFields": {
                "dldBuildingNK": "tabu+ejari-259508",
                "dldPropertySK": "dld|mea|ae|tabu+ejari-259540"
            },
            "type": "property",
            "hasTransactionHistory": true,
            "cityLevelScore": 1,
            "indyScore": 548,
            "indyScore_l1": 548,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                265618164,
                269574479,
                265618166,
                265618167,
                267659548,
                265618169,
                267297923,
                265618171,
                266949679,
                266949680,
                266949681,
                266949682,
                266949683,
                266949684,
                266949685,
                265618186,
                266949687,
                265618192
            ],
            "hidePrice": false,
            "objectID": "3597087",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "2986-Ap-S-0517",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "3 Bedroom | Fully Upgraded | Furnished",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6297076",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Williams International Real Estate LLC",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "مؤثثة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "sea view",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "floor",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "lounge",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "renovated",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروش",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجلس",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "guest",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 غرف جديدة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "new",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صالة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "furnished",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "دور",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مفروشة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "3 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مجدده",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "اطلالة على البحر",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ايجار جديد",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ثلاثه غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ثلاث غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "جديدة اول ساكن",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3597024,
            "ownerID": 1087850,
            "userExternalID": "1087850",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.021877,
                "lng": 55.27038
            },
            "geography": {
                "lat": 25.021877,
                "lng": 55.27038
            },
            "purpose": "for-sale",
            "price": 4850000,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "L-192059",
            "permitNumber": "65277507099",
            "projectNumber": null,
            "title": "Exclusive | 4 Beds w Maids | Private Pool",
            "title_l1": "فیلا في راحات مدن 4 غرف 4850000 درهم - 6296957",
            "externalID": "6296957",
            "slug": "exclusive-4-beds-w-maids-private-pool-6296957",
            "slug_l1": "exclusive-4-beds-w-maids-private-pool-6296957",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 130,
                    "level": 2,
                    "externalID": "8230",
                    "name": "Mudon",
                    "name_l1": "مدن",
                    "slug": "/dubai/mudon",
                    "slug_l1": "/dubai/mudon",
                    "type": "neighbourhood"
                },
                {
                    "id": 3227,
                    "level": 3,
                    "externalID": "11434",
                    "name": "Rahat",
                    "name_l1": "راحات",
                    "slug": "/dubai/mudon/rahat",
                    "slug_l1": "/dubai/mudon/rahat",
                    "type": "neighbourhood"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 5,
                    "level": 1,
                    "externalID": "3",
                    "name": "Villas",
                    "name_l1": "فلل",
                    "slug": "villas",
                    "slug_l1": "villas",
                    "nameSingular": "Villa",
                    "nameSingular_l1": "فیلا"
                }
            ],
            "createdAt": 1662111726,
            "updatedAt": 1662633385,
            "reactivatedAt": 1662111726,
            "rooms": 4,
            "baths": 5,
            "area": 441.7539552,
            "score": 100,
            "score_l1": 62,
            "coverPhoto": {
                "id": 265609090,
                "externalID": "129619482",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 6.008612314025115,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/265609090/ab34449fa9a248ed8ead0507ecbd8050",
                "main": true
            },
            "coverVideo": {
                "externalID": 398782,
                "title": null,
                "host": "youtube",
                "url": "https://www.youtube.com/watch?v=R8wC5Qdvae0",
                "orderIndex": 0
            },
            "photoCount": 17,
            "videoCount": 1,
            "panoramaCount": 0,
            "phoneNumber": {
                "mobile": "+971585245889",
                "phone": "+97144294444",
                "proxyMobile": "+971588011512",
                "phoneNumbers": [
                    "+97144294444"
                ],
                "mobileNumbers": [
                    "+971585245889"
                ]
            },
            "contactName": "Josh Buckle",
            "agency": {
                "id": 29651683,
                "objectID": 29651683,
                "name": "Allsopp & Allsopp - Motor City Sales",
                "name_l1": "آلسوب و آلسوب للوساطة العقارية",
                "externalID": "100844",
                "product": "premium",
                "productScore": 2,
                "licenses": [
                    {
                        "number": "613873",
                        "authority": "DED"
                    },
                    {
                        "number": "1815",
                        "authority": "RERA"
                    },
                    {
                        "number": "802652",
                        "authority": "DED"
                    },
                    {
                        "number": "1062772",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 232082988,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/232082988/1ceb717892d249c6adbd7515036d712b"
                },
                "slug": "allsopp-allsopp-motor-city-sales-100844",
                "slug_l1": "allsopp-allsopp-motor-city-sales-100844",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2022-06-28T11:34:44.802820+00:00",
                "commercialNumber": null
            },
            "hash": "eb0bdb2",
            "keywords": [
                "بلكونة",
                "private pool",
                "حديقة",
                "independent",
                "كبيرة",
                "spacious",
                "خادمة",
                "واسعة",
                "مسبح خاص",
                "4 غرف نوم",
                "garden",
                "مطبخ",
                "للعوائل",
                "عوائل",
                "maid",
                "مستقلة",
                "4 bedroom",
                "kitchen",
                "family",
                "4 غرف",
                "balcony"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662278611.395191,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662633385.242756
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 547,
            "randBoostScore_l1": 547,
            "floorPlanID": null,
            "furnishingStatus": "unfurnished",
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 547,
            "indyScore_l1": 547,
            "hasMatchingFloorPlans": false,
            "photoIDs": [
                265609090,
                265609091,
                265609092,
                265609093,
                265609094,
                265609095,
                265609096,
                265609097,
                265609098,
                265609099,
                265609100,
                265609101,
                265609102,
                265609103,
                265609104,
                265609105,
                265609106
            ],
            "hidePrice": false,
            "objectID": "3597024",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "L-192059",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Exclusive | 4 Beds w Maids | Private Pool",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6296957",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "Allsopp & Allsopp - Motor City Sales",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "private pool",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "حديقة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "independent",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مسبح خاص",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 غرف نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "garden",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "للعوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "عوائل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مستقلة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "family",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "4 غرف",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": 3586655,
            "ownerID": 1843513,
            "userExternalID": "1843513",
            "sourceID": 1,
            "state": "active",
            "_geoloc": {
                "lat": 25.107261,
                "lng": 55.148317
            },
            "geography": {
                "lat": 25.107261,
                "lng": 55.148317
            },
            "purpose": "for-sale",
            "price": 2549990,
            "product": "superhot",
            "productLabel": "default",
            "productScore": 0,
            "rentFrequency": null,
            "referenceNumber": "B-AS-74349",
            "permitNumber": "7119011300",
            "projectNumber": null,
            "title": "Motivated Seller, Upgrated, Vacant",
            "title_l1": "شقة في جاش حمد شقق شور لاين نخلة جميرا 2 غرف 2549990 درهم - 6287585",
            "externalID": "6287585",
            "slug": "motivated-seller-upgrated-vacant-6287585",
            "slug_l1": "motivated-seller-upgrated-vacant-6287585",
            "location": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "5001",
                    "name": "UAE",
                    "name_l1": "الإمارات",
                    "slug": "/uae",
                    "slug_l1": "/uae"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "5002",
                    "name": "Dubai",
                    "name_l1": "دبي",
                    "slug": "/dubai",
                    "slug_l1": "/dubai"
                },
                {
                    "id": 14,
                    "level": 2,
                    "externalID": "5460",
                    "name": "Palm Jumeirah",
                    "name_l1": "نخلة جميرا",
                    "slug": "/dubai/palm-jumeirah",
                    "slug_l1": "/dubai/palm-jumeirah",
                    "type": "neighbourhood"
                },
                {
                    "id": 15,
                    "level": 3,
                    "externalID": "5466",
                    "name": "Shoreline Apartments",
                    "name_l1": "شقق شور لاين",
                    "slug": "/dubai/palm-jumeirah/shoreline-apartments",
                    "slug_l1": "/dubai/palm-jumeirah/shoreline-apartments"
                },
                {
                    "id": 1213,
                    "level": 4,
                    "externalID": "8704",
                    "name": "Jash Hamad",
                    "name_l1": "جاش حمد",
                    "slug": "/dubai/palm-jumeirah/shoreline-apartments/jash-hamad",
                    "slug_l1": "/dubai/palm-jumeirah/shoreline-apartments/jash-hamad",
                    "type": "condo-building"
                }
            ],
            "category": [
                {
                    "id": 1,
                    "level": 0,
                    "externalID": "1",
                    "name": "Residential",
                    "name_l1": "سكني",
                    "slug": "residential",
                    "slug_l1": "residential",
                    "nameSingular": "Residential",
                    "nameSingular_l1": "سكني"
                },
                {
                    "id": 2,
                    "level": 1,
                    "externalID": "4",
                    "name": "Apartments",
                    "name_l1": "شقق",
                    "slug": "apartments",
                    "slug_l1": "apartments",
                    "nameSingular": "Apartment",
                    "nameSingular_l1": "شقة"
                }
            ],
            "createdAt": 1661867708,
            "updatedAt": 1662962185,
            "reactivatedAt": 1661867708,
            "rooms": 2,
            "baths": 3,
            "area": 189.42929856,
            "score": 100,
            "score_l1": 65,
            "coverPhoto": {
                "id": 264198809,
                "externalID": "129449685",
                "title": null,
                "orderIndex": 0,
                "nimaScore": 9.214989517622978,
                "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/264198809/389a96a1cabc4e1daa6555419ea349b6",
                "main": true
            },
            "photoCount": 23,
            "videoCount": 0,
            "panoramaCount": 1,
            "phoneNumber": {
                "mobile": "+97148712910",
                "phone": "+97143691700",
                "whatsapp": "971569551551",
                "phoneNumbers": [
                    "+97143691700"
                ],
                "mobileNumbers": [
                    "+97148712910"
                ]
            },
            "contactName": "Mariana Lutsiv",
            "agency": {
                "id": 29583357,
                "objectID": 29583357,
                "name": "fäm Properties - Branch 3",
                "name_l1": "الفرع 3  -فام العقارية",
                "externalID": "9956",
                "product": "featured",
                "productScore": 1,
                "licenses": [
                    {
                        "number": "613164",
                        "authority": "DED"
                    },
                    {
                        "number": "1858",
                        "authority": "RERA"
                    },
                    {
                        "number": "718828",
                        "authority": "DED"
                    },
                    {
                        "number": "839535",
                        "authority": "DED"
                    }
                ],
                "logo": {
                    "id": 96047165,
                    "url": "https://bayut-production.s3.eu-central-1.amazonaws.com/image/96047165/da9af64ade7249838e7fd0c5e8e3217f"
                },
                "slug": "fam-properties-branch-3-9956",
                "slug_l1": "fam-properties-branch-3-9956",
                "tier": 1,
                "roles": [],
                "active": true,
                "createdAt": "2020-09-27T03:16:23.674426+00:00",
                "commercialNumber": null
            },
            "hash": "6f9d489",
            "keywords": [
                "غسيل",
                "كبيرة",
                "laundry",
                "خادمة",
                "spacious",
                "maid",
                "2 bedroom",
                "kitchen",
                "غرفتين نوم",
                "parking",
                "2 غرفة",
                "مطبخ",
                "balcony",
                "بلكونة",
                "salon",
                "موقف سيارة",
                "غرفتين",
                "صالون",
                "mall",
                "واسعة",
                "مول"
            ],
            "isVerified": true,
            "verification": {
                "updatedAt": 1662385564.774954,
                "eligible": true,
                "status": "verified",
                "verifiedAt": 1662533642.734541
            },
            "verifiedScore": 0,
            "completionStatus": "completed",
            "randBoostScore": 544,
            "randBoostScore_l1": 544,
            "floorPlanID": 26735,
            "furnishingStatus": null,
            "extraFields": {},
            "type": "property",
            "cityLevelScore": 1,
            "indyScore": 544,
            "indyScore_l1": 544,
            "hasMatchingFloorPlans": true,
            "photoIDs": [
                264198809,
                264198814,
                264198794,
                264198799,
                264198801,
                264198804,
                264198805,
                264198839,
                264198819,
                264198821,
                264198832,
                264198812,
                264198811,
                264198816,
                264198807,
                264198826,
                264198823,
                264198797,
                264198830,
                264198825,
                264198834,
                264198837,
                264198841
            ],
            "hidePrice": false,
            "objectID": "3586655",
            "_highlightResult": {
                "referenceNumber": {
                    "value": "B-AS-74349",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Motivated Seller, Upgrated, Vacant",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "externalID": {
                    "value": "6287585",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "agency": {
                    "name": {
                        "value": "fäm Properties - Branch 3",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "keywords": [
                    {
                        "value": "غسيل",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "كبيرة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "laundry",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "خادمة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "spacious",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "maid",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 bedroom",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "kitchen",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين نوم",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "parking",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "2 غرفة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مطبخ",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "balcony",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "بلكونة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "salon",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "موقف سيارة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "غرفتين",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "صالون",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "mall",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "واسعة",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "مول",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        }
    ];
    
    const [articles,setArticles] = useState(Menu);
    
    const filterItem=(cateItem)=>{
        const updatedItems=Menu.filter((currentElement)=>{
            return currentElement.purpose===cateItem;
        });
        setArticles(updatedItems);
    }

  return (
    <div className="container my-3">
        <h2 className="mt-5 text-center main-heading">Real estate</h2>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
            
            <button className="btn btn-outline-primary" onClick={()=>filterItem("for-rent")}>Click-For-Rent</button>
            <button className="btn btn-outline-primary " onClick={()=>filterItem("for-sale")}>Click-For-Sale</button>
            </div>
            </div>
          <div className="row">
            
          {articles&& articles.map((element,id) => {
            // console.log(element)
            return <div className="col-md-4" key={id} >
              <Newsitems 
                isVerified={element.isVerified}
                rentFrequency={element.rentFrequency}
                title={element.title.slice(0,45)}
                price={element.price}
                rooms={element.rooms}
                baths={element.baths}
                area={element.area}
                purpose={element.purpose}
                coverPhoto={element.coverPhoto.url}
              />
            </div>
          
        })}
        </div>
      </div>
  )
}

export default News
