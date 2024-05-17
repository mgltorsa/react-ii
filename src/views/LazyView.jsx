import { Suspense, lazy, useState } from "react";
import LazyComponent from "../components/LazyComponent";
// const LazyComponent = lazy(() => delayForDemo(import("../components/LazyComponent")));

const LazyView = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello, **world**!");
  return (
    <>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<p>Loading...</p>}>
          <h2>Preview</h2>
          <LazyComponent markdown={markdown} />
        </Suspense>
      )}
    </>
  );
};

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default LazyView;
