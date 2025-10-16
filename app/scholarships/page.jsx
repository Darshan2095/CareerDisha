"use client";

import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
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
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.target_audience.toLowerCase().includes(search.toLowerCase()) ||
        s.administered_by.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((s) =>
        s.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    if (locationFilter) {
      filtered = filtered.filter((s) =>
        s.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (targetAudienceFilter) {
      filtered = filtered.filter((s) =>
        s.target_audience.toLowerCase().includes(targetAudienceFilter.toLowerCase())
      );
    }

    if (administeredByFilter) {
      filtered = filtered.filter((s) =>
        s.administered_by.toLowerCase().includes(administeredByFilter.toLowerCase())
      );
    }

    if (deadlineFilter) {
      const now = new Date();
      filtered = filtered.filter((s) => {
        const deadline = new Date(s.application_deadline);
        const daysDiff = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        
        if (deadlineFilter === "7days") return daysDiff <= 7 && daysDiff >= 0;
        if (deadlineFilter === "30days") return daysDiff <= 30 && daysDiff >= 0;
        if (deadlineFilter === "expired") return daysDiff < 0;
        return true;
      });
    }

    setFilteredScholarships(filtered);
  }, [scholarships, search, categoryFilter, locationFilter, targetAudienceFilter, administeredByFilter, deadlineFilter]);

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
    <section className="text-white h-64 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70"></div>
                <div className="text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Scholarship Opportunities</h2>
                    <p className="text-lg md:text-xl opacity-90">Explore national and state-level scholarships for students.</p>
                </div>
            </section>
    <div className="flex py-10 rounded-lg gap-4">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Search Bar */}
        <div className="flex justify-center mb-6 border-none">
          <div className="w-full max-w-xl flex items-center gap-2 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-none">
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
          <div className="text-sm text-gray-600 mb-3">
            {filteredScholarships.length} scholarships found
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
                    <span className="font-medium">Administered by:</span> {scholarship.administered_by}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Category:</span> {scholarship.category} | 
                    <span className="font-medium ml-2">Location:</span> {scholarship.location}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Target Audience:</span> {scholarship.target_audience}
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
                      {typeof scholarship.benefits === 'string' 
                        ? scholarship.benefits 
                        : JSON.stringify(scholarship.benefits, null, 2)
                      }
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="text-sm">
                      <Link href={scholarship.application_portal} target="_blank" rel="noopener noreferrer">
                        Apply Now
                      </Link>
                    </Button>
                    <Button className="text-sm bg-blue-100 text-black-600 hover:bg-blue-50">
                      <Link href={`/scholarships/${scholarship._id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Right Filter Sidebar */}
      <div className="w-72 rounded-lg p-4 bg-white sticky top-2 self-start max-h-[calc(105vh-5rem)] overflow-y-auto">
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
            <div>
              <Label htmlFor="category">Scholarship Category</Label>
              <select 
                id="category" 
                className="w-full border rounded p-2"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="scholarship">Scholarship</option>
                <option value="merit">Merit Scholarship</option>
                <option value="research">Research Scholarship</option>
                <option value="financial">Financial Assistance</option>
              </select>
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <select 
                id="location" 
                className="w-full border rounded p-2"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="jammu">Jammu & Kashmir</option>
                <option value="ladakh">Ladakh</option>
                <option value="india">All India</option>
                <option value="kashmir">University of Kashmir</option>
              </select>
            </div>

            <div>
              <Label htmlFor="targetAudience">Target Audience</Label>
              <select 
                id="targetAudience" 
                className="w-full border rounded p-2"
                value={targetAudienceFilter}
                onChange={(e) => setTargetAudienceFilter(e.target.value)}
              >
                <option value="">All Audiences</option>
                <option value="students">Students</option>
                <option value="girl">Girl Students</option>
                <option value="sc">SC Students</option>
                <option value="obc">OBC Students</option>
                <option value="disabled">Specially Abled</option>
                <option value="orphan">Orphans</option>
                <option value="merit">Merit Students</option>
              </select>
            </div>

            <div>
              <Label htmlFor="administeredBy">Administered By</Label>
              <select 
                id="administeredBy" 
                className="w-full border rounded p-2"
                value={administeredByFilter}
                onChange={(e) => setAdministeredByFilter(e.target.value)}
              >
                <option value="">All Organizations</option>
                <option value="ministry">Ministry of Education</option>
                <option value="aicte">AICTE</option>
                <option value="directorate">Directorate of Social Welfare</option>
                <option value="university">University of Kashmir</option>
              </select>
            </div>

            <div>
              <Label htmlFor="deadline">Application Deadline</Label>
              <select 
                id="deadline" 
                className="w-full border rounded p-2"
                value={deadlineFilter}
                onChange={(e) => setDeadlineFilter(e.target.value)}
              >
                <option value="">All Deadlines</option>
                <option value="7days">Next 7 days</option>
                <option value="30days">Next 30 days</option>
                <option value="expired">Expired</option>
              </select>
            </div>

            <div>
              <Label htmlFor="income">Income Criteria</Label>
              <select 
                id="income" 
                className="w-full border rounded p-2"
                onChange={() => {}}
              >
                <option value="">Any Income</option>
                <option value="1lakh">Below 1 Lakh</option>
                <option value="2.5lakh">Below 2.5 Lakh</option>
                <option value="8lakh">Below 8 Lakh</option>
              </select>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
    </>
  );
}

