"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CategoryFilter from "@/components/ui/CategoryFilter";
import ProjectGrid from "@/components/sections/ProjectGrid";
import type { ProjectCategory } from "@/lib/projects";

const ALL = "All";
const validCategories: Array<ProjectCategory> = [
  "ML",
  "NLP",
  "Econometrics",
  "Data Science",
  "Automation",
];

export default function ProjectsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramCategory = searchParams.get("category");
  const initial =
    paramCategory && validCategories.includes(paramCategory as ProjectCategory)
      ? (paramCategory as ProjectCategory)
      : ALL;

  const [active, setActive] = useState<ProjectCategory | typeof ALL>(initial);

  // Keep state in sync if the URL changes externally (e.g., back/forward)
  useEffect(() => {
    const c = searchParams.get("category");
    const resolved =
      c && validCategories.includes(c as ProjectCategory)
        ? (c as ProjectCategory)
        : ALL;
    setActive(resolved);
  }, [searchParams]);

  function handleSelect(c: ProjectCategory | "All") {
    setActive(c);
    const params = new URLSearchParams(searchParams.toString());
    if (c === ALL) {
      params.delete("category");
    } else {
      params.set("category", c);
    }
    const qs = params.toString();
    router.replace(qs ? `/projects?${qs}` : "/projects", { scroll: false });
  }

  return (
    <>
      <CategoryFilter active={active} onSelect={handleSelect} />
      <ProjectGrid filter={active === ALL ? null : active} />
    </>
  );
}
