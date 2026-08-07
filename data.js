// data.js — synthetic cockpit data for the Brand/GM cockpit (/os).
//
// Fictional oncology brand, fictional client company, fourteen months
// post-launch. No real HCPs, accounts, payers, patients or clients.
// See the footer of this file for how the numbers were built and how they
// reconcile bottom-up: HCP -> territory -> region -> national.
//
// meta.postLaunchLabels[i] indexes every trend array in this file (14
// months, launch through the most recent complete month). Brand TRx is
// prescription volume for ZYNTORA; market TRx is the total addressable
// market across all brands in this line of therapy; share = brand/market.
//
// Full per-HCP detail is kept for only the ~40 "spotlight" HCPs named in
// spotlightHcps; the remaining ~1,760 HCPs are represented only in the
// territory and account rollups (hcpCount, latestTrx), to keep this file
// small. All 1,800 HCPs were simulated individually to build the trend
// arrays below — see the reconciliation check at the bottom of this file.

const COCKPIT_DATA = {
  "meta": {
    "company": "Verdant Biopharma",
    "brand": "ZYNTORA",
    "indication": "HR+/HER2- metastatic breast cancer (2L+)",
    "monthsTotal": 24,
    "launchMonthIndex": 11,
    "postLaunchMonths": 14,
    "calendarLabels": [
      "2024-08",
      "2024-09",
      "2024-10",
      "2024-11",
      "2024-12",
      "2025-01",
      "2025-02",
      "2025-03",
      "2025-04",
      "2025-05",
      "2025-06",
      "2025-07",
      "2025-08",
      "2025-09",
      "2025-10",
      "2025-11",
      "2025-12",
      "2026-01",
      "2026-02",
      "2026-03",
      "2026-04",
      "2026-05",
      "2026-06",
      "2026-07"
    ],
    "postLaunchLabels": [
      "2025-06",
      "2025-07",
      "2025-08",
      "2025-09",
      "2025-10",
      "2025-11",
      "2025-12",
      "2026-01",
      "2026-02",
      "2026-03",
      "2026-04",
      "2026-05",
      "2026-06",
      "2026-07"
    ],
    "totals": {
      "hcps": 1800,
      "accounts": 240,
      "territories": 48
    }
  },
  "national": {
    "brandTrx": [
      88,
      276,
      602,
      1061,
      1573,
      2066,
      2465,
      2749,
      2870,
      2928,
      2958,
      2972,
      2955,
      2945
    ],
    "marketTrx": [
      19972,
      20072,
      20172,
      20273,
      20374,
      20476,
      20578,
      20681,
      20785,
      20889,
      20993,
      21245,
      21500,
      21758
    ],
    "share": [
      0.44,
      1.38,
      2.98,
      5.23,
      7.72,
      10.09,
      11.98,
      13.29,
      13.81,
      14.02,
      14.09,
      13.99,
      13.74,
      13.54
    ]
  },
  "regions": [
    {
      "id": "NE",
      "name": "Northeast",
      "brandTrx": [
        30,
        91,
        183,
        307,
        440,
        565,
        672,
        748,
        781,
        793,
        803,
        841,
        870,
        912
      ],
      "marketTrx": [
        5792,
        5821,
        5850,
        5879,
        5908,
        5938,
        5968,
        5997,
        6028,
        6058,
        6088,
        6161,
        6235,
        6310
      ],
      "share": [
        0.52,
        1.56,
        3.13,
        5.22,
        7.45,
        9.51,
        11.26,
        12.47,
        12.96,
        13.09,
        13.19,
        13.65,
        13.95,
        14.45
      ],
      "territoryCount": 12
    },
    {
      "id": "S",
      "name": "South",
      "brandTrx": [
        22,
        63,
        138,
        247,
        364,
        476,
        567,
        634,
        667,
        689,
        693,
        677,
        649,
        611
      ],
      "marketTrx": [
        5592,
        5620,
        5648,
        5676,
        5705,
        5733,
        5762,
        5791,
        5820,
        5849,
        5878,
        5949,
        6020,
        6092
      ],
      "share": [
        0.39,
        1.12,
        2.44,
        4.35,
        6.38,
        8.3,
        9.84,
        10.95,
        11.46,
        11.78,
        11.79,
        11.38,
        10.78,
        10.03
      ],
      "territoryCount": 12
    },
    {
      "id": "MW",
      "name": "Midwest",
      "brandTrx": [
        17,
        62,
        150,
        274,
        414,
        554,
        657,
        732,
        763,
        779,
        784,
        750,
        713,
        672
      ],
      "marketTrx": [
        4594,
        4617,
        4640,
        4663,
        4686,
        4710,
        4732,
        4757,
        4781,
        4804,
        4828,
        4886,
        4945,
        5004
      ],
      "share": [
        0.37,
        1.34,
        3.23,
        5.88,
        8.83,
        11.76,
        13.88,
        15.39,
        15.96,
        16.22,
        16.24,
        15.35,
        14.42,
        13.43
      ],
      "territoryCount": 12
    },
    {
      "id": "W",
      "name": "West",
      "brandTrx": [
        19,
        60,
        131,
        233,
        355,
        471,
        569,
        635,
        659,
        667,
        678,
        704,
        723,
        750
      ],
      "marketTrx": [
        3994,
        4014,
        4034,
        4055,
        4075,
        4095,
        4116,
        4136,
        4156,
        4178,
        4199,
        4249,
        4300,
        4352
      ],
      "share": [
        0.48,
        1.49,
        3.25,
        5.75,
        8.71,
        11.5,
        13.82,
        15.35,
        15.86,
        15.96,
        16.15,
        16.57,
        16.81,
        17.23
      ],
      "territoryCount": 12
    }
  ],
  "territories": [
    {
      "id": "NE-01",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 35,
      "accountCount": 5,
      "trend": [
        3,
        8,
        15,
        25,
        34,
        43,
        51,
        53,
        54,
        56,
        55,
        59,
        60,
        64
      ],
      "latestTrx": 64
    },
    {
      "id": "NE-02",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 32,
      "accountCount": 5,
      "trend": [
        3,
        10,
        18,
        28,
        35,
        41,
        48,
        53,
        56,
        57,
        58,
        61,
        62,
        65
      ],
      "latestTrx": 65
    },
    {
      "id": "NE-03",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 31,
      "accountCount": 5,
      "trend": [
        2,
        7,
        14,
        22,
        29,
        37,
        42,
        46,
        48,
        48,
        50,
        50,
        51,
        56
      ],
      "latestTrx": 56
    },
    {
      "id": "NE-04",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 46,
      "accountCount": 5,
      "trend": [
        3,
        7,
        14,
        23,
        36,
        49,
        61,
        71,
        76,
        79,
        80,
        83,
        86,
        90
      ],
      "latestTrx": 90
    },
    {
      "id": "NE-05",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 36,
      "accountCount": 5,
      "trend": [
        2,
        4,
        11,
        21,
        33,
        46,
        55,
        64,
        66,
        65,
        66,
        70,
        73,
        77
      ],
      "latestTrx": 77
    },
    {
      "id": "NE-06",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 45,
      "accountCount": 5,
      "trend": [
        2,
        5,
        14,
        26,
        41,
        54,
        65,
        70,
        71,
        71,
        72,
        76,
        78,
        81
      ],
      "latestTrx": 81
    },
    {
      "id": "NE-07",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 38,
      "accountCount": 5,
      "trend": [
        1,
        4,
        8,
        16,
        28,
        40,
        51,
        59,
        62,
        64,
        64,
        68,
        71,
        73
      ],
      "latestTrx": 73
    },
    {
      "id": "NE-08",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 27,
      "accountCount": 5,
      "trend": [
        1,
        7,
        15,
        25,
        33,
        37,
        42,
        45,
        49,
        50,
        51,
        55,
        56,
        59
      ],
      "latestTrx": 59
    },
    {
      "id": "NE-09",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 48,
      "accountCount": 5,
      "trend": [
        5,
        12,
        22,
        33,
        46,
        59,
        70,
        77,
        79,
        81,
        83,
        86,
        89,
        92
      ],
      "latestTrx": 92
    },
    {
      "id": "NE-10",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 44,
      "accountCount": 5,
      "trend": [
        3,
        10,
        18,
        32,
        44,
        54,
        63,
        69,
        73,
        73,
        76,
        78,
        82,
        87
      ],
      "latestTrx": 87
    },
    {
      "id": "NE-11",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 47,
      "accountCount": 5,
      "trend": [
        2,
        9,
        18,
        29,
        41,
        54,
        64,
        73,
        76,
        77,
        75,
        79,
        83,
        86
      ],
      "latestTrx": 86
    },
    {
      "id": "NE-12",
      "region": "NE",
      "regionName": "Northeast",
      "hcpCount": 46,
      "accountCount": 5,
      "trend": [
        3,
        8,
        16,
        27,
        40,
        51,
        60,
        68,
        71,
        72,
        73,
        76,
        79,
        82
      ],
      "latestTrx": 82
    },
    {
      "id": "S-01",
      "region": "S",
      "regionName": "South",
      "hcpCount": 44,
      "accountCount": 5,
      "trend": [
        3,
        6,
        14,
        25,
        38,
        48,
        61,
        70,
        73,
        77,
        78,
        75,
        73,
        69
      ],
      "latestTrx": 69
    },
    {
      "id": "S-02",
      "region": "S",
      "regionName": "South",
      "hcpCount": 29,
      "accountCount": 5,
      "trend": [
        1,
        3,
        7,
        13,
        21,
        30,
        36,
        42,
        44,
        45,
        45,
        43,
        42,
        39
      ],
      "latestTrx": 39
    },
    {
      "id": "S-03",
      "region": "S",
      "regionName": "South",
      "hcpCount": 36,
      "accountCount": 5,
      "trend": [
        2,
        7,
        12,
        23,
        30,
        39,
        43,
        46,
        49,
        50,
        52,
        50,
        48,
        45
      ],
      "latestTrx": 45
    },
    {
      "id": "S-04",
      "region": "S",
      "regionName": "South",
      "hcpCount": 30,
      "accountCount": 5,
      "trend": [
        1,
        5,
        9,
        16,
        27,
        37,
        45,
        50,
        49,
        49,
        50,
        49,
        46,
        43
      ],
      "latestTrx": 43
    },
    {
      "id": "S-05",
      "region": "S",
      "regionName": "South",
      "hcpCount": 35,
      "accountCount": 5,
      "trend": [
        6,
        12,
        20,
        29,
        37,
        45,
        50,
        56,
        58,
        61,
        61,
        60,
        57,
        54
      ],
      "latestTrx": 54
    },
    {
      "id": "S-06",
      "region": "S",
      "regionName": "South",
      "hcpCount": 27,
      "accountCount": 5,
      "trend": [
        0,
        2,
        6,
        11,
        18,
        24,
        30,
        36,
        38,
        40,
        40,
        39,
        38,
        36
      ],
      "latestTrx": 36
    },
    {
      "id": "S-07",
      "region": "S",
      "regionName": "South",
      "hcpCount": 34,
      "accountCount": 5,
      "trend": [
        1,
        4,
        12,
        23,
        32,
        42,
        50,
        55,
        59,
        60,
        61,
        60,
        58,
        54
      ],
      "latestTrx": 54
    },
    {
      "id": "S-08",
      "region": "S",
      "regionName": "South",
      "hcpCount": 47,
      "accountCount": 5,
      "trend": [
        3,
        7,
        16,
        29,
        42,
        53,
        62,
        68,
        72,
        76,
        75,
        74,
        70,
        66
      ],
      "latestTrx": 66
    },
    {
      "id": "S-09",
      "region": "S",
      "regionName": "South",
      "hcpCount": 32,
      "accountCount": 5,
      "trend": [
        1,
        5,
        12,
        22,
        33,
        43,
        50,
        54,
        54,
        56,
        54,
        53,
        52,
        49
      ],
      "latestTrx": 49
    },
    {
      "id": "S-10",
      "region": "S",
      "regionName": "South",
      "hcpCount": 43,
      "accountCount": 5,
      "trend": [
        1,
        4,
        11,
        20,
        29,
        40,
        50,
        57,
        64,
        66,
        67,
        65,
        63,
        59
      ],
      "latestTrx": 59
    },
    {
      "id": "S-11",
      "region": "S",
      "regionName": "South",
      "hcpCount": 36,
      "accountCount": 5,
      "trend": [
        1,
        3,
        8,
        17,
        29,
        40,
        49,
        54,
        58,
        59,
        59,
        58,
        54,
        52
      ],
      "latestTrx": 52
    },
    {
      "id": "S-12",
      "region": "S",
      "regionName": "South",
      "hcpCount": 35,
      "accountCount": 5,
      "trend": [
        2,
        5,
        11,
        19,
        28,
        35,
        41,
        46,
        49,
        50,
        51,
        51,
        48,
        45
      ],
      "latestTrx": 45
    },
    {
      "id": "MW-01",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 47,
      "accountCount": 5,
      "trend": [
        1,
        4,
        11,
        21,
        34,
        51,
        66,
        76,
        81,
        83,
        82,
        80,
        75,
        71
      ],
      "latestTrx": 71
    },
    {
      "id": "MW-02",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 48,
      "accountCount": 5,
      "trend": [
        1,
        3,
        10,
        23,
        39,
        52,
        62,
        66,
        71,
        71,
        73,
        68,
        66,
        62
      ],
      "latestTrx": 62
    },
    {
      "id": "MW-03",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 38,
      "accountCount": 5,
      "trend": [
        2,
        6,
        14,
        26,
        41,
        52,
        62,
        65,
        66,
        67,
        67,
        66,
        61,
        58
      ],
      "latestTrx": 58
    },
    {
      "id": "MW-04",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 42,
      "accountCount": 5,
      "trend": [
        3,
        10,
        23,
        35,
        46,
        54,
        61,
        67,
        69,
        71,
        71,
        70,
        66,
        62
      ],
      "latestTrx": 62
    },
    {
      "id": "MW-05",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 29,
      "accountCount": 5,
      "trend": [
        1,
        5,
        9,
        16,
        23,
        31,
        39,
        45,
        47,
        49,
        49,
        46,
        45,
        43
      ],
      "latestTrx": 43
    },
    {
      "id": "MW-06",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 32,
      "accountCount": 5,
      "trend": [
        1,
        4,
        9,
        17,
        26,
        36,
        43,
        48,
        50,
        52,
        51,
        48,
        45,
        43
      ],
      "latestTrx": 43
    },
    {
      "id": "MW-07",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 47,
      "accountCount": 5,
      "trend": [
        0,
        4,
        13,
        28,
        43,
        56,
        64,
        70,
        74,
        76,
        75,
        72,
        70,
        65
      ],
      "latestTrx": 65
    },
    {
      "id": "MW-08",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 38,
      "accountCount": 5,
      "trend": [
        1,
        5,
        14,
        28,
        40,
        52,
        56,
        61,
        61,
        62,
        64,
        60,
        56,
        53
      ],
      "latestTrx": 53
    },
    {
      "id": "MW-09",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 38,
      "accountCount": 5,
      "trend": [
        4,
        9,
        17,
        26,
        36,
        47,
        56,
        63,
        65,
        64,
        66,
        61,
        59,
        57
      ],
      "latestTrx": 57
    },
    {
      "id": "MW-10",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 42,
      "accountCount": 5,
      "trend": [
        0,
        2,
        7,
        14,
        27,
        45,
        59,
        69,
        74,
        77,
        77,
        73,
        70,
        64
      ],
      "latestTrx": 64
    },
    {
      "id": "MW-11",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 27,
      "accountCount": 5,
      "trend": [
        1,
        4,
        9,
        17,
        25,
        33,
        39,
        45,
        46,
        47,
        49,
        46,
        45,
        41
      ],
      "latestTrx": 41
    },
    {
      "id": "MW-12",
      "region": "MW",
      "regionName": "Midwest",
      "hcpCount": 39,
      "accountCount": 5,
      "trend": [
        2,
        6,
        14,
        23,
        34,
        45,
        50,
        57,
        59,
        60,
        60,
        60,
        55,
        53
      ],
      "latestTrx": 53
    },
    {
      "id": "W-01",
      "region": "W",
      "regionName": "West",
      "hcpCount": 37,
      "accountCount": 5,
      "trend": [
        1,
        4,
        9,
        15,
        25,
        34,
        42,
        47,
        49,
        49,
        50,
        53,
        54,
        55
      ],
      "latestTrx": 55
    },
    {
      "id": "W-02",
      "region": "W",
      "regionName": "West",
      "hcpCount": 45,
      "accountCount": 5,
      "trend": [
        0,
        2,
        10,
        22,
        39,
        53,
        65,
        73,
        75,
        76,
        78,
        79,
        82,
        86
      ],
      "latestTrx": 86
    },
    {
      "id": "W-03",
      "region": "W",
      "regionName": "West",
      "hcpCount": 29,
      "accountCount": 5,
      "trend": [
        2,
        4,
        8,
        14,
        22,
        28,
        33,
        36,
        36,
        36,
        37,
        38,
        40,
        41
      ],
      "latestTrx": 41
    },
    {
      "id": "W-04",
      "region": "W",
      "regionName": "West",
      "hcpCount": 47,
      "accountCount": 5,
      "trend": [
        4,
        9,
        17,
        26,
        38,
        50,
        62,
        68,
        72,
        73,
        74,
        77,
        79,
        83
      ],
      "latestTrx": 83
    },
    {
      "id": "W-05",
      "region": "W",
      "regionName": "West",
      "hcpCount": 27,
      "accountCount": 5,
      "trend": [
        2,
        6,
        13,
        21,
        27,
        32,
        39,
        42,
        44,
        46,
        46,
        48,
        49,
        50
      ],
      "latestTrx": 50
    },
    {
      "id": "W-06",
      "region": "W",
      "regionName": "West",
      "hcpCount": 30,
      "accountCount": 5,
      "trend": [
        1,
        4,
        9,
        19,
        30,
        40,
        47,
        50,
        50,
        50,
        51,
        53,
        54,
        56
      ],
      "latestTrx": 56
    },
    {
      "id": "W-07",
      "region": "W",
      "regionName": "West",
      "hcpCount": 39,
      "accountCount": 5,
      "trend": [
        2,
        5,
        8,
        15,
        25,
        35,
        42,
        46,
        48,
        48,
        49,
        52,
        52,
        55
      ],
      "latestTrx": 55
    },
    {
      "id": "W-08",
      "region": "W",
      "regionName": "West",
      "hcpCount": 41,
      "accountCount": 5,
      "trend": [
        1,
        6,
        12,
        24,
        35,
        49,
        60,
        68,
        70,
        71,
        71,
        75,
        78,
        80
      ],
      "latestTrx": 80
    },
    {
      "id": "W-09",
      "region": "W",
      "regionName": "West",
      "hcpCount": 31,
      "accountCount": 5,
      "trend": [
        2,
        6,
        10,
        18,
        28,
        36,
        43,
        49,
        50,
        50,
        50,
        53,
        54,
        56
      ],
      "latestTrx": 56
    },
    {
      "id": "W-10",
      "region": "W",
      "regionName": "West",
      "hcpCount": 28,
      "accountCount": 5,
      "trend": [
        2,
        4,
        13,
        23,
        31,
        38,
        41,
        45,
        47,
        47,
        48,
        49,
        50,
        53
      ],
      "latestTrx": 53
    },
    {
      "id": "W-11",
      "region": "W",
      "regionName": "West",
      "hcpCount": 45,
      "accountCount": 5,
      "trend": [
        1,
        5,
        11,
        19,
        29,
        44,
        56,
        67,
        70,
        71,
        72,
        75,
        76,
        79
      ],
      "latestTrx": 79
    },
    {
      "id": "W-12",
      "region": "W",
      "regionName": "West",
      "hcpCount": 31,
      "accountCount": 5,
      "trend": [
        1,
        5,
        11,
        17,
        26,
        32,
        39,
        44,
        48,
        50,
        52,
        52,
        55,
        56
      ],
      "latestTrx": 56
    }
  ],
  "accounts": [
    {
      "id": "NE-01-A1",
      "territoryId": "NE-01",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 4,
      "latestTrx": 7
    },
    {
      "id": "NE-01-A2",
      "territoryId": "NE-01",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 10,
      "latestTrx": 17
    },
    {
      "id": "NE-01-A3",
      "territoryId": "NE-01",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 12,
      "latestTrx": 28
    },
    {
      "id": "NE-01-A4",
      "territoryId": "NE-01",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 4,
      "latestTrx": 5
    },
    {
      "id": "NE-01-A5",
      "territoryId": "NE-01",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 5,
      "latestTrx": 7
    },
    {
      "id": "NE-02-A1",
      "territoryId": "NE-02",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 6,
      "latestTrx": 9
    },
    {
      "id": "NE-02-A2",
      "territoryId": "NE-02",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 7,
      "latestTrx": 17
    },
    {
      "id": "NE-02-A3",
      "territoryId": "NE-02",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 1,
      "latestTrx": 2
    },
    {
      "id": "NE-02-A4",
      "territoryId": "NE-02",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 11,
      "latestTrx": 23
    },
    {
      "id": "NE-02-A5",
      "territoryId": "NE-02",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 7,
      "latestTrx": 15
    },
    {
      "id": "NE-03-A1",
      "territoryId": "NE-03",
      "region": "NE",
      "type": "Regional Cancer Institute",
      "hcpCount": 6,
      "latestTrx": 17
    },
    {
      "id": "NE-03-A2",
      "territoryId": "NE-03",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 6,
      "latestTrx": 13
    },
    {
      "id": "NE-03-A3",
      "territoryId": "NE-03",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 6,
      "latestTrx": 12
    },
    {
      "id": "NE-03-A4",
      "territoryId": "NE-03",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 7,
      "latestTrx": 11
    },
    {
      "id": "NE-03-A5",
      "territoryId": "NE-03",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 6,
      "latestTrx": 4
    },
    {
      "id": "NE-04-A1",
      "territoryId": "NE-04",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 8,
      "latestTrx": 18
    },
    {
      "id": "NE-04-A2",
      "territoryId": "NE-04",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 6,
      "latestTrx": 12
    },
    {
      "id": "NE-04-A3",
      "territoryId": "NE-04",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 7,
      "latestTrx": 13
    },
    {
      "id": "NE-04-A4",
      "territoryId": "NE-04",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 13,
      "latestTrx": 26
    },
    {
      "id": "NE-04-A5",
      "territoryId": "NE-04",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 12,
      "latestTrx": 20
    },
    {
      "id": "NE-05-A1",
      "territoryId": "NE-05",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 7,
      "latestTrx": 13
    },
    {
      "id": "NE-05-A2",
      "territoryId": "NE-05",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 5,
      "latestTrx": 10
    },
    {
      "id": "NE-05-A3",
      "territoryId": "NE-05",
      "region": "NE",
      "type": "Regional Cancer Institute",
      "hcpCount": 7,
      "latestTrx": 18
    },
    {
      "id": "NE-05-A4",
      "territoryId": "NE-05",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 5,
      "latestTrx": 9
    },
    {
      "id": "NE-05-A5",
      "territoryId": "NE-05",
      "region": "NE",
      "type": "Regional Cancer Institute",
      "hcpCount": 12,
      "latestTrx": 26
    },
    {
      "id": "NE-06-A1",
      "territoryId": "NE-06",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 22
    },
    {
      "id": "NE-06-A2",
      "territoryId": "NE-06",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 5,
      "latestTrx": 11
    },
    {
      "id": "NE-06-A3",
      "territoryId": "NE-06",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 11,
      "latestTrx": 19
    },
    {
      "id": "NE-06-A4",
      "territoryId": "NE-06",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 10,
      "latestTrx": 16
    },
    {
      "id": "NE-06-A5",
      "territoryId": "NE-06",
      "region": "NE",
      "type": "Regional Cancer Institute",
      "hcpCount": 10,
      "latestTrx": 12
    },
    {
      "id": "NE-07-A1",
      "territoryId": "NE-07",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 6,
      "latestTrx": 10
    },
    {
      "id": "NE-07-A2",
      "territoryId": "NE-07",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 8,
      "latestTrx": 21
    },
    {
      "id": "NE-07-A3",
      "territoryId": "NE-07",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 8,
      "latestTrx": 15
    },
    {
      "id": "NE-07-A4",
      "territoryId": "NE-07",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 9,
      "latestTrx": 14
    },
    {
      "id": "NE-07-A5",
      "territoryId": "NE-07",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 7,
      "latestTrx": 13
    },
    {
      "id": "NE-08-A1",
      "territoryId": "NE-08",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 27
    },
    {
      "id": "NE-08-A2",
      "territoryId": "NE-08",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 5,
      "latestTrx": 10
    },
    {
      "id": "NE-08-A3",
      "territoryId": "NE-08",
      "region": "NE",
      "type": "Regional Cancer Institute",
      "hcpCount": 4,
      "latestTrx": 5
    },
    {
      "id": "NE-08-A4",
      "territoryId": "NE-08",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 5,
      "latestTrx": 8
    },
    {
      "id": "NE-08-A5",
      "territoryId": "NE-08",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 4,
      "latestTrx": 9
    },
    {
      "id": "NE-09-A1",
      "territoryId": "NE-09",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 12,
      "latestTrx": 29
    },
    {
      "id": "NE-09-A2",
      "territoryId": "NE-09",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 7,
      "latestTrx": 13
    },
    {
      "id": "NE-09-A3",
      "territoryId": "NE-09",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 9,
      "latestTrx": 12
    },
    {
      "id": "NE-09-A4",
      "territoryId": "NE-09",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 13,
      "latestTrx": 25
    },
    {
      "id": "NE-09-A5",
      "territoryId": "NE-09",
      "region": "NE",
      "type": "Regional Cancer Institute",
      "hcpCount": 7,
      "latestTrx": 13
    },
    {
      "id": "NE-10-A1",
      "territoryId": "NE-10",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 7,
      "latestTrx": 14
    },
    {
      "id": "NE-10-A2",
      "territoryId": "NE-10",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 17
    },
    {
      "id": "NE-10-A3",
      "territoryId": "NE-10",
      "region": "NE",
      "type": "Regional Cancer Institute",
      "hcpCount": 7,
      "latestTrx": 14
    },
    {
      "id": "NE-10-A4",
      "territoryId": "NE-10",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 10,
      "latestTrx": 20
    },
    {
      "id": "NE-10-A5",
      "territoryId": "NE-10",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 11,
      "latestTrx": 21
    },
    {
      "id": "NE-11-A1",
      "territoryId": "NE-11",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 10,
      "latestTrx": 18
    },
    {
      "id": "NE-11-A2",
      "territoryId": "NE-11",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 8,
      "latestTrx": 16
    },
    {
      "id": "NE-11-A3",
      "territoryId": "NE-11",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 12,
      "latestTrx": 21
    },
    {
      "id": "NE-11-A4",
      "territoryId": "NE-11",
      "region": "NE",
      "type": "Independent Oncology Group",
      "hcpCount": 10,
      "latestTrx": 23
    },
    {
      "id": "NE-11-A5",
      "territoryId": "NE-11",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 7,
      "latestTrx": 7
    },
    {
      "id": "NE-12-A1",
      "territoryId": "NE-12",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 4,
      "latestTrx": 7
    },
    {
      "id": "NE-12-A2",
      "territoryId": "NE-12",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 12
    },
    {
      "id": "NE-12-A3",
      "territoryId": "NE-12",
      "region": "NE",
      "type": "Academic Cancer Center",
      "hcpCount": 10,
      "latestTrx": 21
    },
    {
      "id": "NE-12-A4",
      "territoryId": "NE-12",
      "region": "NE",
      "type": "Health System Infusion Center",
      "hcpCount": 13,
      "latestTrx": 27
    },
    {
      "id": "NE-12-A5",
      "territoryId": "NE-12",
      "region": "NE",
      "type": "Community Oncology Practice",
      "hcpCount": 10,
      "latestTrx": 15
    },
    {
      "id": "S-01-A1",
      "territoryId": "S-01",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 13,
      "latestTrx": 23
    },
    {
      "id": "S-01-A2",
      "territoryId": "S-01",
      "region": "S",
      "type": "Community Oncology Practice",
      "hcpCount": 8,
      "latestTrx": 10
    },
    {
      "id": "S-01-A3",
      "territoryId": "S-01",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 11,
      "latestTrx": 19
    },
    {
      "id": "S-01-A4",
      "territoryId": "S-01",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 7,
      "latestTrx": 12
    },
    {
      "id": "S-01-A5",
      "territoryId": "S-01",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 5,
      "latestTrx": 6
    },
    {
      "id": "S-02-A1",
      "territoryId": "S-02",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 6,
      "latestTrx": 10
    },
    {
      "id": "S-02-A2",
      "territoryId": "S-02",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 7,
      "latestTrx": 10
    },
    {
      "id": "S-02-A3",
      "territoryId": "S-02",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 6,
      "latestTrx": 5
    },
    {
      "id": "S-02-A4",
      "territoryId": "S-02",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 5,
      "latestTrx": 8
    },
    {
      "id": "S-02-A5",
      "territoryId": "S-02",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 5,
      "latestTrx": 7
    },
    {
      "id": "S-03-A1",
      "territoryId": "S-03",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 5,
      "latestTrx": 6
    },
    {
      "id": "S-03-A2",
      "territoryId": "S-03",
      "region": "S",
      "type": "Community Oncology Practice",
      "hcpCount": 7,
      "latestTrx": 7
    },
    {
      "id": "S-03-A3",
      "territoryId": "S-03",
      "region": "S",
      "type": "Independent Oncology Group",
      "hcpCount": 8,
      "latestTrx": 10
    },
    {
      "id": "S-03-A4",
      "territoryId": "S-03",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 7,
      "latestTrx": 9
    },
    {
      "id": "S-03-A5",
      "territoryId": "S-03",
      "region": "S",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 13
    },
    {
      "id": "S-04-A1",
      "territoryId": "S-04",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 8,
      "latestTrx": 14
    },
    {
      "id": "S-04-A2",
      "territoryId": "S-04",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 4,
      "latestTrx": 4
    },
    {
      "id": "S-04-A3",
      "territoryId": "S-04",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 8,
      "latestTrx": 11
    },
    {
      "id": "S-04-A4",
      "territoryId": "S-04",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 5,
      "latestTrx": 8
    },
    {
      "id": "S-04-A5",
      "territoryId": "S-04",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 5,
      "latestTrx": 6
    },
    {
      "id": "S-05-A1",
      "territoryId": "S-05",
      "region": "S",
      "type": "Independent Oncology Group",
      "hcpCount": 5,
      "latestTrx": 6
    },
    {
      "id": "S-05-A2",
      "territoryId": "S-05",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 3,
      "latestTrx": 4
    },
    {
      "id": "S-05-A3",
      "territoryId": "S-05",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 9,
      "latestTrx": 10
    },
    {
      "id": "S-05-A4",
      "territoryId": "S-05",
      "region": "S",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 16
    },
    {
      "id": "S-05-A5",
      "territoryId": "S-05",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 9,
      "latestTrx": 17
    },
    {
      "id": "S-06-A1",
      "territoryId": "S-06",
      "region": "S",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 11
    },
    {
      "id": "S-06-A2",
      "territoryId": "S-06",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 7,
      "latestTrx": 13
    },
    {
      "id": "S-06-A3",
      "territoryId": "S-06",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 5,
      "latestTrx": 5
    },
    {
      "id": "S-06-A4",
      "territoryId": "S-06",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 5,
      "latestTrx": 5
    },
    {
      "id": "S-06-A5",
      "territoryId": "S-06",
      "region": "S",
      "type": "Community Oncology Practice",
      "hcpCount": 1,
      "latestTrx": 2
    },
    {
      "id": "S-07-A1",
      "territoryId": "S-07",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 4,
      "latestTrx": 6
    },
    {
      "id": "S-07-A2",
      "territoryId": "S-07",
      "region": "S",
      "type": "Independent Oncology Group",
      "hcpCount": 7,
      "latestTrx": 12
    },
    {
      "id": "S-07-A3",
      "territoryId": "S-07",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 3,
      "latestTrx": 5
    },
    {
      "id": "S-07-A4",
      "territoryId": "S-07",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 9,
      "latestTrx": 15
    },
    {
      "id": "S-07-A5",
      "territoryId": "S-07",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 11,
      "latestTrx": 15
    },
    {
      "id": "S-08-A1",
      "territoryId": "S-08",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 7,
      "latestTrx": 10
    },
    {
      "id": "S-08-A2",
      "territoryId": "S-08",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 11,
      "latestTrx": 19
    },
    {
      "id": "S-08-A3",
      "territoryId": "S-08",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 13,
      "latestTrx": 18
    },
    {
      "id": "S-08-A4",
      "territoryId": "S-08",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 6,
      "latestTrx": 6
    },
    {
      "id": "S-08-A5",
      "territoryId": "S-08",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 10,
      "latestTrx": 13
    },
    {
      "id": "S-09-A1",
      "territoryId": "S-09",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 14,
      "latestTrx": 23
    },
    {
      "id": "S-09-A2",
      "territoryId": "S-09",
      "region": "S",
      "type": "Independent Oncology Group",
      "hcpCount": 6,
      "latestTrx": 6
    },
    {
      "id": "S-09-A3",
      "territoryId": "S-09",
      "region": "S",
      "type": "Independent Oncology Group",
      "hcpCount": 4,
      "latestTrx": 6
    },
    {
      "id": "S-09-A4",
      "territoryId": "S-09",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 3,
      "latestTrx": 5
    },
    {
      "id": "S-09-A5",
      "territoryId": "S-09",
      "region": "S",
      "type": "Independent Oncology Group",
      "hcpCount": 5,
      "latestTrx": 9
    },
    {
      "id": "S-10-A1",
      "territoryId": "S-10",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 8,
      "latestTrx": 7
    },
    {
      "id": "S-10-A2",
      "territoryId": "S-10",
      "region": "S",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 17
    },
    {
      "id": "S-10-A3",
      "territoryId": "S-10",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 3,
      "latestTrx": 5
    },
    {
      "id": "S-10-A4",
      "territoryId": "S-10",
      "region": "S",
      "type": "Health System Infusion Center",
      "hcpCount": 10,
      "latestTrx": 14
    },
    {
      "id": "S-10-A5",
      "territoryId": "S-10",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 13,
      "latestTrx": 15
    },
    {
      "id": "S-11-A1",
      "territoryId": "S-11",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 4,
      "latestTrx": 8
    },
    {
      "id": "S-11-A2",
      "territoryId": "S-11",
      "region": "S",
      "type": "Independent Oncology Group",
      "hcpCount": 10,
      "latestTrx": 15
    },
    {
      "id": "S-11-A3",
      "territoryId": "S-11",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 4,
      "latestTrx": 4
    },
    {
      "id": "S-11-A4",
      "territoryId": "S-11",
      "region": "S",
      "type": "Community Oncology Practice",
      "hcpCount": 8,
      "latestTrx": 7
    },
    {
      "id": "S-11-A5",
      "territoryId": "S-11",
      "region": "S",
      "type": "Community Oncology Practice",
      "hcpCount": 10,
      "latestTrx": 18
    },
    {
      "id": "S-12-A1",
      "territoryId": "S-12",
      "region": "S",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 13
    },
    {
      "id": "S-12-A2",
      "territoryId": "S-12",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 8,
      "latestTrx": 10
    },
    {
      "id": "S-12-A3",
      "territoryId": "S-12",
      "region": "S",
      "type": "Academic Cancer Center",
      "hcpCount": 4,
      "latestTrx": 6
    },
    {
      "id": "S-12-A4",
      "territoryId": "S-12",
      "region": "S",
      "type": "Regional Cancer Institute",
      "hcpCount": 7,
      "latestTrx": 4
    },
    {
      "id": "S-12-A5",
      "territoryId": "S-12",
      "region": "S",
      "type": "Independent Oncology Group",
      "hcpCount": 7,
      "latestTrx": 13
    },
    {
      "id": "MW-01-A1",
      "territoryId": "MW-01",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 16
    },
    {
      "id": "MW-01-A2",
      "territoryId": "MW-01",
      "region": "MW",
      "type": "Regional Cancer Institute",
      "hcpCount": 5,
      "latestTrx": 4
    },
    {
      "id": "MW-01-A3",
      "territoryId": "MW-01",
      "region": "MW",
      "type": "Regional Cancer Institute",
      "hcpCount": 11,
      "latestTrx": 20
    },
    {
      "id": "MW-01-A4",
      "territoryId": "MW-01",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 8,
      "latestTrx": 11
    },
    {
      "id": "MW-01-A5",
      "territoryId": "MW-01",
      "region": "MW",
      "type": "Regional Cancer Institute",
      "hcpCount": 14,
      "latestTrx": 19
    },
    {
      "id": "MW-02-A1",
      "territoryId": "MW-02",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 10,
      "latestTrx": 18
    },
    {
      "id": "MW-02-A2",
      "territoryId": "MW-02",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 11,
      "latestTrx": 13
    },
    {
      "id": "MW-02-A3",
      "territoryId": "MW-02",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 9
    },
    {
      "id": "MW-02-A4",
      "territoryId": "MW-02",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 11,
      "latestTrx": 11
    },
    {
      "id": "MW-02-A5",
      "territoryId": "MW-02",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 7,
      "latestTrx": 12
    },
    {
      "id": "MW-03-A1",
      "territoryId": "MW-03",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 14
    },
    {
      "id": "MW-03-A2",
      "territoryId": "MW-03",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 5,
      "latestTrx": 11
    },
    {
      "id": "MW-03-A3",
      "territoryId": "MW-03",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 11,
      "latestTrx": 12
    },
    {
      "id": "MW-03-A4",
      "territoryId": "MW-03",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 6,
      "latestTrx": 9
    },
    {
      "id": "MW-03-A5",
      "territoryId": "MW-03",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 7,
      "latestTrx": 12
    },
    {
      "id": "MW-04-A1",
      "territoryId": "MW-04",
      "region": "MW",
      "type": "Regional Cancer Institute",
      "hcpCount": 8,
      "latestTrx": 12
    },
    {
      "id": "MW-04-A2",
      "territoryId": "MW-04",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 6,
      "latestTrx": 9
    },
    {
      "id": "MW-04-A3",
      "territoryId": "MW-04",
      "region": "MW",
      "type": "Regional Cancer Institute",
      "hcpCount": 9,
      "latestTrx": 11
    },
    {
      "id": "MW-04-A4",
      "territoryId": "MW-04",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 11,
      "latestTrx": 19
    },
    {
      "id": "MW-04-A5",
      "territoryId": "MW-04",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 8,
      "latestTrx": 10
    },
    {
      "id": "MW-05-A1",
      "territoryId": "MW-05",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 13
    },
    {
      "id": "MW-05-A2",
      "territoryId": "MW-05",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 6,
      "latestTrx": 10
    },
    {
      "id": "MW-05-A3",
      "territoryId": "MW-05",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 5,
      "latestTrx": 8
    },
    {
      "id": "MW-05-A4",
      "territoryId": "MW-05",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 5,
      "latestTrx": 8
    },
    {
      "id": "MW-05-A5",
      "territoryId": "MW-05",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 4,
      "latestTrx": 5
    },
    {
      "id": "MW-06-A1",
      "territoryId": "MW-06",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 13,
      "latestTrx": 18
    },
    {
      "id": "MW-06-A2",
      "territoryId": "MW-06",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 6,
      "latestTrx": 8
    },
    {
      "id": "MW-06-A3",
      "territoryId": "MW-06",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 3,
      "latestTrx": 1
    },
    {
      "id": "MW-06-A4",
      "territoryId": "MW-06",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 5,
      "latestTrx": 7
    },
    {
      "id": "MW-06-A5",
      "territoryId": "MW-06",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 5,
      "latestTrx": 9
    },
    {
      "id": "MW-07-A1",
      "territoryId": "MW-07",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 8,
      "latestTrx": 13
    },
    {
      "id": "MW-07-A2",
      "territoryId": "MW-07",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 7,
      "latestTrx": 7
    },
    {
      "id": "MW-07-A3",
      "territoryId": "MW-07",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 6,
      "latestTrx": 10
    },
    {
      "id": "MW-07-A4",
      "territoryId": "MW-07",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 15,
      "latestTrx": 19
    },
    {
      "id": "MW-07-A5",
      "territoryId": "MW-07",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 11,
      "latestTrx": 16
    },
    {
      "id": "MW-08-A1",
      "territoryId": "MW-08",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 6,
      "latestTrx": 7
    },
    {
      "id": "MW-08-A2",
      "territoryId": "MW-08",
      "region": "MW",
      "type": "Regional Cancer Institute",
      "hcpCount": 8,
      "latestTrx": 9
    },
    {
      "id": "MW-08-A3",
      "territoryId": "MW-08",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 7,
      "latestTrx": 8
    },
    {
      "id": "MW-08-A4",
      "territoryId": "MW-08",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 17
    },
    {
      "id": "MW-08-A5",
      "territoryId": "MW-08",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 8,
      "latestTrx": 13
    },
    {
      "id": "MW-09-A1",
      "territoryId": "MW-09",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 10,
      "latestTrx": 9
    },
    {
      "id": "MW-09-A2",
      "territoryId": "MW-09",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 8,
      "latestTrx": 14
    },
    {
      "id": "MW-09-A3",
      "territoryId": "MW-09",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 6,
      "latestTrx": 11
    },
    {
      "id": "MW-09-A4",
      "territoryId": "MW-09",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 6,
      "latestTrx": 8
    },
    {
      "id": "MW-09-A5",
      "territoryId": "MW-09",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 8,
      "latestTrx": 15
    },
    {
      "id": "MW-10-A1",
      "territoryId": "MW-10",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 7,
      "latestTrx": 8
    },
    {
      "id": "MW-10-A2",
      "territoryId": "MW-10",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 7,
      "latestTrx": 10
    },
    {
      "id": "MW-10-A3",
      "territoryId": "MW-10",
      "region": "MW",
      "type": "Regional Cancer Institute",
      "hcpCount": 7,
      "latestTrx": 10
    },
    {
      "id": "MW-10-A4",
      "territoryId": "MW-10",
      "region": "MW",
      "type": "Community Oncology Practice",
      "hcpCount": 12,
      "latestTrx": 19
    },
    {
      "id": "MW-10-A5",
      "territoryId": "MW-10",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 17
    },
    {
      "id": "MW-11-A1",
      "territoryId": "MW-11",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 3,
      "latestTrx": 5
    },
    {
      "id": "MW-11-A2",
      "territoryId": "MW-11",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 9,
      "latestTrx": 18
    },
    {
      "id": "MW-11-A3",
      "territoryId": "MW-11",
      "region": "MW",
      "type": "Regional Cancer Institute",
      "hcpCount": 7,
      "latestTrx": 9
    },
    {
      "id": "MW-11-A4",
      "territoryId": "MW-11",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 5,
      "latestTrx": 5
    },
    {
      "id": "MW-11-A5",
      "territoryId": "MW-11",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 3,
      "latestTrx": 3
    },
    {
      "id": "MW-12-A1",
      "territoryId": "MW-12",
      "region": "MW",
      "type": "Health System Infusion Center",
      "hcpCount": 4,
      "latestTrx": 7
    },
    {
      "id": "MW-12-A2",
      "territoryId": "MW-12",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 7,
      "latestTrx": 15
    },
    {
      "id": "MW-12-A3",
      "territoryId": "MW-12",
      "region": "MW",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 5
    },
    {
      "id": "MW-12-A4",
      "territoryId": "MW-12",
      "region": "MW",
      "type": "Regional Cancer Institute",
      "hcpCount": 12,
      "latestTrx": 16
    },
    {
      "id": "MW-12-A5",
      "territoryId": "MW-12",
      "region": "MW",
      "type": "Academic Cancer Center",
      "hcpCount": 7,
      "latestTrx": 11
    },
    {
      "id": "W-01-A1",
      "territoryId": "W-01",
      "region": "W",
      "type": "Independent Oncology Group",
      "hcpCount": 7,
      "latestTrx": 8
    },
    {
      "id": "W-01-A2",
      "territoryId": "W-01",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 5,
      "latestTrx": 7
    },
    {
      "id": "W-01-A3",
      "territoryId": "W-01",
      "region": "W",
      "type": "Health System Infusion Center",
      "hcpCount": 6,
      "latestTrx": 9
    },
    {
      "id": "W-01-A4",
      "territoryId": "W-01",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 9,
      "latestTrx": 16
    },
    {
      "id": "W-01-A5",
      "territoryId": "W-01",
      "region": "W",
      "type": "Health System Infusion Center",
      "hcpCount": 10,
      "latestTrx": 15
    },
    {
      "id": "W-02-A1",
      "territoryId": "W-02",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 6,
      "latestTrx": 16
    },
    {
      "id": "W-02-A2",
      "territoryId": "W-02",
      "region": "W",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 10
    },
    {
      "id": "W-02-A3",
      "territoryId": "W-02",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 9,
      "latestTrx": 16
    },
    {
      "id": "W-02-A4",
      "territoryId": "W-02",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 18
    },
    {
      "id": "W-02-A5",
      "territoryId": "W-02",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 12,
      "latestTrx": 27
    },
    {
      "id": "W-03-A1",
      "territoryId": "W-03",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 4,
      "latestTrx": 5
    },
    {
      "id": "W-03-A2",
      "territoryId": "W-03",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 8,
      "latestTrx": 16
    },
    {
      "id": "W-03-A3",
      "territoryId": "W-03",
      "region": "W",
      "type": "Health System Infusion Center",
      "hcpCount": 1,
      "latestTrx": 1
    },
    {
      "id": "W-03-A4",
      "territoryId": "W-03",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 7,
      "latestTrx": 8
    },
    {
      "id": "W-03-A5",
      "territoryId": "W-03",
      "region": "W",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 11
    },
    {
      "id": "W-04-A1",
      "territoryId": "W-04",
      "region": "W",
      "type": "Independent Oncology Group",
      "hcpCount": 12,
      "latestTrx": 19
    },
    {
      "id": "W-04-A2",
      "territoryId": "W-04",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 9,
      "latestTrx": 18
    },
    {
      "id": "W-04-A3",
      "territoryId": "W-04",
      "region": "W",
      "type": "Independent Oncology Group",
      "hcpCount": 13,
      "latestTrx": 21
    },
    {
      "id": "W-04-A4",
      "territoryId": "W-04",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 9,
      "latestTrx": 21
    },
    {
      "id": "W-04-A5",
      "territoryId": "W-04",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 4,
      "latestTrx": 4
    },
    {
      "id": "W-05-A1",
      "territoryId": "W-05",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 4,
      "latestTrx": 11
    },
    {
      "id": "W-05-A2",
      "territoryId": "W-05",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 16
    },
    {
      "id": "W-05-A3",
      "territoryId": "W-05",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 5,
      "latestTrx": 7
    },
    {
      "id": "W-05-A4",
      "territoryId": "W-05",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 6,
      "latestTrx": 12
    },
    {
      "id": "W-05-A5",
      "territoryId": "W-05",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 3,
      "latestTrx": 3
    },
    {
      "id": "W-06-A1",
      "territoryId": "W-06",
      "region": "W",
      "type": "Health System Infusion Center",
      "hcpCount": 5,
      "latestTrx": 9
    },
    {
      "id": "W-06-A2",
      "territoryId": "W-06",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 8,
      "latestTrx": 22
    },
    {
      "id": "W-06-A3",
      "territoryId": "W-06",
      "region": "W",
      "type": "Independent Oncology Group",
      "hcpCount": 4,
      "latestTrx": 10
    },
    {
      "id": "W-06-A4",
      "territoryId": "W-06",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 6,
      "latestTrx": 5
    },
    {
      "id": "W-06-A5",
      "territoryId": "W-06",
      "region": "W",
      "type": "Health System Infusion Center",
      "hcpCount": 7,
      "latestTrx": 10
    },
    {
      "id": "W-07-A1",
      "territoryId": "W-07",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 9,
      "latestTrx": 16
    },
    {
      "id": "W-07-A2",
      "territoryId": "W-07",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 11,
      "latestTrx": 13
    },
    {
      "id": "W-07-A3",
      "territoryId": "W-07",
      "region": "W",
      "type": "Independent Oncology Group",
      "hcpCount": 6,
      "latestTrx": 6
    },
    {
      "id": "W-07-A4",
      "territoryId": "W-07",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 5,
      "latestTrx": 9
    },
    {
      "id": "W-07-A5",
      "territoryId": "W-07",
      "region": "W",
      "type": "Independent Oncology Group",
      "hcpCount": 8,
      "latestTrx": 11
    },
    {
      "id": "W-08-A1",
      "territoryId": "W-08",
      "region": "W",
      "type": "Independent Oncology Group",
      "hcpCount": 6,
      "latestTrx": 11
    },
    {
      "id": "W-08-A2",
      "territoryId": "W-08",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 4,
      "latestTrx": 7
    },
    {
      "id": "W-08-A3",
      "territoryId": "W-08",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 10,
      "latestTrx": 16
    },
    {
      "id": "W-08-A4",
      "territoryId": "W-08",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 10,
      "latestTrx": 24
    },
    {
      "id": "W-08-A5",
      "territoryId": "W-08",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 11,
      "latestTrx": 23
    },
    {
      "id": "W-09-A1",
      "territoryId": "W-09",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 2,
      "latestTrx": 5
    },
    {
      "id": "W-09-A2",
      "territoryId": "W-09",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 8,
      "latestTrx": 12
    },
    {
      "id": "W-09-A3",
      "territoryId": "W-09",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 5,
      "latestTrx": 14
    },
    {
      "id": "W-09-A4",
      "territoryId": "W-09",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 9,
      "latestTrx": 13
    },
    {
      "id": "W-09-A5",
      "territoryId": "W-09",
      "region": "W",
      "type": "Health System Infusion Center",
      "hcpCount": 7,
      "latestTrx": 13
    },
    {
      "id": "W-10-A1",
      "territoryId": "W-10",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 4,
      "latestTrx": 8
    },
    {
      "id": "W-10-A2",
      "territoryId": "W-10",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 6,
      "latestTrx": 15
    },
    {
      "id": "W-10-A3",
      "territoryId": "W-10",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 5,
      "latestTrx": 7
    },
    {
      "id": "W-10-A4",
      "territoryId": "W-10",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 4,
      "latestTrx": 7
    },
    {
      "id": "W-10-A5",
      "territoryId": "W-10",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 16
    },
    {
      "id": "W-11-A1",
      "territoryId": "W-11",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 7,
      "latestTrx": 5
    },
    {
      "id": "W-11-A2",
      "territoryId": "W-11",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 16,
      "latestTrx": 32
    },
    {
      "id": "W-11-A3",
      "territoryId": "W-11",
      "region": "W",
      "type": "Health System Infusion Center",
      "hcpCount": 7,
      "latestTrx": 14
    },
    {
      "id": "W-11-A4",
      "territoryId": "W-11",
      "region": "W",
      "type": "Community Oncology Practice",
      "hcpCount": 9,
      "latestTrx": 21
    },
    {
      "id": "W-11-A5",
      "territoryId": "W-11",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 6,
      "latestTrx": 6
    },
    {
      "id": "W-12-A1",
      "territoryId": "W-12",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 5,
      "latestTrx": 10
    },
    {
      "id": "W-12-A2",
      "territoryId": "W-12",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 7,
      "latestTrx": 9
    },
    {
      "id": "W-12-A3",
      "territoryId": "W-12",
      "region": "W",
      "type": "Independent Oncology Group",
      "hcpCount": 9,
      "latestTrx": 17
    },
    {
      "id": "W-12-A4",
      "territoryId": "W-12",
      "region": "W",
      "type": "Regional Cancer Institute",
      "hcpCount": 2,
      "latestTrx": 2
    },
    {
      "id": "W-12-A5",
      "territoryId": "W-12",
      "region": "W",
      "type": "Academic Cancer Center",
      "hcpCount": 8,
      "latestTrx": 18
    }
  ],
  "spotlightHcps": [
    {
      "id": "HCP-0338",
      "name": "Dr. Ethan Nakamura",
      "credential": "MD",
      "specialty": "Hematology/Oncology",
      "decile": 8,
      "segment": "Non-adopter watch",
      "territoryId": "NE-09",
      "region": "NE",
      "accountId": "NE-09-A3",
      "accountType": "Health System Infusion Center",
      "channelAffinity": "Field visits",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "id": "HCP-0139",
      "name": "Dr. Peter Kowalski",
      "credential": "MD",
      "specialty": "Breast Surgical Oncology",
      "decile": 9,
      "segment": "Early adopter",
      "territoryId": "NE-04",
      "region": "NE",
      "accountId": "NE-04-A4",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "id": "HCP-0125",
      "name": "Dr. Daniel Okafor",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 5,
      "segment": "Early adopter",
      "territoryId": "NE-04",
      "region": "NE",
      "accountId": "NE-04-A4",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-0298",
      "name": "Dr. Priya Bergman",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 8,
      "segment": "Early majority",
      "territoryId": "NE-09",
      "region": "NE",
      "accountId": "NE-09-A1",
      "accountType": "Health System Infusion Center",
      "channelAffinity": "Field visits",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        2,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "id": "HCP-0169",
      "name": "Dr. Maya Khalid",
      "credential": "DO",
      "specialty": "Medical Oncology",
      "decile": 9,
      "segment": "Early adopter",
      "territoryId": "NE-05",
      "region": "NE",
      "accountId": "NE-05-A2",
      "accountType": "Independent Oncology Group",
      "channelAffinity": "Congress / conference",
      "trend": [
        0,
        0,
        1,
        1,
        2,
        3,
        2,
        3,
        2,
        3,
        2,
        2,
        3,
        3
      ]
    },
    {
      "id": "HCP-0260",
      "name": "Dr. Elena Chen",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 10,
      "segment": "Innovator",
      "territoryId": "NE-07",
      "region": "NE",
      "accountId": "NE-07-A3",
      "accountType": "Academic Cancer Center",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        1,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        4
      ]
    },
    {
      "id": "HCP-0078",
      "name": "Dr. Priya Sato",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 8,
      "segment": "Early adopter",
      "territoryId": "NE-03",
      "region": "NE",
      "accountId": "NE-03-A4",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        0,
        1,
        1,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "id": "HCP-0326",
      "name": "Dr. Lucia Delgado",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 6,
      "segment": "Early adopter",
      "territoryId": "NE-09",
      "region": "NE",
      "accountId": "NE-09-A1",
      "accountType": "Health System Infusion Center",
      "channelAffinity": "Field visits",
      "trend": [
        0,
        0,
        1,
        1,
        2,
        3,
        2,
        2,
        2,
        3,
        2,
        2,
        3,
        3
      ]
    },
    {
      "id": "HCP-0269",
      "name": "Dr. Lucia Reyes",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 9,
      "segment": "Early adopter",
      "territoryId": "NE-08",
      "region": "NE",
      "accountId": "NE-08-A1",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        0,
        0,
        1,
        2,
        3,
        4,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        4
      ]
    },
    {
      "id": "HCP-0057",
      "name": "Dr. Lucia Lindqvist",
      "credential": "DO",
      "specialty": "Medical Oncology",
      "decile": 7,
      "segment": "Innovator",
      "territoryId": "NE-02",
      "region": "NE",
      "accountId": "NE-02-A4",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Field visits",
      "trend": [
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-0855",
      "name": "Dr. Aisha Patel",
      "credential": "MD",
      "specialty": "Hematology/Oncology",
      "decile": 5,
      "segment": "Non-adopter watch",
      "territoryId": "S-11",
      "region": "S",
      "accountId": "S-11-A4",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "id": "HCP-0778",
      "name": "Dr. Aisha Novak",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 8,
      "segment": "Early adopter",
      "territoryId": "S-09",
      "region": "S",
      "accountId": "S-09-A1",
      "accountType": "Academic Cancer Center",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        0,
        0,
        0,
        1,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "id": "HCP-0499",
      "name": "Dr. Ethan Patel",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 9,
      "segment": "Early majority",
      "territoryId": "S-01",
      "region": "S",
      "accountId": "S-01-A1",
      "accountType": "Academic Cancer Center",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-0869",
      "name": "Dr. Oliver Patel",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 9,
      "segment": "Non-adopter watch",
      "territoryId": "S-12",
      "region": "S",
      "accountId": "S-12-A2",
      "accountType": "Academic Cancer Center",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "id": "HCP-0615",
      "name": "Dr. Lucia Nakamura",
      "credential": "MD",
      "specialty": "Hematology/Oncology",
      "decile": 5,
      "segment": "Early adopter",
      "territoryId": "S-05",
      "region": "S",
      "accountId": "S-05-A4",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "id": "HCP-0845",
      "name": "Dr. Rosa Okafor",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 5,
      "segment": "Innovator",
      "territoryId": "S-11",
      "region": "S",
      "accountId": "S-11-A2",
      "accountType": "Independent Oncology Group",
      "channelAffinity": "Congress / conference",
      "trend": [
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "id": "HCP-0757",
      "name": "Dr. Elena Okafor",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 7,
      "segment": "Early adopter",
      "territoryId": "S-08",
      "region": "S",
      "accountId": "S-08-A5",
      "accountType": "Academic Cancer Center",
      "channelAffinity": "Field visits",
      "trend": [
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-0787",
      "name": "Dr. Lucia Adeyemi",
      "credential": "MD",
      "specialty": "Hematology/Oncology",
      "decile": 7,
      "segment": "Early adopter",
      "territoryId": "S-09",
      "region": "S",
      "accountId": "S-09-A1",
      "accountType": "Academic Cancer Center",
      "channelAffinity": "Congress / conference",
      "trend": [
        0,
        0,
        0,
        1,
        1,
        2,
        3,
        2,
        3,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-0676",
      "name": "Dr. Daniel Novak",
      "credential": "MD",
      "specialty": "Gynecologic Oncology",
      "decile": 6,
      "segment": "Early adopter",
      "territoryId": "S-06",
      "region": "S",
      "accountId": "S-06-A4",
      "accountType": "Health System Infusion Center",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-0886",
      "name": "Dr. Grace Lindqvist",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 6,
      "segment": "Innovator",
      "territoryId": "S-12",
      "region": "S",
      "accountId": "S-12-A1",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Congress / conference",
      "trend": [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-0948",
      "name": "Dr. Maya Whitfield",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 8,
      "segment": "Early majority",
      "territoryId": "MW-01",
      "region": "MW",
      "accountId": "MW-01-A5",
      "accountType": "Regional Cancer Institute",
      "channelAffinity": "Field visits",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-1150",
      "name": "Dr. Aisha Torres",
      "credential": "DO",
      "specialty": "Medical Oncology",
      "decile": 10,
      "segment": "Early adopter",
      "territoryId": "MW-07",
      "region": "MW",
      "accountId": "MW-07-A3",
      "accountType": "Independent Oncology Group",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        0,
        0,
        1,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "id": "HCP-1100",
      "name": "Dr. Oliver Chen",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 10,
      "segment": "Early adopter",
      "territoryId": "MW-05",
      "region": "MW",
      "accountId": "MW-05-A4",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Congress / conference",
      "trend": [
        0,
        0,
        0,
        1,
        2,
        3,
        3,
        3,
        3,
        3,
        4,
        4,
        3,
        3
      ]
    },
    {
      "id": "HCP-1225",
      "name": "Dr. Wren Sato",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 5,
      "segment": "Early adopter",
      "territoryId": "MW-09",
      "region": "MW",
      "accountId": "MW-09-A4",
      "accountType": "Academic Cancer Center",
      "channelAffinity": "Field visits",
      "trend": [
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        1,
        2,
        1
      ]
    },
    {
      "id": "HCP-1046",
      "name": "Dr. Ethan Bianchi",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 6,
      "segment": "Early adopter",
      "territoryId": "MW-04",
      "region": "MW",
      "accountId": "MW-04-A3",
      "accountType": "Regional Cancer Institute",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-1106",
      "name": "Dr. Nadia Kowalski",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 6,
      "segment": "Early adopter",
      "territoryId": "MW-05",
      "region": "MW",
      "accountId": "MW-05-A3",
      "accountType": "Independent Oncology Group",
      "channelAffinity": "Congress / conference",
      "trend": [
        0,
        0,
        0,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-1265",
      "name": "Dr. Rosa Torres",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 5,
      "segment": "Early adopter",
      "territoryId": "MW-10",
      "region": "MW",
      "accountId": "MW-10-A2",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Congress / conference",
      "trend": [
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "id": "HCP-1217",
      "name": "Dr. Samuel Whitfield",
      "credential": "MD",
      "specialty": "Gynecologic Oncology",
      "decile": 7,
      "segment": "Early adopter",
      "territoryId": "MW-08",
      "region": "MW",
      "accountId": "MW-08-A4",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Field visits",
      "trend": [
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-1307",
      "name": "Dr. Amara Reyes",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 7,
      "segment": "Early adopter",
      "territoryId": "MW-11",
      "region": "MW",
      "accountId": "MW-11-A1",
      "accountType": "Academic Cancer Center",
      "channelAffinity": "Congress / conference",
      "trend": [
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-1366",
      "name": "Dr. Elena Bergman",
      "credential": "DO",
      "specialty": "Breast Surgical Oncology",
      "decile": 6,
      "segment": "Early adopter",
      "territoryId": "MW-12",
      "region": "MW",
      "accountId": "MW-12-A2",
      "accountType": "Independent Oncology Group",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-1667",
      "name": "Dr. Amara Chen",
      "credential": "DO",
      "specialty": "Medical Oncology",
      "decile": 7,
      "segment": "Early adopter",
      "territoryId": "W-09",
      "region": "W",
      "accountId": "W-09-A5",
      "accountType": "Health System Infusion Center",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "id": "HCP-1530",
      "name": "Dr. Victor Farrow",
      "credential": "MD",
      "specialty": "Hematology/Oncology",
      "decile": 10,
      "segment": "Innovator",
      "territoryId": "W-05",
      "region": "W",
      "accountId": "W-05-A1",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        0,
        1,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "id": "HCP-1516",
      "name": "Dr. Hassan Marsh",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 6,
      "segment": "Non-adopter watch",
      "territoryId": "W-04",
      "region": "W",
      "accountId": "W-04-A3",
      "accountType": "Independent Oncology Group",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "id": "HCP-1527",
      "name": "Dr. Rosa Reyes",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 7,
      "segment": "Non-adopter watch",
      "territoryId": "W-04",
      "region": "W",
      "accountId": "W-04-A3",
      "accountType": "Independent Oncology Group",
      "channelAffinity": "Congress / conference",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "id": "HCP-1658",
      "name": "Dr. Ethan Farrow",
      "credential": "DO",
      "specialty": "Gynecologic Oncology",
      "decile": 8,
      "segment": "Early majority",
      "territoryId": "W-08",
      "region": "W",
      "accountId": "W-08-A3",
      "accountType": "Academic Cancer Center",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        2,
        3
      ]
    },
    {
      "id": "HCP-1607",
      "name": "Dr. Marcus Bergman",
      "credential": "MD",
      "specialty": "Gynecologic Oncology",
      "decile": 7,
      "segment": "Early adopter",
      "territoryId": "W-07",
      "region": "W",
      "accountId": "W-07-A3",
      "accountType": "Independent Oncology Group",
      "channelAffinity": "Field visits",
      "trend": [
        0,
        0,
        0,
        1,
        2,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "id": "HCP-1420",
      "name": "Dr. Rosa Bergman",
      "credential": "MD",
      "specialty": "Hematology/Oncology",
      "decile": 10,
      "segment": "Innovator",
      "territoryId": "W-02",
      "region": "W",
      "accountId": "W-02-A2",
      "accountType": "Independent Oncology Group",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        0,
        1,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "id": "HCP-1615",
      "name": "Dr. Lucia Sato",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 5,
      "segment": "Innovator",
      "territoryId": "W-07",
      "region": "W",
      "accountId": "W-07-A3",
      "accountType": "Independent Oncology Group",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "id": "HCP-1488",
      "name": "Dr. Peter Khalid",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 8,
      "segment": "Innovator",
      "territoryId": "W-04",
      "region": "W",
      "accountId": "W-04-A4",
      "accountType": "Academic Cancer Center",
      "channelAffinity": "Peer-to-peer events",
      "trend": [
        1,
        1,
        2,
        3,
        3,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "id": "HCP-1447",
      "name": "Dr. Rosa Osei",
      "credential": "MD",
      "specialty": "Medical Oncology",
      "decile": 7,
      "segment": "Early adopter",
      "territoryId": "W-02",
      "region": "W",
      "accountId": "W-02-A4",
      "accountType": "Community Oncology Practice",
      "channelAffinity": "Digital / email",
      "trend": [
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        3,
        3,
        3,
        3,
        2,
        3,
        3
      ]
    }
  ]
};

// ---------------------------------------------------------------------------
// Findings — the two things the Brand/GM cockpit surfaces beneath the
// headline trend. Numbers are derived directly from COCKPIT_DATA above.
// layers[] references PHARMA_OS_LAYERS by number (content.js); agents[]
// names verified Layer 4 agents from BRAIN.md, with their autonomy tier.
// ---------------------------------------------------------------------------

const FINDINGS = [
  {
    id: "regional-divergence",
    title: "National volume looks flat. It isn't.",
    summary: "Brand TRx has held near 2,950/month for three straight months — a number that hides two regions accelerating and two falling away underneath it.",
    metrics: [
      {
        id: "national-trx-change",
        label: "National brand TRx, 3-month change",
        value: "-0.4%",
        detail: "2,958 (Apr 2026) to 2,945 (Jul 2026)",
        source: "NEXT Omnichannel Commercial Intelligence",
        asOf: "2026-07",
        origin: "agent"
      },
      {
        id: "national-share-change",
        label: "National share, 3-month change",
        value: "-0.6pp",
        detail: "14.09% to 13.54% — the market grew faster than the brand did",
        source: "CEM — Channel Effectiveness Modeling",
        asOf: "2026-07",
        origin: "agent"
      }
    ],
    regions: [
      { id: "NE", name: "Northeast", change: "+13.6%", direction: "up" },
      { id: "W", name: "West", change: "+10.6%", direction: "up" },
      { id: "S", name: "South", change: "-11.8%", direction: "down" },
      { id: "MW", name: "Midwest", change: "-14.3%", direction: "down" }
    ],
    layers: [1, 3, 6],
    agents: [
      { name: "Insights Agent (Insight Genie)", tier: "T3" },
      { name: "Data Quality / Data Catalog Agent", tier: "T1" }
    ],
    owner: "Brand team, with Field Excellence on the South and Midwest territories driving the decline"
  },
  {
    id: "whitespace",
    title: "Five high-decile HCPs still haven't started.",
    summary: "Five decile 5+ prescribers in the spotlight sample have never written ZYNTORA, despite matching the profile of HCPs who adopted early in the same territories.",
    metrics: [
      {
        id: "whitespace-count",
        label: "Non-adopting high-decile HCPs (spotlight sample)",
        value: "5 of 40",
        detail: "Dr. Ethan Nakamura (decile 8, NE-09) · Dr. Aisha Patel (decile 5, S-11) · Dr. Oliver Patel (decile 9, S-12) · Dr. Hassan Marsh (decile 6, W-04) · Dr. Rosa Reyes (decile 7, W-04)",
        source: "Customer 360 / HCP 360",
        asOf: "2026-07",
        origin: "agent"
      }
    ],
    layers: [2, 3, 4],
    agents: [
      { name: "Next Best Action (Omni NBA)", tier: "T2" }
    ],
    owner: "Field Excellence"
  }
];

// ---------------------------------------------------------------------------
// Reconciliation self-check — runs every time this file loads. Confirms the
// three stored levels (territory, region, national) still agree, so a hand
// edit to one of them can never silently drift from the others.
// ---------------------------------------------------------------------------
(function checkReconciliation() {
  const months = COCKPIT_DATA.meta.postLaunchMonths;
  let ok = true;

  COCKPIT_DATA.regions.forEach((region) => {
    const territoriesInRegion = COCKPIT_DATA.territories.filter((t) => t.region === region.id);
    for (let m = 0; m < months; m++) {
      const sumTerritories = territoriesInRegion.reduce((acc, t) => acc + t.trend[m], 0);
      if (sumTerritories !== region.brandTrx[m]) {
        ok = false;
        console.error(`Reconciliation failed: ${region.id} month ${m} — territories sum to ${sumTerritories}, region says ${region.brandTrx[m]}`);
      }
    }
  });

  for (let m = 0; m < months; m++) {
    const sumRegions = COCKPIT_DATA.regions.reduce((acc, r) => acc + r.brandTrx[m], 0);
    if (sumRegions !== COCKPIT_DATA.national.brandTrx[m]) {
      ok = false;
      console.error(`Reconciliation failed: national month ${m} — regions sum to ${sumRegions}, national says ${COCKPIT_DATA.national.brandTrx[m]}`);
    }
  }

  const totalHcps = COCKPIT_DATA.territories.reduce((acc, t) => acc + t.hcpCount, 0);
  if (totalHcps !== COCKPIT_DATA.meta.totals.hcps) {
    ok = false;
    console.error(`Reconciliation failed: territories sum to ${totalHcps} HCPs, meta says ${COCKPIT_DATA.meta.totals.hcps}`);
  }

  if (ok) {
    console.log("COCKPIT_DATA reconciliation OK: HCP -> territory -> region -> national all agree, all " + months + " months.");
  }
})();
