import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

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
					<Link href='/'>
						<a>Bhargawanan Bhuyan</a>
					</Link>

					<div className='block md:hidden'>
						<button className='ham'>
							<span></span>
							<span></span>
						</button>
					</div>

					<nav className='gap-x-6 hidden md:flex'>
						<Link href='/blogs'>
							<a>Blogs</a>
						</Link>
						<Link href='/projects'>
							<a>Projects</a>
						</Link>
						<Link href='/about'>
							<a>About</a>
						</Link>
					</nav>
				</header>
				<main>{props.children}</main>
				<footer className='pt-20 pb-12 grid gap-y-3.5 md:flex items-center justify-between'>
					<div>© 2022, All rights reserved</div>
					<div className='text-xl md:text-2xl flex gap-x-5'>
						<a
							href='https://github.com/bhargawananbhuyan'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faGithub} title='github' />
						</a>
						<a
							href='https://www.linkedin.com/in/bhargawanan-bhuyan-b60929194'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faLinkedinIn} title='linkedin' />
						</a>
						<a href='mailto:bhargawanan@gmail.com'>
							<FontAwesomeIcon icon={faEnvelope} title='mail' />
						</a>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Layout
