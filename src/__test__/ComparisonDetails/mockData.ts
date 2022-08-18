export const selected1 = {
    'type': 'Feature',
    'geometry': {
      'type': 'Polygon',
      'coordinates': [
        [
          [
            -53.7451171875,
            -30.5137659522877
          ],
          [
            -53.74391555786133,
            -30.51554058622328
          ],
        ]]
    },
    'properties': {
      'CD_MUN': 2709400,
      'NM_MUN': 'Viçosa',
      'SIGLA_UF': 'AL',
      'AREA_KM2': 367.888
    }
  };

export const selected2 = {
  'type': 'Feature',
  'geometry': {
      'type': 'Polygon',
      'coordinates': [
          [
              [
                  -52.249603271484375,
                  -30.883369321692243
              ],
              [
                  -52.24273681640625,
                  -30.925788712587014
              ],
          ]
      ]
  },
  'properties': {
      'CD_MUN': 4304507,
      'POPULATION': 56370,
      'NM_MUN': 'Canguçu',
      'SIGLA_UF': 'RS',
      'AREA_KM2': 3526.253
  },
};
  
  
  export const districtMock = {
    all: [],
    selected: selected1,
    setSelected: () => { },
    highlighted: null,
    setHighlighted: () => { },
    resetValues: () => { },
  };
  
  export const districtMockFalse = {
    all: [],
    selected: null,
    setSelected: () => { },
    highlighted: null,
    setHighlighted: () => { },
    resetValues: () => { },
  };
  export const comparisonMock = {
    comparison: [selected1, selected2],
    addComparisonDistrict: () => { },
    removeComparisonDistrict: () => { },
  };
  
  export const comparisonMockFalse = {
    comparison: [],
    addComparisonDistrict: () => { },
    removeComparisonDistrict: () => { },
  };
  
  export const sidebarOpenMock = {
    isSidebarOpen: true,
    setIsSidebarOpen: () => { },
  };
