import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * 全局错误边界：捕获子树渲染异常，展示友好的中文兜底界面，
 * 避免出现整页白屏。class 组件是 React 实现错误边界的唯一方式。
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // 保留控制台日志，便于排查
    console.error('页面渲染出错：', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">页面出了点小问题</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
            抱歉，页面在加载时遇到了意外错误。你可以刷新重试，或稍后再来。
          </p>
          <button
            onClick={this.handleReload}
            className="px-6 py-2.5 bg-pku-red text-white rounded-full font-medium hover:bg-red-700 transition-colors shadow-md"
          >
            刷新页面
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
