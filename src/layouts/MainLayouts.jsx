
import HomepageHeader from '../components/organisms/HomepageHeader'

const MainLayouts = ({ children }) => {
  return (
    <>
  <HomepageHeader />
      <main className="content">{children}</main>
    </>
  )
}

export default MainLayouts