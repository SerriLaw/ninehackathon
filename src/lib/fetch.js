const http = require("http");

export default async (lat, lon) => {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:6789/analyse/?lon=${lon}&lat=${lat}`;

    console.log(url);
    http.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        console.log(body);
        body = JSON.parse(body);

        if (!body || body.status) {
          resolve(fakeData);
        }
        resolve(body);
      });
    });
  });
};

const fakeData = [
  {
    type: "POI",
    id: "AU/POI/p0/1270103",
    score: 2.575,
    dist: 63.03114969334678,
    info: "search:ta:036009005419179-AU",
    poi: {
      name: "Caffe Venti",
      phone: "+(61)-(2)-92380831",
      categories: ["café", "café/pub"],
      classifications: [
        {
          code: "CAFE_PUB",
          names: [
            {
              nameLocale: "en-US",
              name: "café/pub"
            },
            {
              nameLocale: "en-US",
              name: "café"
            }
          ]
        }
      ]
    },
    address: {
      streetNumber: "10-20",
      streetName: "Bond Street",
      municipalitySubdivision: "Sydney CBD",
      municipality: "Sydney",
      countrySecondarySubdivision: "Sydney",
      countrySubdivision: "New South Wales",
      postalCode: "2000",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: "AUS",
      freeformAddress:
        "10-20 Bond Street, Sydney CBD, Sydney, New South Wales, 2000"
    },
    position: {
      lat: -33.86467,
      lon: 151.20808
    },
    viewport: {
      topLeftPoint: {
        lat: -33.86377,
        lon: 151.207
      },
      btmRightPoint: {
        lat: -33.86557,
        lon: 151.20916
      }
    },
    entryPoints: [
      {
        type: "main",
        position: {
          lat: -33.86464,
          lon: 151.20845
        }
      }
    ],
    sentiment: 0.2841549588873022,
    starScore: 3.5
  },
  {
    type: "POI",
    id: "AU/POI/p0/1203931",
    score: 2.575,
    dist: 74.22044401249796,
    info: "search:ta:036009005745139-AU",
    poi: {
      name: "Good Co Cafe",
      phone: "+(61)-(2)-92932551",
      categories: ["café", "café/pub"],
      classifications: [
        {
          code: "CAFE_PUB",
          names: [
            {
              nameLocale: "en-US",
              name: "café/pub"
            },
            {
              nameLocale: "en-US",
              name: "café"
            }
          ]
        }
      ]
    },
    address: {
      streetNumber: "255",
      streetName: "George Street",
      municipalitySubdivision: "Sydney CBD",
      municipality: "Sydney",
      countrySecondarySubdivision: "Sydney",
      countrySubdivision: "New South Wales",
      postalCode: "2000",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: "AUS",
      freeformAddress:
        "255 George Street, Sydney CBD, Sydney, New South Wales, 2000"
    },
    position: {
      lat: -33.86396,
      lon: 151.20728
    },
    viewport: {
      topLeftPoint: {
        lat: -33.86306,
        lon: 151.2062
      },
      btmRightPoint: {
        lat: -33.86486,
        lon: 151.20836
      }
    },
    entryPoints: [
      {
        type: "main",
        position: {
          lat: -33.86397,
          lon: 151.20745
        }
      }
    ],
    sentiment: 0.2841549588873022,
    starScore: 3.5
  },
  {
    type: "POI",
    id: "AU/POI/p0/784024",
    score: 2.575,
    dist: 105.83148602040843,
    info: "search:ta:036009002653507-AU",
    poi: {
      name: "1St Place Cafe",
      categories: ["café", "café/pub"],
      classifications: [
        {
          code: "CAFE_PUB",
          names: [
            {
              nameLocale: "en-US",
              name: "café/pub"
            },
            {
              nameLocale: "en-US",
              name: "café"
            }
          ]
        }
      ]
    },
    address: {
      streetNumber: "18",
      streetName: "Jamison Street",
      municipalitySubdivision: "Sydney CBD",
      municipality: "Sydney",
      countrySecondarySubdivision: "Sydney",
      countrySubdivision: "New South Wales",
      postalCode: "2000",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: "AUS",
      freeformAddress:
        "18 Jamison Street, Sydney CBD, Sydney, New South Wales, 2000"
    },
    position: {
      lat: -33.86417,
      lon: 151.20639
    },
    viewport: {
      topLeftPoint: {
        lat: -33.86327,
        lon: 151.20531
      },
      btmRightPoint: {
        lat: -33.86507,
        lon: 151.20747
      }
    },
    entryPoints: [
      {
        type: "main",
        position: {
          lat: -33.8643,
          lon: 151.20636
        }
      }
    ],
    sentiment: 0.2841549588873022,
    starScore: 3.5
  },
  {
    type: "POI",
    id: "AU/POI/p0/739312",
    score: 2.575,
    dist: 123.59563591311515,
    info: "search:ta:036009004244133-AU",
    poi: {
      name: "Paradiso Cafes",
      phone: "+(61)-(2)-92210527",
      categories: ["café", "café/pub"],
      classifications: [
        {
          code: "CAFE_PUB",
          names: [
            {
              nameLocale: "en-US",
              name: "café/pub"
            },
            {
              nameLocale: "en-US",
              name: "café"
            }
          ]
        }
      ]
    },
    address: {
      municipalitySubdivision: "Sydney CBD",
      municipality: "Sydney",
      countrySecondarySubdivision: "Sydney",
      countrySubdivision: "New South Wales",
      postalCode: "2000",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: "AUS",
      freeformAddress: "Sydney CBD, Sydney, New South Wales, 2000"
    },
    position: {
      lat: -33.86573,
      lon: 151.20733
    },
    viewport: {
      topLeftPoint: {
        lat: -33.86483,
        lon: 151.20625
      },
      btmRightPoint: {
        lat: -33.86663,
        lon: 151.20841
      }
    },
    entryPoints: [
      {
        type: "main",
        position: {
          lat: -33.86575,
          lon: 151.20732
        }
      }
    ],
    sentiment: 0.2841549588873022,
    starScore: 3.5
  },
  {
    type: "POI",
    id: "AU/POI/p0/1079765",
    score: 2.575,
    dist: 130.08199752412438,
    info: "search:ta:036009002761220-AU",
    poi: {
      name: "Le Quays Cafe",
      phone: "+(61)-(2)-92473857",
      categories: ["café", "café/pub"],
      classifications: [
        {
          code: "CAFE_PUB",
          names: [
            {
              nameLocale: "en-US",
              name: "café/pub"
            },
            {
              nameLocale: "en-US",
              name: "café"
            }
          ]
        }
      ]
    },
    address: {
      streetNumber: "97",
      streetName: "Pitt Street",
      municipalitySubdivision: "Sydney CBD",
      municipality: "Sydney",
      countrySecondarySubdivision: "Sydney",
      countrySubdivision: "New South Wales",
      postalCode: "2000",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: "AUS",
      freeformAddress:
        "97 Pitt Street, Sydney CBD, Sydney, New South Wales, 2000"
    },
    position: {
      lat: -33.8654,
      lon: 151.20845
    },
    viewport: {
      topLeftPoint: {
        lat: -33.8645,
        lon: 151.20737
      },
      btmRightPoint: {
        lat: -33.8663,
        lon: 151.20953
      }
    },
    entryPoints: [
      {
        type: "main",
        position: {
          lat: -33.86537,
          lon: 151.20869
        }
      }
    ],
    sentiment: 0.2841549588873022,
    starScore: 3.5
  },
  {
    type: "POI",
    id: "AU/POI/p0/419091",
    score: 2.575,
    dist: 173.39751045394092,
    info: "search:ta:036009002867446-AU",
    poi: {
      name: "Cafe Capri",
      phone: "+(61)-(2)-92621469",
      categories: ["café", "café/pub"],
      classifications: [
        {
          code: "CAFE_PUB",
          names: [
            {
              nameLocale: "en-US",
              name: "café/pub"
            },
            {
              nameLocale: "en-US",
              name: "café"
            }
          ]
        }
      ]
    },
    address: {
      streetName: "Carrington Street",
      municipalitySubdivision: "Wynyard, Sydney CBD",
      municipality: "Sydney",
      countrySecondarySubdivision: "Sydney",
      countrySubdivision: "New South Wales",
      postalCode: "2000",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: "AUS",
      freeformAddress:
        "Carrington Street, Sydney CBD, Sydney, New South Wales, 2000"
    },
    position: {
      lat: -33.86597,
      lon: 151.20646
    },
    viewport: {
      topLeftPoint: {
        lat: -33.86507,
        lon: 151.20538
      },
      btmRightPoint: {
        lat: -33.86687,
        lon: 151.20754
      }
    },
    entryPoints: [
      {
        type: "main",
        position: {
          lat: -33.86597,
          lon: 151.20636
        }
      }
    ],
    sentiment: 0.2841549588873022,
    starScore: 3.5
  },
  {
    type: "POI",
    id: "AU/POI/p0/652771",
    score: 2.575,
    dist: 178.6290465704056,
    info: "search:ta:036009001719032-AU",
    poi: {
      name: "Starbucks",
      categories: ["café/pub", "coffee shop"],
      classifications: [
        {
          code: "CAFE_PUB",
          names: [
            {
              nameLocale: "en-US",
              name: "coffee shop"
            },
            {
              nameLocale: "en-US",
              name: "café/pub"
            }
          ]
        }
      ]
    },
    address: {
      streetNumber: "11-17",
      streetName: "York Street",
      municipalitySubdivision: "Wynyard, Sydney CBD",
      municipality: "Sydney",
      countrySecondarySubdivision: "Sydney",
      countrySubdivision: "New South Wales",
      postalCode: "2000",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: "AUS",
      freeformAddress:
        "11-17 York Street, Sydney CBD, Sydney, New South Wales, 2000"
    },
    position: {
      lat: -33.86509,
      lon: 151.20555
    },
    viewport: {
      topLeftPoint: {
        lat: -33.86419,
        lon: 151.20447
      },
      btmRightPoint: {
        lat: -33.86599,
        lon: 151.20663
      }
    },
    entryPoints: [
      {
        type: "main",
        position: {
          lat: -33.86539,
          lon: 151.20565
        }
      }
    ],
    sentiment: 0.2841549588873022,
    starScore: 3.5
  },
  {
    type: "POI",
    id: "AU/POI/p0/1099534",
    score: 2.575,
    dist: 240.37949238724266,
    info: "search:ta:036009005650047-AU",
    poi: {
      name: "Starbucks York St",
      phone: "+(61)-(2)-92992126",
      categories: ["café/pub", "coffee shop"],
      classifications: [
        {
          code: "CAFE_PUB",
          names: [
            {
              nameLocale: "en-US",
              name: "coffee shop"
            },
            {
              nameLocale: "en-US",
              name: "café/pub"
            }
          ]
        }
      ]
    },
    address: {
      streetNumber: "12",
      streetName: "York Street",
      municipalitySubdivision: "Wynyard, Sydney CBD",
      municipality: "Sydney",
      countrySecondarySubdivision: "Sydney",
      countrySubdivision: "New South Wales",
      postalCode: "2000",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: "AUS",
      freeformAddress:
        "12 York Street, Sydney CBD, Sydney, New South Wales, 2000"
    },
    position: {
      lat: -33.86608,
      lon: 151.20548
    },
    viewport: {
      topLeftPoint: {
        lat: -33.86518,
        lon: 151.2044
      },
      btmRightPoint: {
        lat: -33.86698,
        lon: 151.20656
      }
    },
    entryPoints: [
      {
        type: "main",
        position: {
          lat: -33.86753,
          lon: 151.2059
        }
      }
    ],
    sentiment: 0.2841549588873022,
    starScore: 2
  },
  {
    type: "POI",
    id: "AU/POI/p0/46076",
    score: 2.575,
    dist: 245.49136044178732,
    info: "search:ta:036009005751387-AU",
    poi: {
      name: "Brew Cafe",
      phone: "+(61)-(2)-92511577",
      categories: ["café", "café/pub"],
      classifications: [
        {
          code: "CAFE_PUB",
          names: [
            {
              nameLocale: "en-US",
              name: "café/pub"
            },
            {
              nameLocale: "en-US",
              name: "café"
            }
          ]
        }
      ]
    },
    address: {
      streetNumber: "121-127",
      streetName: "Harrington Street",
      municipalitySubdivision: "The Rocks",
      municipality: "Sydney",
      countrySecondarySubdivision: "Sydney",
      countrySubdivision: "New South Wales",
      postalCode: "2000",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: "AUS",
      freeformAddress:
        "121-127 Harrington Street, The Rocks, Sydney, New South Wales, 2000"
    },
    position: {
      lat: -33.86246,
      lon: 151.20685
    },
    viewport: {
      topLeftPoint: {
        lat: -33.86156,
        lon: 151.20577
      },
      btmRightPoint: {
        lat: -33.86336,
        lon: 151.20793
      }
    },
    entryPoints: [
      {
        type: "main",
        position: {
          lat: -33.86256,
          lon: 151.20672
        }
      }
    ],
    sentiment: 0.2769721333415873,
    starScore: 4
  },
  {
    type: "POI",
    id: "AU/POI/p0/1375420",
    score: 2.575,
    dist: 245.9432709794211,
    info: "search:ta:036009003836029-AU",
    poi: {
      name: "Cafe Nook",
      phone: "+(61)-(2)-92995050",
      categories: ["café", "café/pub"],
      classifications: [
        {
          code: "CAFE_PUB",
          names: [
            {
              nameLocale: "en-US",
              name: "café/pub"
            },
            {
              nameLocale: "en-US",
              name: "café"
            }
          ]
        }
      ]
    },
    address: {
      streetNumber: "44-48",
      streetName: "Hunter Street",
      municipalitySubdivision: "Sydney CBD",
      municipality: "Sydney",
      countrySecondarySubdivision: "Sydney",
      countrySubdivision: "New South Wales",
      postalCode: "2000",
      countryCode: "AU",
      country: "Australia",
      countryCodeISO3: "AUS",
      freeformAddress:
        "44-48 Hunter Street, Sydney CBD, Sydney, New South Wales, 2000"
    },
    position: {
      lat: -33.86597,
      lon: 151.20951
    },
    viewport: {
      topLeftPoint: {
        lat: -33.86507,
        lon: 151.20843
      },
      btmRightPoint: {
        lat: -33.86687,
        lon: 151.21059
      }
    },
    entryPoints: [
      {
        type: "main",
        position: {
          lat: -33.86601,
          lon: 151.20949
        }
      }
    ],
    sentiment: 0.2841549588873022,
    starScore: 3
  }
];
