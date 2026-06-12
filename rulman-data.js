/* ═══════════════════════════════════════════════════════════════
   rulman-data.js — MH Platform Rulman Veritabanı
   ─────────────────────────────────────────────────────────────────
   Boyutlar: ISO 15 sınır boyutları (tüm üreticilerde aynı)
   C / C₀  : Markadan bağımsız TİPİK ORTALAMA değerler (kN)
   Hızlar  : dm = (d+D)/2 üzerinden tipik katalog yaklaşımı
   Ağırlık : Halka hacmi × 0.67 doluluk katsayısı (kalibre edilmiş)
   ⚠ Kesin değerler için üretici kataloğu esas alınmalıdır.
   ═══════════════════════════════════════════════════════════════ */

/* Satır formatı: [kod, d, D, B, C(kN), C0(kN)] */

const RAW_60 = [
  ['6000',10, 26, 8,  4.75, 1.96], ['6001',12, 28, 8,  5.10, 2.36],
  ['6002',15, 32, 9,  5.60, 2.85], ['6003',17, 35,10,  6.00, 3.25],
  ['6004',20, 42,12,  9.40, 5.00], ['6005',25, 47,12, 11.20, 6.20],
  ['6006',30, 55,13, 13.20, 8.30], ['6007',35, 62,14, 16.00,10.30],
  ['6008',40, 68,15, 17.80,11.60], ['6009',45, 75,16, 20.90,14.60],
  ['6010',50, 80,16, 22.00,16.00], ['6011',55, 90,18, 28.10,21.20],
  ['6012',60, 95,18, 29.60,23.20], ['6013',65,100,18, 30.70,25.00],
  ['6014',70,110,20, 38.00,31.00], ['6015',75,115,20, 39.70,33.50],
  ['6016',80,125,22, 47.50,40.00]
];

const RAW_62 = [
  ['6200',10, 30, 9,  5.40, 2.36], ['6201',12, 32,10,  6.90, 3.10],
  ['6202',15, 35,11,  7.80, 3.75], ['6203',17, 40,12,  9.60, 4.75],
  ['6204',20, 47,14, 13.50, 6.55], ['6205',25, 52,15, 14.30, 7.20],
  ['6206',30, 62,16, 20.30,11.20], ['6207',35, 72,17, 26.50,15.30],
  ['6208',40, 80,18, 31.50,18.60], ['6209',45, 85,19, 34.50,21.60],
  ['6210',50, 90,20, 36.50,23.20], ['6211',55,100,21, 45.00,29.00],
  ['6212',60,110,22, 54.00,36.00], ['6213',65,120,23, 58.00,40.50],
  ['6214',70,125,24, 62.00,45.00], ['6215',75,130,25, 67.50,49.00],
  ['6216',80,140,26, 71.50,55.00]
];

const RAW_63 = [
  ['6300',10, 35,11,  8.20, 3.40], ['6301',12, 37,12,  9.90, 4.15],
  ['6302',15, 42,13, 11.60, 5.40], ['6303',17, 47,14, 13.90, 6.55],
  ['6304',20, 52,15, 16.30, 7.80], ['6305',25, 62,17, 23.00,11.60],
  ['6306',30, 72,19, 28.90,16.00], ['6307',35, 80,21, 34.10,19.00],
  ['6308',40, 90,23, 41.50,24.00], ['6309',45,100,25, 54.00,31.50],
  ['6310',50,110,27, 63.50,38.00], ['6311',55,120,29, 72.50,45.00],
  ['6312',60,130,31, 83.50,52.00], ['6313',65,140,33, 94.50,60.00],
  ['6314',70,150,35,107.00,68.00], ['6315',75,160,37,115.00,76.50],
  ['6316',80,170,39,126.00,86.50]
];

const RAW_64 = [
  ['6403',17, 62,17, 22.90,10.80], ['6404',20, 72,19, 30.70,15.00],
  ['6405',25, 80,21, 35.80,19.30], ['6406',30, 90,23, 43.60,23.60],
  ['6407',35,100,25, 55.30,31.00], ['6408',40,110,27, 63.70,36.50],
  ['6409',45,120,29, 76.10,45.00], ['6410',50,130,31, 87.10,52.00],
  ['6411',55,140,33, 99.50,62.00], ['6412',60,150,35,108.00,69.50],
  ['6413',65,160,37,119.00,78.00], ['6414',70,180,42,143.00,104.0],
  ['6415',75,190,45,153.00,114.0], ['6416',80,200,48,163.00,125.0]
];

