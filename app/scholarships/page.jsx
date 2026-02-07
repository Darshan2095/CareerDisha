"use client";

import { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function ScholarshipsPage() {
  const [search, setSearch] = useState("");
  const [scholarships, setScholarships] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [targetAudienceFilter, setTargetAudienceFilter] = useState("");
  const [administeredByFilter, setAdministeredByFilter] = useState("");
  const [deadlineFilter, setDeadlineFilter] = useState("");

  useEffect(() => {
    async function fetchScholarships() {
      try {
        const res = await fetch("/api/scholarships");
        if (!res.ok) throw new Error("Failed to fetch scholarships");
        const data = await res.json();
        setScholarships(data);
        setFilteredScholarships(data);
      } catch (err) {
        console.error("Error fetching scholarships:", err);
        setError("Failed to load scholarships");
      } finally {
        setLoading(false);
      }
    }
    fetchScholarships();
  }, []);

  useEffect(() => {
    let filtered = scholarships;

    if (search) {
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.target_audience.toLowerCase().includes(search.toLowerCase()) ||
          s.administered_by.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categoryFilter)
      filtered = filtered.filter((s) =>
        s.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    if (locationFilter)
      filtered = filtered.filter((s) =>
        s.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    if (targetAudienceFilter)
      filtered = filtered.filter((s) =>
        s.target_audience
          .toLowerCase()
          .includes(targetAudienceFilter.toLowerCase())
      );
    if (administeredByFilter)
      filtered = filtered.filter((s) =>
        s.administered_by
          .toLowerCase()
          .includes(administeredByFilter.toLowerCase())
      );

    if (deadlineFilter) {
      const now = new Date();
      filtered = filtered.filter((s) => {
        const deadline = new Date(s.application_deadline);
        const daysDiff = Math.ceil(
          (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
        );
        if (deadlineFilter === "7days") return daysDiff <= 7 && daysDiff >= 0;
        if (deadlineFilter === "30days") return daysDiff <= 30 && daysDiff >= 0;
        if (deadlineFilter === "expired") return daysDiff < 0;
        return true;
      });
    }

    setFilteredScholarships(filtered);
  }, [
    scholarships,
    search,
    categoryFilter,
    locationFilter,
    targetAudienceFilter,
    administeredByFilter,
    deadlineFilter,
  ]);

  const resetFilters = () => {
    setSearch("");
    setCategoryFilter("");
    setLocationFilter("");
    setTargetAudienceFilter("");
    setAdministeredByFilter("");
    setDeadlineFilter("");
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white h-64 flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("/cl-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70"></div>
        <div className="text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Scholarship Opportunities
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Explore national and state-level scholarships for students.
          </p>
        </div>
      </section>

      {/* Layout Wrapper */}
      <div className="flex flex-col md:flex-row py-10 rounded-lg gap-4 px-4 md:px-8">
        {/* Filter Button for Mobile */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-sm"
            onClick={() => setShowFilters(true)}
          >
            <Filter size={16} /> Filters
          </Button>
          <div className="text-sm text-gray-700">
            {filteredScholarships.length} results
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-xl flex items-center gap-2 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
              <Input
                type="text"
                placeholder="Search scholarships..."
                value={search}
                className="border-none"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button>
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* States */}
          {loading && (
            <div className="flex justify-center items-center py-8">
              <div className="text-gray-600">Loading scholarships...</div>
            </div>
          )}

          {error && (
            <div className="flex justify-center items-center py-8">
              <div className="text-red-600">{error}</div>
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-4">
              {filteredScholarships.map((scholarship) => (
                <div
                  key={scholarship._id}
                  className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-xl text-blue-600 font-semibold mb-2">
                    {scholarship.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Administered by:</span>{" "}
                    {scholarship.administered_by}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Category:</span>{" "}
                    {scholarship.category} |
                    <span className="font-medium ml-2">Location:</span>{" "}
                    {scholarship.location}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Target Audience:</span>{" "}
                    {scholarship.target_audience}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Deadline:</span>{" "}
                    <span className="font-medium text-gray-700">
                      {scholarship.application_deadline}
                    </span>
                  </p>
                  <div className="text-gray-700 mb-4">
                    <p className="font-medium mb-1">Benefits:</p>
                    <p className="text-sm">
                      {typeof scholarship.benefits === "string"
                        ? scholarship.benefits
                        : JSON.stringify(scholarship.benefits, null, 2)}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button className="text-sm">
                      <Link
                        href={scholarship.application_portal}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now
                      </Link>
                    </Button>
                    <Button className="text-sm bg-blue-100 text-blue-700 hover:bg-blue-50">
                      <Link href={`/scholarships/${scholarship._id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Sidebar (Hidden on Mobile) */}
        <div className="hidden md:block w-72 rounded-lg p-4 bg-white sticky top-2 self-start max-h-[calc(105vh-5rem)] overflow-y-auto">
          <FilterPanel
            resetFilters={resetFilters}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            targetAudienceFilter={targetAudienceFilter}
            setTargetAudienceFilter={setTargetAudienceFilter}
            administeredByFilter={administeredByFilter}
            setAdministeredByFilter={setAdministeredByFilter}
            deadlineFilter={deadlineFilter}
            setDeadlineFilter={setDeadlineFilter}
          />
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/40 z-50 flex">
          <div className="bg-white w-72 p-5 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filters
              </h2>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <FilterPanel
              resetFilters={resetFilters}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              locationFilter={locationFilter}
              setLocationFilter={setLocationFilter}
              targetAudienceFilter={targetAudienceFilter}
              setTargetAudienceFilter={setTargetAudienceFilter}
              administeredByFilter={administeredByFilter}
              setAdministeredByFilter={setAdministeredByFilter}
              deadlineFilter={deadlineFilter}
              setDeadlineFilter={setDeadlineFilter}
            />
          </div>
        </div>
      )}
    </>
  );
}

// 🔹 Extracted Filter Panel Component
function FilterPanel({
  resetFilters,
  categoryFilter,
  setCategoryFilter,
  locationFilter,
  setLocationFilter,
  targetAudienceFilter,
  setTargetAudienceFilter,
  administeredByFilter,
  setAdministeredByFilter,
  deadlineFilter,
  setDeadlineFilter,
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filters
        </h2>
        <button
          onClick={resetFilters}
          className="text-blue-600 text-sm hover:underline"
        >
          Reset
        </button>
      </div>

      <ScrollArea className="h-[calc(100vh-130px)] pr-2">
        <div className="space-y-4">
          <FilterSelect
            id="category"
            label="Scholarship Category"
            value={categoryFilter}
            onChange={setCategoryFilter}
            options={[
              ["", "All Categories"],
              ["scholarship", "Scholarship"],
              ["merit", "Merit Scholarship"],
              ["research", "Research Scholarship"],
              ["financial", "Financial Assistance"],
            ]}
          />

          <FilterSelect
            id="location"
            label="Location"
            value={locationFilter}
            onChange={setLocationFilter}
            options={[
              ["", "All Locations"],
              ["jammu", "Jammu & Kashmir"],
              ["ladakh", "Ladakh"],
              ["india", "All India"],
              ["kashmir", "University of Kashmir"],
            ]}
          />

          <FilterSelect
            id="targetAudience"
            label="Target Audience"
            value={targetAudienceFilter}
            onChange={setTargetAudienceFilter}
            options={[
              ["", "All Audiences"],
              ["students", "Students"],
              ["girl", "Girl Students"],
              ["sc", "SC Students"],
              ["obc", "OBC Students"],
              ["disabled", "Specially Abled"],
              ["orphan", "Orphans"],
              ["merit", "Merit Students"],
            ]}
          />

          <FilterSelect
            id="administeredBy"
            label="Administered By"
            value={administeredByFilter}
            onChange={setAdministeredByFilter}
            options={[
              ["", "All Organizations"],
              ["ministry", "Ministry of Education"],
              ["aicte", "AICTE"],
              ["directorate", "Directorate of Social Welfare"],
              ["university", "University of Kashmir"],
            ]}
          />

          <FilterSelect
            id="deadline"
            label="Application Deadline"
            value={deadlineFilter}
            onChange={setDeadlineFilter}
            options={[
              ["", "All Deadlines"],
              ["7days", "Next 7 days"],
              ["30days", "Next 30 days"],
              ["expired", "Expired"],
            ]}
          />
        </div>
      </ScrollArea>
    </>
  );
}

// 🔹 Reusable Filter Select Component
function FilterSelect({ id, label, value, onChange, options }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        className="w-full border rounded p-2 mt-1 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(([val, text]) => (
          <option key={val} value={val}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}
