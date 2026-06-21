export type Language = "id" | "en";

export const translations = {
  id: {
    appName: "Qimey",
    title: "Perencanaan Masa Depan Finansialmu",
    subtitle:
      "Ketahui sisa saldo tabungan kumulatif Anda dari bulan berjalan sampai periode perencanaan secara transparan dan cepat di browser lokal Anda.",

    // Form Sections
    incomeTitle: "Pendapatan",
    incomeSub: "Tambahkan satu atau lebih sumber pemasukan bulanan Anda.",
    incomeLabel: "Sumber Pendapatan",
    incomeNameLabel: "Nama Pendapatan",
    period: "Periode",
    duration: "Masa Aktif",
    amount: "Nominal",
    unlimited: "Tanpa Batas",
    months: "Bulan",
    startFrom: "Mulai Dari",
    until: "Sampai Dengan",
    selectMonthYear: "Pilih Bulan & Tahun",
    noLimit: "Tanpa Batas",
    daily: "Harian",
    weekly: "Mingguan",
    monthly: "Bulanan",
    yearly: "Tahunan",

    // Taxes
    taxToggle: "Potongan Pajak & Pengurangan",
    taxCount: "potongan pajak ditambahkan",
    taxNone: "Belum ada potongan pajak untuk pendapatan ini.",
    addTax: "Tambah Potongan",
    taxName: "Nama Potongan",
    taxType: "Jenis",
    taxValue: "Nilai",
    taxPercent: "Persen %",
    taxNominal: "Nominal",
    addIncome: "Tambah Sumber Pendapatan",

    // Savings
    savingsTitle: "Tabungan Saat Ini",
    savingsSub:
      "Tambahkan saldo tabungan saat ini untuk mendapatkan gambaran keuangan yang lebih lengkap.",
    savingsToggle: "Sertakan saldo tabungan saat ini",
    savingsToggleSub: "Saldo akan digunakan sebagai saldo awal perhitungan",
    savingsAmount: "Saldo Saat Ini",
    savingsBadge: "Disertakan",

    // Debt
    debtTitle: "Cicilan & Utang",
    debtSub:
      "Kewajiban rutin bulanan dengan tenor tertentu (akan lunas setelah masa tenor berakhir).",
    debtName: "Nama Cicilan / Keterangan",
    debtDuration: "Tenor (Bulan)",
    addDebt: "Tambah Cicilan / Utang",

    // Routine
    routineTitle: "Pengeluaran Rutin",
    routineSub:
      "Pengeluaran rutin berkelanjutan tanpa masa berakhir (misal: kos, internet, makan).",
    routineName: "Nama Pengeluaran",
    addRoutine: "Tambah Pengeluaran Rutin",

    // One Time
    oneTimeTitle: "Pengeluaran Sekali Bayar",
    oneTimeSub:
      "Pengeluaran non-rutin yang terjadi sekali di bulan tertentu (misal: servis AC, pajak motor, beli kado).",
    oneTimeName: "Nama Pengeluaran",
    oneTimeMonth: "Bulan Kejadian",
    addOneTime: "Tambah Pengeluaran Sekali Bayar",

    // Global actions
    saveAuto: "Semua data Anda tersimpan secara otomatis di browser",
    calculateBtn: "Hitung Cashflow ↗",
    updateBtn: "Perbarui Cashflow ↗",
    upToDateBtn: "Cashflow Sudah Up to Date ✓",
    resetBtn: "Reset Data",

    // Dashboard Results
    dashHeader: "Dashboard Perencanaan Keuangan",
    dashSub: "Analisis arus kas kumulatif Anda hingga akhir tahun berjalan.",

    alertHeader: "Peringatan Kontrak Kerja / Pendapatan Habis",
    alertDetail:
      "Seluruh pendapatan Anda berakhir pada {lastActiveMonth}. Perhitungan bulan {nextMonth} hingga akhir periode dilakukan tanpa pemasukan sama sekali.",

    projDec: "Saldo Akhir Desember",
    calculatedFrom: "Perhitungan dilakukan penuh mulai dari awal",

    totalNetIncome: "Total Pendapatan Bersih",
    totalGrossIncome: "Total Pendapatan (Kotor)",
    totalTaxes: "Total Pajak & Potongan",
    totalDebts: "Total Cicilan & Utang",
    debtToIncomeRatio: "Rasio Cicilan / Pendapatan",

    chartTitle: "Perkembangan Saldo Bulanan",
    positiveBalance: "Saldo Positif",
    deficit: "Defisit",
    paidOff: "Lunas Cicilan",
    zoom3b: "3 Bulan",
    zoom6b: "6 Bulan",
    zoom1t: "1 Tahun",
    zoomSemua: "Semua",
    compositionTitle: "Komposisi Pengeluaran & Sisa — Total Kumulatif",
    compTax: "Pajak & Potongan",
    compDebt: "Cicilan & Utang",
    compRoutine: "Pengeluaran Rutin",
    compOneTime: "Sekali Bayar",
    compSavings: "Sisa (Tabungan)",
    detailStatusTitle: "Detail Status Kontrak & Tenor",
    paidOffIn: "lunas pada",
    endsIn: "berakhir pada",
    paidOffBadge: "lunas",
    endedBadge: "berakhir",
    errorIncomeNominal:
      "Nominal pendapatan wajib diisi dan harus lebih besar dari 0.",
    errorGlobalIncome: "Harus ada minimal 1 sumber pendapatan.",
    tooltipAssumption: "Diasumsikan 30 hari/bulan dan 4,33 minggu/bulan.",
    changeTax: "Ubah",
    addTaxShort: "+ Tambah",
    optional: "opsional",
    loading: "Memuat kalkulator Qimey...",
    subTitleProj: "Perencanaan Keuangan Mandiri",
    cashflowTitle: "Arus Kas Bulanan",
    grossIncome: "Pendapatan Bersih",

    projectionRange: "Periode Perencanaan",
    projectionRangeSub:
      "Pilih bulan dan tahun akhir untuk perencanaan keuangan Anda",
    endMonth: "Bulan Akhir",
    endYear: "Tahun Akhir",

    // Report Table
    reportTitle: "Laporan Perencanaan Keuangan",
    reportSub: "Rincian arus kas bulanan dalam bentuk tabel",
    colMonth: "Bulan",
    colIncome: "Pendapatan",
    colTax: "Pajak",
    colDebt: "Cicilan",
    colRoutine: "Rutin",
    colOneTime: "Sekali Bayar",
    colCashflow: "Arus Kas",
    colBalance: "Saldo",
    colNotes: "Keterangan",
    notesPaidOff: "Lunas",
    notesEnded: "Berakhir",
    notesDeficit: "Defisit",
  },
  en: {
    appName: "Qimey",
    title: "Plan Your Financial Future",

    subtitle:
      "Understand your cumulative savings balance from the current month through your selected planning period, securely in your local browser.",

    // Form Sections
    incomeTitle: "Income",
    incomeSub: "Add one or more monthly income sources.",
    incomeLabel: "Income Source",
    incomeNameLabel: "Income Name",
    period: "Period",
    duration: "Duration",
    amount: "Amount",
    unlimited: "Unlimited",
    months: "Months",
    startFrom: "Start From",
    until: "Until",
    selectMonthYear: "Select Month & Year",
    noLimit: "No Limit",
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    yearly: "Yearly",

    // Taxes
    taxToggle: "Tax Deductions & Reductions",
    taxCount: "tax deductions added",
    taxNone: "No tax deductions for this income.",
    addTax: "Add Deduction",
    taxName: "Deduction Name",
    taxType: "Type",
    taxValue: "Value",
    taxPercent: "Percent %",
    taxNominal: "Amount",
    addIncome: "Add Income Source",

    // Savings
    savingsTitle: "Current Savings",
    savingsSub:
      "Include your current savings balance for a more complete financial overview.",
    savingsToggle: "Include current savings balance",
    savingsToggleSub:
      "This balance will be used as the starting balance for calculations",
    savingsAmount: "Current Balance",
    savingsBadge: "Included",

    // Debt
    debtTitle: "Installments & Debts",
    debtSub:
      "Regular monthly obligations with a specific duration (will be paid off when the duration ends).",
    debtName: "Installment Name / Description",
    debtDuration: "Duration (Months)",
    addDebt: "Add Installment / Debt",

    // Routine
    routineTitle: "Routine Expenses",
    routineSub:
      "Ongoing routine expenses without an end date (e.g. rent, internet, food).",
    routineName: "Expense Name",
    addRoutine: "Add Routine Expense",

    // One Time
    oneTimeTitle: "One-Time Expenses",
    oneTimeSub:
      "One-time expenses occurring in a specific month (e.g. AC service, vehicle tax, gifts).",
    oneTimeName: "Expense Name",
    oneTimeMonth: "Occurred Month",
    addOneTime: "Add One-Time Expense",

    // Global actions
    saveAuto: "All your data is saved automatically in your browser",
    calculateBtn: "Calculate Cash Flow ↗",
    updateBtn: "Update Cash Flow ↗",
    upToDateBtn: "Cash Flow Is Up to Date ✓",
    resetBtn: "Reset Data",

    // Dashboard Results
    // Dashboard Results
    dashHeader: "Financial Planning Dashboard",
    dashSub:
      "Analysis of your cumulative cash flow through the end of the current year.",

    alertHeader: "Income / Contract Expiry Alert",
    alertDetail:
      "All your income ends in {lastActiveMonth}. Calculations from {nextMonth} through the end of the selected period assume no income.",

    projDec: "End-of-December Balance",
    calculatedFrom:
      "Calculations performed in full starting from the beginning of",

    totalNetIncome: "Total Net Income",
    totalGrossIncome: "Total Gross Income",
    totalTaxes: "Total Taxes & Deductions",
    totalDebts: "Total Debt & Installments",
    debtToIncomeRatio: "Debt-to-Income Ratio",

    chartTitle: "Monthly Balance Trend",

    positiveBalance: "Positive Balance",
    deficit: "Deficit",
    paidOff: "Paid Off",

    zoom3b: "3 Months",
    zoom6b: "6 Months",
    zoom1t: "1 Year",
    zoomSemua: "All",

    compositionTitle:
      "Expense & Remaining Balance Composition — Cumulative Total",

    compTax: "Taxes & Deductions",
    compDebt: "Debt & Installments",
    compRoutine: "Routine Expenses",
    compOneTime: "One-Time Expenses",
    compSavings: "Remaining Balance",

    detailStatusTitle: "Contract & Duration Status Details",

    paidOffIn: "paid off in",
    endsIn: "ends in",
    paidOffBadge: "paid off",
    endedBadge: "ended",

    errorIncomeNominal: "Income amount is required and must be greater than 0.",
    errorGlobalIncome: "At least 1 income source is required.",

    tooltipAssumption: "Assumes 30 days per month and 4.33 weeks per month.",

    changeTax: "Change",
    addTaxShort: "+ Add",
    optional: "optional",

    loading: "Loading Qimey calculator...",

    subTitleProj: "Personal Financial Planning",

    cashflowTitle: "Monthly Cash Flow",
    grossIncome: "Net Income",

    // Planning Period
    projectionRange: "Planning Period",
    projectionRangeSub:
      "Choose the ending month and year for your financial plan",

    endMonth: "End Month",
    endYear: "End Year",

    // Report Table
    reportTitle: "Financial Planning Report",
    reportSub: "Monthly cash flow breakdown in table format",

    colMonth: "Month",
    colIncome: "Income",
    colTax: "Tax",
    colDebt: "Debt",
    colRoutine: "Routine",
    colOneTime: "One-Time",
    colCashflow: "Cash Flow",
    colBalance: "Balance",
    colNotes: "Notes",

    notesPaidOff: "Paid Off",
    notesEnded: "Ended",
    notesDeficit: "Deficit",
  },
};

export const ENGLISH_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const INDONESIAN_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];
