import React from 'react';

import Header from './Header';
import Footer from './Footer';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

export default function LayoutBase({ isSidebar, children }) {
	return (
		<>
			<Header />

			<div className="container mt-4 mb-4">
				{isSidebar ? (
					<div className="row">
						<div className="col d-none d-xl-block">
							<SidebarLeft />
						</div>
						<div className="col-12 col-xl-6">{children}</div>
						<div className="col-xl-3 d-none d-xl-block">
							<SidebarRight />
						</div>
					</div>
				) : (
					<div className="row">
						<div className="col-12 col-xl-9">{children}</div>
						<div className="col-xl-3 d-none d-xl-block">
							<SidebarRight />
						</div>
					</div>
				)}
			</div>

			<Footer />
		</>
	);
}
