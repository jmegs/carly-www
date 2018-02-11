import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './globals.styl'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Carly Augenstein"
      meta={[
        {
          name: 'description',
          content:
            'Carly Augenstein is a New York based actor, singer, and writer.',
        },
        { name: 'keywords', content: 'nyc, actor, singer, writer, comedienne' },
      ]}
    />

    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
