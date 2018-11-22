export default async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          dist: 42.70382289126596,
          poi: {
            name: "Caffe Venti",
            phone: "+(61)-(2)-92380831",
            categories: ["café", "café/pub"]
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
          }
        }
      ]);
    }, 1);
  });
};
