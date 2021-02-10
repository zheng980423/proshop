import React from 'react';
import { Helmet } from 'react-helmet';
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keyword" content={keywords}></meta>
    </Helmet>
  );
};
Meta.defaultProps = {
  title: 'welcome to proshop',
  keywords: 'electronics,buy electronics,cheap electronics',
  description: 'we sell the best product for cheap',
};
export default Meta;
