"use client";

import { useState } from "react";
import CategoryFilter from "@/components/ui/CategoryFilter";
import ProjectGrid from "@/components/sections/ProjectGrid";
import type { ProjectCategory } from "@/lib/projects";

const ALL = "All";

export default function ProjectsClient() {
  const [active, setActive] = useState<ProjectCategory | typeof ALL>(ALL);

  return (
    <>
      <CategoryFilter active={active} onSelect={setActive} />
      <ProjectGrid filter={active === ALL ? null : active} />
    </>
  );
}
