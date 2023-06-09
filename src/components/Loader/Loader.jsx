import { ProgressBar } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => (
  <LoaderWrapper>
    <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>
  </LoaderWrapper>
);

export default Loader;