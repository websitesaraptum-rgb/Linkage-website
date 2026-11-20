
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { careers } from "@/data/careersData";

const Careers = () => {
  const [candidateNames, setCandidateNames] = useState<Record<string, string>>(
    {}
  );

  const openCareers = careers.filter(
    (career) => career.status === "open"
  );

  const getApplicationLink = (
    candidateName: string,
    jobTitle: string,
    email: string
  ) => {
    const subject = `${candidateName.trim()} - ${jobTitle}`;

    const body = [
      `Dear Linkage Outsourcing Recruitment Team,`,
      "",
      `I am writing to express my interest in the ${jobTitle} position.`,
      "",
      `Please find my CV attached for your consideration.`,
      "",
      "Kind regards,",
      candidateName.trim()
    ].join("\n");

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Careers | Linkage Outsourcing Services</title>
        <meta
          name="description"
          content="Explore current career opportunities at Linkage Outsourcing Services. Discover available positions and submit your CV."
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-10 md:py-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              CAREER OPPORTUNITIES
            </span>

            <h1 className="text-primary mb-6">
              Find your next opportunity.
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Your next career move could start here. Explore our available
              opportunities and take the next step towards a rewarding
              professional future.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Current opportunities
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Professional growth
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Career development
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Listing */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Explore opportunities
              </span>

              <h2 className="text-primary mt-3 mb-3">
                Current Openings
              </h2>

              <p className="text-muted-foreground">
                Explore the positions currently available through Linkage
                Outsourcing.
              </p>
            </div>

            <div className="text-sm text-muted-foreground">
              {openCareers.length}{" "}
              {openCareers.length === 1 ? "position" : "positions"} available
            </div>
          </div>

          {openCareers.length > 0 ? (
            <div className="space-y-8">
              {openCareers.map((career) => (
                <article
                  key={career.id}
                  className="bg-card rounded-xl border border-border card-shadow overflow-hidden"
                >
                  {/* Job Header */}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1.5 rounded-full">
                            {career.department}
                          </span>

                          <span className="text-xs font-medium text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                            Accepting Applications
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                          {career.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed max-w-3xl">
                          {career.summary}
                        </p>
                      </div>

                      <div className="lg:text-right shrink-0">
                        <p className="text-sm text-muted-foreground mb-1">
                          Employment type
                        </p>
                        <p className="font-semibold text-primary">
                          {career.employmentType}
                        </p>
                      </div>
                    </div>

                    {/* Job Information */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground mb-2">
                          Location
                        </p>
                        <p className="font-medium text-primary text-sm">
                          {career.location}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-2">
                          Experience
                        </p>
                        <p className="font-medium text-primary text-sm">
                          {career.experience}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-2">
                          Qualification
                        </p>
                        <p className="font-medium text-primary text-sm">
                          {career.qualification}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-2">
                          Department
                        </p>
                        <p className="font-medium text-primary text-sm">
                          {career.department}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="px-6 md:px-8 pb-8">
                    <div className="bg-muted/30 rounded-lg p-5 md:p-6">
                      <h4 className="text-primary font-semibold text-lg mb-3">
                        About this position
                      </h4>

                      <p className="text-muted-foreground leading-relaxed">
                        {career.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-primary font-semibold text-lg mb-4">
                          Key Responsibilities
                        </h4>

                        <ul className="space-y-3">
                          {career.responsibilities.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                            >
                              <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="text-primary font-semibold text-lg mb-4">
                          Qualifications & Experience
                        </h4>

                        <ul className="space-y-3">
                          {career.requirements.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                            >
                              <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technical Skills */}
                    <div className="mt-10">
                      <h4 className="text-primary font-semibold text-lg mb-4">
                        Technical Skills & Competencies
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {career.technicalSkills.map((skill, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <span className="text-secondary font-bold">
                              ✓
                            </span>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preferred Platforms */}
                    {career.preferredExperience.length > 0 && (
                      <div className="mt-10">
                        <h4 className="text-primary font-semibold text-lg mb-4">
                          Preferred Platform Experience
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {career.preferredExperience.map((item, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Application Section */}
                    <div className="mt-10 p-6 md:p-8 rounded-xl bg-primary text-white">
                      <div className="max-w-2xl">
                        <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
                          Apply for this position
                        </span>

                        <h4 className="text-2xl font-bold mt-3 mb-3">
                          Interested in this opportunity?
                        </h4>

                      

                        <p className="text-xs text-white/70 mt-5 leading-relaxed">
                          Please attach your updated CV before sending.
                          Use your full name followed by the job title as
                          the email subject. Send your application to{" "}
                          <a
                            href={`mailto:${career.applicationEmail}`}
                            className="text-secondary underline underline-offset-2"
                          >
                            {career.applicationEmail}
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-xl border border-border p-10 md:p-16 text-center">
              <h3 className="text-2xl font-semibold text-primary mb-3">
                No Current Openings
              </h3>

              <p className="text-muted-foreground max-w-lg mx-auto">
                We don't have any open positions at the moment. Please check
                back later for new career opportunities.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Closing Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-primary mb-4">
              Your career journey matters.
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Linkage Outsourcing, we connect people with opportunities
              that match their skills, experience and professional ambitions.
              Keep checking this page for upcoming opportunities.
            </p>

            <a
              href="mailto:serviceslinkage@gmail.com"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary transition-colors"
            >
              Contact our recruitment team
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
