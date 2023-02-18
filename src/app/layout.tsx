import '@/styles/bundle.css';
import { withMainLayoutPage } from '@/modules/shared/components/layouts/page/Main';

function RootLayout({ children }) {
  return children;
}

export default withMainLayoutPage(RootLayout);
