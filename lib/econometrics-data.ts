// Static snapshot of the healthcare dashboard data.
// Source: healthcare_dashboard dummy endpoints (model not yet trained).
// When the SARIMAX model is deployed, replace this with a fetch() call
// to the Render backend and switch EconVizDemo to a server component or
// add a SWR/fetch hook.

export const SIGNAL = {
  composite_stress_score: 68,
  signal_state: "tightening" as const,
  components: {
    quit_rate_percentile: 62,
    job_openings_percentile: 74,
    wage_growth_percentile: 69,
  },
  momentum: { direction: "rising" as const, css_3m_ago: 61 },
  narrative:
    "Utah healthcare labor conditions are currently Tightening (Stress Score: 68/100). " +
    "Job openings remain elevated relative to pre-2020 norms (74th percentile). " +
    "Quit rates sit at the 62nd percentile and wage growth is tracking at the 69th percentile. " +
    "The stress score has risen 7 points over the trailing 3 months.",
};

export const EMPLOYMENT_FORECAST = {
  series_label: "Utah Ed & Health Services Employment (Private, SA)",
  unit: "thousands",
  model_mae_6m: 3.2,
  naive_baseline_mae_6m: 4.1,
  last_actual: { month: "2026-04", value: 258.5 },
  // 24-month trailing actuals (static; replace with backend history array when live)
  history: [
    { month: "2024-05", value: 248.8 },
    { month: "2024-06", value: 249.3 },
    { month: "2024-07", value: 249.6 },
    { month: "2024-08", value: 250.1 },
    { month: "2024-09", value: 250.7 },
    { month: "2024-10", value: 251.2 },
    { month: "2024-11", value: 251.8 },
    { month: "2024-12", value: 252.3 },
    { month: "2025-01", value: 252.9 },
    { month: "2025-02", value: 253.5 },
    { month: "2025-03", value: 254.0 },
    { month: "2025-04", value: 254.6 },
    { month: "2025-05", value: 255.1 },
    { month: "2025-06", value: 255.5 },
    { month: "2025-07", value: 255.9 },
    { month: "2025-08", value: 256.3 },
    { month: "2025-09", value: 256.7 },
    { month: "2025-10", value: 257.0 },
    { month: "2025-11", value: 257.4 },
    { month: "2025-12", value: 257.7 },
    { month: "2026-01", value: 257.9 },
    { month: "2026-02", value: 258.1 },
    { month: "2026-03", value: 258.3 },
    { month: "2026-04", value: 258.5 },
  ],
  forecast: [
    { month: "2026-05", projected: 259.1, lower_80: 256.8, upper_80: 261.4 },
    { month: "2026-06", projected: 259.8, lower_80: 257.0, upper_80: 262.6 },
    { month: "2026-07", projected: 260.4, lower_80: 257.1, upper_80: 263.7 },
    { month: "2026-08", projected: 261.0, lower_80: 257.2, upper_80: 264.8 },
    { month: "2026-09", projected: 261.5, lower_80: 257.1, upper_80: 265.9 },
    { month: "2026-10", projected: 262.1, lower_80: 257.0, upper_80: 267.2 },
  ],
};

export const WAGES = {
  nominal_pct: 5.3,
  real_pct: 2.1,
  cpi_pct: 3.2,
  forecast_low: 4.8,
  forecast_high: 6.2,
};
