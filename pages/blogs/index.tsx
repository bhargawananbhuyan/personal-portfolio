import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

const Index: NextPage = () => {
	return (
		<Layout title='Blogs | Bhargawanan Bhuyan'>
			<div className='min-h-screen mt-5'>
				<section>
					<h1 className='text-2xl font-extrabold mb-3.5'>Blogs</h1>
					<div className='relative'>
						<input
							type='text'
							placeholder='Search'
							className='w-full outline-none rounded border pl-[2.75rem] px-3.5 py-3 focus:ring-2 focus:border-blue-400 transition-all'
						/>
						<FontAwesomeIcon
							icon={faSearch}
							className='text-sm absolute left-4 top-[1.1rem] text-gray-400'
						/>
					</div>
				</section>

				<div className='grid gap-y-8 mt-12'>
					{[
						'Why I started this blog?',
						'Getting started with React.js for web development.',
						'Deploying a full-stack application.',
						'Getting started with React Native.',
						'How I created a paper trading application using the Zerodha Kite API.',
					].map((item, i) => (
						<section key={i} className='grid gap-y-2.5 md:flex gap-x-8'>
							<section className='md:text-right whitespace-nowrap flex items-center md:block gap-x-2.5'>
								<time>Sep 22, 2022</time>
								<span className='md:hidden h-1 w-1 rounded-full bg-gray-800 inline-block'></span>
								<div>3 min read</div>
							</section>
							<section className='grid gap-y-2.5 place-items-start'>
								<h1 className='font-bold text-lg'>{item}</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
									dignissimos, perferendis placeat architecto rerum officiis
									quisquam.
								</p>
								<Link href='/'>
									<a className='mt-1.5'>Read more</a>
								</Link>
							</section>
						</section>
					))}
				</div>
			</div>
		</Layout>
	)
}

export default Index
