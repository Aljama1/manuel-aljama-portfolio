import type { ProjectDefinition, ProjectId } from "./types";

export const projects: Record<ProjectId, ProjectDefinition> = {
  trace: {
    id: "trace",
    status: "COMPLETED",
    caseStudyPath: {
      es: "/projects/trace/",
      en: "/en/projects/trace/",
    },
    // Los claims técnicos que el portfolio publica sobre Trace han sido revisados y verificados
    technicalClaimsVerified: true,
  },
  asisteo: {
    id: "asisteo",
    status: "BUILDING_REBUILDING",
    technicalClaimsVerified: false,
  },
};
