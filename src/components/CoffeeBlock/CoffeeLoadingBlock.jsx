import React from 'react';
import ContentLoader from 'react-content-loader';

function CoffeeLoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="6" y="318" rx="3" ry="3" width="259" height="82" />
      <rect x="26" y="278" rx="3" ry="3" width="220" height="25" />
      <rect x="6" y="54" rx="0" ry="0" width="260" height="214" />
      <rect x="585" y="96" rx="0" ry="0" width="139" height="141" />
      <rect x="405" y="95" rx="0" ry="0" width="139" height="141" />
      <rect x="8" y="462" rx="0" ry="0" width="78" height="46" />
      <rect x="111" y="417" rx="0" ry="0" width="154" height="40" />
      <rect x="9" y="417" rx="0" ry="0" width="78" height="38" />
    </ContentLoader>
  );
}

export default CoffeeLoadingBlock;
