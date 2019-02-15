const env = process.env.NODE_ENV;
import devFunction from './scripts/development';
const agentFunction = () => {
  if (env === 'development') {
    devFunction();
  }
};

export default agentFunction;
