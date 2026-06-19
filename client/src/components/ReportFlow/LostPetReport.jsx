import PageShell from "../common/PageShell";

import ReportIntro from "./ReportIntro";
import ReportForm from "./ReportForm";
import ReportSidebar from "./ReportSidebar";

import "./LostPetReport.css";

function LostPetReport() {
  return (
    <PageShell className="lost-report">
      <ReportIntro />

      <div className="lost-report__layout">
        <ReportForm />
        <ReportSidebar />
      </div>
    </PageShell>
  );
}

export default LostPetReport;
