import { ArrowLeft } from 'lucide-react';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <main className="not-found" id="main-content">
      <div className="container not-found__inner">
        <div className="not-found__content">
          <span className="not-found__code" aria-hidden="true">404</span>
          <h1 className="not-found__heading">Page not found</h1>
          <p className="not-found__body">
            The page you are looking for does not exist or has been moved.
          </p>
          <a href="/" className="btn btn--primary">
            <ArrowLeft size={18} aria-hidden="true" />
            Return to Home
          </a>
        </div>
      </div>
    </main>
  );
}
