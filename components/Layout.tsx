import React, { PropsWithChildren } from 'react'
import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

type LayoutProps = {
	title: string
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
			</Head>
			<div className='max-w-screen-md mx-auto px-5'>
				<header className='py-10 flex items-center justify-between'>
					<a href='/'>Bhargawanan Bhuyan</a>

					<div className='block md:hidden'>
						<button className='ham'>
							<span></span>
							<span></span>
						</button>
					</div>

					<nav className='gap-x-6 hidden md:flex'>
						<a href='/'>Blogs</a>
						<a href='/'>Projects</a>
						<a href='/'>About</a>
					</nav>
				</header>
				<main>{props.children}</main>
				<footer className='pt-20 pb-12 grid gap-y-3.5 md:flex items-center justify-between'>
					<div>© 2022, All rights reserved</div>
					<div className='text-xl md:text-2xl flex gap-x-5'>
						<a href='/'>
							<FontAwesomeIcon icon={faGithub} title='github' />
						</a>
						<a href='/'>
							<FontAwesomeIcon icon={faLinkedinIn} title='linkedin' />
						</a>
						<a href='/'>
							<FontAwesomeIcon icon={faEnvelope} title='mail' />
						</a>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Layout
