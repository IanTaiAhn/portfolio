"use client";

import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { SIGNAL, EMPLOYMENT_FORECAST, WAGES } from "@/lib/econometrics-data";

// ── Headline Signal ──────────────────────────────────────────────────────────

const SIGNAL_STYLES = {
  tightening: {
    border: "border-red-500/30",
    bg: "bg-red-500/5",
    badge: "bg-red-500/20 text-red-400",
    dot: "bg-red-500",
    text: "text-red-400",
    label: "Tightening",
  },
  stable: {
    border: "border-amber-DEFAULT/30",
    bg: "bg-amber-DEFAULT/5",
    badge: "bg-amber-DEFAULT/20 text-amber-DEFAULT",
    dot: "bg-amber-DEFAULT",
    text: "text-amber-DEFAULT",
    label: "Stable",
  },
  easing: {
    border: "border-green-500/30",
    bg: "bg-green-500/5",
    badge: "bg-green-500/20 text-green-400",
    dot: "bg-green-500",
    text: "text-green-400",
    label: "Easing",
  },
};

const MOMENTUM_ARROW = { rising: "↑", flat: "→", falling: "↓" } as const;

function HeadlineSignal() {
  const style = SIGNAL_STYLES[SIGNAL.signal_state];
  const arrow = MOMENTUM_ARROW[SIGNAL.momentum.direction];

  return (
    <div className={`rounded-lg border ${style.border} ${style.bg} p-5`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${style.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
              {style.label}
            </span>
            <span className="font-mono text-xs text-cream/60">
              {arrow} CSS {SIGNAL.composite_stress_score}/100 · 3m +{SIGNAL.composite_stress_score - SIGNAL.momentum.css_3m_ago}pts
            </span>
          </div>
          <p className="mt-3 text-sm text-cream/60 leading-relaxed">
            {SIGNAL.narrative}
          </p>
        </div>

        {/* Score circle */}
        <div className="flex-shrink-0 text-center">
          <div
            className={`w-16 h-16 rounded-full border-2 ${style.border} flex items-center justify-center`}
          >
            <span className={`text-xl font-bold font-mono ${style.text}`}>
              {SIGNAL.composite_stress_score}
            </span>
          </div>
          <p className="text-xs text-cream/60 mt-1 font-mono">CSS</p>
        </div>
      </div>

      {/* Component breakdown */}
      <div className="mt-4 pt-4 border-t border-cream/5 flex flex-wrap gap-6">
        {Object.entries(SIGNAL.components).map(([key, val]) => (
          <div key={key} className="text-xs font-mono">
            <span className="text-cream/60">{key.replace(/_percentile$/, "").replace(/_/g, " ")}</span>
            <span className={`ml-2 font-semibold ${style.text}`}>{val}th pct</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Employment Forecast Chart ────────────────────────────────────────────────

function EmploymentChart() {
  const { history, forecast, last_actual, model_mae_6m, naive_baseline_mae_6m } =
    EMPLOYMENT_FORECAST;

  const chartData = [
    ...history.map((d) => ({ month: d.month, actual: d.value })),
    ...forecast.map((f) => ({
      month: f.month,
      forecast: f.projected,
      band: [f.lower_80, f.upper_80] as [number, number],
    })),
  ];

  const forecastStart = forecast[0].month;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-1 flex-wrap gap-2">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber-DEFAULT">
          Employment Trend
        </h3>
        <span className="font-mono text-xs text-cream/60">
          Last actual: {last_actual.value}k ({last_actual.month})
        </span>
      </div>
      <p className="text-xs text-cream/65 mb-4">
        UTEDUH — Ed & Health Services (Private, SA). 24-month trailing + 6-month SARIMAX forecast, 80% CI.
      </p>

      <div className="rounded-lg border border-cream/10 bg-navy-mid p-4">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: "#F5EFE066" }}
                tickFormatter={(m: string) => m.slice(2)}
                axisLine={{ stroke: "#F5EFE010" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#F5EFE066" }}
                tickFormatter={(v: number) => `${v}k`}
                domain={["dataMin - 2", "dataMax + 2"]}
                axisLine={false}
                tickLine={false}
                width={36}
              />
              <Tooltip
                contentStyle={{
                  background: "#162338",
                  border: "1px solid #F5EFE020",
                  borderRadius: "6px",
                  fontSize: "11px",
                  color: "#F5EFE0",
                }}
                formatter={(val: number | [number, number], name: string) => {
                  if (name === "band") {
                    if (Array.isArray(val))
                      return [`${val[0]}–${val[1]}k`, "80% CI"];
                    return null;
                  }
                  return [`${Number(val).toFixed(1)}k`, name];
                }}
              />

              {/* Confidence band */}
              <Area
                type="monotone"
                dataKey="band"
                fill="#FFB627"
                fillOpacity={0.08}
                stroke="none"
                legendType="none"
              />

              {/* Historical actuals */}
              <Line
                type="monotone"
                dataKey="actual"
                name="Actual"
                stroke="#F5EFE0"
                strokeWidth={2}
                dot={false}
                strokeOpacity={0.8}
              />

              {/* Forecast line */}
              <Line
                type="monotone"
                dataKey="forecast"
                name="Forecast"
                stroke="#FFB627"
                strokeWidth={2}
                strokeDasharray="6 3"
                dot={false}
              />

              {/* Forecast start marker */}
              <ReferenceLine
                x={forecastStart}
                stroke="#F5EFE030"
                strokeDasharray="3 3"
                label={{
                  value: "Forecast →",
                  position: "insideTopRight",
                  fontSize: 9,
                  fill: "#F5EFE040",
                  offset: 4,
                }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Model performance footnote */}
        <p className="text-xs font-mono text-cream/55 mt-3">
          Model 6m MAE: {model_mae_6m}k · Naive baseline: {naive_baseline_mae_6m}k ·{" "}
          <span className="text-green-500/60">✓ beats baseline</span>
        </p>
      </div>
    </div>
  );
}

// ── Wage Stats Row ───────────────────────────────────────────────────────────

function WageStats() {
  const stats = [
    { label: "Nominal Wage Growth", value: `${WAGES.nominal_pct}%`, sub: "YoY", accent: "text-cream" },
    { label: "Real Wage Growth", value: `${WAGES.real_pct}%`, sub: "CPI-adjusted", accent: "text-green-400" },
    { label: "CPI Inflation", value: `${WAGES.cpi_pct}%`, sub: "YoY", accent: "text-cream/60" },
    {
      label: "6-Month Projection",
      value: `${WAGES.forecast_low}–${WAGES.forecast_high}%`,
      sub: "wage growth range",
      accent: "text-amber-DEFAULT",
    },
  ];

  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber-DEFAULT mb-4">
        Wage Pressure
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map(({ label, value, sub, accent }) => (
          <div
            key={label}
            className="rounded-lg border border-cream/10 bg-navy-mid p-4"
          >
            <p className="text-xs text-cream/65 font-mono mb-1">{label}</p>
            <p className={`text-2xl font-bold font-mono ${accent}`}>{value}</p>
            <p className="text-xs text-cream/55 mt-0.5">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Assembled Demo ───────────────────────────────────────────────────────────

export default function EconVizDemo() {
  return (
    <div className="space-y-8">
      <HeadlineSignal />
      <EmploymentChart />
      <WageStats />

      <p className="font-mono text-xs text-cream/60">
        Data: FRED (UTEDUH, JOLTS, CPI) · Model: SARIMAX · Status: demo snapshot —
        live pipeline in development
      </p>
    </div>
  );
}
