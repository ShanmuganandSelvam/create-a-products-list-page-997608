import { CloudFrontThemeProvider } from './hooks/use-cloudfront-theme';
import { ProductsList } from './components/products/products-list';

function App() {
  return (
    <CloudFrontThemeProvider defaultTheme="bayer">
      <ProductsList />
    </CloudFrontThemeProvider>
  );
}

export default App;