import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Resources = lazy(() => import('./pages/Resources'));
const Challenges = lazy(() => import('./pages/Challenges'));
const MockMidterm = lazy(() => import('./pages/MockMidterm'));
const ExamArchive = lazy(() => import('./pages/ExamArchive'));
const Team = lazy(() => import('./pages/Team'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div
    className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
    role="status"
    aria-label="加载中"
  >
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-pku-red border-t-transparent"></div>
    <span className="sr-only">加载中…</span>
  </div>
);

function App() {
  return (
    // reducedMotion="user" 让所有 framer-motion 动画自动尊重系统「减弱动态效果」设置
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        {/* 键盘用户可借此跳过导航直达正文 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-pku-red focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          跳到主内容
        </a>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/mock-midterm" element={<MockMidterm />} />
              <Route path="/past-exams" element={<ExamArchive />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <BackToTopButton />
      </Router>
    </MotionConfig>
  );
}

export default App;
