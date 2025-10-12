
import PropTypes from 'prop-types'
import HomepageHeader from '../components/organisms/HomepageHeader'

const MainLayouts = ({ children }) => {
  return (
    <>
  <HomepageHeader />
      <main className="content">{children}</main>
    </>
  )
}

MainLayouts.propTypes = {
  children: PropTypes.node
}

export default MainLayouts