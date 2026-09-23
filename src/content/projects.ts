import type { ProjectDefinition, ProjectId } from "./types";

export const projects: Record<ProjectId, ProjectDefinition> = {
  trace: {
    id: "trace",
    status: "COMPLETED",
    caseStudyPath: {
      es: "/projects/trace/",
      en: "/en/projects/trace/",
    },
    technicalClaimsVerified: false,
  },
  asisteo: {
    id: "asisteo",
    status: "BUILDING_REBUILDING",
    technicalClaimsVerified: false,
  },
};
