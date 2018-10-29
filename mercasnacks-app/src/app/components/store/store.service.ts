import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
// Models
import { Product } from '../../models/product';

let products = [
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 57,
        "slug": "Ponqué-Bimbo-Casero-Vainilla-x-6-Porciones-x-220-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/26d12a97275fb69b9a0a9894f8e29d1a.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/26d12a97275fb69b9a0a9894f8e29d1a.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/26d12a97275fb69b9a0a9894f8e29d1a.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/26d12a97275fb69b9a0a9894f8e29d1a.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 220,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 3050,
        "_id": "5a5e84f077b9410001ae45b9",
        "retailer_sku": "1888562",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d3e59c9e52600019abcd0",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326079152",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Ponqué Bimbo Casero Vainilla x 6 Porciones x 220 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/26d12a97275fb69b9a0a9894f8e29d1a.jpg",
        "new_objectID": "f936917f89703ebaba59fc9c8a51d45b",
        "modified": "2018-09-27 21:01:12.313383",
        "brand": "Bimbo",
        "objectID": "5a5e84f077b9410001ae45b9",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Bimbo Casero Vainilla x 6 Porciones x 220 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Bimbo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 40,
        "slug": "Ponqué-Ramo-Tradicional-x-Unidad",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/cec4af00f427f32a74bbe59b03d76158.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/cec4af00f427f32a74bbe59b03d76158.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/cec4af00f427f32a74bbe59b03d76158.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/cec4af00f427f32a74bbe59b03d76158.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 250,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 3100,
        "_id": "5a8db6b31ff67100015b4876",
        "retailer_sku": "1652984",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914110112",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Ramo Tradicional x Unidad",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        },
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Ponqué Ramo Tradicional x Unidad",
        "product_simple": "5a8db6b2d2a6b30001afc0c6",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/cec4af00f427f32a74bbe59b03d76158.jpg",
        "new_objectID": "740d5064e2916db81375e3b1f18c4cff",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Ramo",
        "objectID": "5a8db6b31ff67100015b4876"
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 35,
        "slug": "Ponquécito-Bimboletes-Vlla-x-220-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9c09dd28b3fb4d30ec70b94b781c90ee.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9c09dd28b3fb4d30ec70b94b781c90ee.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9c09dd28b3fb4d30ec70b94b781c90ee.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9c09dd28b3fb4d30ec70b94b781c90ee.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 220,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "_id": "5a5e84e877b9410001ae445e",
        "retailer_sku": "819116",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d3e53c9e52600019abc90",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326070340",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Ponquécito Bimboletes Vlla x 220 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/9c09dd28b3fb4d30ec70b94b781c90ee.jpg",
        "new_objectID": "aa40ae23a91194b7cf194362ccb60a3b",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Bimbo",
        "objectID": "5a5e84e877b9410001ae445e",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponquécito Bimboletes Vlla x 220 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Bimbo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 34,
        "slug": "Chocorramo-Mini-x-20-Unidades",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/6db3d24577371a599018e6263a448d91.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/6db3d24577371a599018e6263a448d91.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/6db3d24577371a599018e6263a448d91.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/6db3d24577371a599018e6263a448d91.jpg"
                    }
                ]
            }
        ],
        "new_objectID": "0a65c482a5290eb628f797500ea51ed1",
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 400,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 10400,
        "_id": "5a8db3431ff67100015b0a80",
        "retailer_sku": "769799",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914114103",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Chocorramo Mini x 20 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        },
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Chocorramo Mini x 20 Unidades",
        "iva": 19,
        "product_simple": "5a8db343d2a6b30001af8227",
        "modified": "2018-09-27 21:15:19.016672",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/6db3d24577371a599018e6263a448d91.jpg",
        "brand": "Ramo",
        "objectID": "5a8db3431ff67100015b0a80"
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 32,
        "slug": "Ponqué-Gala-Miti-Ramo-x-12-Unidades-x-384-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/235afc448e5e736083198ee894a4d826.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/235afc448e5e736083198ee894a4d826.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/235afc448e5e736083198ee894a4d826.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/235afc448e5e736083198ee894a4d826.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 384,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 8510,
        "_id": "5a8db3d6662c380001e0758b",
        "retailer_sku": "969245",
        "product_simple_active": true,
        "active": true,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a8db3d51ff67100015b1643",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "ean": "7702914164108",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Gala Miti Ramo x 12 Unidades x 384 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        },
        "tags": [

        ],
        "stock": 4,
        "name": "Ponqué Gala Miti Ramo x 12 Unidades x 384 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "fee": 3.7,
        "percentage": 0,
        "image_url": "https://catalog.images.mercadoni.com/235afc448e5e736083198ee894a4d826.jpg",
        "new_objectID": "9ca78efbc897fc2abecba9878a0a8778",
        "modified": "2018-09-27 21:01:12.313383",
        "brand": "Ramo",
        "objectID": "5a8db3d6662c380001e0758b"
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 22,
        "slug": "Gansito-x-6-Unidades",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/d0ba7f4bc04c411ad2e7a6e02b8a9fe3.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/d0ba7f4bc04c411ad2e7a6e02b8a9fe3.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/d0ba7f4bc04c411ad2e7a6e02b8a9fe3.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/d0ba7f4bc04c411ad2e7a6e02b8a9fe3.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 222,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 3850,
        "_id": "5a8db322d2a6b30001af7fb2",
        "retailer_sku": "718909",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "ean": "7702914117302",
        "product_simple": "5a8db322d2a6b30001af7fa6",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "image_url": "https://catalog.images.mercadoni.com/d0ba7f4bc04c411ad2e7a6e02b8a9fe3.jpg",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Gansito x 6 Unidades",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "new_objectID": "7b8b3fdffbe3c714fa9f4b0b4c212eda",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Ramo",
        "objectID": "5a8db322d2a6b30001af7fb2",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Gansito x 6 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 16,
        "slug": "Ramito-x-6-Unidades-x-150-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/dd6163aba65664fb4435ff9a128c3ee6.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/dd6163aba65664fb4435ff9a128c3ee6.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/dd6163aba65664fb4435ff9a128c3ee6.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/dd6163aba65664fb4435ff9a128c3ee6.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 6,
            "unit": {
                "name": "unidades",
                "abbreviation": "unidades",
                "_id": 1
            }
        },
        "price": 3010,
        "_id": "5a5e8dd077b9410001afd559",
        "retailer_sku": "48399",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "ean": "7702914111300",
        "product_simple": "5a5d46d6c9e52600019b056f",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "image_url": "https://catalog.images.mercadoni.com/dd6163aba65664fb4435ff9a128c3ee6.jpg",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Ramito x 6 Unidades x 150 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "new_objectID": "8884cb6b305ccf8bd0af0090b3576480",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Ramo",
        "objectID": "5a5e8dd077b9410001afd559",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ramito x 6 Unidades x 150 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 15,
        "slug": "Mini-Chocolita-Comapan-x-12-Unidades-x-360-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/ba4e318ce38af83650302fdd053b7f81.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/ba4e318ce38af83650302fdd053b7f81.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/ba4e318ce38af83650302fdd053b7f81.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/ba4e318ce38af83650302fdd053b7f81.jpg"
                    }
                ]
            }
        ],
        "brand": "Comapan",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 360,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 7670,
        "_id": "5a8db286662c380001e05a4e",
        "retailer_sku": "94021",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "iva": 19,
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "percentage": 0,
        "ean": "7702432076600",
        "_highlightResult": {
            "brand": {
                "value": "Comapan",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Mini Chocolita Comapan x 12 Unidades x 360 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        },
        "stock": 4,
        "image_url": "https://catalog.images.mercadoni.com/ba4e318ce38af83650302fdd053b7f81.jpg",
        "name": "Mini Chocolita Comapan x 12 Unidades x 360 g",
        "visible": true,
        "product_simple": "5a8db286d2a6b30001af7407",
        "modified": "2018-09-27 21:15:19.016672",
        "created": "2018-02-21T17:55:18.973Z",
        "new_objectID": "7650bb4c69304141583ef53822f23e77",
        "objectID": "5a8db286662c380001e05a4e"
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 15,
        "slug": "Ponqué-Bimbo-Lonchera-Surtido-x-7-Unidades",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/28fc50d3754f68b82ae9b8b5dc9b78db.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/28fc50d3754f68b82ae9b8b5dc9b78db.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/28fc50d3754f68b82ae9b8b5dc9b78db.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/28fc50d3754f68b82ae9b8b5dc9b78db.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 1,
            "unit": {
                "name": "paquete",
                "abbreviation": "paquete",
                "_id": 1
            }
        },
        "price": 5460,
        "_id": "5a5e84e877b9410001ae447a",
        "retailer_sku": "995116",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d3e54c9e52600019abca3",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326077592",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Ponqué Bimbo Lonchera Surtido x 7 Unidades",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/28fc50d3754f68b82ae9b8b5dc9b78db.jpg",
        "new_objectID": "cb8c8649f3c24a235264a57ce1b390d0",
        "modified": "2018-09-27 21:01:12.313383",
        "brand": "Bimbo",
        "objectID": "5a5e84e877b9410001ae447a",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Bimbo Lonchera Surtido x 7 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Bimbo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 14,
        "slug": "Bloque-Chocolate-Ramo-x-425-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/eae3c5f56b23315971eecb62da17c927.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/eae3c5f56b23315971eecb62da17c927.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/eae3c5f56b23315971eecb62da17c927.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/eae3c5f56b23315971eecb62da17c927.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 425,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 6240,
        "_id": "5a8db257d2a6b30001af70bb",
        "retailer_sku": "48437",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a8db257d2a6b30001af70b2",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914112512",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Bloque Chocolate Ramo x 425 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/eae3c5f56b23315971eecb62da17c927.jpg",
        "new_objectID": "0ea7ab64bd301bd4287cc2b4e8617038",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Ramo",
        "objectID": "5a8db257d2a6b30001af70bb",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Bloque Chocolate Ramo x 425 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 13,
        "image_url": "https://catalog.images.mercadoni.com/1ed541c333b153bde5d70e7a880cdf4e.jpg",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/1ed541c333b153bde5d70e7a880cdf4e.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/1ed541c333b153bde5d70e7a880cdf4e.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/1ed541c333b153bde5d70e7a880cdf4e.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/1ed541c333b153bde5d70e7a880cdf4e.jpg"
                    }
                ]
            }
        ],
        "brand": "Ramo",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 45,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 830,
        "_id": "5a5e8dd477b9410001afd655",
        "retailer_sku": "731297",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Gansito-Unidad-x-45-g",
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914115100",
        "created": "2018-01-16T23:42:12.956Z",
        "percentage": 0,
        "name": "Gansito Unidad x 45 g",
        "iva": 19,
        "product_simple": "5a5d46dac9e52600019b059b",
        "modified": "2018-09-27 21:01:12.313383",
        "visible": true,
        "new_objectID": "7b1675e7465ae8d83eb103b302cb76ae",
        "objectID": "5a5e8dd477b9410001afd655",
        "_highlightResult": {
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Gansito Unidad x 45 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 12,
        "image_url": "https://catalog.images.mercadoni.com/73d391a8471e7e786cf86e10b3f30eec.jpg",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/73d391a8471e7e786cf86e10b3f30eec.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/73d391a8471e7e786cf86e10b3f30eec.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/73d391a8471e7e786cf86e10b3f30eec.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/73d391a8471e7e786cf86e10b3f30eec.jpg"
                    }
                ]
            }
        ],
        "brand": "Ramo",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 5,
            "unit": {
                "name": "unidades",
                "abbreviation": "unidades",
                "_id": 1
            }
        },
        "price": 5620,
        "_id": "5a5e8dd077b9410001afd57a",
        "retailer_sku": "48674",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Gala-Taj-Ramo-x-5-Unidades",
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "father": "",
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914112208",
        "created": "2018-01-16T23:42:08.938Z",
        "percentage": 0,
        "name": "Gala Taj Ramo x 5 Unidades",
        "iva": 19,
        "product_simple": "5a5d46d7c9e52600019b0577",
        "modified": "2018-09-28 22:28:33.067735",
        "visible": true,
        "new_objectID": "dff04f3e801591385924d4e10483d4af",
        "objectID": "5a5e8dd077b9410001afd57a",
        "_highlightResult": {
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Gala Taj Ramo x 5 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 11,
        "slug": "Chocoramo-Bolsa-x-70-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/788b858847af2c9677b9577f42437286.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/788b858847af2c9677b9577f42437286.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/788b858847af2c9677b9577f42437286.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/788b858847af2c9677b9577f42437286.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 70,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 1450,
        "_id": "5a8db255d2a6b30001af7096",
        "retailer_sku": "48453",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "ean": "7702914114004",
        "product_simple": "5a8db254662c380001e05675",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "image_url": "https://catalog.images.mercadoni.com/788b858847af2c9677b9577f42437286.jpg",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Chocoramo-Bolsa x 70 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "new_objectID": "281d02cbba1cfad484b534cf175e31ef",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Ramo",
        "objectID": "5a8db255d2a6b30001af7096",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Chocoramo-Bolsa x 70 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 10,
        "image_url": "https://catalog.images.mercadoni.com/b0fc32a181f3bcfd1febe156c31f3df5.jpg",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b0fc32a181f3bcfd1febe156c31f3df5.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b0fc32a181f3bcfd1febe156c31f3df5.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b0fc32a181f3bcfd1febe156c31f3df5.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b0fc32a181f3bcfd1febe156c31f3df5.jpg"
                    }
                ]
            }
        ],
        "brand": "Ramo",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 230,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 4940,
        "_id": "5a8db35e1ff67100015b0c86",
        "retailer_sku": "814046",
        "name": "Ponqué Ramo Nueces x 230 g",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Ponqué-Ramo-Nueces-x-230-g",
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a8db35d1ff67100015b0c7c",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914110501",
        "_highlightResult": {
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Ponqué Ramo Nueces x 230 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        },
        "stock": 4,
        "percentage": 0,
        "created": "2018-02-21T17:58:54.316Z",
        "visible": true,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:19.016672",
        "iva": 19,
        "new_objectID": "49eed9c5dd023c554355d6ca4792b0a8",
        "objectID": "5a8db35e1ff67100015b0c86"
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 10,
        "image_url": "https://catalog.images.mercadoni.com/96cc8569dc086175d96683404d165205.jpg",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/96cc8569dc086175d96683404d165205.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/96cc8569dc086175d96683404d165205.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/96cc8569dc086175d96683404d165205.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/96cc8569dc086175d96683404d165205.jpg"
                    }
                ]
            }
        ],
        "brand": "Ramo",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 350,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 7560,
        "_id": "5a8db2571ff67100015af6dc",
        "retailer_sku": "48704",
        "name": "Choco Ramo x 350 g",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Choco-Ramo-x-350-g",
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a8db257d2a6b30001af70b1",
        "categories": [
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "father": "",
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914114202",
        "_highlightResult": {
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Choco Ramo x 350 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        },
        "stock": 4,
        "percentage": 0,
        "created": "2018-02-21T17:54:31.916Z",
        "visible": true,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-28 22:28:33.067735",
        "iva": 19,
        "new_objectID": "66947a349c323e2e0b32b77859c31d9d",
        "objectID": "5a8db2571ff67100015af6dc"
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 10,
        "image_url": "https://catalog.images.mercadoni.com/3dc4184ff0493095524bb441e9d57a25.jpg",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3dc4184ff0493095524bb441e9d57a25.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3dc4184ff0493095524bb441e9d57a25.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3dc4184ff0493095524bb441e9d57a25.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3dc4184ff0493095524bb441e9d57a25.jpg"
                    }
                ]
            }
        ],
        "brand": "Bimbo",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 1,
            "unit": {
                "name": "paquete",
                "abbreviation": "paquete",
                "_id": 1
            }
        },
        "price": 3710,
        "retailer_sku": "891996",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Ponqué-Bimbo-Casero-Vainilla-Chocolate-Porciones-x-6-Unidades-x-220-g",
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326075963",
        "created": "2018-01-16T23:04:06.109Z",
        "percentage": 0,
        "name": "Ponqué Bimbo Casero Vainilla Chocolate Porciones x 6 Unidades x 220 g",
        "iva": 19,
        "product_simple": "5a5d3e53c9e52600019abc8e",
        "modified": "2018-09-27 21:01:12.313383",
        "visible": true,
        "new_objectID": "1eea1b9143a1d9ab79cd6a325e562dd3",
        "objectID": "5a5e84e677b9410001ae441c",
        "_highlightResult": {
            "brand": {
                "value": "Bimbo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Bimbo Casero Vainilla Chocolate Porciones x 6 Unidades x 220 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 9,
        "image_url": "https://catalog.images.mercadoni.com/ae5cb04f406367e132f0330f1af536db.jpg",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/ae5cb04f406367e132f0330f1af536db.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/ae5cb04f406367e132f0330f1af536db.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/ae5cb04f406367e132f0330f1af536db.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/ae5cb04f406367e132f0330f1af536db.jpg"
                    }
                ]
            }
        ],
        "brand": "Ramo",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 250,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 3240,
        "_id": "5a8db303662c380001e064aa",
        "retailer_sku": "691437",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Ponqué-Tradicional-De-Chocolate-Ramo-x-250g",
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914110211",
        "created": "2018-02-21T17:57:23.114Z",
        "percentage": 0,
        "name": "Ponqué Tradicional De Chocolate Ramo x 250g",
        "iva": 19,
        "product_simple": "5a8db302d2a6b30001af7d81",
        "modified": "2018-09-27 21:15:19.016672",
        "visible": true,
        "new_objectID": "9d246231c441bc70b7911aca313bfbe8",
        "objectID": "5a8db303662c380001e064aa",
        "_highlightResult": {
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Tradicional De Chocolate Ramo x 250g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 9,
        "image_url": "https://catalog.images.mercadoni.com/a67afacdc9797744c212af4c0f1dee57.jpg",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/a67afacdc9797744c212af4c0f1dee57.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/a67afacdc9797744c212af4c0f1dee57.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/a67afacdc9797744c212af4c0f1dee57.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/a67afacdc9797744c212af4c0f1dee57.jpg"
                    }
                ]
            }
        ],
        "brand": "Ramo",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 250,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 5510,
        "_id": "5a5e8dd077b9410001afd570",
        "retailer_sku": "48526",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Ramito-x-10-Unidades-x-250-g",
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914111508",
        "created": "2018-01-16T23:42:08.627Z",
        "percentage": 0,
        "name": "Ramito x 10 Unidades x 250 g",
        "iva": 19,
        "product_simple": "5a5d46d7c9e52600019b0574",
        "modified": "2018-09-27 21:15:19.016672",
        "visible": true,
        "new_objectID": "1ca2baf928c833cb612f1980418471d6",
        "objectID": "5a5e8dd077b9410001afd570",
        "_highlightResult": {
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ramito x 10 Unidades x 250 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 8,
        "slug": "Pastelitos-Pinguinos-Relleno-x-6-Unidades-x-240-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/8dce74397f67fa8ae5bc14f02fd5dc18.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/8dce74397f67fa8ae5bc14f02fd5dc18.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/8dce74397f67fa8ae5bc14f02fd5dc18.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/8dce74397f67fa8ae5bc14f02fd5dc18.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 6,
            "unit": {
                "name": "unidades",
                "abbreviation": "unidades",
                "_id": 1
            }
        },
        "price": 5690,
        "_id": "5a5e8d4c77b9410001afbe5b",
        "retailer_sku": "857817",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326053268",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Pastelitos Pinguinos Relleno x 6 Unidades x 240 g",
        "product_simple": "5a5d4664c9e52600019b0145",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/8dce74397f67fa8ae5bc14f02fd5dc18.jpg",
        "new_objectID": "1b1f35772cc4e94f594e846f1d1f592c",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Pinguinos",
        "objectID": "5a5e8d4c77b9410001afbe5b",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Pastelitos Pinguinos Relleno x 6 Unidades x 240 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Pinguinos",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 8,
        "image_url": "https://catalog.images.mercadoni.com/37277f1ea81d1133e0902fc7d69c041d.jpg",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/37277f1ea81d1133e0902fc7d69c041d.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/37277f1ea81d1133e0902fc7d69c041d.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/37277f1ea81d1133e0902fc7d69c041d.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/37277f1ea81d1133e0902fc7d69c041d.jpg"
                    }
                ]
            }
        ],
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 1,
            "unit": {
                "name": "paquete",
                "abbreviation": "paquete",
                "_id": 1
            }
        },
        "price": 6470,
        "_id": "5a5e866677b9410001ae88f1",
        "retailer_sku": "706191",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Ponqué-Minilolitas-x-10-Unidades-x-300-g",
        "location": "5a5e41898811717a00722e6e",
        "tags": [

        ],
        "product_simple": "5a5d3fc5c9e52600019ac900",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7702432473324",
        "new_objectID": "50578737adae15ecbf220c066ee12c97",
        "stock": 4,
        "percentage": 0,
        "name": "Ponqué Minilolitas x 10 Unidades x 300 g",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:19.016672",
        "visible": true,
        "brand": "Comapan",
        "objectID": "5a5e866677b9410001ae88f1",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Minilolitas x 10 Unidades x 300 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Comapan",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 7,
        "slug": "Barrita-Choco-Ramo-x-5-Unidades-x-200-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/aabe2717453cc4857121e6baa2a167a1.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/aabe2717453cc4857121e6baa2a167a1.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/aabe2717453cc4857121e6baa2a167a1.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/aabe2717453cc4857121e6baa2a167a1.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 1,
            "unit": {
                "name": "paquete",
                "abbreviation": "paquete",
                "_id": 1
            }
        },
        "price": 3830,
        "_id": "5a5e8dd177b9410001afd5b2",
        "retailer_sku": "48712",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d46d8c9e52600019b0582",
        "categories": [
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "father": "",
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914114608",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Barrita Choco Ramo x 5 Unidades x 200 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/aabe2717453cc4857121e6baa2a167a1.jpg",
        "new_objectID": "7512eaf9682c8a474093b91a452681ad",
        "modified": "2018-09-28 22:28:33.067735",
        "brand": "Ramo",
        "iac": 0,
        "iva": 19,
        "objectID": "5a5e8dd177b9410001afd5b2",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Barrita Choco Ramo x 5 Unidades x 200 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 7,
        "slug": "Ponqué-Ramito-Empaques-Individuales-x-20-Unidades",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4c5fd40bf33c91b5e4bc3f6fc9495894.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4c5fd40bf33c91b5e4bc3f6fc9495894.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4c5fd40bf33c91b5e4bc3f6fc9495894.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4c5fd40bf33c91b5e4bc3f6fc9495894.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 20,
            "unit": {
                "name": "unidades",
                "abbreviation": "unidades",
                "_id": 1
            }
        },
        "price": 9560,
        "_id": "5a5e8dd177b9410001afd590",
        "retailer_sku": "48402",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d46d6c9e52600019b0571",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7702914111706",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Ponqué Ramito Empaques Individuales x 20 Unidades",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/4c5fd40bf33c91b5e4bc3f6fc9495894.jpg",
        "new_objectID": "5a32eb82d89c1470207ce05da3240b38",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Ramo",
        "objectID": "5a5e8dd177b9410001afd590",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Ramito Empaques Individuales x 20 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 7,
        "slug": "Minix-Brownie-Arequipe-Bimbo-x-10-Unidades-x-220-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/5a4a53795bd423daa8d3514ffce546cb.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/5a4a53795bd423daa8d3514ffce546cb.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/5a4a53795bd423daa8d3514ffce546cb.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/5a4a53795bd423daa8d3514ffce546cb.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 220,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 8320,
        "_id": "5a5e8bde77b9410001af8255",
        "retailer_sku": "1228070",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d4518c9e52600019af658",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326079084",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Minix Brownie Arequipe Bimbo x 10 Unidades x 220 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/5a4a53795bd423daa8d3514ffce546cb.jpg",
        "new_objectID": "767360bb886d625c2dc62f1c9bb99e9e",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Mr Brown",
        "objectID": "5a5e8bde77b9410001af8255",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Minix Brownie Arequipe Bimbo x 10 Unidades x 220 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Mr Brown",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 7,
        "image_url": "https://catalog.images.mercadoni.com/9aa8c7e9c5c5226550be24366102f678.jpg",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9aa8c7e9c5c5226550be24366102f678.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9aa8c7e9c5c5226550be24366102f678.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9aa8c7e9c5c5226550be24366102f678.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9aa8c7e9c5c5226550be24366102f678.jpg"
                    }
                ]
            }
        ],
        "brand": "Mr Brown",
        "manually_active": true,
        "product_simple_active": true,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 1,
            "unit": {
                "name": "paquete",
                "abbreviation": "paquete",
                "_id": 1
            }
        },
        "price": 9660,
        "_id": "5a5e8bdc77b9410001af821e",
        "retailer_sku": "1179673",
        "name": "Brownie Mrbrown Minix Surtido x 15 Unidades x 310 g",
        "iac": 0,
        "active": true,
        "fee": 3.7,
        "slug": "Brownie-Mrbrown-Minix-Surtido-x-15-Unidades-x-310-g",
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d4518c9e52600019af651",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326079510",
        "_highlightResult": {
            "brand": {
                "value": "Mr Brown",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Brownie Mrbrown Minix Surtido x 15 Unidades x 310 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        },
        "new_objectID": "388037215cd234b5ded49ccf6ad9c18b",
        "stock": 4,
        "percentage": 0,
        "created": "2018-01-16T23:33:48.358Z",
        "visible": true,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:19.016672",
        "iva": 19,
        "objectID": "5a5e8bdc77b9410001af821e"
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 6,
        "slug": "Ponqué-Submarinos-Surtido-x-6-Unidades-x-30-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/c2ef2fde478ef9e0e05b0a9b8ca0ff4c.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/c2ef2fde478ef9e0e05b0a9b8ca0ff4c.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/c2ef2fde478ef9e0e05b0a9b8ca0ff4c.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/c2ef2fde478ef9e0e05b0a9b8ca0ff4c.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 1,
            "unit": {
                "name": "paquete",
                "abbreviation": "paquete",
                "_id": 1
            }
        },
        "price": 3870,
        "_id": "5a5e8f3b77b9410001b014ae",
        "retailer_sku": "1127966",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "ean": "7705326078988",
        "product_simple": "5a5d4826c9e52600019b10f8",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "image_url": "https://catalog.images.mercadoni.com/c2ef2fde478ef9e0e05b0a9b8ca0ff4c.jpg",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Ponqué Submarinos Surtido x 6 Unidades x 30 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "new_objectID": "f80c0fd0368a65656ec2540cc72322cb",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Submarinos",
        "objectID": "5a5e8f3b77b9410001b014ae",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Submarinos Surtido x 6 Unidades x 30 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Submarinos",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 5,
        "slug": "Bloque-Vainilla-Ramo-x-425-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/1b752b2f74aed6051dc720ae4b688e7e.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/1b752b2f74aed6051dc720ae4b688e7e.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/1b752b2f74aed6051dc720ae4b688e7e.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/1b752b2f74aed6051dc720ae4b688e7e.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 425,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 6660,
        "_id": "5a8db2f4662c380001e06381",
        "retailer_sku": "622020",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "ean": "7702914112529",
        "product_simple": "5a8db2f2662c380001e0635a",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "image_url": "https://catalog.images.mercadoni.com/1b752b2f74aed6051dc720ae4b688e7e.jpg",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Bloque Vainilla Ramo x 425 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "new_objectID": "9f49624aff24274bb52c8ee02920058c",
        "modified": "2018-09-27 21:01:12.313383",
        "brand": "Ramo",
        "objectID": "5a8db2f4662c380001e06381",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Bloque Vainilla Ramo x 425 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Ramo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 4,
        "image_url": "https://catalog.images.mercadoni.com/2cdf2d41046be73d1956712f664ff36a.jpg",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/2cdf2d41046be73d1956712f664ff36a.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/2cdf2d41046be73d1956712f664ff36a.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/2cdf2d41046be73d1956712f664ff36a.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/2cdf2d41046be73d1956712f664ff36a.jpg"
                    }
                ]
            }
        ],
        "brand": "BIMBO",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 190,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 3620,
        "_id": "5a5e84e777b9410001ae442e",
        "retailer_sku": "913618",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Tostadas-Bimbo-Semilla-De-Girasol-Linaza-x-12-Unidades",
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326076595",
        "created": "2018-01-16T23:04:07.377Z",
        "percentage": 0,
        "name": "Tostadas Bimbo Semilla De Girasol Linaza x 12 Unidades",
        "iva": 19,
        "product_simple": "5a5d3e52c9e52600019abc8c",
        "modified": "2018-09-27 21:15:19.016672",
        "visible": true,
        "new_objectID": "e42b7418d30a1b0ad05a78ecd95778e3",
        "objectID": "5a5e84e777b9410001ae442e",
        "_highlightResult": {
            "brand": {
                "value": "BIMBO",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Tostadas Bimbo Semilla De Girasol Linaza x 12 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 3,
        "slug": "Muffins-Integral-Sunrise-Bolsa-x-6-Und",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/542853db7d3acc1e46702e2f9dd8cc17.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/542853db7d3acc1e46702e2f9dd8cc17.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/542853db7d3acc1e46702e2f9dd8cc17.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/542853db7d3acc1e46702e2f9dd8cc17.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 6,
            "unit": {
                "name": "unidades",
                "abbreviation": "unidades",
                "_id": 1
            }
        },
        "price": 8630,
        "_id": "5a5e8f4677b9410001b0172f",
        "retailer_sku": "661189",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "ean": "7702272000049",
        "product_simple": "5a5d482fc9e52600019b1160",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "image_url": "https://catalog.images.mercadoni.com/542853db7d3acc1e46702e2f9dd8cc17.jpg",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Muffins Integral Sunrise Bolsa x 6 Und",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "new_objectID": "e6699e286533e41f0bdeba61bd26799e",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Sunrise",
        "objectID": "5a5e8f4677b9410001b0172f",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Muffins Integral Sunrise Bolsa x 6 Und",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Sunrise",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 3,
        "image_url": "https://catalog.images.mercadoni.com/5dd06a69dcb79f334c320e9f58978a94.jpg",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/5dd06a69dcb79f334c320e9f58978a94.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/5dd06a69dcb79f334c320e9f58978a94.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/5dd06a69dcb79f334c320e9f58978a94.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/5dd06a69dcb79f334c320e9f58978a94.jpg"
                    }
                ]
            }
        ],
        "brand": "Mama-ía",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 180,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 8190,
        "_id": "5a5e8ab777b9410001af53a1",
        "retailer_sku": "920367",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Mini-Brownie-Chocolate-Mama-Áa-x-180-g",
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702020101639",
        "created": "2018-01-16T23:28:55.546Z",
        "percentage": 0,
        "name": "Mini Brownie Chocolate Mama-Áa x 180 g",
        "iva": 19,
        "product_simple": "5a5d441cc9e52600019aeddc",
        "modified": "2018-09-27 21:15:19.016672",
        "visible": true,
        "new_objectID": "102e948bdf19563973f516aa56b58258",
        "objectID": "5a5e8ab777b9410001af53a1",
        "_highlightResult": {
            "brand": {
                "value": "Mama-ía",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Mini Brownie Chocolate Mama-Áa x 180 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 3,
        "slug": "Pudín-Alpina-Arequipe-x-100-g-x-2-Unidades",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/2db765338ec619a789f022ce24a64af4.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/2db765338ec619a789f022ce24a64af4.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/2db765338ec619a789f022ce24a64af4.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/2db765338ec619a789f022ce24a64af4.jpg"
                    }
                ]
            }
        ],
        "brand": "Alpina",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 2,
            "unit": {
                "name": "unidades",
                "abbreviation": "unidades",
                "_id": 1
            }
        },
        "price": 3520,
        "_id": "5a5e83da77b9410001ae17e2",
        "retailer_sku": "1068592",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702001102730",
        "created": "2018-01-16T22:59:38.638Z",
        "percentage": 0,
        "name": "Pudín Alpina Arequipe x 100 g x 2 Unidades",
        "iva": 19,
        "product_simple": "5a5d3d64c9e52600019ab488",
        "modified": "2018-09-27 21:15:19.016672",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/2db765338ec619a789f022ce24a64af4.jpg",
        "new_objectID": "ebcab7c04caaa263f30b35d0ffb511ce",
        "objectID": "5a5e83da77b9410001ae17e2",
        "_highlightResult": {
            "brand": {
                "value": "Alpina",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Pudín Alpina Arequipe x 100 g x 2 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 2,
        "slug": "Brownie-Mamá-Ia-x-140-g",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4500d2d98c1f68bbffa83d8e1f547ac5.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4500d2d98c1f68bbffa83d8e1f547ac5.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4500d2d98c1f68bbffa83d8e1f547ac5.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4500d2d98c1f68bbffa83d8e1f547ac5.jpg"
                    }
                ]
            }
        ],
        "brand": "Mama-ía",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 140,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 4690,
        "_id": "5a5e8ab777b9410001af53b2",
        "retailer_sku": "728468",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702256012518",
        "created": "2018-01-16T23:28:55.824Z",
        "percentage": 0,
        "name": "Brownie Mamá Ia x 140 g",
        "iva": 19,
        "product_simple": "5a5d441bc9e52600019aedd8",
        "modified": "2018-09-27 21:01:12.313383",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/4500d2d98c1f68bbffa83d8e1f547ac5.jpg",
        "new_objectID": "24dc040c75133101f6826cb0c4c830a0",
        "objectID": "5a5e8ab777b9410001af53b2",
        "_highlightResult": {
            "brand": {
                "value": "Mama-ía",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Brownie Mamá Ia x 140 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 2,
        "slug": "Ponqué-Chocoso-Cubierto-Chocolate-x-65-g",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/570880366453e2892a176c01d895dc9f.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/570880366453e2892a176c01d895dc9f.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/570880366453e2892a176c01d895dc9f.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/570880366453e2892a176c01d895dc9f.jpg"
                    }
                ]
            }
        ],
        "brand": "Bimbo",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 65,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 1100,
        "_id": "5a5e85c077b9410001ae6a78",
        "retailer_sku": "831854",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "name": "Panadería Dulce",
                "father": "553a6a382c1f36d3142a2015",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "slug": "panaderia-y-reposteria",
                "name": "Panadería y Repostería",
                "father": "",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326070371",
        "new_objectID": "fcbfa030e56bbb0247ccec2c78972594",
        "created": "2018-01-16T23:07:44.342Z",
        "percentage": 0,
        "name": "Ponqué Chocoso Cubierto Chocolate x 65 g",
        "iva": 19,
        "product_simple": "5a5d3f13c9e52600019ac379",
        "modified": "2018-09-28 01:43:50.303780",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/570880366453e2892a176c01d895dc9f.jpg",
        "objectID": "5a5e85c077b9410001ae6a78",
        "_highlightResult": {
            "brand": {
                "value": "Bimbo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Chocoso Cubierto Chocolate x 65 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 1,
        "slug": "Ponqué-Submarinos-Arequipe-x-2-Unidades",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/790d1571afbc4bb52bacc77da654a482.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/790d1571afbc4bb52bacc77da654a482.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/790d1571afbc4bb52bacc77da654a482.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/790d1571afbc4bb52bacc77da654a482.jpg"
                    }
                ]
            }
        ],
        "brand": "Submarinos",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 60,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 1310,
        "_id": "5a5e8f3b77b9410001b014d4",
        "retailer_sku": "1128111",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "name": "Panadería Dulce",
                "father": "553a6a382c1f36d3142a2015",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "slug": "panaderia-y-reposteria",
                "name": "Panadería y Repostería",
                "father": "",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326079114",
        "new_objectID": "a8c16c644b9e260ba59fb5074126c7ca",
        "created": "2018-01-16T23:48:11.949Z",
        "percentage": 0,
        "name": "Ponqué Submarinos Arequipe x 2 Unidades",
        "iva": 19,
        "product_simple": "5a5d4826c9e52600019b10f9",
        "modified": "2018-09-28 01:43:50.303780",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/790d1571afbc4bb52bacc77da654a482.jpg",
        "objectID": "5a5e8f3b77b9410001b014d4",
        "_highlightResult": {
            "brand": {
                "value": "Submarinos",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Submarinos Arequipe x 2 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 1,
        "slug": "Brownie-Mamá-Ia-Surtido-Caja-x-6-Unidades-x-370-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/cf2850cbcfe70af4220c3ba5a871f1fd.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/cf2850cbcfe70af4220c3ba5a871f1fd.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/cf2850cbcfe70af4220c3ba5a871f1fd.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/cf2850cbcfe70af4220c3ba5a871f1fd.jpg"
                    }
                ]
            }
        ],
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 1,
            "unit": {
                "name": "paquete",
                "abbreviation": "paquete",
                "_id": 1
            }
        },
        "price": 10750,
        "_id": "5a5e8ab877b9410001af53cb",
        "retailer_sku": "1105188",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d441dc9e52600019aede9",
        "categories": [
            {
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7702020101684",
        "tags": [

        ],
        "stock": 4,
        "percentage": 0,
        "name": "Brownie Mamá Ia Surtido Caja x 6 Unidades x 370 g",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/cf2850cbcfe70af4220c3ba5a871f1fd.jpg",
        "new_objectID": "f183f2cad5161b50131678a416517d8d",
        "modified": "2018-09-27 21:15:19.016672",
        "brand": "Mama-ía",
        "objectID": "5a5e8ab877b9410001af53cb",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Brownie Mamá Ia Surtido Caja x 6 Unidades x 370 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Mama-ía",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Torta-Olímpica-Vainilla/Fruto-Rojo-900-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/19dee3919ac8393f548f7e0951499740.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/19dee3919ac8393f548f7e0951499740.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/19dee3919ac8393f548f7e0951499740.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/19dee3919ac8393f548f7e0951499740.jpg"
                    }
                ]
            }
        ],
        "brand": "Olímpica",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 1,
            "unit": {
                "name": "unidad",
                "abbreviation": "unidad",
                "_id": 1
            }
        },
        "price": 12500,
        "_id": "5a907697d2a6b30001affb62",
        "retailer_sku": "960436",
        "name": "Torta Olímpica Vainilla/Fruto Rojo 900 g",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "",
        "new_objectID": "6ee7530d76ea5df68235a523858dd132",
        "stock": 4,
        "percentage": 0,
        "created": "2018-02-23T20:16:23.883Z",
        "iva": 19,
        "product_simple": "5a907697d2a6b30001affb5b",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/19dee3919ac8393f548f7e0951499740.jpg",
        "objectID": "5a907697d2a6b30001affb62",
        "_highlightResult": {
            "brand": {
                "value": "Olímpica",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Torta Olímpica Vainilla/Fruto Rojo 900 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ]
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Torta-Olímpica-Americana-Vainil-800-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4cbf2894b7771c9a063416c983cc9e0e.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4cbf2894b7771c9a063416c983cc9e0e.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4cbf2894b7771c9a063416c983cc9e0e.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4cbf2894b7771c9a063416c983cc9e0e.jpg"
                    }
                ]
            }
        ],
        "brand": "Olímpica",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 800,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 52500,
        "_id": "5a9076971ff67100015b7e7e",
        "retailer_sku": "781104",
        "name": "Torta Olímpica Americana Vainil 800 g",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "",
        "new_objectID": "ba5148f65f1c9fac6685d90d0d374c11",
        "stock": 4,
        "percentage": 0,
        "created": "2018-02-23T20:16:23.862Z",
        "iva": 19,
        "product_simple": "5a9076971ff67100015b7e7b",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/4cbf2894b7771c9a063416c983cc9e0e.jpg",
        "objectID": "5a9076971ff67100015b7e7e",
        "_highlightResult": {
            "brand": {
                "value": "Olímpica",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Torta Olímpica Americana Vainil 800 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ]
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Torta-Olímpica-Americana-Nar/Amapol-800-g",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/0c0c3671c44ec8ffaafb5848cbd6e1ab.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/0c0c3671c44ec8ffaafb5848cbd6e1ab.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/0c0c3671c44ec8ffaafb5848cbd6e1ab.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/0c0c3671c44ec8ffaafb5848cbd6e1ab.jpg"
                    }
                ]
            }
        ],
        "brand": "Olímpica",
        "manually_active": true,
        "product_simple_active": true,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 800,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 52500,
        "_id": "5a9076971ff67100015b7e77",
        "retailer_sku": "781102",
        "iac": 0,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "",
        "new_objectID": "77af09074ba6eecf21f24125088ab3c0",
        "created": "2018-02-23T20:16:23.764Z",
        "percentage": 0,
        "name": "Torta Olímpica Americana Nar/Amapol 800 g",
        "iva": 19,
        "product_simple": "5a9076971ff67100015b7e71",
        "modified": "2018-09-27 21:01:12.233261",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/0c0c3671c44ec8ffaafb5848cbd6e1ab.jpg",
        "objectID": "5a9076971ff67100015b7e77",
        "_highlightResult": {
            "brand": {
                "value": "Olímpica",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Torta Olímpica Americana Nar/Amapol 800 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Torta-Olímpica-Americana-Vainil/Alm-800-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/26308a38a8ac535c270f122062d27230.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/26308a38a8ac535c270f122062d27230.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/26308a38a8ac535c270f122062d27230.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/26308a38a8ac535c270f122062d27230.jpg"
                    }
                ]
            }
        ],
        "brand": "Olímpica",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 800,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 52500,
        "_id": "5a9076971ff67100015b7e70",
        "retailer_sku": "781103",
        "name": "Torta Olímpica Americana Vainil/Alm 800 g",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "",
        "new_objectID": "8baedc32cedd79fa2593d28aa97f0cc7",
        "stock": 4,
        "percentage": 0,
        "created": "2018-02-23T20:16:23.683Z",
        "iva": 19,
        "product_simple": "5a9076971ff67100015b7e68",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/26308a38a8ac535c270f122062d27230.jpg",
        "objectID": "5a9076971ff67100015b7e70",
        "_highlightResult": {
            "brand": {
                "value": "Olímpica",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Torta Olímpica Americana Vainil/Alm 800 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ]
        }
    },
    {
        "iva": 19,
        "active": true,
        "modified": "2018-09-28 22:28:33.067735",
        "iac": 0,
        "percentage": 0,
        "stock": 5,
        "new_objectID": "0fff5c637e634db632ef13936c794bdf",
        "price": 2000,
        "fee": 3.7,
        "special_price": 0,
        "product_simple_active": true,
        "boost": 0,
        "visible": true,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "categories": [
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "father": "",
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "retailer_sku": "84866",
        "slug": "Pastelitos-Pinguinos-Chocol-X-80-G-X-2-Unidades",
        "image_url": "https://catalog.images.mercadoni.com/a7eb18df702a9b4d52c3f31c37918697.jpg",
        "images": [
            {
                "urls": [
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/a7eb18df702a9b4d52c3f31c37918697.jpg",
                        "version": "small"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/a7eb18df702a9b4d52c3f31c37918697.jpg",
                        "version": "medium"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/a7eb18df702a9b4d52c3f31c37918697.jpg",
                        "version": "big"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/a7eb18df702a9b4d52c3f31c37918697.jpg",
                        "version": "original"
                    }
                ]
            }
        ],
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "product_simple": "5a8db280662c380001e059c7",
        "unit": {
            "unit": {
                "name": "paquete",
                "_id": 1,
                "abbreviation": "paquete"
            },
            "value": 1,
            "conversion_rate": 0,
            "conversion_enable": false
        },
        "ean": "7705326053206",
        "location": "5a5e41898811717a00722e6e",
        "name": "Pastelitos Pinguinos Chocol X 80 G X 2 Unidades",
        "brand": "",
        "objectID": "5a8db281d2a6b30001af739d",
        "_highlightResult": {
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Pastelitos Pinguinos Chocol X 80 G X 2 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Descobolsa-Ponquécitos-x-2-Unidades-x-50-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/de1828bb420d9b36ef3cc2dda86e9904.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/de1828bb420d9b36ef3cc2dda86e9904.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/de1828bb420d9b36ef3cc2dda86e9904.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/de1828bb420d9b36ef3cc2dda86e9904.jpg"
                    }
                ]
            }
        ],
        "brand": "Comapan",
        "manually_active": true,
        "product_simple_active": true,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 50,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 1540,
        "_id": "5a8db281662c380001e059eb",
        "retailer_sku": "88882",
        "name": "Descobolsa Ponquécitos x 2 Unidades x 50 g",
        "iac": 0,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702432071759",
        "stock": 4,
        "percentage": 0,
        "created": "2018-02-21T17:55:13.6Z",
        "iva": 19,
        "product_simple": "5a8db280d2a6b30001af7390",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/de1828bb420d9b36ef3cc2dda86e9904.jpg",
        "new_objectID": "9a3cf1871478b36849323b2d96532a35",
        "objectID": "5a8db281662c380001e059eb",
        "_highlightResult": {
            "brand": {
                "value": "Comapan",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Descobolsa Ponquécitos x 2 Unidades x 50 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ]
        }
    },
    {
        "product_simple_active": true,
        "boost": 0,
        "visible": true,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "stock": 5,
        "percentage": 0,
        "price": 8080,
        "iva": 19,
        "modified": "2018-09-28 22:28:33.067735",
        "iac": 0,
        "active": true,
        "new_objectID": "72f02e1fc34fa0639932e1540ad48531",
        "special_price": 0,
        "categories": [
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "father": "",
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "fee": 3.7,
        "retailer_sku": "81019",
        "slug": "Muffins-Corrientes-Bolsa-Sunrise-X-6-Unidades",
        "image_url": "https://catalog.images.mercadoni.com/3c7f140bd218fbe12156a885532f636d.jpg",
        "images": [
            {
                "urls": [
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3c7f140bd218fbe12156a885532f636d.jpg",
                        "version": "small"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3c7f140bd218fbe12156a885532f636d.jpg",
                        "version": "medium"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3c7f140bd218fbe12156a885532f636d.jpg",
                        "version": "big"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3c7f140bd218fbe12156a885532f636d.jpg",
                        "version": "original"
                    }
                ]
            }
        ],
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "product_simple": "5a8db2791ff67100015af98a",
        "unit": {
            "unit": {
                "name": "paquete",
                "_id": 1,
                "abbreviation": "paquete"
            },
            "value": 1,
            "conversion_rate": 0,
            "conversion_enable": false
        },
        "ean": "7702272000032",
        "location": "5a5e41898811717a00722e6e",
        "name": "Muffins Corrientes Bolsa Sunrise X 6 Unidades",
        "brand": "",
        "objectID": "5a8db2791ff67100015af999",
        "_highlightResult": {
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Muffins Corrientes Bolsa Sunrise X 6 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "product_simple_active": true,
        "boost": 0,
        "visible": true,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "stock": 5,
        "percentage": 0,
        "price": 9260,
        "iva": 19,
        "modified": "2018-09-28 22:28:33.067735",
        "iac": 0,
        "active": true,
        "new_objectID": "d374593f2e00d9d49138960b380dc86b",
        "special_price": 0,
        "categories": [
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "father": "",
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "fee": 3.7,
        "retailer_sku": "79766",
        "slug": "Brownie-Azúcar-Cj-X-6-Unidades-X-320-G-Mama-Ia",
        "image_url": "https://catalog.images.mercadoni.com/57034970fba7dd9da381b8c70f227ae9.jpg",
        "images": [
            {
                "urls": [
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/57034970fba7dd9da381b8c70f227ae9.jpg",
                        "version": "small"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/57034970fba7dd9da381b8c70f227ae9.jpg",
                        "version": "medium"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/57034970fba7dd9da381b8c70f227ae9.jpg",
                        "version": "big"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/57034970fba7dd9da381b8c70f227ae9.jpg",
                        "version": "original"
                    }
                ]
            }
        ],
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "product_simple": "5a8db2741ff67100015af92f",
        "unit": {
            "unit": {
                "name": "paquete",
                "_id": 1,
                "abbreviation": "paquete"
            },
            "value": 1,
            "conversion_rate": 0,
            "conversion_enable": false
        },
        "ean": "7702256011108",
        "location": "5a5e41898811717a00722e6e",
        "name": "Brownie Azúcar Cj X 6 Unidades X 320 G Mama Ia",
        "brand": "",
        "objectID": "5a8db2741ff67100015af938",
        "_highlightResult": {
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Brownie Azúcar Cj X 6 Unidades X 320 G Mama Ia",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "iva": 19,
        "active": true,
        "modified": "2018-09-28 22:28:33.067735",
        "iac": 0,
        "percentage": 0,
        "stock": 5,
        "new_objectID": "9af622d767d4c0edac48b547842d6af3",
        "price": 1310,
        "fee": 3.7,
        "special_price": 0,
        "product_simple_active": true,
        "boost": 0,
        "visible": true,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "categories": [
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "father": "",
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "retailer_sku": "35374",
        "slug": "Ponqués-Bimboletes-Vainilla-X-55-G",
        "image_url": "https://catalog.images.mercadoni.com/b84499794f7c5debb2c9e3f01f40fd20.jpg",
        "images": [
            {
                "urls": [
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b84499794f7c5debb2c9e3f01f40fd20.jpg",
                        "version": "small"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b84499794f7c5debb2c9e3f01f40fd20.jpg",
                        "version": "medium"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b84499794f7c5debb2c9e3f01f40fd20.jpg",
                        "version": "big"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b84499794f7c5debb2c9e3f01f40fd20.jpg",
                        "version": "original"
                    }
                ]
            }
        ],
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "product_simple": "5a8db252662c380001e05652",
        "unit": {
            "unit": {
                "name": "g",
                "_id": 1,
                "abbreviation": "g"
            },
            "value": 55,
            "conversion_rate": 0,
            "conversion_enable": false
        },
        "ean": "7705326012395",
        "location": "5a5e41898811717a00722e6e",
        "name": "Ponqués Bimboletes Vainilla X 55 G",
        "brand": "",
        "objectID": "5a8db2521ff67100015af681",
        "_highlightResult": {
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Ponqués Bimboletes Vainilla X 55 G",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "product_simple_active": true,
        "boost": 0,
        "visible": true,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "stock": 5,
        "percentage": 0,
        "price": 14450,
        "iva": 19,
        "modified": "2018-09-28 22:28:33.067735",
        "iac": 0,
        "active": true,
        "new_objectID": "aa30d131d36d59fbe6c48ed5b166b27b",
        "special_price": 0,
        "categories": [
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "father": "",
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "fee": 3.7,
        "retailer_sku": "15363",
        "slug": "Titote-Frunorte-X-125-G",
        "image_url": "https://catalog.images.mercadoni.com/24cc041b1ca356607b3c10511c90faa4.jpg",
        "images": [
            {
                "urls": [
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/24cc041b1ca356607b3c10511c90faa4.jpg",
                        "version": "small"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/24cc041b1ca356607b3c10511c90faa4.jpg",
                        "version": "medium"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/24cc041b1ca356607b3c10511c90faa4.jpg",
                        "version": "big"
                    },
                    {
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/24cc041b1ca356607b3c10511c90faa4.jpg",
                        "version": "original"
                    }
                ]
            }
        ],
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "product_simple": "5a8db238d2a6b30001af6e98",
        "unit": {
            "unit": {
                "name": "g",
                "_id": 1,
                "abbreviation": "g"
            },
            "value": 125,
            "conversion_rate": 0,
            "conversion_enable": false
        },
        "ean": "7704722000012",
        "location": "5a5e41898811717a00722e6e",
        "name": "Titote Frunorte X 125 G",
        "brand": "",
        "objectID": "5a8db239d2a6b30001af6e9f",
        "_highlightResult": {
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Titote Frunorte X 125 G",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Muffin-Banana-Nut-Otis-Spunkmeyer-x-113-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3770a75a1f4c9ddb3c2da961fc9e8054.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3770a75a1f4c9ddb3c2da961fc9e8054.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3770a75a1f4c9ddb3c2da961fc9e8054.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3770a75a1f4c9ddb3c2da961fc9e8054.jpg"
                    }
                ]
            }
        ],
        "brand": "Otis",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 113,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 6120,
        "_id": "5a5e8cd077b9410001afa9ef",
        "retailer_sku": "726559",
        "name": "Muffin Banana Nut Otis Spunkmeyer x 113 g",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d45f1c9e52600019afd83",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "13087047059",
        "stock": 4,
        "percentage": 0,
        "created": "2018-01-16T23:37:52.593Z",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/3770a75a1f4c9ddb3c2da961fc9e8054.jpg",
        "new_objectID": "855dd7263f5cc4e0bab3747eaf668901",
        "objectID": "5a5e8cd077b9410001afa9ef",
        "_highlightResult": {
            "brand": {
                "value": "Otis",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Muffin Banana Nut Otis Spunkmeyer x 113 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Lonchimix-Marinela-Surtido-x-5-Unidades-x-161-g",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/d254ec46bdf5a7320a57346d143c27be.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/d254ec46bdf5a7320a57346d143c27be.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/d254ec46bdf5a7320a57346d143c27be.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/d254ec46bdf5a7320a57346d143c27be.jpg"
                    }
                ]
            }
        ],
        "brand": "Marinela",
        "manually_active": true,
        "product_simple_active": true,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 161,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 3890,
        "_id": "5a5e8ad677b9410001af58fa",
        "retailer_sku": "1128020",
        "iac": 0,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326079183",
        "new_objectID": "303a33b70f9c652958281b5ff57a429e",
        "created": "2018-01-16T23:29:26.053Z",
        "percentage": 0,
        "name": "Lonchimix Marinela Surtido x 5 Unidades x 161 g",
        "iva": 19,
        "product_simple": "5a5d4437c9e52600019aeed4",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/d254ec46bdf5a7320a57346d143c27be.jpg",
        "objectID": "5a5e8ad677b9410001af58fa",
        "_highlightResult": {
            "brand": {
                "value": "Marinela",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Lonchimix Marinela Surtido x 5 Unidades x 161 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Brownie-Mama-Ia-Mora-Arequipe-Caja-420-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4d9cb60a855328ef74be085d046714f9.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4d9cb60a855328ef74be085d046714f9.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4d9cb60a855328ef74be085d046714f9.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/4d9cb60a855328ef74be085d046714f9.jpg"
                    }
                ]
            }
        ],
        "brand": "Mama-ía",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 420,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 13650,
        "_id": "5a5e8ab677b9410001af5369",
        "retailer_sku": "839293",
        "name": "Brownie Mama Ia Mora Arequipe Caja 420 g",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d441bc9e52600019aedd1",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702020101493",
        "stock": 4,
        "percentage": 0,
        "created": "2018-01-16T23:28:54.414Z",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/4d9cb60a855328ef74be085d046714f9.jpg",
        "new_objectID": "7fc2bb604e8dba163bb75daefae1411e",
        "objectID": "5a5e8ab677b9410001af5369",
        "_highlightResult": {
            "brand": {
                "value": "Mama-ía",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Brownie Mama Ia Mora Arequipe Caja 420 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Pretzel-Maxli-x-100-g",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/935442e7acf4615d5785c005725665b6.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/935442e7acf4615d5785c005725665b6.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/935442e7acf4615d5785c005725665b6.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/935442e7acf4615d5785c005725665b6.jpg"
                    }
                ]
            }
        ],
        "brand": "JBO",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 100,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 4780,
        "_id": "5a5e895d77b9410001af12dd",
        "retailer_sku": "633655",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d42c9c9e52600019ae20f",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702276000045",
        "new_objectID": "beaf9dd075ac86e4ec017828023b21d1",
        "created": "2018-01-16T23:23:09.865Z",
        "percentage": 0,
        "name": "Pretzel Maxli x 100 g",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:19.016672",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/935442e7acf4615d5785c005725665b6.jpg",
        "objectID": "5a5e895d77b9410001af12dd",
        "_highlightResult": {
            "brand": {
                "value": "JBO",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Pretzel Maxli x 100 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Lonchera-Comapan-Festival-Del-Recreo-x-201-g-x-5-Unidades",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/590d753543756d8a41f7c962e2d4ced9.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/590d753543756d8a41f7c962e2d4ced9.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/590d753543756d8a41f7c962e2d4ced9.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/590d753543756d8a41f7c962e2d4ced9.jpg"
                    }
                ]
            }
        ],
        "brand": "Comapan",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 1,
            "unit": {
                "name": "paquete",
                "abbreviation": "paquete",
                "_id": 1
            }
        },
        "price": 4750,
        "_id": "5a5e866877b9410001ae897c",
        "retailer_sku": "960133",
        "name": "Lonchera Comapan Festival Del Recreo x 201 g x 5 Unidades",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d3fc8c9e52600019ac91c",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702432075269",
        "stock": 4,
        "percentage": 0,
        "created": "2018-01-16T23:10:32.551Z",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/590d753543756d8a41f7c962e2d4ced9.jpg",
        "new_objectID": "265f531b1d9b344ab173e5a153175df4",
        "objectID": "5a5e866877b9410001ae897c",
        "_highlightResult": {
            "brand": {
                "value": "Comapan",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Lonchera Comapan Festival Del Recreo x 201 g x 5 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Ponqué-Chocosabores-Comapan-x-5-Unidades-x-500-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b92b2cd956c4935e807dfc5d49270229.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b92b2cd956c4935e807dfc5d49270229.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b92b2cd956c4935e807dfc5d49270229.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b92b2cd956c4935e807dfc5d49270229.jpg"
                    }
                ]
            }
        ],
        "brand": "Comapan",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 500,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 8060,
        "_id": "5a5e866677b9410001ae894a",
        "retailer_sku": "841304",
        "name": "Ponqué Chocosabores Comapan x 5 Unidades x 500 g",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d3fc6c9e52600019ac90e",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702432075153",
        "stock": 4,
        "percentage": 0,
        "created": "2018-01-16T23:10:30.965Z",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/b92b2cd956c4935e807dfc5d49270229.jpg",
        "new_objectID": "df39850f1c0b85e73dd24563067633d3",
        "objectID": "5a5e866677b9410001ae894a",
        "_highlightResult": {
            "brand": {
                "value": "Comapan",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Ponqué Chocosabores Comapan x 5 Unidades x 500 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Postre-Colombina-Hdo-Chessecake-Agraz-Gta-x-900-g",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/71a9d2cd466bb76f90fbe6f6e9839a9f.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/71a9d2cd466bb76f90fbe6f6e9839a9f.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/71a9d2cd466bb76f90fbe6f6e9839a9f.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/71a9d2cd466bb76f90fbe6f6e9839a9f.jpg"
                    }
                ]
            }
        ],
        "brand": "Colombina",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 900,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 34600,
        "_id": "5a5e865377b9410001ae859d",
        "retailer_sku": "1247692",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d3faec9e52600019ac881",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702011090089",
        "new_objectID": "f6de510967b1c7ed6cb8f8b6264e1323",
        "created": "2018-01-16T23:10:11.157Z",
        "percentage": 0,
        "name": "Postre Colombina Hdo Chessecake Agraz Gta x 900 g",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/71a9d2cd466bb76f90fbe6f6e9839a9f.jpg",
        "objectID": "5a5e865377b9410001ae859d",
        "_highlightResult": {
            "brand": {
                "value": "Colombina",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Postre Colombina Hdo Chessecake Agraz Gta x 900 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Ponky-Ponke-Vainilla-x-6-Unidades-x-216-g",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/834fe4cdc983bb9393cc3f9e78828c88.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/834fe4cdc983bb9393cc3f9e78828c88.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/834fe4cdc983bb9393cc3f9e78828c88.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/834fe4cdc983bb9393cc3f9e78828c88.jpg"
                    }
                ]
            }
        ],
        "brand": "Colombina",
        "manually_active": true,
        "product_simple_active": true,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 6,
            "unit": {
                "name": "unidades",
                "abbreviation": "unidades",
                "_id": 1
            }
        },
        "price": 4350,
        "_id": "5a5e864277b9410001ae8295",
        "retailer_sku": "816112",
        "iac": 0,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d3f96c9e52600019ac7d4",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702011048042",
        "created": "2018-01-16T23:09:54.856Z",
        "percentage": 0,
        "name": "Ponky Ponke Vainilla x 6 Unidades x 216 g",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/834fe4cdc983bb9393cc3f9e78828c88.jpg",
        "new_objectID": "0354edb341407eae498578eb8fa7cbf2",
        "objectID": "5a5e864277b9410001ae8295",
        "_highlightResult": {
            "brand": {
                "value": "Colombina",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponky Ponke Vainilla x 6 Unidades x 216 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Ponky-Nucita-x-4-Unidades-x-132-g",
        "stock": 4,
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9a0fc7e5437ce91a01fbf994222954e2.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9a0fc7e5437ce91a01fbf994222954e2.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9a0fc7e5437ce91a01fbf994222954e2.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/9a0fc7e5437ce91a01fbf994222954e2.jpg"
                    }
                ]
            }
        ],
        "brand": "Colombina",
        "manually_active": true,
        "product_simple_active": true,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 4,
            "unit": {
                "name": "unidades",
                "abbreviation": "unidades",
                "_id": 1
            }
        },
        "price": 3880,
        "_id": "5a5e864177b9410001ae821b",
        "retailer_sku": "742677",
        "iac": 0,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d3f94c9e52600019ac7c6",
        "categories": [
            {
                "father": "",
                "name": "Panadería y Repostería",
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria"
            },
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7702011045676",
        "created": "2018-01-16T23:09:53.101Z",
        "percentage": 0,
        "name": "Ponky Nucita x 4 Unidades x 132 g",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:19.016672",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/9a0fc7e5437ce91a01fbf994222954e2.jpg",
        "new_objectID": "299d051fc784cd869edb52d6de859906",
        "objectID": "5a5e864177b9410001ae821b",
        "_highlightResult": {
            "brand": {
                "value": "Colombina",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponky Nucita x 4 Unidades x 132 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "image_url": "https://catalog.images.mercadoni.com/3a70fe2afbfc87108ded3d83ac268816.jpg",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3a70fe2afbfc87108ded3d83ac268816.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3a70fe2afbfc87108ded3d83ac268816.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3a70fe2afbfc87108ded3d83ac268816.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/3a70fe2afbfc87108ded3d83ac268816.jpg"
                    }
                ]
            }
        ],
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 5,
            "unit": {
                "name": "unidades",
                "abbreviation": "unidades",
                "_id": 1
            }
        },
        "price": 4410,
        "_id": "5a5e85c177b9410001ae6a9e",
        "retailer_sku": "1565853",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "slug": "Ponqué-Chocoso-Cubierto-Hocolate-x-5-Unidades",
        "location": "5a5e41898811717a00722e6e",
        "tags": [

        ],
        "product_simple": "5a5d3f14c9e52600019ac382",
        "categories": [
            {
                "father": "553a6a382c1f36d3142a2015",
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7"
            },
            {
                "father": "",
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015"
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015",
                "55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326071330",
        "new_objectID": "a6eb090f84034ca2d4b9aeaaa9a68af3",
        "stock": 4,
        "percentage": 0,
        "name": "Ponqué Chocoso Cubierto Hocolate x 5 Unidades",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-28 22:28:33.067735",
        "visible": true,
        "brand": "Bimbo",
        "objectID": "5a5e85c177b9410001ae6a9e",
        "_highlightResult": {
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "name": {
                "value": "Ponqué Chocoso Cubierto Hocolate x 5 Unidades",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "brand": {
                "value": "Bimbo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Panque-Vainilla-Bimbo-x-60-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/393cad6b992032a308ef118eb419d484.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/393cad6b992032a308ef118eb419d484.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/393cad6b992032a308ef118eb419d484.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/393cad6b992032a308ef118eb419d484.jpg"
                    }
                ]
            }
        ],
        "brand": "Bimbo",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 60,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 1290,
        "_id": "5a5e84e777b9410001ae444a",
        "retailer_sku": "961136",
        "name": "Panque Vainilla Bimbo x 60 g",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d3e53c9e52600019abc92",
        "categories": [
            {
                "_id": "55599763a973152e00758ac7",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "name": "Panadería Dulce",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "_id": "553a6a382c1f36d3142a2015",
                "slug": "panaderia-y-reposteria",
                "name": "Panadería y Repostería",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7705326076588",
        "stock": 4,
        "percentage": 0,
        "created": "2018-01-16T23:04:07.718Z",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:19.016672",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/393cad6b992032a308ef118eb419d484.jpg",
        "new_objectID": "4290283512fc13c0571a3a6673b7daf8",
        "objectID": "5a5e84e777b9410001ae444a",
        "_highlightResult": {
            "brand": {
                "value": "Bimbo",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Panque Vainilla Bimbo x 60 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    },
    {
        "special_price": 0,
        "category": [
            "553a6a382c1f36d3142a2015"
        ],
        "boost": 0,
        "slug": "Calados-De-Papel-Surtidos-Baffi-x-125-g",
        "images": [
            {
                "urls": [
                    {
                        "version": "small",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b431e6b7d7029566fbb665430f77ba5f.jpg"
                    },
                    {
                        "version": "medium",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b431e6b7d7029566fbb665430f77ba5f.jpg"
                    },
                    {
                        "version": "big",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b431e6b7d7029566fbb665430f77ba5f.jpg"
                    },
                    {
                        "version": "original",
                        "active": true,
                        "url": "https://catalog.images.mercadoni.com/b431e6b7d7029566fbb665430f77ba5f.jpg"
                    }
                ]
            }
        ],
        "brand": "Baffi",
        "manually_active": true,
        "iac": 0,
        "unit": {
            "conversion_enable": false,
            "conversion_rate": 0,
            "value": 125,
            "unit": {
                "name": "gramos",
                "abbreviation": "gramos",
                "_id": 1
            }
        },
        "price": 13050,
        "_id": "5a5e84a877b9410001ae3986",
        "retailer_sku": "1324226",
        "name": "Calados De Papel Surtidos Baffi x 125 g",
        "product_simple_active": true,
        "active": true,
        "fee": 3.7,
        "location": "5a5e41898811717a00722e6e",
        "product_simple": "5a5d3e1fc9e52600019abab2",
        "categories": [
            {
                "name": "Panadería Dulce",
                "slug": "panaderia-y-reposteria-panaderia-dulce",
                "_id": "55599763a973152e00758ac7",
                "father": "553a6a382c1f36d3142a2015"
            },
            {
                "name": "Panadería y Repostería",
                "slug": "panaderia-y-reposteria",
                "_id": "553a6a382c1f36d3142a2015",
                "father": ""
            }
        ],
        "hierarchicalCategories": {
            "lvl0": [
                "553a6a382c1f36d3142a2015"
            ],
            "lvl1": [
                "553a6a382c1f36d3142a2015 \u003e 55599763a973152e00758ac7"
            ]
        },
        "ean": "7707084500251",
        "stock": 4,
        "percentage": 0,
        "created": "2018-01-16T23:03:04.845Z",
        "iva": 19,
        "retailer": "5a5d2e6fe17bd74a0047b6c5",
        "modified": "2018-09-27 21:15:18.944294",
        "visible": true,
        "image_url": "https://catalog.images.mercadoni.com/b431e6b7d7029566fbb665430f77ba5f.jpg",
        "new_objectID": "f10c91228ba46af5d7f8fbeec3dae0e5",
        "objectID": "5a5e84a877b9410001ae3986",
        "_highlightResult": {
            "brand": {
                "value": "Baffi",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "name": {
                "value": "Calados De Papel Surtidos Baffi x 125 g",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "location": {
                "value": "5a5e41898811717a00722e6e",
                "matchLevel": "none",
                "matchedWords": [

                ]
            },
            "categories": [
                {
                    "name": {
                        "value": "Panadería Dulce",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                },
                {
                    "name": {
                        "value": "Panadería y Repostería",
                        "matchLevel": "none",
                        "matchedWords": [

                        ]
                    }
                }
            ],
            "retailer": {
                "value": "5a5d2e6fe17bd74a0047b6c5",
                "matchLevel": "none",
                "matchedWords": [

                ]
            }
        }
    }
];

@Injectable()
export class StoreService {
    public url: string;

    constructor(
        private _http: Http
    ) {
        this.url = "https://api.myjson.com/bins/1gbraw"; // URL to get products, move value to config 
    }

    //  Method: transform list of products to format specific
    private transformProducts(productsUnformat): Product[] {
        return productsUnformat.map((product) => {
            let productSimple = new Product();
            // console.log(product);
            productSimple.special_price = product.special_price;
            productSimple.price = (product.price == null) ? 0 : product.price;
            productSimple._id = product._id;
            // console.log(product.price);
            productSimple.active = product.active;
            productSimple.name = product.name;
            productSimple.image_url = product.image_url;
            
            return productSimple;
        });
    }

    //  Method: Get all product by url
    getProductsByUrl() {   
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        
        return this._http.get(this.url, { headers: headers }).map(res => this.transformProducts(res.json().retailer.products));
    }

    //  Method: Get all product into shopping cart
    getProductsCart(){
        let aProductsCart: Product[];
        aProductsCart = JSON.parse(localStorage.getItem('aProductsCart'));

        if(aProductsCart == null){
            aProductsCart = [];
        }
        return aProductsCart;
    }

    //  Method: Save a product into shopping cart
    saveProductsCart(product: Product){
        let aProductsCart: Product[];
        aProductsCart = this.getProductsCart();
        aProductsCart.push(product);        

        localStorage.setItem('aProductsCart', JSON.stringify(aProductsCart));
        return aProductsCart;
    }
}