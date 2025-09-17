import { BrowserRouter, Routes, Route } from "react-router-dom";

const SimpleHome = () => (
  <div style={{ padding: '20px' }}>
    <h1>Home Page</h1>
    <p>This is a simple test to verify routing works.</p>
    <a href="/blog-test">Go to Blog Test</a>
  </div>
);

const SimpleBlog = () => (
  <div style={{ padding: '20px' }}>
    <h1>Blog Test Page</h1>
    <p>Blog routing is working!</p>
    <a href="/">Go back to Home</a>
  </div>
);

const AppSimple = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SimpleHome />} />
      <Route path="/blog-test" element={<SimpleBlog />} />
    </Routes>
  </BrowserRouter>
);

export default AppSimple;