import AddmissionPage from "./addmissionPage.jsx";

import EligibilityPage from "./EligibilityPage.jsx";
import Scholarship from "./Scholarship.jsx";
import FeePage from "./FeePage.jsx";
import Educational from "./Educational.jsx";
import HostelFee from "./HostelFee.jsx";
import InfiniteScrollGrid from "./InfiniteScrollGrid.jsx";
import ApplicationPage from "./ApplicationPage.jsx";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <AddmissionPage />
      <ApplicationPage />
      < EligibilityPage/>
      <Scholarship/>
      <FeePage />
      <Educational />
      <HostelFee/>
      <InfiniteScrollGrid />
    </div>
  );
}

export default App;
