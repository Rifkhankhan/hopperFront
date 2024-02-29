import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import MobileSelter from '../Pages/ProductsPages/MobileSelter/MobileSelter'
import MobileFarm from '../Pages/ProductsPages/MobileFarm/MobileFarm'
import FrontPage from '../Pages/FrontPage/FrontPage'

const Routers = () => {
	return (
		<Routes>
			{/* <Route path="/" index element={<FrontPage />} /> */}
			<Route path="/mobileselter" element={<MobileSelter />} />
			<Route path="/farm" element={<MobileFarm />} />

			{/* <Route path="/reset/:token" element={<ResetPage />} /> */}
			{/* <Route path="/blogs/:id" element={<BlogDetails />} /> */}

			<Route path="*" element={<MobileSelter />} />
		</Routes>
	)
}

export default Routers
