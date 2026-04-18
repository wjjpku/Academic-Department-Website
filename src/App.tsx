import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Resources = lazy(() => import('./pages/Resources'));
const Challenges = lazy(() => import('./pages/Challenges'));
const MockMidterm = lazy(() => import('./pages/MockMidterm'));
const Team = lazy(() => import('./pages/Team'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-pku-red border-t-transparent"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/mock-midterm" element={<MockMidterm />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <BackToTopButton />
    </Router>
  );
}

export default App;
