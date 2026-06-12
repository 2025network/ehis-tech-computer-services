"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Search } from "lucide-react";

type TrackedRequest = {
  fullName: string;
  destinationCountry: string;
  travelPurpose: string;
  status: string;
  adminNotes: string | null;
  createdAt: string;
};

const inputClass =
  "w-full rounded border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#0b4ea2] focus:ring-4 focus:ring-blue-100";

export function TrackApplicationForm({ initialCode = "" }: { initialCode?: string }) {
  const [request, setRequest] = useState<TrackedRequest | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  function parseTrackingResponse(responseText: string) {
    if (!responseText.trim()) {
      return { error: "Request not found. Please check your tracking code." };
    }

    try {
      return JSON.parse(responseText);
    } catch {
      return { error: "Request not found. Please check your tracking code." };
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    setRequest(null);

    const formData = new FormData(event.currentTarget);
    const code = String(formData.get("trackingCode") ?? "").trim().toUpperCase();

    if (!code) {
      setStatus("error");
      setError("Please enter a tracking code.");
      return;
    }

    try {
      const response = await fetch(`/api/applications/track?code=${encodeURIComponent(code)}`);
      const responseText = await response.text();
      const data = parseTrackingResponse(responseText);

      if (!response.ok) {
        throw new Error(data.error ?? "Request not found. Please check your tracking code.");
      }

      if (!data.request) {
        throw new Error("Request not found. Please check your tracking code.");
      }

      setRequest(data.request);
      setStatus("idle");
    } catch (trackError) {
      setStatus("error");
      setError(
        trackError instanceof Error
          ? trackError.message
          : "Request not found. Please check your tracking code."
      );
    }
  }

  return (
    <div className="grid gap-6">
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 rounded bg-white p-5 shadow-xl shadow-blue-900/10 ring-1 ring-blue-100 md:p-8"
      >
        <div>
          <h2 className="text-2xl font-bold text-[#073b7a]">Request lookup</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Tracking codes look like EHI-2026-ABCDE.
          </p>
        </div>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Tracking code
          <input
            className={inputClass}
            name="trackingCode"
            type="text"
            placeholder="EHI-2026-ABCDE"
            defaultValue={initialCode}
            required
          />
        </label>

        {error ? (
          <p className="rounded bg-red-50 px-4 py-3 text-sm font-semibold text-red-800 ring-1 ring-red-200">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded bg-[#0b4ea2] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#073b7a] disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          <Search size={18} aria-hidden="true" />
          {status === "loading" ? "Checking..." : "Track Request"}
        </button>
      </form>

      {request ? (
        <article className="rounded bg-white p-5 shadow-lg shadow-blue-900/5 ring-1 ring-blue-100 md:p-8">
          <div className="flex flex-col gap-3 border-b border-blue-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#d9a441]">
                <CheckCircle2 size={18} aria-hidden="true" />
                Request found
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#073b7a]">{request.fullName}</h2>
            </div>
            <span className="rounded bg-[#fff3d8] px-4 py-2 text-sm font-bold text-[#8a6423]">
              {request.status}
            </span>
          </div>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-bold text-slate-700">Product or service needed</dt>
              <dd className="mt-1 text-slate-600">{request.destinationCountry}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-slate-700">Usage or support type</dt>
              <dd className="mt-1 text-slate-600">{request.travelPurpose}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-slate-700">Submission date</dt>
              <dd className="mt-1 text-slate-600">
                {new Date(request.createdAt).toLocaleString()}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-slate-700">Request status</dt>
              <dd className="mt-1 font-semibold text-[#073b7a]">{request.status}</dd>
            </div>
          </dl>
          {request.adminNotes ? (
            <div className="mt-6 rounded bg-blue-50 p-4 ring-1 ring-blue-100">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#073b7a]">
                Latest admin note
              </h3>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                {request.adminNotes}
              </p>
            </div>
          ) : null}
        </article>
      ) : null}
    </div>
  );
}