const RAW_68 = [
  ['6800',10, 19, 5,  1.90, 0.93], ['6801',12, 21, 5,  2.10, 1.05],
  ['6802',15, 24, 5,  2.20, 1.27], ['6803',17, 26, 5,  2.30, 1.46],
  ['6804',20, 32, 7,  4.00, 2.50], ['6805',25, 37, 7,  4.35, 2.90],
  ['6806',30, 42, 7,  4.50, 3.40], ['6807',35, 47, 7,  4.90, 3.90],
  ['6808',40, 52, 7,  5.10, 4.40], ['6809',45, 58, 7,  6.40, 5.60],
  ['6810',50, 65, 7,  6.70, 6.10], ['6811',55, 72, 9,  9.10, 8.00],
  ['6812',60, 78,10,  9.60, 9.30], ['6813',65, 85,10, 11.90,11.40],
  ['6814',70, 90,10, 12.10,12.00], ['6815',75, 95,10, 12.40,12.70],
  ['6816',80,100,10, 12.90,13.30]
];

const RAW_69 = [
  ['6900',10, 22, 6,  2.70, 1.27], ['6901',12, 24, 6,  2.90, 1.46],
  ['6902',15, 28, 7,  4.30, 2.24], ['6903',17, 30, 7,  4.70, 2.55],
  ['6904',20, 37, 9,  6.40, 3.65], ['6905',25, 42, 9,  7.20, 4.40],
  ['6906',30, 47, 9,  7.30, 4.95], ['6907',35, 55,10, 10.60, 6.80],
  ['6908',40, 62,12, 13.80, 9.15], ['6909',45, 68,12, 14.70,10.20],
  ['6910',50, 72,12, 15.60,11.40], ['6911',55, 80,13, 18.90,14.00],
  ['6912',60, 85,13, 19.60,15.00], ['6913',65, 90,13, 21.50,16.60],
  ['6914',70,100,16, 31.50,25.00], ['6915',75,105,16, 31.90,26.00],
  ['6916',80,110,16, 32.60,28.00]
];

/* ── Eğik bilyalı (7xxx, B tipi α=40°) ────────────────────────────
   Sınır boyutları 6xxx muadili ile aynıdır (ISO 15).
   Tipik katalog oranı: C ≈ 1.08×, C₀ ≈ 1.25× sabit bilyalı muadili */
function deriveAC(raw, prefix){
  return raw.map(r => [
    prefix + r[0].slice(2), r[1], r[2], r[3],
    Math.round(r[4] * 1.08 * 10) / 10,
    Math.round(r[5] * 1.25 * 10) / 10
  ]);
}

/* ── Yardımcı hesaplar ──────────────────────────────────────────── */
function calcWeight(d, D, B){              /* kg */
  return 0.67 * Math.PI / 4 * (D*D - d*d) * B * 7.85e-6 / 1000 * 1000;
}
function r100(n){ return Math.round(n / 100) * 100; }
function calcSpeeds(d, D, isAC){
  const dm = (d + D) / 2;
  const f  = isAC ? 0.85 : 1;              /* α=40° hız düşürür */
  return {
    oil:    r100(600000 / dm * f),
    grease: r100(480000 / dm * f)
  };
}

/* ── Seri tanımları ─────────────────────────────────────────────── */
const BDB = {
  '6000': { name:'6000', grp:'dg', ac:false, color:'#60a5fa', tag:'Hafif Seri',
            desc:'Düşük yük · kompakt yapı · genel amaçlı', raw: RAW_60 },
  '6200': { name:'6200', grp:'dg', ac:false, color:'#f97316', tag:'Orta Seri',
            desc:'En yaygın kullanılan genel amaçlı seri', raw: RAW_62 },
  '6300': { name:'6300', grp:'dg', ac:false, color:'#fbbf24', tag:'Ağır Seri',
            desc:'Yüksek radyal yük kapasitesi', raw: RAW_63 },
  '6400': { name:'6400', grp:'dg', ac:false, color:'#f87171', tag:'Çok Ağır Seri',
            desc:'Maksimum yük · kalın kesit (6403\'ten başlar)', raw: RAW_64 },
  '6800': { name:'6800', grp:'th', ac:false, color:'#00d4aa', tag:'Ultra İnce Kesit',
            desc:'Minimum radyal alan · hafif yükler', raw: RAW_68 },
  '6900': { name:'6900', grp:'th', ac:false, color:'#34d399', tag:'İnce Kesit',
            desc:'Sınırlı montaj alanı uygulamaları', raw: RAW_69 },
  '7000': { name:'7000', grp:'ac', ac:true,  color:'#a78bfa', tag:'Eğik Bilyalı Hafif',
            desc:'Kombine yük · α = 40° (B tipi)', raw: deriveAC(RAW_60,'70') },
  '7200': { name:'7200', grp:'ac', ac:true,  color:'#f472b6', tag:'Eğik Bilyalı Orta',
            desc:'Kombine yük · α = 40° (B tipi)', raw: deriveAC(RAW_62,'72') },
  '7300': { name:'7300', grp:'ac', ac:true,  color:'#22d3ee', tag:'Eğik Bilyalı Ağır',
            desc:'Yüksek kombine yük · α = 40° (B tipi)', raw: deriveAC(RAW_63,'73') }
};

/* ── Conta / Kapak tipleri ──────────────────────────────────────── */
const SEALS = {
  ''   : { name:'Açık (kapaksız)',            sfx:'',    kind:'open',
           note:'Yağ veya gres ile yağlanabilir — en yüksek devir limiti' },
  'Z'  : { name:'Z — Tek taraf metal kapak',  sfx:'Z',   kind:'shield',
           note:'Temassız metal kapak · devir limitini düşürmez (gres)' },
  '2Z' : { name:'2Z — Çift taraf metal kapak',sfx:'2Z',  kind:'shield2',
           note:'Ömür boyu gresli · temassız · gresli limit geçerli' },
  'RS' : { name:'RS — Tek taraf kauçuk keçe', sfx:'RS',  kind:'seal',
           note:'Temaslı keçe · sürtünme artar, devir limiti ≈ %66' },
  '2RS': { name:'2RS — Çift taraf kauçuk keçe',sfx:'2RS',kind:'seal2',
           note:'Tam sızdırmaz · ömür boyu gresli · limit ≈ gresli × 0.66' }
};

/* ── Radyal iç boşluk — ISO 5753 tipik değerleri (μm) ───────────────
   Format: [d_üst_sınır, C2min,C2max, CNmin,CNmax, C3min,C3max,
            C4min,C4max, C5min,C5max] */
const CLEARANCE = [
  [ 10, 0, 7,  2,13,  8,23, 14,29, 20,37],
  [ 18, 0, 9,  3,18, 11,25, 18,33, 25,45],
  [ 24, 0,10,  5,20, 13,28, 20,36, 28,48],
  [ 30, 1,11,  5,20, 13,28, 23,41, 30,53],
  [ 40, 1,11,  6,20, 15,33, 28,46, 40,64],
  [ 50, 1,11,  6,23, 18,36, 30,51, 45,73],
  [ 65, 1,15,  8,28, 23,43, 38,61, 55,90],
  [ 80, 1,15, 10,30, 25,51, 46,71, 65,105],
  [100, 1,18, 12,36, 30,58, 53,84, 75,120],
  [120, 2,20, 15,41, 36,66, 61,97, 90,140]
];
const CLR_COL = { 'C2':1, 'CN':3, 'C3':5, 'C4':7, 'C5':9 };

function clrRange(d, cls){
  const row = CLEARANCE.find(r => d <= r[0]) || CLEARANCE[CLEARANCE.length-1];
  const i = CLR_COL[cls];
  return [row[i], row[i+1]];
}

const CLR_INFO = {
  'C2': 'Normalden küçük boşluk — hassas konumlama, düşük sıcaklık farkı',
  'CN': 'Normal boşluk (kodda belirtilmez) — genel uygulamalar',
  'C3': 'Normalden büyük — sıkı geçme, motorlar, ısınan uygulamalar',
  'C4': 'Büyük boşluk — yüksek sıcaklık farkı, çift sıkı geçme',
  'C5': 'Çok büyük boşluk — ekstrem termal genleşme koşulları'
};

/* ── Hassasiyet sınıfı — ISO 492 tipik delik toleransı (0/−μm) ─────
   Format: [d_üst_sınır, P0, P6, P5, P4, P2] */
const PRECISION = [
  [ 18,  8,  7, 5, 4, 2.5],
  [ 30, 10,  8, 6, 5, 2.5],
  [ 50, 12, 10, 8, 6, 2.5],
  [ 80, 15, 12, 9, 7, 4  ],
  [120, 20, 15,10, 8, 5  ]
];
const PREC_COL = { 'P0':1, 'P6':2, 'P5':3, 'P4':4, 'P2':5 };

function precTol(d, cls){
  const row = PRECISION.find(r => d <= r[0]) || PRECISION[PRECISION.length-1];
  return row[PREC_COL[cls]];
}

const PREC_INFO = {
  'P0': 'Normal hassasiyet (kodda belirtilmez) — genel makine yapımı',
  'P6': 'İyileştirilmiş hassasiyet — kaliteli redüktör, takım tezgahı',
  'P5': 'Hassas sınıf — iş mili, ölçüm cihazları',
  'P4': 'Yüksek hassasiyet — yüksek devirli iş milleri',
  'P2': 'Ultra hassasiyet — özel uygulamalar, en üst sınıf'
};
